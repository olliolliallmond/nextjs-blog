import { sortBlogs } from '@/src/utils'
import Link from 'next/link'
import BlogLayoutThree from '../BlogLayouts/BlogLayoutThree'


const RecentPosts = ({blogs}) => {

  const sortedBlogs = sortBlogs(blogs)
  return (
    <section className="w-full mt-32 px-32 flex flex-col items-center justify-center">
      {/* Section Header */}
      <div className='w-full flex justify-between'>
        <h2 className="inline-block font-bold capitalize text-4xl">Recent Posts</h2>

        <Link href='/categories/all' 
              className='inline-block font-medium text-accent underline underline-offset-2 text-lg' 
        >view all</Link>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-3 gap-16 mt-16">
        {/* Display next 6 blogs */
          sortedBlogs.slice(5,11).map((blog, index) => {
            return <article className='col-span-1 row-span-1 relative' key={index}>
              <BlogLayoutThree blog={blog} />
            </article>
          })
        }
      </div>
    </section>
  )
}

export default RecentPosts