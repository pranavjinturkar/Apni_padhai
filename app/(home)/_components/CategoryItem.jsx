import React from 'react'
import Image from "next/image";
import { Book } from "lucide-react";


function CategoryItem({course}) {
  
  return (
    <div>
      <div
          
          className="rounded-lg border p-2 cursor-pointer hover:border-purple-600"
        >
          <Image src={course?.banner?.url}
                alt={course?.name}
                width={1000}
                height={500}
                className='rounded-lg'
                />
          <div className="mt-2">
            <h2 className="text-[18px] md:text-[16px] font-medium">
              {course?.name}
            </h2>
            {
              course?.totalChapters? 
              <div className="flex items-center gap-2 mt-2">
              <Book className="h-6 w-6 text-purple-600 rounded-full bg-purple-100 p-1" />
              <h2 className="text-[13px] text-gray-400">
                {course?.totalChapters} Chapters
              </h2>
            </div> : null
            }
            <h2 className="mt-2 text-[14px]">
              {course?.free ? "Free" : "Paid"}
            </h2>
          </div>
        </div>
    </div>
  )
}

export default CategoryItem