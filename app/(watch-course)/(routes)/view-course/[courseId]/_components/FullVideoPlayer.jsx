import React, { useContext } from 'react';
import {CheckCircle2, CircleX} from 'lucide-react'
import { CompletedChapterContext } from '@/app/_context/CompletedChapterContext';
import { markChapterCompleted } from '@/app/_services';

function FullVideoPlayer({ userCourse,activeChapter }) {
  console.log(activeChapter);
  const {completedChapter, setCompletedChapter} = useContext(CompletedChapterContext);

  const isChapterCompleted=(chapterId)=>{
    return completedChapter.find(item=>item.chapterId==chapterId)
 }

   const _markChapterCompleted = async ()=>{
    if(!completedChapter?.length){
      setCompletedChapter([]);
    }
    completedChapter?setCompletedChapter(
      [...completedChapter,{
        chapterId: activeChapter?.chapterNumber+""
      }]
    ) : setCompletedChapter([
      {chapterId: activeChapter?.chapterNumber+""}
    ]);
    console.log(completedChapter);

    await markChapterCompleted(userCourse.id,activeChapter?.chapterNumber)
    .then(resp=>{
      console.log(resp);
    });

    
   }

  // Check if activeChapter is defined and has the video property
  // if (!activeChapter || !activeChapter.video) {
  //   // Return null if activeChapter is not defined or does not have the video property
  //   return null;
  // }

  // If activeChapter has the video property, render the video element
  return activeChapter &&(
    <div className='p-5'>
      <video width={1200} height={250} 
      key={activeChapter?.video?.url}
      controls controlsList='nodownload'>
        <source src={activeChapter?.video?.url} />
      </video>
      <div className='p-5 border rounded-lg flex mt-5 justify-between items-center'>
         <h2 className='text-[20px] font-medium'>
            {activeChapter.name}
         </h2>
        {!isChapterCompleted(activeChapter.chapterNumber)? 
        <button className='bg-purple-500 text-white p-2 px-5 rounded-lg flex gap-2 hover:bg-purple-800'
        onClick={()=>_markChapterCompleted()}>
            <CheckCircle2 />
            <h2>Mark as Completed</h2>
         </button> : 
         <button className='text-white border border-purple-600 p-2 px-5 rounded-lg flex gap-2 hover:bg-purple-500'>
         <CircleX />
         <h2>Mark as Incomplete</h2>
      </button>}
      </div>
    </div>
  );
}

export default FullVideoPlayer;
