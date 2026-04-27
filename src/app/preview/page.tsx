import fs from 'fs';
import path from 'path';
import { Render } from "@puckeditor/core";
import { config } from "@/components/puck-core/config";

export default function PreviewPage() {
  const filePath = path.join(process.cwd(), 'data.json');
  
  let data;
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    data = JSON.parse(fileContent);
  } catch (error) {
    console.error("Error reading data.json:", error);
    return (
      <div className="p-10 text-center">
        <h1 className="text-xl font-bold">No data found</h1>
        <p>Please publish something from the editor first.</p>
      </div>
    );
  }

  return (
    <main>
      <Render config={config} data={data} />
    </main>
  );
}