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
                    <a href="/" className="flex items-center">
                        <img src="\img\caltech.png" className="mr-3 h-6 sm:h-10" alt="grandeur logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white">grandeur</span>
                    </a>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-lg text-white 
                            rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:font-bold md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 
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
                            <a href="/pricing" className="block py-2 pr-4 pl-3 text-lg text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:font-bold md:p-0 
                            dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                        </li>
                        <li>
                            <a href="/contact" className="block py-2 pr-4 pl-3 text-lg text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:font-bold md:p-0 
                            dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Sales</a>
                        </li>


                    </ul>
                </div>

                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                    <a href="#" className="block py-2 pr-4 pl-3 text-lg text-white rounded md:hover:font-bold md:hover:bg-transparent md:border-0 
                    d:p-0 dark:text-black md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log in</a>
                    </li>
                    <li>
                        <a href="#"><button className="bg-amber-500 text-white hover:bg-yellow-400 font-bold py-2 px-4 rounded">Sign up</button></a>
                    </li>


                </ul>
                </div>
            </div>
            </nav>

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
                <p className='my-5 mr-8 text-base md:text-2xl'>Take classes you don’t care about and watch professors read off slides, or just skip school entirely. We also offer amazing research opportunities, whatever that means.</p>
                <button className="bg-amber-400 hover:bg-amber-500 text-white text-xl font-bold sm: py-4 px-8 rounded">Learn more</button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 px-8">

            <div className="my-8 mx-8 md: mb-0 visible md:hidden">
                <img src="\img\night.jpg " alt="" className='' object-right/>
            </div>
     
            
            <div className="my-8 mx-8 lg:mt-5">
                <h1 className='my-5 font-bold text-3xl md:text-6xl'>An exclusive social scene for the ages</h1>
                <p className='my-5 text-base md:text-2xl'>Surround yourself with the shroud of aimless overachievers. Briefly date someone during your first term. Go to parties, which mostly consist of people awkardly conversing in a circle and ingesting poision.</p>
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
    
        <footer className="bg-amber-50">
    <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                    <a href="#" className=" hover:underline">About</a>
                </li>
                
                <li className="mb-4">
                    <a href="https://unoptimal.com/essays" className="hover:underline">Blog</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Help center</h2>
            <ul className="text-gray-500 dark:text-gray-400">

                <li className="mb-4">
                    <a href="https://twitter.com/thatsnotoptimal" className="hover:underline">Twitter</a>
                </li>
                
                <li className="mb-4">
                    <a href="mailto:unoptimalblogs@gmail.com" className="hover:underline">Contact Us</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Legal</h2>
            <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Licensing</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Download</h2>
            <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                    <a href="#" className="hover:underline">iOS</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Android</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">Windows</a>
                </li>
                <li className="mb-4">
                    <a href="#" className="hover:underline">MacOS</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="py-6 px-4 bg-amber-50 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2022 <a href="/">Grandeur</a>. All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
           
      

            <a href="https://www.youtube.com/channel/UCcrtdZAKJSJQKYU1iMAnTDw/videos" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5"><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                <span className="sr-only">Youtube page</span>
            </a>

            <a href="https://twitter.com/thatsnotoptimal" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                <span className="sr-only">Twitter page</span>
            </a>

            <a href="https://www.instagram.com/thatsnotoptimal/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                <span className="sr-only">Instagram page</span>
            </a>

            <a href="https://unoptimal.com/" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                <span className="sr-only">LinkedIn page</span>
            </a>
           
        </div>
    </div>

    
</footer>
        </>
    );
}
