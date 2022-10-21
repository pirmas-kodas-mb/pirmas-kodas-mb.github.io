import Head from "next/head"

const About = () => {
  return (
    <article>
      <Head>PIRMAS_KODAS kompanijoms</Head>
      <article className="prose dark:prose-invert">
        <h1>PIRMAS_KODAS paslaugos kompanijoms</h1>
        <div>
          Kompanijoms teikiame visus kursus kurie yra skirti individualiems
          studentams. Papildomai, galime modifikuoti programą, derintis prie
          Jūsų kompanijoms darbuotojų poreikiui. Taip pat, galime teikti
          pasiūlymus dėl Jums reikiamų mokymų. Mūsų žinių spektras: Data
          analysis with Python, Web develpoment with Python (backend), Web
          development with React (next/tailwind/materialui), nlp transfer
          learning, web scraping
        </div>
      </article>
    </article>
  )
}

export default About
