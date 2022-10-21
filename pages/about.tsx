import type { NextPage } from "next"

const About: NextPage = () => {
  return (
    <article className="prose dark:prose-invert">
      <h1>Apie PIRMAS_KODAS</h1>
      <h2>Trumpai</h2>
      <p>
        PIRMAS_KODAS yra programavimo mokymų kompanija orientuota į efektyvų,
        praktiniais įgūdžiais grįstą mokymą.
      </p>
      <p>
        {" "}
        Šiuo metu specializuojamės Python programavimo kalboje ir įvairiose jos
        taikymo srityse, pagrinde Web Dev ir Data Analysis/Science.
      </p>

      <h2>Rekvizitai</h2>
      <div className="grid gap-3">
        <dl>
          <dl>Pavadinimas</dl>
          <dd>{`MB "Pirmas kodas"`}</dd>
        </dl>
        <dl>
          <dl>Įmonės kodas</dl>
          <dd>306129624</dd>
        </dl>
        <dl>
          <dl>Tel. nr.</dl>
          <dd>
            <a href="tel:+37064139571">+370 641 39571</a>
          </dd>
        </dl>
        <dl>
          <dl>El. paštas</dl>
          <dd>
            <a href="mailto:info@pirmaskodas.lt">info@pirmaskodas.lt</a>
          </dd>
        </dl>
      </div>
    </article>
  )
}

export default About
