import Head from "next/head";
import Image from "next/image";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { Geist, Geist_Mono } from "next/font/google";
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import laptop from '../public/laptop.png'
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
  <div>
    <Head className="head">
    <title>Yara Kouttane's Portfolio</title>  
    <meta name="description" content="image"/>  
    <link rel="icon" href="/favicon.ico" />
    </Head>
      
      <main className="bg-gray-800 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">  
            <h1 className="text-xl font-burtons">Development</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
              </li>
              <li><a className="bg-gradient-to-r from-cyan-600 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Yara Kouttane</h2>
            <h3 className="text-2xl py-2 md:text-3xl max-w-xl mx-auto">Hello! my name's is Yara and I'm a computer science student that's and a developer deeply passionate about cybersecurity and web-development</h3>
          </div>
          
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <a href="https://www.linkedin.com/in/yara-kouttane-826629255/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/yaraPB" target="_blank" rel="noopener noreferrer">
            <AiFillGithub />
          </a>
        </div>
          
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden" >
            <Image src={laptop} layout="fill" objectFit="cover"/>
          </div>
        </section>

        {/* Section 2 */}
        <section className="min-h-screen">

        <div>
          <h3 className="text-3xl py-1">Most notable projects</h3>
          <p className="text-md py-2 leading-8">
           I am constantly working on <span className="text-teal-400">projects</span>  and trying to improve myself!
          </p>
          <p className="text-md py-2 leading-8">
           I am open to discover more on my journey ahead!
          </p>
        </div>
        <div>
        
          <div className="text-center shadow-lg shadow-teal-500 p-10 rounded-xl">
            <Image src={design} width={100} height={100}/>
            <h3 className="text-lg font-medium pt-8 pb-2">Beutiful designs</h3>
              <p> Engaging designs </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>

              <p className="text-white-300 py-1">Three.js</p>
              <p className="text-white-300 py-1">Tailwind and bootstrap CSS</p>
          </div>
          
          <div className="text-center shadow-lg shadow-teal-500 p-10 rounded-xl my-10">
            <Image src={code} width={100} height={100}/>
            <h3 className="text-lg font-medium pt-8 pb-2">Coding day and night</h3>
              <p> For web-development </p>
              <h4 className="py-4 text-teal-600">Programming languages</h4>

              <p className="text-white-300 py-1">PHP</p>
              <p className="text-white-300 py-1">Javascript</p>
              <p className="text-white-300 py-1">React</p>

          </div>
          
          <div className="text-center shadow-lg shadow-teal-500 p-10 rounded-xl ">
            <Image src={consulting} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Security first and foremost</h3>
              <p> Cyber security </p>
              <h4 className="py-4 text-teal-600">Interest areas</h4>

              <p className="text-white-300 py-1">Web exploitation</p>
              <p className="text-white-300 py-1">Reverse enginnering</p>
              <p className="text-white-300 py-1">Network security</p>
          </div>

        </div>
        </section>

      </main> 
  
  </div>
  );
}
