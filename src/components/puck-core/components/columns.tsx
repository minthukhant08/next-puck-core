import { Fields, SlotComponent } from "@puckeditor/core";
import FieldWrapper from "./field-wrapper";

export type ColumnsProp = {
    columnCount: number,
    padding: string,
    gap: string,
    items: { itemSlot: SlotComponent }[]
}

export const ColumnsFields = {
    columnCount: { type: "number" },
    items: {
        type: "array",
        arrayFields: {
            itemSlot: { type: "slot" },
        },
    },
    padding: {
        type: "custom",
        render: ({ value, onChange }) => (
            <FieldWrapper label={"Padding"}>
                <input type="number" value={value ?? 20} onChange={(e) => onChange(e.target.value)} />
            </FieldWrapper>
        )
    },
    gap: {
        type: "custom",
        render: ({ value, onChange }) => (
            <FieldWrapper label={"Gap"}>
                <input type="number" value={value ?? 20} onChange={(e) => onChange(e.target.value)} />
            </FieldWrapper>
        )
    }
} satisfies Fields<ColumnsProp>;

export default function Columns({ columnCount, items, padding, gap }: ColumnsProp) {
    return <div
        className="grid items-start"
        style={{
            gridTemplateColumns: `repeat(${columnCount || 1}, 1fr)`,
            padding: `${padding || 20}px`,
            gap: `${gap || 20 }px`
        }}

    >
        {items?.map((item, i) => {
            const ItemSlot = item.itemSlot
            return (
                <div key={i} className="h-fit">
                    {ItemSlot && <ItemSlot />}
                </div>
            );
        })}
    </div>
}