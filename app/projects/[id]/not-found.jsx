import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='text-center'>
      <p className='text-8xl'>404</p>
      <h2>Project Not Found</h2>
      <p>Could not find requested Project</p>
      <Link className='underline hover:text-white hover:no-underline transition-all duration-100' href="/projects">Return to Projects</Link>
    </div>
  )
}