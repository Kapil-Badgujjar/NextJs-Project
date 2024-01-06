'use client'
import ButtonPrimary from "@/components/ButtonPrimary";
import HeroImage from '@/public/HeroImage.jpg'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function myFun(){
        const response = await fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email,password}),
          });
          const responseBody = await response.json();
          console.log(responseBody);
    }
    return (
        <div className="w-full h-full flex flex-col justify-between items-center p-8">
            <div></div>
            <div className="flex flex-col md:flex-row gap-[32px] w-full md:max-w-[640px] bg-white shadow-md rounded-md">
                <div className="hidden md:block flex-1">
                    <Image className="w-full rounded-md" src={HeroImage} alt="img" />
                </div>
                <div className="flex-1 flex flex-col items-between gap-[24px] p-[24px]">
                    <h2 className="font-[600]">Login</h2>
                    <input className="outline-none text-[12px] bg-transparent border-b border-gray-500" type="text" placeholder="Enter your email address" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input className="outline-none text-[12px] bg-transparent border-b border-gray-500" type="text" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <ButtonPrimary title="Login" action={myFun} />
                    <div className="flex gap-[4px] justify-center text-[12px] w-full">
                        <span className="text-gray-500">Don't have an account!</span>
                        <Link className="text-blue-500" href="/signup">Create now</Link>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}