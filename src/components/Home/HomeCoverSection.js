import { sortBlogs } from '@/src/utils'
import Image from 'next/image';
import React from 'react'

const HomeCoverSection = ({blogs}) => {
  // We want to render the latest blog, so create util fxn to sort blogs from newest to oldest.
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[0];

  console.log('Latest blog', blog)
  return (
    <div className="w-full inline-block">
      <article className='flex flex-col items-start justify-end mx-10 relative h-[85vh]'>
        <div className="absolute top-0 right-0 bottom-0 left-0 h-full 
        bg-gradient-to-b from-transparent from-0% to-dark rounded-3xl z-0 " />
        <Image src={blog.image.filePath.replace("../public", "")}
        placeholder='blur'
        blurDataURL={blog.image.blurhashDataUrl}
        alt={blog.title}
        fill
        className='w-full h-full object-center object-cover rounded-3xl -z-10'
        />
      </article>
    </div>
  )
}

export default HomeCoverSection