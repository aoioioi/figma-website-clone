import Head from 'next/head'
import Banner from '../components/Banner'
import Community from '../components/Community'
import CompaniesSection from '../components/CompaniesSection'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import Ribbon from '../components/Ribbon'
import SignUp from '../components/SignUp'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Figma: the collaborative interface design tool.</title>
        <link rel="icon" href="https://static.figma.com/app/icon/1/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css"></link>
      </Head>

      <Ribbon />
      <Header />
      <Banner />
      <CompaniesSection />
      <main>
        <Main />
        <Community />
      </main>
      <SignUp />
      <Footer />
    </div>
  )
}
