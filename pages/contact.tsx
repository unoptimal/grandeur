import Head from "next/head";

export default function Contact(){
    return(
        <>
        <Head>
            <title>Grandeur Contact Sales | Your ticket to a better life</title>
            <meta name='description' content='If college was a SAAS app - the contact page.'/>
        </Head>

        <nav className="zoom:0.9 mb-0 bg-amber-400 hidden md:block">
                <div className="container flex flex-wrap justify-between items-center mx-auto px-10">
                    <a href="/#" className="flex items-center">
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

            <div className='bg-amber-400 py-10'>
            <div className="text-center">
                    <h1 className="mx-10 mb-5 text-2xl md:text-3xl sm:text-2xlfont-bold text-black">Join over 220 million <br/>existentially confused 19 year olds.</h1>
                    <div className="py-5">
                        <button className="bg-amber-500 hover:bg-yellow-400 text-white text-large font-bold sm: py-4 px-8 rounded">Sign up</button>
                    </div>
            </div>
        </div>   
        </>
    )
}