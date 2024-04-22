import React, { useContext, useEffect, useState } from "react";
import { PlayCircle, PauseCircle, CheckCircle2 } from "lucide-react";
import { CompletedChapterContext } from "@/app/_context/CompletedChapterContext";

function ChapterNav({ course, userCourse, setActiveChapter}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const {completedChapter, setCompletedChapter} = useContext(CompletedChapterContext)
   
  useEffect(()=>{
       setActiveChapter(course?.chapter[0])

   }, [])

   const isChapterCompleted =(chapterId)=>{
    return completedChapter.find(item=>
      item.chapterId==chapterId)
   }

  return course?.name && (
    <div>
      <div className="border-b p-5">
        <h2 className="font-medium text-[20px] text-slate-100">
          {course.name}
        </h2>
      </div>
      <div>
        {course.chapter.map((chapter,index)=>(
         <div key={index}
         onClick={()=>{setActiveIndex(index);
         setActiveChapter(chapter)}}
         className={`
         flex gap-2 text-gray-300 text-[16px] px-5 p-4 cursor-pointer hover:bg-slate-200
         ${isChapterCompleted(chapter.chapterNumber)&& activeIndex!=index?'bg-purple-100 text-purple-600': null}
         ${activeIndex==index? 'bg-green-100 text-green-700': null}`}>
            {activeIndex==index
            ?<PauseCircle height={25} width={25}/>:
            isChapterCompleted(chapter.chapterNumber)?
            <CheckCircle2 height={25} width={25}/> :
            <PlayCircle height={25} width={25}/>}   
            <h2>
               {chapter.name}
            </h2>
         </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterNav;
