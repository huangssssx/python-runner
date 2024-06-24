import { execFile } from 'child_process';
import { NextResponse } from 'next/server';
import path from 'path';

export async function GET(request: Request) {
    try {
        // const scriptPath = path.join(__dirname, '/opt/pys/script.py');

        const result = await new Promise((resolve, reject) => {
            execFile('python3', ["/opt/pys/script.py"], (error, stdout, stderr) => {
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