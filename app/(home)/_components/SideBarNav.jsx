"use client"

import {Search, Layout, Shield, Mail} from 'lucide-react'
import React, { useState } from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function SideBarNav() {
  const pathName = usePathname();
  console.log(pathName)
  const menuList = [
    {
      id: 1,
      name: 'Browse',
      icon:Search,
      path: '/browse'
    },
    {
      id: 2,
      name: 'Dashboard',
      icon:Layout,
      path: '/dashboard'
    },
    {
      id: 3,
      name: 'Upgrade',
      icon:Shield,
      path: '/membership'
    },
    {
      id: 4,
      name: 'NewsLetter',
      icon:Mail,
      path: '/newsletter'
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0);
 
  return (
    <div className='h-full bg-white border-r flex-col overflow-y-auto shadow-md'>
      <div className='p-5 border-b'>
      <Image src='logo.svg'
      alt= 'logo'
      width={170}
      height={100}
      />
      </div>
      <div className='flex flex-col text-black '> 
        {menuList.map((item, index)=>(
          <Link href={item.path} key={index} className={`flex gap-2 items-center
          p-[0] px-6 text-gray-500
          hover:bg-gray-100 cursor-pointer
          ${pathName==item.path?'bg-purple-50 text-purple-800':null}`}
          onClick={()=>{setActiveIndex(index);toggleSideBar(false)}}>
          <div className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-gray-100 cursor-pointer    ${pathName==item.path?'bg-purple-50 text-purple-800': null}`}
          onClick={()=>setActiveIndex(index)}>
            <item.icon />
            <h2>{item.name}</h2>
          </div>
          </Link>
        ))}
        
      </div>
    </div>
  )
}

export default SideBarNav