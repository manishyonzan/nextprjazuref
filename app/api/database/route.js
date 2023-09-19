import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req,res){
    
    const prisma = new PrismaClient();
    if(req.method!=="POST"){
        return NextResponse.status(405).json({message:"message not allowed"});
    }
    // console.log(req.body);
    const val = await req.json();
    console.log(val);
    // const contactData =await JSON.parse(req.body);
    console.log("the server hit");
    // console.log(contactData);
    const savedContact = await prisma.contact.create({
        data:val
    })
    
    return NextResponse.json(savedContact);
   


}
