import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider } from "next-themes"
import TagManager from "react-gtm-module"
import Layout from "../components/layout"
import { useEffect } from "react"

const tagManagerArgs = {
  gtmId: "GTM-KWV5PXF",
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
