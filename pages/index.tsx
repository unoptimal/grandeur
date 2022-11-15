import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import End from "../components/End";
import Footer from "../components/Footer";
export default function Index() {

        
    return (
        <>
        <Head>
            <title>Grandeur | Your ticket to a better life</title>
            <meta name='description' content='If college was a SAAS app.'/>
        </Head>
           <Navbar/>
           <Main/>
           <div className='bg-amber-50'>
           <Banner/>
            
        <div className="grid grid-cols-1 md:grid-cols-2 px-8">
            <div className="my-8 mx-8 md: mb-0">
                <img src="\img\class.jpg " alt="" className='' object-right/>
            </div>
            <div className="my-8 mx-8 lg:mt-5">
                <h1 className='my-5 font-bold text-3xl md:text-5xl'>A world-class education, tailored to your needs</h1>
                <p className='my-5 mr-8 text-base md:text-2xl'>Take mandatory general education classes and watch professors read off lecture slides, or review course material remotely. We also offer amazing research opportunities.</p>
                <button className="bg-amber-400 hover:bg-amber-500 text-white text-xl font-bold sm: py-4 px-8 rounded">Learn more</button>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 px-8">

            <div className="my-8 mx-8 md: mb-0 visible md:hidden">
                <img src="\img\night.jpg " alt="" className='' object-right/>
            </div>
     
            
            <div className="my-8 mx-8 lg:mt-5">
                <h1 className='my-5 font-bold text-3xl md:text-6xl'>An exclusive social scene for the ages</h1>
                <p className='my-5 text-base md:text-2xl'>Join our inclusive and diverse community. Surround yourself with the shroud of ambitious overachievers. Find your future spouse during your first term. Participate in one or two clubs.</p>
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
                <h1 className='my-5 font-bold text-3xl md:text-6xl'>Unrivaled preparation for the workforce</h1>
                <p className='my-5 text-base md:text-2xl'>You don’t know what you’re doing with your life, but now people don't question your choices as often. Also, you get to add a sweet new line to your Instagram and Linkedin bios.</p>
                <button className="bg-amber-400 hover:bg-amber-500 text-white text-xl font-bold sm: py-4 px-8 rounded">Learn more</button>
            </div>
        </div>

            </div>       
        <div className="bg-amber-50">
            <Testimonials/>
        </div>
        <End/>
        <Footer/>
        </>
    );
}
