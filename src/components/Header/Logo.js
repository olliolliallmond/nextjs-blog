// rafce

import Image from 'next/image'
import Link from 'next/link'

import profileImg from 'public/profile-img.png'

const Logo = () => {
  return (
    <Link href="/" className='flex items-center text-dark'>
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark mr-4">
        <Image src={profileImg} alt="Codebucks" className='w-full h-auto rounded-full'/>
      </div>
      <span className='font-bold text-xl'>CodeBucks</span>
    </Link>
  )
}

export default Logo;

/**
 * Typically your logo img is stored in the `/public` folder of your app.
 * Copy and paste the `profile-img.png` file from `/project files` into `/public`.
 * !! Any LOCAL image or video file you would like to use in this project 
 * !! MUST be placed in the `/public` folder
 * !! so that they can be RENDERED
 */