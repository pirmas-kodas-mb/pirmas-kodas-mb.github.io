import Navbar from "./navbar"
import Footer from "./footer"
import { motion, AnimatePresence } from "framer-motion"

import { NextPage } from "next"
import { useRouter } from "next/router"
import { MessengerChat } from "react-messenger-chat-plugin"
type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const router = useRouter()
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100,

    when: "afterChildren",
  }
  return (
    <div className="transition-colors duration-1000 ease-in-out">
      <Navbar />
      <AnimatePresence>
        <div className="page-transition-wrapper">
          <motion.div
            transition={spring}
            key={router.pathname}
            // initial={{ x: 300, opacity: 0 }}
            // animate={{ x: 0, opacity: 1 }}
            // exit={{ x: -300, opacity: 0 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="page-transition-container"
          >
            <main className="mx-2 max-w-2xl md:mx-auto">
              <div>{children}</div>
            </main>
          </motion.div>
        </div>
      </AnimatePresence>
      <Footer />
      {/* <MessengerChat
        pageId="106879892184595"
        language="en_US"
        themeColor={"#000000"}
        bottomSpacing={10}
        loggedInGreeting="Sveiki!"
        loggedOutGreeting="Viso gero!"
        greetingDialogDisplay={"show"}
        debugMode={true}
        onMessengerShow={() => {
          console.log("onMessengerShow")
        }}
        onMessengerHide={() => {
          console.log("onMessengerHide")
        }}
        onMessengerDialogShow={() => {
          console.log("onMessengerDialogShow")
        }}
        onMessengerDialogHide={() => {
          console.log("onMessengerDialogHide")
        }}
        onMessengerMounted={() => {
          console.log("onMessengerMounted")
        }}
        onMessengerLoad={() => {
          console.log("onMessengerLoad")
        }}
      /> */}
    </div>
  )
}

export default Layout
