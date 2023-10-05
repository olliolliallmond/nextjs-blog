"use client"
// import React from 'react';
import { useForm } from 'react-hook-form';
import { DribbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '../Icons';
import Link from 'next/link';

const Footer = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log('Form data: ', data);
  console.log('Form Errors: ', errors);
  
  return (
    <footer className='mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light'>
      <h3 className='mt-16 font-medium text-center capitalize text-4xl px-4'>
        Interesting Stories | Updates | Guides
      </h3>
      <p className='mt-5 px-4 text-center w-3/5 font-light text-base'>
        Subscribe to learn about new technology and updates. Join over 5000+ members community to stay up to date with latest news.
      </p>
      {/* Form using react-hook-form */}
      <form onSubmit={handleSubmit(onSubmit)} className='mt-6 min-w-[384px] flex items-stretch bg-light p-2 rounded mx-4'>
        <input type="email" placeholder="Enter your email" {...register("Email", {required: true, maxLength: 80, pattern: /^\S+@\S+$/i})}
               className='w-full bg-transparent text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1 pl-0'
        />

        <input type="submit"
               className='bg-dark text-light cursor-pointer font-medium rounded px-5 py-1'
        />
      </form>
      {/* External social media links */}
      <div className='flex items-center mt-8'>
        {/* LinkedIn */}
        <a href="http://example.com" target="_blank" rel="noopener noreferrer" className='inline-block w-6 h-6 mr-4'>
          <LinkedinIcon className='hover:scale-125 transition-all ease duration-175' />
        </a>
        {/* Twitter */}
        <a href="http://example.com" target="_blank" rel="noopener noreferrer" className='inline-block w-6 h-6 mr-4'>
          <TwitterIcon className='hover:scale-125 transition-all ease duration-175' />
        </a>
        {/* GitHub -- light fill on dark bg */}
        <a href="http://example.com" target="_blank" rel="noopener noreferrer" className='inline-block w-6 h-6 mr-4 bg-light rounded-full'>
          <GithubIcon className='hover:scale-125 transition-all ease duration-175 bg-light rounded-full' />
        </a>
        {/* Dribble */}
        <a href="http://example.com" target="_blank" rel="noopener noreferrer" className='inline-block w-6 h-6 mr-4'>
          <DribbleIcon className='hover:scale-125 transition-all ease duration-175' />
        </a>
      </div>

      {/* Copyright */}
      <div className="w-full mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between">
        <span className="text-center">&copy;2023 CodeBucks. All right reserved.</span>
        <Link href='/sitemap.xml' className="text-center underline">
          sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by <a href="https://devdreaming.com" className='underline'>CodeBucks</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
/** 
 * Error: createContext only works in Client Components. 
 * Solution: Add the "use client" directive at the top of the file to use it. 
 * Read more: https://nextjs.org/docs/messages/context-in-server-component
*/

/** How this form works
 *  useForm
 *    - hook provided by react-form-hook
 *    - used to manage form with different functions and values
 *  const { register, handleSubmit, formState: { errors }, } = useForm();
 * 
 *  register
 *    - register an input or select an element and apply different validation tools to it.
 *    - See email input: {...register("email", { required: true, maxLength:80, pattern: /^\S+@\S+$/i })}
 *      where "email" is defining the input type and the object defines validation rules
 * 
 *  handleSubmit
 *    - receives form data if validation is successful
 *    - In this form, once data is validated, `handleSubmit` will run the `onSubmit` function defined after the hook
 *    - See form element: <form onSubmit={ handleSubmit(onSubmit) } ...>
 *      - The left onSubmit is related to the form event. Everything to the left refers to things defined/used within the component.
 * 
 *  formState
 *    - object containing information about the entire form
 *    - info includes `errors`, `isLoading`, `isSubmitting`, `isSubmitted`, etc
 *  
 */