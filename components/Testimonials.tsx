export default function Testimonials(){
    return (
        <>
               <div className="min-w-screen flex items-center justify-center">
            <div className="w-full px-10 md:py-10 text-black">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="text-center max-w-xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-5 text-beige">What people <br />are saying.</h1>
                        
                        <div className="text-center mb-10">
                            <span className="inline-block w-40 h-1 rounded-full bg-gold"></span>
                        </div>
                    </div>
                    <div className="-mx-3 md:flex items-start">
                        <div className="px-3 md:w-1/3">
                            <div className="w-full mx-auto rounded-lg bg-gold border border-gray-200 p-5 text-black font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="\img\upennguy.jpg" alt="UPenn Guy"/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-navy">Conner Hunt</h6>
                                        <h6 className="font-bold text-sm text-navy">Investment Banking @ JP Morgan</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>Grandeur unlocked opportunities I never would've had, such as landing me a job at my dad’s bank.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="px- md:w-1/3">
                            <div className="w-full mx-auto rounded-lg bg-gold border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="https://i.pravatar.cc/100?img=3" alt=""/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-navy">Tommy Bell</h6>
                                        <h6 className="font-bold text-sm text-navy">General Partner @ Sequoia</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-navy mr-1">"</span>Grandeur makes it easy to learn important things, like time management or setting goals.<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="px-3 md:w-1/3">
                            <div className="w-full mx-auto rounded-lg bg-gold border border-gray-200 p-5 text-gray-800 font-light mb-6">
                                <div className="w-full flex mb-4 items-center">
                                    <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                                        <img src="\img\bryce.jpg" alt="bryce"/>
                                    </div>
                                    <div className="flex-grow pl-3">
                                        <h6 className="font-bold text-sm uppercase text-navy">Bryce Harper</h6>
                                        <h6 className="font-bold text-sm text-navy">Psychology Graduate Student</h6>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-navy mr-1">"</span>I know now exactly what to do with my life.<span className="text-lg leading-none italic font-bold text-navy ml-1">"</span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}