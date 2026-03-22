"use client"

type ButtonProps = {
  text: string;
  type: "submit" | "button" | "reset";
  className?: string;
  icon?: React.ReactNode;
};

export default function Button({ text, type, className, icon }: ButtonProps) {
  return (
    <>
      <button type={type} className={className}>
        <span>{icon} </span>
        <span> {text}</span>
      </button>
    </>
  );
}
