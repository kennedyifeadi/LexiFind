import React from 'react'

export const TextToSpeech = () => {
  return (
    <div className='w-full h-full flex p-4'>
      <div className='w-full h-full flex flex-col'>
        <div className='w-full h-[70%] border-dashed border-[gray] border rounded-xl flex flex-col'>
          <div className='w-full h-[50%] flex border-b border-dashed'>
            <textarea name="" id="" className='w-full p-4 h-full bg-transparent outline-none'></textarea>
          </div>
          <div className='w-full h-[50%] flex'></div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
