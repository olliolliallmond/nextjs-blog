import { sortBlogs } from '@/src/utils'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Tag from '../Elements/Tag';

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
        <div className="w-3/4 p-16 flex flex-col items-start justify-center z-0 text-light">
          {/* <Link href={`/categories/${blog.tags[0]}`}>{blog.tags[0]}</Link> */}
          <Tag link={`/categories/${blog.tags[0]}`} name={blog.tags[0]}/>

          <Link href={blog.url} className='mt-6'>
            <h1 className='font-bold capitalize text-4xl' >
              <span className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] 
                               hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat 
                               transition-[background-size] duration-500">
                {blog.title}
              </span>
            </h1>
          </Link>
          
          <p>{blog.description}</p>
        </div>
      </article>
    </div>
  )
}

export default HomeCoverSection