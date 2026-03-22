"use client";

import { Plus } from "lucide-react";
import Button from "./Button";

type InputProps = {
  placeholder: string;
  type: "email" | "password" | "text";
  className?: string;
};
export default function Input({ placeholder, type, className }: InputProps) {
  return (
    <>
      <div className="box bg-[#ffffff] rounded-2xl w-[700] flex gap-2 justify-center py-5">
        <input placeholder={placeholder} type={type} className={className} />
          
      </div>
    </>
  );
}
