import Head from "next/head";
import Image from "next/image";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { Geist, Geist_Mono } from "next/font/google";
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import deved from '../public/dev-ed-wave.png'

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
      
      <main className="bg-gray-800 px-10">
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
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Yara Kouttane</h2>
            <h3 className="text-2xl py-2">Hello! my name's is Yara and I'm a computer science student that's and a developer deeply passionate about cybersecurity and web-development</h3>
          </div>
          
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin/>
            <AiFillGithub/>
          </div>
          
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden" >
            <Image src={deved} layout="fill" objectFit="cover"/>
          </div>
        </section>

        {/* Section 2 */}
        <div>
          <h3 className="text-3xl py-1">Most notable projects</h3>
          <p className="text-md py-2 leading-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos blanditiis et illum?
          </p>
        </div>
      </main> 
  
  </div>
  );
}
