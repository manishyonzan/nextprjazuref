import { NextResponse } from "next/server";
import { writeFile} from 'fs/promises';
import { join } from "path";


export async  function POST(req, res) {


    // not needed in NextJS v12+
    // const body = JSON.parse(req.body)

    const data = await req.formData();
    const file = data.get('file');
    if(!file){
        return NextResponse.json({success:true});
    }
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // const path = join('/','tmp',file.name)
    const path = join(process.cwd(), '.', 'public', file.name);
    await writeFile(path,buffer)
    console.log(`open ${path} to see the uploaded file`);

    return NextResponse.json({success:true});

}