import { compareDesc, parseISO } from 'date-fns'

export const cx = (...classNames) => classNames.filter(Boolean).join(" ")
/** Notes:
 * cx fxn to add mutliple classes instead of dependencies
 * accepts classNames as an argument
 * filter out flasey values from classNames (0, null, undefined, ... )
 * join truthy values with " " (single space)
 */

export const sortBlogs = (blogs) => {
  return blogs.slice().sort((a,b) => compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt)))
}
/** Notes:
 * sortBlogs fxn returns an array that is sorted from latest date to oldest date
 */