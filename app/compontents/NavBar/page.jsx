import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <nav className='flex justify-between'>
      <h1>NextJS</h1>
      <ul className='flex gap-8'>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>  
      </ul>
    </nav>
  )
}
