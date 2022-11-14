import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Contact(){
    return(
        <>
        <Head>
            <title>Grandeur Contact Sales | Your ticket to a better life</title>
            <meta name='description' content='If college was a SAAS app - the contact page.'/>
        </Head>
        <Navbar/>
            <section className="bg-amber-50 dark:bg-gray-900">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required/>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you." required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                        <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="bg-amber-300 hover:bg-yellow-400 text-black text-large font-bold sm: py-4 px-8 rounded">Send message</button>
                </form>
            </div>
            </section>



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