import type { NextPage } from "next"
import CourseCard from "../components/courseCard"

import { GlobeAltIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import data from "../components/data"
import Head from "next/head"
const features = [
  {
    emoji: "🐍",
    name: "Python ekspertai",
    description: (
      <>
        Python - populiariausia pasaulyje programavimo kalba. Būtent šioje
        kalboje mes specializuojames bendradarbiaudami su <> </>
        <Link href="python-academy">PythonAcademy.net</Link> - Python mokymų
        expertais.
      </>
    ),
    icon: GlobeAltIcon,
  },
  // {
  //   name: "Nedideles grupes",
  //   description:
  //     "Nebus klausytoju. Programa pagal 10 metu patirti. Programa pagal 10 metu patirti. Programa pagal 10 metu patirti. Programa pagal 10 metu patirti. Programa pagal 10 metu patirti. Programa pagal 10 metu patirti. ",
  //   icon: ScaleIcon,
  // },
  {
    emoji: "🎯",
    name: "Praktiniai įgūdžiai",
    description:
      "Mokymai orientuoti į darbo rinkoje reikalingus įgudžius. Negaištame laiko mažos vertės temoms. Sekame darbo rinkos tendencijas ir pagal jas atnaujiname mokymų medžiagą.",
  },
  {
    emoji: "👷",
    name: "Profesionalūs lektoriai",
    description:
      "PIRMOKODAS Dėstytojai turi 5+ metų programavimo patirtį. Šis reikalavimas užtikrina, kad įgudžius įgausite maksimaliai greitai.",
  },
  {
    emoji: "🤙",
    name: "Papildomos konsultacijos",
    description:
      "Studenams teikiame konsultacijas ne tik pamokų metu. Žinome, jog klausimai gali iškilti bet kada. Operatyviai ir išsamiai į juos atsakome studentams priimtina forma (video skambutis, žinutės ir kt.).",
  },
  {
    emoji: "😌",
    name: "Sąžiningai vertiname potencialą",
    description:
      "Programuotojo karjera nėra kiekvienam. Daugelis mokyklų yra pasiruošę paimti iš Jūsų pinigus net jei netiki Jūsų karjeros programuotojo karjeroje potencialo",
  },
  {
    emoji: "💸",
    name: "Pinigų gražinimas",
    description:
      "Netiko kursai? Taikome sąžiningą ir dosnią pinigų grąžinimo politiką.",
  },
]

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>☝️💻PIRMAS_KODAS</title>
        {/*  🏆💯🎯🥇 */}
      </Head>
      <section className="flex flex-col justify-center mt-4 min-h-3/4">
        <div className="text-center">
          <h1 className="typewriter m-10 text-4xl font-bold md:text-5xl xl:text-6xl lg:mx-auto">
            <span className="bg-mustard duration-300 dark:bg-dark-levander p-5">
              PIRMAS_KODAS
            </span>
          </h1>
        </div>
        <div>
          <h2 className="m-10 lg:mx-auto text-center">
            👣🚀🌕 Tvirti pirmieji žingsniai į sėkmingą programavimo karjerą!
          </h2>
        </div>
      </section>
      <section className="prose dark:prose-invert">
        <h2>
          Kodėl verta rinktis{" "}
          <span className="bg-mustard dark:bg-dark-levander">PIRMAS_KODAS</span>{" "}
          kursus??
        </h2>
        <div>
          <dl className="space-y-10 md:space-y-0 md:grid md:gap-x-8 md:gap-y-7">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt className="text-2xl">
                  {/* <div className="flex absolute justify-center items-center w-12 h-12 rounded-md">
                    <feature.icon className="w-6 h-6" aria-hidden="true" />
                  </div> */}
                  <span>{feature.emoji}</span> <span>{feature.name}</span>
                </dt>
                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="prose dark:prose-invert  min-h-0">
        <h2>Kursai</h2>
        <div>
          <ul className="marker:text-green-500">
            {data.courses.map((course) => (
              <li key={course.id}>
                <Link href={`courses#${course.id}`} className="font-thin">
                  {course.name}
                </Link>
              </li>
            ))}
            {/* <li key="more">
              <Link href={`courses`}>..daugiau</Link>
            </li> */}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Home
