import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact.jsx'
import Main from '../components/Main'
import Projects from '../components/Projects.jsx'
import Skills from '../components/Skills'
import AboutImg from '../public/assets/about.jpg';
import ContactImg from '../public/assets/contact.jpg';
import Twitch from '../pages/twitch.jsx'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/portafolio.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
