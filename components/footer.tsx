const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black p-4">
      <article className="flex flex-wrap gap-4 prose dark:prose-invert max-w-2xl md:mx-auto md:flex md:items-center md:justify-between">
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
      </article>
      {/* <article className="flex flex-wrap gap-4 prose dark:prose-invert max-w-2xl md:mx-auto">
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
      </article> */}
    </footer>
  )
}

export default Footer
