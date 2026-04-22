'use client'
import { Config, Puck, Slot } from "@puckeditor/core"; // 1. Import Slot type
import "@puckeditor/core/puck.css";
import { ReactNode } from "react";

type Props = {
  Heading: { title: string };
  Text: { content: string };
  Columns: {
    columnCount: number;
    items: { itemSlot: Slot }[]; 
  };
};

const config: Config<Props> = {
  components: {
    Heading: {
      fields: { title: { type: "text" } },
      render: ({ title }) => <h1>{title}</h1>,
    },
    Text: {
      fields: { content: { type: "textarea" } },
      render: ({ content }) => <p>{content}</p>,
    },
   Columns: {
      fields: {
        columnCount: { type: "number" },
        items: {
          type: "array",
          arrayFields: {
            itemSlot: { type: "slot" }, // Changed from 'content'
          },
        },
      },
      render: ({ columnCount, items }) => (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${columnCount || 1}, 1fr)`,
            gap: "20px",
            padding: "20px",
            border: "1px dashed #ccc",
            minHeight: "128px", // Matches Puck's default empty height
          }}
        >
          {items?.map((item, i) => {
            const ItemSlot = item.itemSlot;
            return (
              <div key={i} style={{ border: "1px solid #eee", minHeight: "80px" }}>
                {ItemSlot && <ItemSlot />}
              </div>
            );
          })}
        </div>
      ),
    },
  },
};
const initialData = {
  content: [
    // {
    //   type: "Columns",
    //   props: {
    //     columnCount: 2,
    //     items: [
    //       { _id: "col-1", itemSlot: [] },
    //       { _id: "col-2", itemSlot: [] },
    //     ],
    //   },
    // },
  ],
};

const save = (data: any) => {
  console.log("Saving data:", data);
};

export function Editor() {
  return (
    <div style={{ height: "100vh" }}>
      <Puck config={config} data={initialData} onPublish={save} />
    </div>
  );
}