import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

interface ButtonProps {
  href: string
}

const Button = ({ href }: ButtonProps) => {
  return (
    <div className="text-right mb-10">
      <button>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`self-end font-bold text-lg p-3 rounded-md transition-colors transition-border duration-1000 dark:text-black bg-mustard dark:bg-green-500`}
        >
          Registruotis
        </a>
      </button>
    </div>
  )
}

const Course: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pirmas kodas | Kursai | Python pradedantiesiems</title>
      </Head>

      <article className="prose dark:prose-invert">
        <div className="section" id="python-for-non-programmers">
          <h1>
            Python pradedantiesiems
            <a
              className="headerlink"
              href="#python-for-non-programmers"
              title="Permalink to this headline"
            >
              ¶
            </a>
          </h1>
          <div className="section" id="intended-audience">
            <h2>Apie šį kursa</h2>
            <p>
              Šis kurso aprašymas paruoštas pagal Python Academy kursą.
              PIRMAS_KODAS yra oficialus{" "}
              <a href="https://pythonacademy.com">PythonAcademy.com</a>{" "}
              partneris. Originalų kurso aprašą anglų kalba galite rasti{" "}
              <a href="https://www.python-academy.com/courses/python_course_nonprogrammers.html">
                čia
              </a>
            </p>
            <div className="hidden dark:block">
              <Link href="https://www.python-academy.com/">
                <Image
                  src="/pya_logo_white.svg"
                  alt="Python Academy"
                  width={175 * 2}
                  height={68 * 2}
                  className="hidden"
                />
              </Link>
            </div>
            <div className="block dark:hidden">
              <Link href="https://www.python-academy.com/">
                <Image
                  src="/pya_logo_rgb.svg"
                  alt="Python Academy"
                  width={175 * 2}
                  height={68 * 2}
                />
              </Link>
            </div>
          </div>
          <div className="section" id="intended-audience">
            <h2>
              Tiksline auditorija
              <a
                className="headerlink"
                href="#intended-audience"
                title="Permalink to this headline"
              >
                ¶
              </a>
            </h2>
            <p>
              Kursas sukurtas neturintiems programavimo patirties.
              Rekomenduotina, kad kurso studentai tūrėtų gebėjimus naudotis
              operacine sistema, įsidiegti programinę įranga, naudoti MS Office
              paketu arba panašia programine įranga.
            </p>
          </div>
          <div className="section" id="course-content">
            <h2>
              Kurso turinys
              <a
                className="headerlink"
                href="#course-content"
                title="Permalink to this headline"
              >
                ¶
              </a>
            </h2>
            <p>Šiame kurse gausite PRAKTINIUS Python naudojimo įgūdžius.</p>
            <div className="section" id="basics-and-datastructures">
              <h3>
                Pagrindai ir duomenu strukturos
                <a
                  className="headerlink"
                  href="#basics-and-datastructures"
                  title="Permalink to this headline"
                >
                  ¶
                </a>
              </h3>
              <ul>
                <li>
                  <p>Ivadas i JupyterLab</p>
                </li>
                <li>
                  <p>Python sintakse</p>
                </li>
                <li>
                  <p>Statements and expressions</p>
                </li>
                <li>
                  <p>Control flow</p>
                </li>
                <li>
                  <p>Ciklai</p>
                </li>
                <li>
                  <p>Duomenų tipų apžvalga</p>
                </li>
                <li>
                  <p>Sąrašai ir tuplai</p>
                </li>
                <li>
                  <p>Žodynai</p>
                </li>
                <li>
                  <p>Setai</p>
                </li>
              </ul>
            </div>
            <div
              className="section"
              id="procedural-and-object-oriented-programming"
            >
              <h3>
                Procedūrinis ir objektinis programavimas
                <a
                  className="headerlink"
                  href="#procedural-and-object-oriented-programming"
                  title="Permalink to this headline"
                >
                  ¶
                </a>
              </h3>
              <ul className="simple">
                <li>
                  <p>Funkcijos</p>
                </li>
                <li>
                  <p>Generatoriai ir iteratoriai</p>
                </li>
                <li>
                  <p>Klasės</p>
                </li>
                <li>
                  <p>Paveldėjimas</p>
                </li>
                <li>
                  <p>Operator overloading</p>
                </li>
                <li>
                  <p>Išimčių valdymas</p>
                </li>
                <li>
                  <p>Input / output</p>
                </li>
              </ul>
            </div>
            <div className="section" id="project-and-background-knowledge">
              <h3>
                Projektai
                <a
                  className="headerlink"
                  href="#project-and-background-knowledge"
                  title="Permalink to this headline"
                >
                  ¶
                </a>
              </h3>
              <ul>
                <li>
                  <p>nedidelis Python projektas</p>
                </li>
                <li>
                  <p>Moduliai ir paketai</p>
                </li>
                <li>
                  <p>Pavadinimai ir objektai</p>
                </li>
                <li>
                  <p>Namespaces and scoping</p>
                </li>
              </ul>
            </div>
            <div className="section" id="practical-applications-and-libraries">
              <h3>
                Practical Applications and Libraries
                <a
                  className="headerlink"
                  href="#practical-applications-and-libraries"
                  title="Permalink to this headline"
                >
                  ¶
                </a>
              </h3>
              <ul>
                <li>
                  <p>Teksto apdorojimas</p>
                </li>
                <li>
                  <p>System functions</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="section" id="exercises">
            <h2>
              Pratimai
              <a
                className="headerlink"
                href="#exercises"
                title="Permalink to this headline"
              >
                ¶
              </a>
            </h2>
            <p>
              Visi dalyviai gali sekti žingsinius kompiuteryje. Kiekvieno
              skyriaus pabaigoje daromi pratimai. Tokiu būdu įsisavinime
              įgūdžius.
            </p>
          </div>
          <div className="section" id="software">
            <h2>
              Kurse naudojama programinė įranga
              <a
                className="headerlink"
                href="#software"
                title="Permalink to this headline"
              >
                ¶
              </a>
            </h2>
            <p>
              Kurso dalyviams nereikės diegti papildomos programinės įrangos.
              T.y. į kompiuterį nereikės instaliuoti jokių programų. Tereikia
              naršyklės ir patikimo interneto ryšio.
            </p>
          </div>

          <div className="section" id="course-material">
            <h2>
              Kurso medžiaga
              <a
                className="headerlink"
                href="#course-material"
                title="Permalink to this headline"
              >
                ¶
              </a>
            </h2>
            <p>
              Kiekvienam kurso dalyviui visa kurso medžiaga bus pateikta PDF
              formatu. Dokumente bus visa teorinė medžiaga bei kurso metu
              naudotas kodas.
            </p>
          </div>
        </div>
        <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfo_wQBZBVQeNeqNbzRPzxAqY6KxQVkR6WYicuTNerD3MGl1Q/viewform?usp=pp_url&entry.347144159=Python+pradedantiesiems,+darbo+dienos,+2022-10-31+-+2022-11-25&entry.603436698=Prie%C5%A1+prasidedant+kursui&entry.1370849036=Taip" />
      </article>
    </div>
  )
}

export default Course
