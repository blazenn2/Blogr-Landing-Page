import Header from "../components/Header/Header"
import DesignSection from "../components/Design-For-Future/DesignSection"
import StateOfArtSection from "../components/State-Of-Art/StateOfArtSection"
import Description from "../components/DescriptionSection/Description"
import Footer from "../components/Footer/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <DesignSection />
      <StateOfArtSection />
      <Description />
      <Footer />
    </>
  )
}
