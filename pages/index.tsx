import Head from "next/head";
export default function Index() {
    return (
        <>
        <Head>
            <title>Grandeur | Your ticket to a better life</title>
            <meta name='description' content='If college was a SAAS app.'/>
        </Head>
            
            <nav>
                <div className='brand'>
                    <img src="\img\caltech.png" alt=""/>
                    <p>grandeur</p>
                </div>
                <div className='main-nav'>
                    <a href="#product">Product</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className='side-nav'>
                    <a href="#login">Log in</a>
                    <a href="#register">Sign up</a>
                </div>
            </nav>
            <div id='main'>
                <h1 id='tagline'>Accelerate your journey to a better life</h1>
                <h3 id='tagline-desc'>Powerful tools, experiences, and environments to help you find your life direction at age 20.</h3>

                <div id="cta">
                    <button>Sign up</button>
                    <button>Learn more</button>
                </div>
  
                <img src="\img\empty.jpg" alt="product pic" id='product-pic'/>
            </div>

                <div className='unis'>
                    <div className='row'>
                        <div className='column'>
                            <div className='columbia'>
                                <img src="\img\columbia.png" alt="" />
                            </div>
                        </div>
                            <div className='column'>
                                <div className='dartmouth'>
                                    <img src="\img\dartmouth.png" alt="" />
                                </div>
                        </div>
                        <div className='column'>
                            <div className='princeton'>
                                <img src="\img\princeotn.png" alt="" />
                            </div>
                        </div>

                        <div className='column'>
                            <div className='stanford'>
                                <img src="\img\saas.png" alt="" />
                            </div>
                        </div>

                        <div className='column'>
                            <div className='nyu'>
                                <img src="\img\nyu.png" alt="" />
                            </div>
                        </div>
                        
                    </div>
                </div>

            <h2 id="and-more">...and 25,000+ universities</h2>

            <div className="features-box">
                <div>
                    <h1>A world class education tailored to your liking</h1>
                    <p>Take classes you don’t care about and watch professors read off slides, or just skip school entirely. Who cares? The universe is a cruel, uncaring void.We also offer amazing research opportunities.</p>
                    <button>Learn more</button>
                </div>

                <div>
                    <img src="\img\empty.jpg" alt=""/>
                </div>
            </div>

            <div className="features-box">
                
                <div>
                    <img src="\img\empty.jpg" alt=""/>
                </div>

                <div>
                    <h1>A world class education tailored to your liking</h1>
                    <p>Take classes you don’t care about and watch professors read off slides, or just skip school entirely. Who cares? The universe is a cruel, uncaring void.We also offer amazing research opportunities.</p>
                    <button>Learn more</button>
                </div>

            </div>

            <div className="features-box">
                <div>
                    <h1>A world class education tailored to your liking</h1>
                    <p>Take classes you don’t care about and watch professors read off slides, or just skip school entirely. Who cares? The universe is a cruel, uncaring void.We also offer amazing research opportunities.</p>
                    <button>Learn more</button>
                </div>

                <div>
                    <img src="\img\empty.jpg" alt=""/>
                </div>
            </div>

            <div className='testimonials'>
                    <div className='testimonial-row'>
                        <div className='testimonial-column'>
                            <div id='testimonial1'>
                                <h1>hi</h1>
                                <p>image</p>
                                <p>asdf</p>
                                <p>asdf</p>
                            </div>
                        </div>
                        <div className='testimonial-column'>
                                <div id='testimonial2'>
                                    <h1>hi</h1>
                                    <p>image</p>
                                    <p>asdf</p>
                                    <p>asdf</p>
                                </div>
                        </div>
                        <div className='testimonial-column'>
                            <div id='testimonial3'>
                                <h1>hi</h1>
                                <p>image</p>
                                <p>asdf</p>
                                <p>asdf</p>
                            </div>
                        </div>                       
                    </div>
                </div>

            <div id='end-cta'>
                <h3>Join over 220 million existentially lost 19 year olds</h3>
            <div id="end-cta-button">
                    <button>Sign up</button>
                </div>
            </div>
            
        </>
    );
}
