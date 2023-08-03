import fsPromises from 'fs/promises';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'certificates.json');

export default async function handler(req: any, res: any) {
    if (req.method === 'GET') {
        const jsonData = await fsPromises.readFile(dataFilePath);
        const objectData = JSON.parse(jsonData.toString());

        res.status(200).json(objectData);
    }
}