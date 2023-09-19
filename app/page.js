import Navbar from '@/component/Navbar'
import Image from 'next/image'
import { PrismaClient } from '@prisma/client';
import Fileupload from '@/component/Fileupload';
import DataAdd from '@/component/DataAdd';


export default async function Home() {
  const prisma = new PrismaClient();
  const contacts = await prisma.contact.findMany();
  console.log(contacts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full items-center justify-between font-mono text-sm">
        <Navbar />
        {contacts.map((value)=>{
          return <div>{value.lastName}</div>
        })}
      </div>
      <Fileupload/>
      <DataAdd/>
      <Image src="/er.png" width={200} height={200} />

    


    </main>
  )
}
