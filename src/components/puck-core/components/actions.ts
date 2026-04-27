'use server'

import fs from 'fs';
import path from 'path';

export async function savePuckData(data: any) {
  try {
    const filePath = path.join(process.cwd(), 'data.json');
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonString, 'utf8');
    
    return { success: true };
  } catch (error) {
    console.error("Failed to save data:", error);
    return { success: false, error: "Failed to write file" };
  }
}