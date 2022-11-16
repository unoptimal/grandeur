import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import End from '../components/End'

export default function Pricing(){
    return(
        <>
        <Head>
            <title>Grandeur Pricing | Your ticket to a better life</title>
            <meta name='description' content='If college was a SAAS app - the pricing page.'/>
        </Head>

       <Navbar/>

            <div className="bg-amber-50 py-10">
                <h1 className="font-bold text-6xl text-center">Choose the perfect plan for you.</h1>    
            </div>

        <div className="bg-amber-50">
            
            <div className="sm:flex flex-wrap justify-center items-center gap-8">
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 shadow-lg rounded-lg">
                        <div className="px-6 py-8 sm:p-10 sm:pb-6">
                            <div className="flex justify-center">
                                <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
                                    Undergraduate Degree
                                </span>
                            </div>
                            <div className="mt-4 flex justify-center text-6xl leading-none font-extrabold">
                                $5,000
                                <span className="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500">
                                    /month
                                </span>
                            </div>
                        </div>
                        <p className="text-md mt-4">
                            Plan includes:
                        </p>
                        <ul className="text-sm w-full mt-6 mb-6">
                            <li className="mb-3 flex items-center ">
                                <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                Lecture slides
                            </li>
                            <li className="mb-3 flex items-center ">
                                <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                An alumni network
                            </li>
                   
                            <li className="mb-3 flex items-center ">
                                <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="green" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                An official piece of paper
                            </li>
                     
                            <li className="mb-3 flex items-center opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" className="h-6 w-6 mr-2" fill="red" viewBox="0 0 1792 1792">
                                    <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                A second official piece of paper
                            </li>
                        </ul>
                        <a href='https://educationdata.org/average-cost-of-college' target='blank'><button type="button" className="w-full px-3 py-3 text-sm shadow rounded-lg text-amber-500 hover:underline">
                            Continue
                        </button></a>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-amber-400 text-white mt-6 shadow-lg rounded-lg">
                        <div className="px-6 py-8 sm:p-10 sm:pb-6">
                            <div className="flex justify-center">
                                <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
                                    Graduate degree
                                </span>
                            </div>
                            <div className="mt-4 flex justify-center text-6xl leading-none font-extrabold">
                                $9,500
                                <span className="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-100">
                                    /month
                                </span>
                            </div>
                        </div>
                        <p className="text-md mt-4">
                            Plan includes:
                        </p>
                        <ul className="text-sm w-full mt-6 mb-6">
                            <li className="mb-3 flex items-center ">
                                <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="currentColor" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                Premium lecture slides
                            </li>
                            <li className="mb-3 flex items-center ">
                                <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="currentColor" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                A robust alumni network
                            </li>
                       
                            <li className="mb-3 flex items-center ">
                                <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="currentColor" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                <a href="https://gsas.nyu.edu/programs/masters-programs/prospective-students/why-pursue-a-master-s-degree.html#:~:text=Sense%20of%20accomplishment%3A%20The%20effort%20put%20forth%20to%20complete%20your%20studies%2C%20despite%20moments%20of%20doubt%20and%20uncertainty%2C%20will%20stand%20as%20a%20central%20character%2Dbuilding%20life%20experience.">A sense of accomplishment</a>
                            </li>
                            <li className="mb-3 flex items-center ">
                                <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="currentColor" viewBox="0 0 1792 1792">
                                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                                    </path>
                                </svg>
                                A second official piece of paper
                            </li>
    
                        </ul>
                        <a href='https://educationdata.org/average-cost-of-a-masters-degree' target='blank'><button type="button" className="w-full px-3 py-3 text-sm shadow rounded-lg text-amber-500 bg-white hover:underline">
                            Continue
                        </button></a>
                    </div>
       
            </div>
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Frequently asked questions</h2>
                    <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 items-center">
                        <div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    How does your pricing work?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">Our pricing is based on tuition, room, board, transportation, mandatory fees, and additional estimated miscellaneous expenses. </p>
                            </div>
                            <div className="mb-10">                        
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Do you offer any discounted plans?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">Yes. <a href='https://studentaid.gov/h/apply-for-aid/fafsa' className="text-blue-500">Contact sales</a> to discuss your options.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Can I cancel my plan later on?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">After paying your initial deposit, you are allowed to cancel your Grandeur plan at any time.</p>
                            </div>
                            <div className="mb-10">
                                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                                    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                                    Can I start a free trial of the plans?
                                </h3>
                                <p className="text-gray-500 dark:text-gray-400">No.</p>
                            </div>
                        </div>
                    
                    </div>
                </div>
    
            </div>
        

        <End/>
        <Footer/>
        </>
    )
}