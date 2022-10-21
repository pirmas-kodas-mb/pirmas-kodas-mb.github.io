import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import CourseCard from "../../components/courseCard"
import data from "../../components/data"

const CoursesIndex: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pirmas kodas | Kursai</title>
      </Head>
      <article>
        <div>
          <h1>Kursai</h1>
          {/* "grid grid-cols-1 md:grid-cols-2 gap-2 place-content-stretch"> */}
          <div className="grid grid-cols-1 gap-3">
            {data.courses.map((course) => (
              <CourseCard course={course} key={course.id} />
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

export default CoursesIndex
