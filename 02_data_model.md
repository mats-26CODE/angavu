# Angavu – Data Model

## Purpose
This document defines the minimum data model required to generate **Angavu Monthly Business Reports**.  
Design priorities:
- Simplicity
- Legal safety
- Scalability
- Compatibility with Supabase + Next.js

---

## Core Principles

- Store only what is necessary  
- Calculate totals and VAT at runtime (do not store tax totals)  
- Avoid regulated integrations (TRA, banks, MNOs)  
- Support VAT and non-VAT businesses  

---

## 1. User

Represents a platform user (business owner or manager).

**Table: user**
- id (uuid, primary key)  
- full_name (text)  
- phone_number (text, unique)  
- email (text, nullable)  
- created_at (timestamp)

Authentication: phone-number based (OTP).

---

## 2. Business

A user can own multiple businesses.

**Table: business**
- id (uuid, primary key)  
- user_id (uuid, foreign key → user.id)  
- name (text)  
- business_type (text)  
- location (text, nullable)  
- tin (text, nullable)  
- vat_status (enum: VAT, NON_VAT)  
- created_at (timestamp)

---

## 3. Reporting Period

Explicit monthly grouping for records.

**Table: reporting_period**
- id (uuid, primary key)  
- business_id (uuid, foreign key → business.id)  
- month (int, 1–12)  
- year (int)  
- currency (text, default: TZS)  
- status (enum: OPEN, CLOSED)  
- created_at (timestamp)

Closed periods are locked to prevent edits.

---

## 4. Sales Entry

Represents daily or batched sales.

**Table: sales_entry**
- id (uuid, primary key)  
- business_id (uuid, foreign key)  
- reporting_period_id (uuid, foreign key)  
- date (date)  
- amount (numeric)  
- channel (enum: CASH, MOBILE, BANK, nullable)  
- created_at (timestamp)

---

## 5. Expense Category

Predefined categories for ease of entry.

**Table: expense_category**
- id (uuid, primary key)  
- name (text)  
- is_vat_eligible (boolean)

Examples: Stock (true), Rent (false), Transport (false)

---

## 6. Expense Entry

Represents a business expense.

**Table: expense_entry**
- id (uuid, primary key)  
- business_id (uuid, foreign key)  
- reporting_period_id (uuid, foreign key)  
- date (date)  
- amount (numeric)  
- category_id (uuid, foreign key → expense_category.id)  
- vat_amount (numeric, nullable)  
- created_at (timestamp)

---

## 7. Report

Stores generated report metadata.

**Table: report**
- id (uuid, primary key)  
- business_id (uuid, foreign key)  
- reporting_period_id (uuid, foreign key)  
- file_url (text)  
- generated_at (timestamp)

---

## Derived Values (Calculated at Runtime)

- Total sales  
- Total expenses  
- Output VAT  
- Input VAT  
- Estimated VAT payable  
- Estimated profit

---

## Relationships Overview

User  
└── Business  
  └── Reporting Period (Month)  
    ├── Sales Entries  
    ├── Expense Entries  
    └── Report  

---

## Legal & Design Notes

- Angavu does not store official filings  
- Optional TIN only  
- No payment transactions  
- No automated tax submissions  

Angavu is **a record-keeping and preparation tool only**.
