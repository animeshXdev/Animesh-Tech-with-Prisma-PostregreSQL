"use client"

import { useEffect, useState } from "react"

export const TypewriterEffect = ({ words }: { words: string[] }) => {
  const [displayedText, setDisplayedText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentWord = words[wordIndex]
    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentWord[charIndex])
        setCharIndex(charIndex + 1)
      }, 80)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("")
        setCharIndex(0)
        setWordIndex((prev) => (prev + 1) % words.length)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [charIndex, wordIndex, words])

  return (
    <span className="text-indigo-500 font-mono text-2xl md:text-4xl">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  )
}
