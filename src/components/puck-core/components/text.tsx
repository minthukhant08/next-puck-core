import { Fields } from "@puckeditor/core";
import FieldWrapper from "./field-wrapper";

export type TextProps = {
    text: string;
    style: "normal" | "bold" | "italic" | "strike";
    size: string;
    align: "left" | "center" | "right";
    color: string;
    padding: string;
}

export const Textfields = {
    text: {
        type: "text",
    },
    style: {
        type: "radio",
        options: [
            { label: "Normal", value: "normal" },
            { label: "Bold", value: "bold" },
            { label: "Italic", value: "italic" },
            { label: "Strike", value: "strike" },
        ],
    },
    align: {
        type: "radio",
        options: [
            { label: "Left", value: "left" },
            { label: "Center", value: "center" },
            { label: "Right", value: "right" },
        ],
    },
    size: {
        type: 'custom',
        render: ({ value, onChange }) => (
            <FieldWrapper label={"Font Size"}>
                <input type="number" value={value ?? 14} onChange={(e) => onChange(e.target.value)} />
            </FieldWrapper>
        )
    },
    color: {
        type: "custom",
        render: ({ value, onChange }) => (
            <FieldWrapper label={"Color"}>
                <input
                    type="color"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            </FieldWrapper>
        ),
    },
    padding: {
        type: 'custom',
        render: ({ value, onChange }) => (
            <FieldWrapper label={"Padding"}>
                <input type="number" value={value ?? 14} onChange={(e) => onChange(e.target.value)} />
            </FieldWrapper>
        )
    }
} satisfies Fields<TextProps>;

export default function Text({ text, size, align, color, padding, style }: TextProps) {
    return <p
        className={`
        ${align === "left" ? "text-left" : ""}
        ${align === "center" ? "text-center" : ""}
        ${align === "right" ? "text-right" : ""}
          
        ${style === "bold" ? "font-bold" : ""}
        ${style === "italic" ? "italic" : ""}
        ${style === "strike" ? "line-through" : ""}

        `}
        style={{ color, fontSize: `${size}px`, padding: `${padding}px` }}
    >
        {text || 'sample text'}
    </p>
}