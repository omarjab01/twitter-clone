import React from 'react'
import Twitter from '../assets/twitter.png'

const LeftSide = () => {
  return (
    <div className="bg-blue-400 col-span-7 h-full">
        {/* <img src="https://cdn.cms-twdigitalassets.com/content/dam/legal-twitter/privacy-policy-2022/Twitter-terms-of-service-share.jpg.twimg.768.jpg" 
        className='w-full h-full object-cover' */}
        <img src={Twitter} 
        className='w-full h-full object-cover'
        />
    </div>
  )
}

export default LeftSide