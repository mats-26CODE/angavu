import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className="flex items-center gap-2">
      <span className="text-xl font-bold text-foreground">Angavu</span>
    </Link>
  );
};

export default Logo;
