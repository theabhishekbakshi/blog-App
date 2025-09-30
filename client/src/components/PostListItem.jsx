
import React from 'react'
import MyImage from './MyImage'
import { Link } from 'react-router-dom'

const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <MyImage src="/postImg.jpeg" className="rounded-2xl object-cover" w="735"/>
      </div>
      {/* details */}
      <div className='flex flex-col gap-4 xl:w-2/3'> 
        <Link to="/test" className='text-4xl font-semibold hover:text-blue-800 hover:underline'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Link>
        <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written by</span>
            <Link className='text-blue-800'>John Doe</Link>
            <span>on</span>
            <Link className='text-blue-800'>Web Design</Link>
            <span>2 days ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, distinctio ipsum. Nulla unde consequatur, accusamus doloribus modi similique quaerat eum delectus perferendis sit sunt minus ipsum maxime dolorum animi repellat.</p>
        <Link to="/test" className='underline text-blue-800 text-sm '>Read More</Link>
      </div>
    </div>
  )
}

export default PostListItem
