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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#7e31d0" className="w-6 h-6 mr-2">
                      <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
                      <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
                      <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 01-1.286 1.794.75.75 0 11-1.06-1.06z" />
                    </svg>


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