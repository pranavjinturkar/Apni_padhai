"use client"
import React, { useEffect, useState } from 'react'
import { getCourseList } from '@/app/_services'
import CategoryFilter from './_components/CategoryFilter'
import CourseList from './_components/CourseList';

function Browse() {
  
  const [courses, setCourses] = useState([]);
  const [coursesOrg, setCoursesOrg] = useState([]);
  
  
  useEffect(()=>{
    getCourses()
  }, [])

  const getCourses = () => {
    getCourseList().then(resp=>{
      console.log(resp);
      setCourses(resp.courseLists);
      setCoursesOrg(resp.courseLists);
    })
  }

  const filterCourse=(category)=>{
    if(category=='all')
    {
      setCourses(coursesOrg);
      return ;
    }

    const filteredList=coursesOrg.filter(course=>{
      return course.tag.includes(category);
    })

    setCourses(filteredList);
  }
  
  return (
    <div>
      <CategoryFilter selectedCategory={(category)=>filterCourse(category)}/>
      <CourseList  courses={courses}/>
    </div>
  )
}

export default Browse