import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href={"/"}
      className="font-bold text-3xl bg-gradient-to-r from-orange-400 to-orange-800 text-transparent bg-clip-text hover:cursor-pointer"
    >
      Formarium
    </Link>
  );
}

export default Logo;
