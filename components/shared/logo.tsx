import React from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { APP_NAME } from "@/constants/values";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <Avatar className="size-10 border-2 border-background">
        <AvatarImage src="/person-working.png" alt="User" />
        <AvatarFallback>A</AvatarFallback>
      </Avatar>
      <span className="text-xl font-bold text-foreground">{APP_NAME}</span>
    </Link>
  );
};

export default Logo;
