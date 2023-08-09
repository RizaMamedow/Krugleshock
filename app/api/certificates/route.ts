import { NextResponse } from 'next/server'
import fsPromises from "fs/promises";
import path from "path";

const dataFilePath = path.join(process.cwd(), 'certificates.json');

export async function GET() {
    const jsonData = await fsPromises.readFile(dataFilePath);
    const objectData = JSON.parse(jsonData.toString());

    return NextResponse.json(objectData)
}