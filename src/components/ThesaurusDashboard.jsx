import React, { useContext, useEffect, useState } from 'react'
import { ThesaurusDashboardContext } from '../context/ThesaurusDashboardContext'

export const ThesaurusDashboard = ({id, Title, text, color, icon, thesaurusFunction}) => {
  const {setId} = useContext(ThesaurusDashboardContext)

  const handleClick = () =>{
    setId(id)
  }

  return (
    <div className='w-[255px] flex flex-col justify-between p-2 bg-white shadow-sm h-[200px] rounded-md active:scale-75 duration-300 cursor-pointer' onClick={handleClick}>
      <div className='flex w-full justify-between items-center'>
        <h1 className='font-bold text-lg'>
          {Title}
        </h1>
        <span className={`
        p-2 rounded-full 
        ${
          color == '#daf4fe' ? "bg-[#daf4fe] text-[#32c5ff]" 
          : color == '#f8e5ce' ? 'bg-[#fcdcb5] text-[#ffa230]' 
          : color == '#f8e3f8' ? 'bg-[#ffc7ff] text-[#fd2dfd]' 
          : color == '#e8f7da' ? 'bg-[#d0f0b4] text-[#5ba82e]'
          : color == '#fdeed9' ? 'bg-[#fdd7b0] text-[#e6863a]'
          : color == '#e3e3fa' ? 'bg-[#c6c6f3] text-[#5e5ed1]'
          : color == '#fbe5e5' ? 'bg-[#f8bfbf] text-[#d13434]'
          : color == '#d9f7f7' ? 'bg-[#aef3f3] text-[#25b6b6]'
          : ''}  
          w-10 h-10 rounded-full flex justify-center items-center text-[22px] font-medium
          `}>
          {icon}
        </span>
      </div>
      <div className='w-full h-[70%]'>
        <p className='w-full text-[13px] text-gray-600 h-full flex items-end '>
          {text}
        </p>
      </div>
    </div>
  )
}
