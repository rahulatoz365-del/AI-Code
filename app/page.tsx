"use client"
import Image from "next/image";
import Link from "next/link";
import Authentication from "./_components/Authentication";
import { Button } from "@/components/ui/button";
import { auth } from "@/configs/firebaseConfig";
import ProfileAvatar from "./_components/ProfileAvatar";
import { useAuthContext } from "./provider";

export default function Home() {
  // const user = auth?.currentUser;
  // console.log(user)
  const user = useAuthContext();
  console.log(user?.user)
  return (
    <div>
      <header className="flex  flex-wrap sm:justify-start  sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700 h-[5rem]" >
        <nav className="relative  p- max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between">
            {/* <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a> */}
            <div>
              {/* <button type="button" className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation"> */}
              <div className='flex items-center gap-2'>
                <Image src={'/logo.svg'} alt='logo' width={100} height={100}
                  className='w-[40px] h-[40px]' />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#F33052] to-[#ff6b8a] bg-clip-text text-transparent">
                    Codrr
                    <span className="text-[10px] ml-1 bg-[#F33052] text-white px-1.5 py-0.5 rounded-full align-super">
                        v1.0
                    </span>
                </h1>
              </div>
            </div>
          </div>
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7">
    {!user?.user?.email ? (
      <Authentication>
        <button className="flex items-center gap-x-2 font-medium px-4 py-2 sm:py-2.5 transition-all duration-300 
            bg-gradient-to-br from-blue-600 to-violet-600 hover:to-blue-700 
            text-white rounded-full shadow-lg hover:shadow-xl
            sm:border-s sm:border-gray-200 sm:ms-4 sm:my-6 sm:ps-6
            dark:border-neutral-700 dark:hover:shadow-neutral-700/40">
          <svg 
            className="flex-shrink-0 size-5 text-white/90" 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            fill="currentColor" 
            viewBox="0 0 16 16"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>
          <span className="pr-1">Get Started</span>
        </button>
      </Authentication>
    ) : (
      <ProfileAvatar />
    )}
  </div>
</div>
        </nav>
      </header>
      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
              Build Frontend
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"> With Codrr</span>
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-600 dark:text-neutral-400">
              AI-powered frontend development made simple. Create stunning web apps instantly with smart templates and real-time customization. Transform ideas into production-ready code in minutes.
              </p>
          </div>
          <div className="mt-8 gap-3 flex justify-center">
            <Authentication redirectOnSuccess="/dashboard">
                <button className="inline-flex justify-center items-center 
                    gap-x-3 text-center bg-gradient-to-tl from-blue-600
                    to-violet-600 hover:from-violet-600 hover:to-blue-600 
                    border border-transparent text-white text-sm font-medium 
                    rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 
                    py-3 px-4 dark:focus:ring-offset-gray-800">
                    
                    Get started
                    <svg className="flex-shrink-0 size-4" 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                    </svg>
                </button>
            </Authentication>
          </div>
        </div>
      </div>
      <div className="max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-2">
          <a className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800" href="#">
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="10" height="14" x="3" y="8" rx="2" /><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" /><path d="M8 18h.01" /></svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">25+ templates</h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">Responsive, and mobile-first project on the web</p>
            </div>
          </a>
          <a className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800" href="#">
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">Customizable</h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">Components are easily customized and extendable</p>
            </div>
          </a>
          <a className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800" href="#">
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">Free to Use</h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">Every component and plugin is well documented</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
