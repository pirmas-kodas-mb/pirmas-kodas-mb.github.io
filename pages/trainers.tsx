import type { NextPage } from "next"
import Head from "next/head"

const About: NextPage = () => {
  return (
    <div>
      <Head>PIRMAS_KODAS dėstytojai</Head>
      <div className="prose dark:prose-invert">
        <h1>Pirmas kodas dėstytojai</h1>
        <p>Aidis Stukas</p>
        <p>PIRMAS_KODAS kūrėjas</p>
        <p>Programuoti pradėjau nuo 2015 m.</p>
        <p>Įvairiose prgramavimo mokymų kompanijose dirbu nuo 2018 m.</p>
        <p>
          Profesionalioje patirtyje esu daręs, nekilnojamo turto web scraping,
          ERP (Enterprice Resource Planning) sistemas. Kūriau adtech.
        </p>
        Mano technologijos: Python, Django, FastAPI, AWS, Javascript, React,
        NextJS, Recoil, Tailwind, Material UI, Pandas, Xgboost, Gensim
        <p>Tikiu interaktyviu mokymu</p>
      </div>
    </div>
  )
}

export default About
