import type { NextPage } from "next"
import { useTheme } from "next-themes"
import Link from "next/link"
import SyntaxHighlighter from "react-syntax-highlighter"
import {
  monokai,
  atomOneLight,
} from "react-syntax-highlighter/dist/cjs/styles/hljs"
const Python: NextPage = () => {
  const { theme } = useTheme()

  return (
    <div>
      <article>
        <h1> Python programavimo kalba</h1>
        <p className="">
          Python – interpretuojama, interaktyvi programavimo kalba, sukurta
          Guido van Rossumo 1990 m. Pirmiausiai ji buvo scenarijų kalba AmoebaOS
          operacinei sistemai. Python dažniausiai lyginama su Tcl, Perl, Scheme,
          Java ir Ruby. Python kuriama kaip atviro kodo projektas. Python yra
          daugiaparadigmė programavimo kalba – ji leidžia naudoti keletą
          programavimo stilių: objektinį, struktūrinį, funkcinį, aspektinį.
          Python naudoja dinaminį tipų tikrinimą.
        </p>

        <SyntaxHighlighter
          language="python"
          style={theme === "dark" ? monokai : atomOneLight}
        >
          {"print('new')"}
        </SyntaxHighlighter>
        <Link href="https://lt.wikipedia.org/wiki/Python">Wikipedia</Link>
      </article>
      <article>
        <div className="p-4">
          <div>Susidomejote? turime tokiu kursu</div>
          {/* Python */}
          <ul>
            <li>Pirmas</li>
            <li>Antras kursas</li>
          </ul>
        </div>
      </article>
    </div>
  )
}

export default Python
