import React from 'react'
import BlogNavbar from './BlogNavbar'
import { blogPosts } from '../assets/dummyData/blogData'

export default function Blog() {
  return (
    <>
    <BlogNavbar/>
    <div className="mt-16 px-3 py-10 md:px-20 bg-gray-500 bg-opacity-10 backdrop-blur-sm text-center space-y-5">
      <p className='text-4xl font-bold text-primary'>Welcome to my blog</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusantium deserunt quod quae corrupti molestiae aperiam nam autem voluptatibus, sapiente repellendus blanditiis eveniet earum cupiditate minus asperiores quo mollitia. Veniam.</p>
    </div>
    </>
  )
}
