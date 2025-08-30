'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import { toast } from 'react-hot-toast'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FaWhatsapp, FaTelegramPlane, FaEnvelope } from 'react-icons/fa'
import { Loader2 } from 'lucide-react'
import { Card } from "@/components/ui/card"

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name is too short' }),
  email: z.string().email({ message: 'Invalid email address' }),
  message: z.string().min(5, { message: 'Message too short' }),
})

type ContactForm = z.infer<typeof formSchema>

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>({
    resolver: zodResolver(formSchema)
  })

 const onSubmit = async (data: ContactForm) => {
  setLoading(true)
  try {
    // 1. Send via EmailJS
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      data,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    )

    // 2. Save to DB via API Route
    
    if (!res.ok) throw new Error('Failed to save contact to DB')

    toast.success('Message sent successfully!')
    reset()
  } catch (error) {
    toast.error('Failed to send message.')
    console.error(error)
  } finally {
    setLoading(false)
  }
}


  return (
    <section className="px-4 py-12 pt-20 md:px-20 space-y-10">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* FORM */}
        <Card className="w-full md:w-1/2 p-6 space-y-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input placeholder="Your Name" {...register('name')} />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
              <Input placeholder="Your Email" {...register('email')} />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <Textarea placeholder="Your Message" rows={5} {...register('message')} />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Send Message'}
            </Button>
          </form>

          <div className="flex items-center justify-center gap-6 pt-6">
            <a href="https://wa.me/+916207039191" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="text-green-500 hover:scale-110 transition-transform text-2xl" />
            </a>
            <a href="https://t.me/who_am_i_geek" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane className="text-blue-500 hover:scale-110 transition-transform text-2xl" />
            </a>
            <a href="mailto:vegan.athlete.animesh@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="text-red-500 hover:scale-110 transition-transform text-2xl" />
            </a>
          </div>
        </Card>

        {/* MAP */}
        <div className="w-full md:w-1/2 h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86733669382!2d85.06046944432735!3d25.608169066263724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1753603596155!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
