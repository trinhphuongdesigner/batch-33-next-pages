import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import HeadMeta from '@/components/HeadMeta'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'
import Main from '@/components/Layout/Main'
import AboutComponent from '@/components/about'

export default function HomePage() {
  return (
    <>
      <HeadMeta
        title="Trang thương mại uy tín nhất việt nam"
      />

      {/* <Header /> */}

      <AboutComponent />

      <h1>helo</h1>


      {/* <Main /> */}

      {/* <Footer /> */}
    </>
  )
}
