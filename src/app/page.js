// import { allBlogs } from '@/.contentlayer/generated'
import { allBlogs } from 'contentlayer/generated'
import HomeCoverSection from '../components/Home/HomeCoverSection'
import FeatueredPosts from '../components/Home/FeatueredPosts'
import RecentPosts from '../components/Home/RecentPosts'

export default function Home() {
  // console.log('All Blogs', allBlogs)
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <FeatueredPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  )
}
