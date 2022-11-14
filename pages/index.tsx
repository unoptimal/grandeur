import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import Feature from "../components/Features";
export default function Index() {
    return (
        <>
        <Head>
            <title>Grandeur | Your ticket to a better life</title>
            <meta name='description' content='If college was a SAAS app.'/>
        </Head>


           <Navbar/>
            
        <div className="grid grid-cols-1 md:grid-cols-2 px-8 py-5 bg-amber-400">
            <div className="my-8 mx-8 lg:mt-5">
                <h1 className='my-5 font-bold text-3xl md:text-8xl text-white md:mb-10'>Your ticket to a better life</h1>
                <p className='my-5 text-base text-white font-bold md:text-3xl md:mb-10'>Powerful tools, experiences, and environments to help you find your life direction at age 20.</p>
                <button className="bg-amber-500 hover:bg-yellow-400 text-white text-2xl font-bold sm: py-4 px-8 rounded md:my-5">Sign up</button>
            </div>

            <div className="hidden md:block">
                <img src="\img\OUTLINE.png" className='-mt-10 scale-90' alt="" />
            </div>
        </div>

            
        <div className='bg-amber-50'>
            <div className=''>
                <div className='grid grid-cols-5 md:-mt-8 md:-mb-8'>
                    <img src="\img\columbia.png" alt="" className="md:my-5 object-scale-down scale-50 h-48 w-96"/>
                    <img src="\img\nyu.png" alt="" className="md:my-5 object-scale-down scale-50 h-48 w-96"/>
                    <img src="\img\saas.png" alt="" className="md:my-5 object-scale-down scale-50 h-48 w-96"/>
                    <img src="\img\dartmouth.png" alt="" className="md:my-5 object-scale-down scale-50 h-48 w-96"/>
                    <img src="\img\yale.png" alt="" className="md:my-5 object-scale-down scale-50  h-48 w-96"/>
            
                </div>    
                <div>
                    <h2 className='mx-10 mt-2 mb-2 text-center text-2xl md:text-4xl '>Trusted by 25,000+ universities worldwide</h2>
                </div>
            </div>
           

        <div className="grid grid-cols-1 md:grid-cols-2 px-8">
            <div className="my-8 mx-8 md: mb-0">
                <img src="\img\class.jpg " alt="" className='' object-right/>
            </div>
            <div className="my-8 mx-8 lg:mt-5">
                <h1 className='my-5 font-bold text-3xl md:text-5xl'>A world-class education, tailored to your needs</h1>
                <p className='my-5 mr-8 text-base md:text-2xl'>Take mandatory general education classes and watch professors read off lecture slides, or just skip school entirely. We also offer amazing research opportunities.</p>
                <button className="bg-amber-400 hover:bg-amber-500 text-white text-xl font-bold sm: py-4 px-8 rounded">Learn more</button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 px-8">

            <div className="my-8 mx-8 md: mb-0 visible md:hidden">
                <img src="\img\night.jpg " alt="" className='' object-right/>
            </div>
     
            
            <div className="my-8 mx-8 lg:mt-5">
                <h1 className='my-5 font-bold text-3xl md:text-6xl'>An exclusive social scene for the ages</h1>
                <p className='my-5 text-base md:text-2xl'>Surround yourself with the shroud of (aimless) ambitious overachievers. Briefly date someone during your first term. Go to parties, which mostly consist of people awkardly conversing in a circle and ingesting poision.</p>
                <button className="bg-amber-400 hover:bg-amber-500 text-white text-xl font-bold sm: py-4 px-8 rounded">Learn more</button>
            </div>
            <div className="my-8 mx-8 md: mb-0 hidden md:block">
                <img src="\img\night.jpg " alt="" className='' object-right/>
            </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 px-8">
            <div className="my-8 mx-8 md: mb-0">
                <img src="\img\happy.jpg " alt="" className='' object-right/>
            </div>    
            <div className="my-8 mx-8 lg:mt-5">
                <h1 className='my-5 font-bold text-3xl md:text-6xl'>Become unemployed with benefits</h1>
                <p className='my-5 text-base md:text-2xl'>You don’t know what you’re doing with your life, but now people don't question your choices as often. Also, you get to add a sweet new line to your Instagram and Linkedin bios.</p>
                <button className="bg-amber-400 hover:bg-amber-500 text-white text-xl font-bold sm: py-4 px-8 rounded">Learn more</button>
            </div>
        </div>

            </div>       
<div className="bg-amber-50">
        <div className="min-w-screen flex items-center justify-center">
            <div className="w-full px-10 md:py-20 text-black">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="text-center max-w-xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-5 text-black">What people <br />are saying.</h1>
                        
                        <div className="text-center mb-10">
                            <span className="inline-block w-40 h-1 rounded-full bg-amber-400"></span>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex items-start">
                        <div className="px-3 md:w-1/3">
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-black font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="\img\upennguy.jpg" alt="UPenn Guy"/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-gray-600">Conner Hunt</h6>
                                        <h6 className="font-bold text-sm text-gray-600">Investment Banking @ JP Morgan</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Grandeur unlocked opportunities I never would've had, such as landing me a job at my dad’s bank.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="px- md:w-1/3">
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=3" alt=""/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-gray-600">Tommy Bell</h6>
                                        <h6 className="font-bold text-sm text-gray-600">General Partner @ Sequoia</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Grandeur makes it easy to learn important things, like time management.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="px-3 md:w-1/3">
                            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="\img\bryce.jpg" alt="bryce"/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-gray-600">Bryce Harper</h6>
                                        <h6 className="font-bold text-sm text-gray-600">Psychology Graduate Student</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>I know now exactly what to do with my life.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        
        <div className='bg-amber-400 py-10'>
            <div className="text-center">
                    <h1 className="mx-10 mb-5 text-2xl md:text-3xl sm:text-2xlfont-bold text-black">Join over 220 million <br/>existentially confused 19 year olds.</h1>
                    <div className="py-5">
                        <button className="bg-amber-500 hover:bg-yellow-400 text-white text-large font-bold sm: py-4 px-8 rounded">Sign up</button>
                    </div>
            </div>
        </div>    
    
        <Footer/>
        </>
    );
}
