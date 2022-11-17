export default function End(){
    const apply = new Array();
    apply[0] = "https://www.commonapp.org/";
    apply[1] = "https://www.coalitionforcollegeaccess.org/";
    apply[2] = "https://www.questbridge.org/";
    apply[4] = "https://apply.universityofcalifornia.edu/my-application/login";

    function randApplyLink(){
        return apply[Math.floor(Math.random() * apply.length)];
      }
    return(
        <>
                    
        <div className='bg-light-navy py-10'>
            <div className="text-center">
                    <h1 className="mx-10 mb-5 text-2xl md:text-3xl sm:text-2xlfont-bold text-beige">Join over 220 million <br/>existentially confused 19 year olds.</h1>
                    <div className="py-5">
                        <a href={randApplyLink()}><button className="bg-gold hover:bg-yellow-400 text-navy text-large font-bold sm: py-4 px-8 rounded">Sign up</button></a>
                    </div>
            </div>
        </div>    
    
        </>
    )
}