'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-background border-t border-border mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright */}
        <p className="text-muted-foreground text-sm text-center md:text-left">
          © {new Date().getFullYear()} Animesh Prakash. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <Link href="https://youtube.com/@parkour_by_animesh?si=ZTEpZ5oYgpz1AS70" target="_blank">
            <Button size="icon" variant="ghost" aria-label="YouTube">
              <FaYoutube className="h-6 w-6 text-red-500" />
            </Button>
          </Link>
          <Link href="https://www.instagram.com/active_animesh?utm_source=qr&igsh=bHE0aW5lemZzMGw0" target="_blank">
            <Button size="icon" variant="ghost" aria-label="Instagram">
              <FaInstagram className="h-6 w-6 text-pink-500" />
            </Button>
          </Link>
          <Link href="https://www.facebook.com/animesh.prakash.16" target="_blank">
            <Button size="icon" variant="ghost" aria-label="Facebook">
              <FaFacebook className="h-6 w-6 text-blue-600" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
