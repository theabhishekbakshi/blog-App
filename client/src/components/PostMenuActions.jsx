
import React from 'react'

const PostMenuActions = () => {
  return (
    <div>
      <h1 className="mt-8 mb-4 text-sm font-medium ">Actions</h1>
      <div className='flex items-center gap-2 py-2 text-sm cursor-pointer'>
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 48 48'
            width="20px"
            height="20px"
        >
            <path 
                d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.3-3-3-3H12z"
                stroke='black'
                strokeWidth="2"
            />
        </svg>
        <span>Save this post</span>
      </div>

      <div className='flex items-center gap-2 py-2 text-sm cursor-pointer'>
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 50 50'
            fill='red'
            width="20px"
            height="20px"
        >
            <path 
                d="M 21 2 C 19.354545 2 18 3.354545 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8"
                stroke='black'
                strokeWidth="2"
            />
        </svg>
        <span>Delete this post</span>
      </div>
    </div>
  )
}

export default PostMenuActions
