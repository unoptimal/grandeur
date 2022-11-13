import Head from "next/head";

import Feature from "../components/Features";
export default function Index() {
    return (
        <>
        <Head>
            <title>Grandeur | Your ticket to a better life</title>
            <meta name='description' content='If college was a SAAS app.'/>
        </Head>

            <nav className="zoom:0.9 mb-0 bg-amber-400 hidden md:block">
                <div className="container flex flex-wrap justify-between items-center mx-auto px-10">
                    <a href="#" className="flex items-center">
                        <img src="\img\caltech.png" className="mr-3 h-6 sm:h-10" alt="grandeur logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">grandeur</span>
                    </a>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-lg text-white 
                            rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 
                            dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Product <svg className="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" 
                            xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                            clip-rule="evenodd"></path></svg></button>
                            
                            <div id="dropdownNavbar" className="hidden z-10 w-44 font-normal rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                                </ul>
                                <div className="py-1">
                                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                                </div>
                            </div>
                        </li>

                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-lg text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 
                            dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-lg text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 
                            dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Sales</a>
                        </li>


                    </ul>
                </div>

                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-lg text-gray-700 rounded hover:bg-text-black md:hover:bg-transparent md:border-0 md:hover:text-yellow-400 md:p-0 dark:text-black md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log in</a>
                    </li>
                    <li>
                    <a href="#"><button className="bg-amber-500 text-white hover:bg-yellow-400 font-bold py-2 px-4 rounded">Sign up</button> </a>
                    </li>


                </ul>
                </div>
            </div>
        </nav>

            <div className="zoom:0.9 -mt-1 hidden md:block">
                <img src="\img\closer.png" />

  
            </div>
            <div className='bg-amber-400 visible md:hidden px-10 py-10'>
                    <h1 className='text-6xl font-bold text-white'>Your ticket to a better life.testing 1123123123</h1>
                    <h3  className='text-lg py-2 font-bold text-white'>Powerful tools, experiences, and environments to help you find your life direction at age 20.</h3>
                    <div className="">
                        <button className="mr-5 my-2 bg-amber-500  text-white hover:bg-yellow-400 font-bold py-2 px-4 rounded">Sign up</button>
                        <button className="bg-amber-500  text-white hover:bg-yellow-400 font-bold py-2 px-4 rounded">Learn more</button>
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

            {/* <div className="features-box" >
                <Feature 
                    title="A world class education, tailored to your needs"
                    description="Take classes you don’t care about and watch professors read off slides, or just skip school entirely. Who cares? The universe is a cruel, uncaring void.We also offer amazing research opportunities."
                    button="Learn more"
                    image="/img/empty.jpg"
                    alt='feature image'
                    />
            </div> */}
{/* 
            <div className="lg: grid grid-cols-2 gap-4 my-8 mx-8">
                
                    <div className='my-8 mx-8' >
                        <h1 className='sm: text-3xl md: text-6xl my-5 font-bold'>World class education, <br/>tailored to your needs</h1>
                        <p className='text-xl my-5 invisible lg:visible'>Take classes you don’t care about and watch professors read off slides, or just skip school entirely. Who cares? The universe is a cruel, uncaring void. We also offer amazing research opportunities.</p>
                        <button className="bg-yellow-400 hover:bg-purple-400 text-white text-xl font-bold sm: py-4 px-8 rounded">Learn more</button>
                    </div>
                
                    <div className="my-8 mx-8 ">
                        <img src="\img\empty.jpg" alt="" className='lg:visible' object-right/>
                    </div>
                
            </div> */}

            

        <div className="grid grid-cols-1 md:grid-cols-2 px-8">
            <div className="my-8 mx-8 md: mb-0">
                <img src="\img\empty.jpg " alt="" className='' object-right/>
            </div>
            <div className="my-8 mx-8 lg:mt-20">
                <h1 className='my-5 font-bold text-3xl md:text-6xl'>World-class education, tailored to your needs</h1>
                <p className='my-5 mr-8 text-base md:text-2xl'>Take classes you don’t care about and watch professors read off slides, or just skip school entirely. Who cares? The universe is a cruel, uncaring void. We also offer amazing research opportunities, whatever that means.</p>
                <button className="bg-amber-400 hover:bg-amber-500 text-white text-xl font-bold sm: py-4 px-8 rounded">Learn more</button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 px-8">

            <div className="my-8 mx-8 md: mb-0 visible md:hidden">
                <img src="\img\empty.jpg " alt="" className='' object-right/>
            </div>
     
            
            <div className="my-8 mx-8 lg:mt-20">
                <h1 className='my-5 font-bold text-3xl md:text-6xl'>An exclusive social scene for the ages</h1>
                <p className='my-5 text-base md:text-2xl'>Surround yourself with the shroud of aimless overachievers. Briefly date someone during your first term. Go to parties, which mostly consist of people awkardly conversing in a circle and ingesting poision.</p>
                <button className="bg-amber-400 hover:bg-amber-500 text-white text-xl font-bold sm: py-4 px-8 rounded">Learn more</button>
            </div>
            <div className="my-8 mx-8 md: mb-0 hidden md:block">
                <img src="\img\empty.jpg " alt="" className='' object-right/>
            </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 px-8">
            <div className="my-8 mx-8 md: mb-0">
                <img src="\img\empty.jpg " alt="" className='' object-right/>
            </div>    
            <div className="my-8 mx-8 lg:mt-20">
                <h1 className='my-5 font-bold text-3xl md:text-6xl'>Become unemployed with benefits</h1>
                <p className='my-5 text-base md:text-2xl'>You don’t know what you’re doing with your life, but now people don't question your choices as often. Also, you get to add a sweet new line to your Instagram and Linkedin bios.</p>
                <button className="bg-amber-400 hover:bg-amber-500 text-white text-xl font-bold sm: py-4 px-8 rounded">Learn more</button>
            </div>
        </div>
        
        {/* <div className="grid grid-cols-1 md:grid-cols-2 px-8">
            <div className="my-8 mx-8 md: mb-0">
                <img src="\img\empty.jpg " alt="" className='' object-right/>
            </div>    
            <div className="my-8 mx-8 lg:mt-20">
                <h1 className='my-5 font-bold text-3xl md:text-6xl'>Signal competence to potential employers</h1>
                <p className='my-5 text-base md:text-2xl'>You probably aren't learning skills relevant to your future job, but that's alright. What's really important is that people now have something to filter you by.</p>
                <button className="bg-amber-300 hover:bg-amber-400 text-white text-xl font-bold sm: py-4 px-8 rounded">Learn more</button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 px-8">

            <div className="my-8 mx-8 md: mb-0 visible md:hidden">
                <img src="\img\empty.jpg " alt="" className='' object-right/>
            </div>


            <div className="my-8 mx-8 lg:mt-20">
                <h1 className='my-5 font-bold text-3xl md:text-6xl'>Become unemployed with benefits</h1>
                <p className='my-5 text-base md:text-2xl'>You don’t know what you’re doing with your life, but now people don't question your choices as often. Also, you get to add a sweet new line to your Instagram and Linkedin bios.</p>
                <button className="bg-amber-300 hover:bg-amber-400 text-white text-xl font-bold sm: py-4 px-8 rounded">Learn more</button>
            </div>
            <div className="my-8 mx-8 md: mb-0 hidden md:block">
                <img src="\img\empty.jpg " alt="" className='' object-right/>
            </div>
        </div> */}
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
                                        <h6 className="font-bold text-sm text-gray-600">Risk Management Intern @ JP Morgan</h6>
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
                                        <h6 className="font-bold text-sm text-gray-600">Marketing @ </h6>
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
                                        <img src="https://i.pravatar.cc/100?img=5" alt=""/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-gray-600">Bryce Graham</h6>
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
                        <button className="bg-amber-500 hover:bg-blue-700 text-white text-large font-bold sm: py-4 px-8 rounded">Sign up</button>
                    </div>
            </div>
        </div>    
        </>
    );
}
