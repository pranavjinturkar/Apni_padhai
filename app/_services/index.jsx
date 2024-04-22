import { gql, request } from "graphql-request";

const MASTER_URL =
  "https://api-ap-south-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_KEY +
  "/master";

export const getCourseList = async () => {
  const query = gql`
    query CourseList {
      courseLists {
        name
        banner {
          url
        }
        free
        id
        totalChapters
        tag
      }
    }
  `;
  const result = await request(MASTER_URL, query);

  return result;
};

export const getCoursebyId = async (id, userEmail) => {
  const query =
    gql`
  query course {
    courseList(where: {id: "` +
    id +
    `"}) {
      chapter {
        ... on Chapter {
          id
          name
          chapterNumber
          video {
            url
          }
        }
      }
      description
      name
      id
      free
      totalChapters
      youtubeUrl
    }

    userEnrollCourses(where: {courseId: "`+id+`", 
    userEmail: "`+userEmail+`"}) {
    courseId
    userEmail
    id
    completedChapter {
      ... on CompletedChapter {
        chapterId
      }
    }
    
  }
  }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const EnrollCourse = async (courseId, userEmail) => {
  const mutationQuery =
    gql`
  mutation EnrollCourse {
    createUserEnrollCourse(data: {userEmail: "` +
    userEmail +
    `", courseId: "` +
    courseId +
    `"}) {
      id
    }
  }
  
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

export const PublicCourse = async (id) => {
  const mutationQuery =
    gql`
  mutation EnrollCourse {
    publishUserEnrollCourse(where: {id: "` +
    id +
    `"}){
      id
    }
  }
  `;

  const result = await request(MASTER_URL, mutationQuery);

  return result;
};

export const markChapterCompleted=async(recordId,chapterNumber)=>{
  const mutationQuery=gql`
  mutation MarkChapterComplete {
    updateUserEnrollCourse(
      where: {id: "`+recordId+`"}
      data: {completedChapter: {create: {CompletedChapter: 
        {data: {chapterId: "`+chapterNumber+`"}}}}}
    ) {
      id
    }
    publishManyUserEnrollCoursesConnection(to: PUBLISHED) {
      edges {
        node {
          id
        }
      }
    }
  }
  `
  const result=await request(MASTER_URL,mutationQuery);
  return result;
}

export const GetUserCourseList = async(userEmail)=>{
  const query = gql `
  query UserCourseList {
    userEnrollCourses(where: {userEmail: "`+userEmail+`"}) {
      courseList {
        banner {
          url
        }
        description
        name
        free
        id
        sourceCode
        tag
        totalChapters
      }
    }
  }
  `
  const result = await request(MASTER_URL, query);
  return result;
}