import type { NextPage } from "next"

const faq = [
  ["Ar tikrai Python yra populiariausia pasaulyje programavimo kalba?", "Taip"],
  ["Ar PIRMAS_KODAS teikia mokymus kompanijoms?", "Taip"],
  ["Ar galioja pinigų gražinimas?", "Taip"],
]
const Faq: NextPage = () => {
  return (
    <div>
      <article className="prose dark:prose-invert">
        <h1>Dažnai užduodami klausimai </h1>
        <dl id="faq">
          <dt>
            Ar tikrai Python yra populiariausia pasaulyje programavimo kalba?
          </dt>
          <dd>Taip</dd>
          {faq.map((faq) => (
            <>
              <dt className="pt-2 font-bold">{faq[0]}</dt>
              <dt>{faq[1]}</dt>
            </>
          ))}
        </dl>
      </article>
    </div>
  )
}

export default Faq
