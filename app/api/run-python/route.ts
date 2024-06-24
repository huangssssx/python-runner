import { execFile } from 'child_process';
import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const result = await new Promise((resolve, reject) => {
            execFile('python3', ['app/pys/script.py'], (error, stdout, stderr) => {
                if (error) {
                    console.error('Error executing script:', error);
                    reject(error);
                    return;
                }

                try {
                    const result = JSON.parse(stdout);
                    console.log('Script output:', result);
                    resolve(result);
                } catch (parseError) {
                    console.error('Error parsing script output:', parseError);
                    reject(parseError);
                }
            });
        });

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.error();
    }
}