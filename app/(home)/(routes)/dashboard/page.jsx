"use client";
import { GetUserCourseList } from "@/app/_services";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import CategoryItem from "../../_components/CategoryItem";
import Link from "next/link";

function Dashboard() {
  const { user } = useUser();
  const [userCourseList, setUserCourseList] = useState([]); // Corrected useState usage
  const [EnrolledInNone, setEnrolledInNone] = useState(null)
  useEffect(() => {
    user ? GetUserCourse() : null;
  }, [user]);

  const GetUserCourse = async () => {
    await GetUserCourseList(user.primaryEmailAddress.emailAddress).then(
      (resp) => {
        console.log(resp?.userEnrollCourses);
        if (resp) {
          setUserCourseList(resp?.userEnrollCourses);
        }
      }
    );

    console.log("line number 24 in paget.tsx ");
  };
  console.log(userCourseList);

  useEffect(()=>{
   userCourseList?.map((course)=>{
      if(course.courseList){
         setEnrolledInNone(true);
      }
     })
  },[userCourseList])

  return (
   <>
  { 
  EnrolledInNone?<>
   <div>
      {userCourseList ? (
         <>
          <h2 className="text-[20px] font-medium">My Enrolled Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5">
            {userCourseList &&
              userCourseList.map((course, index) => {
                if (course.courseList) {
                   return (
                    <>
                      {" "}
                      <div key={index}>
                        <Link
                          href={"/course-preview/" + course.courseList.id}
                          key={index}
                          >
                          <CategoryItem course={course?.courseList} />
                        </Link>
                      </div>{" "}
                    </>
                  );
               } else return <></>;
            })}
          </div>
        </>
      ) : (
         <>
       </>
      )}
    </div>
  </>:
   <div className="flex justify-center items-center text-[20px] mt-20 text-gray-500">
   <h2>You don't have any course Enrolled.</h2>
 </div>
 }
      </>
  );
}

export default Dashboard;
