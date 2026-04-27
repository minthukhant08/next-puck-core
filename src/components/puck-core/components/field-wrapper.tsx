import { ReactNode } from "react";

const ColorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ababab"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-circle-check-big"
  >
    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
    <path d="m9 11 3 3L22 4" stroke="#ababab" />
  </svg>
);
export default function FieldWrapper( { label, children } : { label: string, children : ReactNode}){
    return <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center">
        <ColorIcon/>
        <label className="text-sm font-medium">{label}</label>
      </div>
      {children}
    </div>
}