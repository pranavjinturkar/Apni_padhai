import { EnrollCourse, PublicCourse } from "@/app/_services";
import React, { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function EnrollmentSection({ courseDetail, userCourse }) {
  const router = useRouter();

  const { user } = useUser();
  const enrollCourse = async () => {
    if (user) {
      await EnrollCourse(
        courseDetail.id,
        user.primaryEmailAddress.emailAddress
      ).then(async (resp) => {
        console.log("Enroll course response=> ", resp);
        if (resp) {
          await PublicCourse(resp?.createUserEnrollCourse?.id).then(
            (result) => {
              console.log(result);
              if(result){
                router.push('/view-course/'+courseDetail.id)
              }
            }
          );
        }
      });
    } else {
      router.push("/sign-in");
    }
  };




  return (
    <div>
      {userCourse?.courseId ? (
        <div className="mt-5 border rounded-lg p-2 text-center">
          <h2 className="text-gray-200">
            Continue to Build Project, Access source code and track your
            progress for free!
          </h2>
          <button className="p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700 font-medium"
          onClick={()=>
            router.push('/view-course/'+courseDetail.id)}
          >
            Continue
          </button>
        </div>
      ) : null}
      {courseDetail.free && !userCourse?.courseId? (
        <div className="mt-5 border rounded-lg p-2 text-center">
          <h2 className="text-gray-200">
            Learn and Build Project, Access source code and track your progress
            for free!
          </h2>
          <button
            className="p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700 font-medium"
            onClick={() => enrollCourse()}
          >
            Enroll Now
          </button>
        </div>
      ) : !userCourse?.courseId? 
        <div className="mt-5 border rounded-lg p-2 text-center">
          <h2 className="text-gray-200">
            Buy this course, Source code and Track your progress
          </h2>
          <button className="p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700 font-medium">
            Buy Course for Rs. 199
          </button>
        </div> :null
      }
      <div className="mt-5 border rounded-lg p-2 text-center">
        <h2 className="text-gray-200">
          Buy Monthly membership and get access to all courses, and track your
          progress!
        </h2>
        <button className="p-2 w-full bg-purple-500 text-white rounded-lg text-[14px] mt-2 hover:bg-purple-700 font-medium">
          Buy Membership Rs. 399/month
        </button>
      </div>
    </div>
  );
}

export default EnrollmentSection;
