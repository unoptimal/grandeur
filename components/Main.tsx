

export default function Main(){
    const apply = new Array();
    apply[0] = "https://www.commonapp.org/";
    apply[1] = "https://www.coalitionforcollegeaccess.org/";
    apply[2] = "https://www.questbridge.org/";
    apply[4] = "https://apply.universityofcalifornia.edu/my-application/login";

    function randApplyLink(){
        return apply[Math.floor(Math.random() * apply.length)];
      }
    return (
        <>
             <div className="grid grid-cols-1 md:grid-cols-2 px-8 md:py-5 bg-navy">
            <div className="my-8 mx-8 lg:mt-5">
                <h1 className='mt-0 font-bold text-4xl md:my-5 md:text-8xl text-beige md:mb-10'>Your ticket to a better life</h1>
                <p className='my-5 text-base text-beige font-bold md:text-3xl md:mb-10'>Powerful tools, experiences, and environments to help you find your life direction at age 20.</p>
                <a href={randApplyLink()}><button className="bg-gold hover:underline text-navy py-2 md:text-2xl font-bold md:py-4 px-8 rounded md:my-5">Sign up</button></a>
            </div>

            <div className="hidden md:block">
                <img src="\img\side.png" className='-mt-10' alt="" />
            </div>
        </div>

        </>
    )
}