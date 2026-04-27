'use client'
import { Puck } from "@puckeditor/core"; // 1. Import Slot type
import "@puckeditor/core/puck.css";
import { config } from "./config";
import { savePuckData } from "./components/actions";
import Link from "next/link";

const initialData = {

};

const save = async (data: any) => {
    console.log("Saving data:", data);
    
    const result = await savePuckData(data);
    
    if (result.success) {
      alert("Data saved to data.json successfully!");
    } else {
      alert("Error saving data: " + result.error);
    }
  };

export function Editor() {
  return (
    <div className="flex flex-col h-screen">
  <div className="p-2 bg-gray-100 flex justify-between items-center border-b">
    <span className="text-sm font-medium">Puck Editor</span>
    <Link 
      href="/preview" 
      target="_blank"
      className="text-xs bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
    >
      View Live Site
    </Link>
  </div>
  <div className="flex-1 overflow-hidden">
    <Puck config={config} data={initialData} onPublish={save} />
  </div>
</div>
  );
}