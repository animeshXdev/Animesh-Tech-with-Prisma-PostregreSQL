"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function LinkPreviews() {
  return (
    <div className="flex justify-center items-center h-[20rem] flex-col px-4">
      <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-5xl mx-auto mb-10">
        Check out my latest{" "}
        <LinkPreview
          url="https://notes-todo-app-by-animesh-gph6dj017-animeshs-projects-7db61b77.vercel.app/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-500 to-green-500"
        >
          Personal Notes / Todo Website
        </LinkPreview>{" "}
        built with Next.js, Tailwind CSS, MongoDB, and Framer Motion.
      </div>

      <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-5xl mx-auto">
        Designed with modern UI tools like{" "}
        <LinkPreview
          url="https://ui.shadcn.com/"
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        >
          ShadCN Library
        </LinkPreview>{" "}
        and powered by Framer Motion.
      </div>
    </div>
  );
}
