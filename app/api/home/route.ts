import { prisma } from '../../../prisma/prismaClientModule';
import { NextResponse } from 'next/server';

// import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(){
    const products = await prisma.product.findMany();
    return new NextResponse(
        JSON.stringify({data: products},{status: 200})
    )
}
