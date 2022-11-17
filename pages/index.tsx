import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import End from "../components/End";
import Footer from "../components/Footer";


export default function Index() {

    const academics = new Array();
    academics[0] = "https://www.princeton.edu/academics";
    academics[1] = "https://www.mit.edu/education";
    academics[2] = "https://www.harvard.edu/academics";
    academics[4] = "https://www.stanford.edu/academics";
    academics[5] = "https://www.yale.edu/academics";
    academics[6] = "https://www.uchicago.edu/education-and-research";
    academics[7] = "https://e-catalogue.jhu.edu/programs/";
    academics[8] = "https://www.upenn.edu/academics";
    academics[9] = "https://www.caltech.edu/academics";
    academics[10] = "https://admissions.duke.edu/academic-life/";
    academics[11] = "https://www.northwestern.edu/academics/index.html/";
    academics[12] = "https://home.dartmouth.edu/academics";
    academics[13] = "https://www.brown.edu/academics";
    academics[14] = "https://www.vanderbilt.edu/academics";
    academics[15] = "https://www.rice.edu/academics";
    academics[16] = "https://wustl.edu/academics";
    academics[17] = "https://www.cornell.edu/academics";
    academics[18] = "https://www.columbia.edu/content/academics";
    academics[19] = "https://www.berkeley.edu/academics";
    academics[20] = "https://www.ucla.edu/academics";
    academics[21] = "https://www.cmu.edu/academics";
    academics[22] = "https://www.nyu.edu/academics.html";
    academics[23] = "https://academics.usc.edu/";
    academics[24] = "https://www.umich.edu/academics";
    academics[25] = "https://www.georgetown.edu/academics";

    function randAcademicsLink(){
        return academics[Math.floor(Math.random() * academics.length)];
    }

    const life = new Array();
    life[0] = "https://www.princeton.edu/one-community/student-life";
    life[1] = "https://www.mit.edu/campus-life/";
    life[2] = "https://college.harvard.edu/student-life";
    life[4] = "https://www.stanford.edu/campus-life/";
    life[5] = "https://www.yale.edu/life-yale";
    life[6] = "https://college.uchicago.edu/student-life";
    life[7] = "https://www.jhu.edu/life/";
    life[8] = "https://www.upenn.edu/life-at-penn";
    life[9] = "https://www.admissions.caltech.edu/why-caltech/student-life";
    life[10] = "https://admissions.duke.edu/campus-life/";
    life[11] = "https://admissions.northwestern.edu/student-life/";
    life[12] = "https://home.dartmouth.edu/campus-life";
    life[13] = "https://www.brown.edu/life-brown";
    life[14] = "https://www.vanderbilt.edu/student-life/";
    life[15] = "https://www.rice.edu/campus-life";
    life[16] = "https://students.wustl.edu/campus-life/";
    life[17] = "https://scl.cornell.edu/";
    life[18] = "https://www.columbia.edu/content/campus-life";
    life[19] = "https://www.berkeley.edu/campus-life";
    life[20] = "https://www.ucla.edu/academics/campus-life";
    life[21] = "https://www.cmu.edu/student-experience/index.html";
    life[22] = "https://www.nyu.edu/new-york/student-life.html";
    life[23] = "https://admission.usc.edu/live/";
    life[24] = "https://umich.edu/life-at-michigan/";
    life[25] = "https://www.georgetown.edu/campus-city/campus-life/";

    function randLifeLink(){
        return life[Math.floor(Math.random() * life.length)];
    }

    const career = new Array();
    career[0] = "https://careerdevelopment.princeton.edu/";
    career[1] = "https://capd.mit.edu/";
    career[2] = "https://careerservices.fas.harvard.edu/";
    career[4] = "https://careered.stanford.edu/";
    career[5] = "https://ocs.yale.edu/";
    career[6] = "https://careeradvancement.uchicago.edu/";
    career[7] = "https://advanced.jhu.edu/student-resources/career-services/";
    career[8] = "https://careerservices.upenn.edu/";
    career[9] = "https://career.caltech.edu/";
    career[10] = "https://careerhub.students.duke.edu/";
    career[11] = "https://www.northwestern.edu/careers/";
    career[12] = "https://sites.dartmouth.edu/cpd/";
    career[13] = "https://www.brown.edu/campus-life/support/careerlab/";
    career[14] = "https://www.vanderbilt.edu/career/";
    career[15] = "https://ccd.rice.edu/";
    career[16] = "https://students.wustl.edu/career-center/";
    career[17] = "https://scl.cornell.edu/get-involved/career-services";
    career[18] = "https://www.careereducation.columbia.edu/";
    career[19] = "https://career.berkeley.edu/";
    career[20] = "https://career.ucla.edu/";
    career[21] = "https://www.cmu.edu/career/";
    career[22] = "https://www.nyu.edu/students/student-information-and-resources/career-development-and-jobs.html";
    career[23] = "https://careers.usc.edu/";
    career[24] = "https://careercenter.umich.edu/";
    career[25] = "https://careercenter.georgetown.edu/";

    function randCareerLink(){
        return career[Math.floor(Math.random() * career.length)];
    }
        
    return (
        <>
        <Head>
            <title>Grandeur | Your ticket to a better life</title>
            <meta name='description' content='If college was a SAAS product.'/>
            <link rel="icon" type="image/png" sizes="40x40" href="\img\better.png"></link>
        </Head>
        
           <Navbar/>
           <Main/>
           <div className='bg-light-navy -mt-20'>
           <Banner/>
            
        <div className="grid grid-cols-1 md:grid-cols-2 px-8">
            <div className="my-8 mx-8 md: mb-0">
                <img src="\img\class.jpg " alt="" className='' object-right/>
            </div>
            <div className="my-8 mx-8 lg:mt-5">
                <h1 className='my-5 font-bold text-3xl md:text-5xl text-beige'>A world-class education, tailored to your needs</h1>
                <p className='my-5 mr-8 text-base md:text-2xl text-beige'>Take mandatory general education classes and watch professors read off lecture slides, or review course material remotely. We also offer amazing research opportunities.</p>
                <a href={randAcademicsLink()}><button className="bg-gold hover:underline text-navy text-xl font-bold sm: py-4 px-8 rounded">Learn more</button></a>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 px-8">

            <div className="my-8 mx-8 md: mb-0 visible md:hidden">
                <img src="\img\night.jpg " alt="" className='' object-right/>
            </div>
     
            
            <div className="my-8 mx-8 lg:mt-5">
                <h1 className='my-5 font-bold text-3xl md:text-6xl text-beige'>An exclusive social scene for the ages</h1>
                <p className='my-5 text-base md:text-2xl text-beige'>Join our inclusive and diverse community. Surround yourself with the shroud of ambitious overachievers. Find your future spouse during your first term. Participate in one or two clubs.</p>
                <a href={randLifeLink()}><button className="bg-gold hover:underline text-navy text-xl font-bold sm: py-4 px-8 rounded">Learn more</button></a>
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
                <h1 className='my-5 font-bold text-3xl md:text-6xl text-beige'>Extensive preparation for the workforce</h1>
                <p className='my-5 text-base md:text-2xl text-beige'>Signal to employers that you are the best fit for that dream job. On top of a great alumni network, you also get to add a sweet new line to your Instagram and Linkedin bios.</p>
                <a href={randCareerLink()}><button className="bg-gold hover:underline text-navy text-xl font-bold sm: py-4 px-8 rounded">Learn more</button></a>
            </div>
        </div>

            </div>       
        <div className="bg-light-navy">
            <Testimonials/>
        </div>
        <End/>
        <Footer/>
        </>
    );
}
