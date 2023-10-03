// import { allBlogs } from '@/.contentlayer/generated'
import { allBlogs } from 'contentlayer/generated'

export default function Home() {
  console.log('All Blogs', allBlogs)
  return (
    <main className="flex flex-col items-center justify-center">
      Hello tiny humans
    </main>
  )
}
