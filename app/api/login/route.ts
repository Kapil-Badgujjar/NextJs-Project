// Import necessary modules
import { prisma } from '../../../prisma/prismaClientModule';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

// Define the API route handler
export async function POST(req: NextApiRequest, res: NextApiResponse){
    const body = await req.json();
    const response = await prisma.user.findFirst({where: {email: body.email, password: body.password}});

    if(!response){
        return new NextResponse(
            JSON.stringify({message: 'failed', data: undefined},{status: 404})
        )
    }    
    return new NextResponse(
        JSON.stringify({ message: 'success', data: response },{ status: 200 })
    );
}
