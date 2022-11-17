export default function Banner(){
    return(
        <>
        <div>
                <div className='grid grid-cols-5 md:-mt-8 md:-mb-8'>
                    <img src="\img\columbia.png" alt="" className="md:my-5 object-scale-down scale-50 h-48 w-96"/>
                    <img src="\img\nu.png" alt="" className="md:my-5 object-scale-down scale-50 h-48 w-96"/>
                    <img src="\img\saas.png" alt="" className="md:my-5 object-scale-down scale-50 h-48 w-96"/>
                    <img src="\img\dartmouth.png" alt="" className="md:my-5 object-scale-down scale-50 h-48 w-96"/>
                    <img src="\img\yale.png" alt="" className="md:my-5 object-scale-down scale-50  h-48 w-96"/>
            
                </div>    
                <div className='-mt-10'>
                    <h2 className='mx-10 mt-2 mb-2 text-center text-2xl md:text-4xl text-beige '>Trusted by 25,000+ universities worldwide</h2>
                </div>
            </div>
           
        </>
    )
}