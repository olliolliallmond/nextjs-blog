import { cx } from '@/src/utils'
import './globals.css'
import { Inter, Manrope } from 'next/font/google'
import Header from '@/src/components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'], display: "swap", variable:"--font-in" })

const manrope = Manrope({ subsets: ['latin'], display: "swap", variable:"--font-mr" })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, manrope.variable, "font-mr bg-light dark:bg-dark`")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

/* 
  > Using Tailwind CSS, pass font variables into className for access by all children 
  > add to className -- !! These are defined in `tailwind.config.js` !!
    > `font-mr` => default font
    > `bg-light` => default bg color
    > `dark:bg-dark` => dark theme bg color 
  > To avoid having to call `${inter.variable}` or `${manrope.variable}`
    > create new folder and new file: `src/utils/index.js`
    > created cx function
  > Original: <body className={`${inter.variable} ${manrope.variable} font-mr bg-light dark:bg-dark`}>{children}</body>
  > Alternative: <body className={cx(inter.variable, manrope.variable, "font-mr bg-light dark:bg-dark`")}>{children}</body>
*/

/**
 * The SAME Header and Footer components are used across ALL pages.
 * Header and Footer components are used in the LAYOUT.
 */
