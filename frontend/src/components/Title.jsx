import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div className='inline-flex gap-2 font-semibold items-center mb-3 relative'>
        <p className='text-gray-500'>{text1}<span className='text-accent font-medium'>{text2}</span></p>
        <p className= ' absolute bottom-0 -right-9 w-8 sm:w-12 h-[1px] sm:h-[2px] bg-accent'></p>
    </div>
  )
}

export default Title