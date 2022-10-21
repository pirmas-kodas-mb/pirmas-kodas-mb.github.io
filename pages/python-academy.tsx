import type { NextPage } from "next"
import Link from "next/link"
import Image from "next/image"
/* This example requires Tailwind CSS v2.0+ */

const Page: NextPage = () => {
  return (
    <section className="prose dark:prose-invert">
      <h1> Python academy</h1>
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
      <h2>Kas yra Python Academy?</h2>
      <p>
        Python Academy yra į Python mokymą orientuota vokietijos įmonė. Python
        Academy teikia Python mokymų paslaugas individualiems klientams ir
        kompanijoms. Kompanijoms skirti kursai
      </p>
      <h2>Kodėl Python Academy yra svarbus</h2>
      {`Python Academy sertifikuoti lektoriai yra patyrę programuotojai ir dėstymo profesionalai. Sertifikacija atlieka Python Academy įkūrėjas Dr. Müller, jos metu vertinamas lektorių žinių lygis ir gebėjimas jas perteikti.
      Python Academy lektoriai dėste daugiau nei 815 kursų, viso, daugiau nei 2250 mokymo dienų. Viso mokuose dalyvavo daugiau nei 9000 studentų`}
      <p>Daugiau nei 815 kursų</p>
      <p>Daugiau nei 2250</p>
      <h2>Koks yra ryšys tarp Python academy</h2>
      <p>PIRMAS_KODAS yra licenzijuoti PythonAcademy partneriai</p>
      <p>
        Mūsų kursas pradedantiesiems yra grįstas būtent Python Academy
        patikrinta medžiaga
      </p>
    </section>
  )
}

export default Page
