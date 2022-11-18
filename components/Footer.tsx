import React, { useState } from "react";

export default function Footer() {

	return (
        <footer className="bg-navy">
        <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-beige uppercase">Company</h2>
                <ul className="text-beige">
                    <li className="mb-4">
                        <a href="https://www.youtube.com/watch?v=kIpOuMnGpt4" className=" hover:underline">About</a>
                    </li>
                    
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Blog</a>
                    </li>

                    <li className="mb-4">
                        <a href="#" className="hover:underline">Media Kit</a>
                    </li>

                    <li className="mb-4">
                        <a href="#" className="hover:underline">Investor Relations</a>
                    </li>

                    <li className="mb-4">
                        <a href="#" className="hover:underline">Careers</a>
                    </li>

                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-beige uppercase">Help center</h2>
                <ul className="text-beige">
    
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Resources</a>
                    </li>

                    <li className="mb-4">
                        <a href="#" className="hover:underline">Case Studies</a>
                    </li>
                    
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Contact Support</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-beige uppercase">Legal</h2>
                <ul className="text-beige">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Licensing</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Security</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-beige uppercase">Download</h2>
                <ul className="text-beige">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">iOS</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Android</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Windows</a>
                    </li>
                    <li className="mb-4">
                        <a href="#" className="hover:underline">MacOS</a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="py-6 px-4 bg-amber-50 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-beige sm:text-center">© 2022 <a href="https://unoptimal.com/">Grandeur</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
               
          
    
                <a href="https://www.youtube.com/channel/UCcrtdZAKJSJQKYU1iMAnTDw/videos" target='blank' className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-5 h-5"><path fill="beige" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                    <span className="sr-only">Youtube page</span>
                </a>
    
                <a href="https://twitter.com/thatsnotoptimal" target='blank' className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-5 h-5" fill="beige" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                    <span className="sr-only">Twitter page</span>
                </a>
    
                <a href="https://www.instagram.com/thatsnotoptimal/" target='blank' className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                    <svg className="w-5 h-5" fill="beige" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                    <span className="sr-only">Instagram page</span>
                </a>
    
                <a href="https://unoptimal.com/" target='blank' className="text-gray-400 hover:text-beige">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5"><path fill="beige" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
                    <span className="sr-only">LinkedIn page</span>
                </a>
               
            </div>
        </div>
        </footer>
    	);
    }
    
    