import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prismadb'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(5),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const validated = contactSchema.parse(body)

    const contact = await prisma.user.create({
      data: validated,
    })

    return NextResponse.json({ success: true, contact })
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 400 })
  }
}
