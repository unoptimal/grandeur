import Head from "next/head";
import Navbar from "../components/Navbar";
import End from "../components/End";
import Footer from "../components/Footer";

export default function Contact(){
    return(
        <>
        <Head>
            <title>Grandeur Contact Sales | Your ticket to a better life</title>
            <meta name='description' content='If college was a SAAS app - the contact page.'/>
        </Head>
        <Navbar/>
            <section className="bg-light-navy">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-beige">Contact Us</h2>
                
                <form action="#" className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-beige">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-beige border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" required/>
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-beige">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-navy bg-beige rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you." required/>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-beige">Your message</label>
                        <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-navy bg-beige rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="bg-gold hover:underlin text-navy text-large font-bold sm: py-4 px-8 rounded">Send message</button>
                </form>
            </div>
            </section>


            <End/>
            <Footer/>
        
        </>
    )
}