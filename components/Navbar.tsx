import { useState } from 'react';

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [style, setStyle] = useState({display: 'none'});

    const urls = new Array();
    urls[0] = "https://www.princeton.edu/";
    urls[1] = "https://www.mit.edu/";
    urls[2] = "https://www.harvard.edu/";
    urls[4] = "https://www.stanford.edu/";
    urls[5] = "https://www.yale.edu/";
    urls[6] = "https://www.uchicago.edu/";
    urls[7] = "https://www.jhu.edu/";
    urls[8] = "https://www.upenn.edu/";
    urls[9] = "https://www.caltech.edu/";
    urls[10] = "https://duke.edu/";
    urls[11] = "https://www.northwestern.edu/";
    urls[12] = "https://home.dartmouth.edu/";
    urls[13] = "https://www.brown.edu/";
    urls[14] = "https://www.vanderbilt.edu/";
    urls[15] = "https://www.rice.edu/";
    urls[16] = "https://wustl.edu/";
    urls[17] = "https://www.cornell.edu/";
    urls[18] = "https://www.columbia.edu/";
    urls[19] = "https://www.berkeley.edu/";
    urls[20] = "https://www.ucla.edu/";
    urls[21] = "https://www.cmu.edu/";
    urls[22] = "https://www.nyu.edu/";
    urls[23] = "https://www.usc.edu/";
    urls[24] = "https://www.umich.edu/";
    urls[25] = "https://www.georgetown.edu/";

  const apply = new Array();
    apply[0] = "https://www.commonapp.org/";
    apply[1] = "https://www.coalitionforcollegeaccess.org/";
    apply[2] = "https://www.questbridge.org/";
    apply[4] = "https://apply.universityofcalifornia.edu/my-application/login";

function randLink(){
    return urls[Math.floor(Math.random() * urls.length)];
}

  function randApplyLink(){
    return apply[Math.floor(Math.random() * apply.length)];
  }

  return (

    
    <div>
    


      <nav className="w-full bg-amber-400 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="/">
                <div className=' flex items-center'>
                    <img src='\img\caltech.png' className="mr-3 h-6 sm:h-10" alt="grandeur logo" id='logo'/>
                    <h2 className="text-xl text-white font-bold">grandeur</h2>
                </div>                
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="block py-2 pr-4 pl-3 text-lg text-white rounded font-bold hover:underline">
                  <a href={randLink()}>
                    Product
                  </a>
                </li>
                <li className="block py-2 pr-4 pl-3 text-lg text-white rounded font-bold hover:underline">
                  <a href="/pricing">
                    Pricing
                  </a>
                </li>
                <li className="block py-2 pr-4 pl-3 text-lg text-white rounded font-bold hover:underline">
                  <a href="/contact">
                    Contact Sales
                  </a>
                </li>
                <li className="block py-2 pr-4 pl-3 text-lg text-white rounded font-bold hover:underline">
                  <a href={randApplyLink()}>
                    Log in
                  </a>
                </li>
                <li className="block py-2 pr-4 pl-3 text-lg text-white roundedunderline">
                  <a href={randApplyLink()}>
                    <button className="bg-amber-500 text-white hover:bg-yellow-400 py-2 px-4 rounded font-bold">
                        Sign up
                    </button>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </nav>

    </div>
  );
}