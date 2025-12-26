"use client";
import Image from "next/image";
import Authentication from "./_components/Authentication";
import ProfileAvatar from "./_components/ProfileAvatar";
import { useAuthContext } from "./provider";

export default function Home() {
  const user = useAuthContext();

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-200/50 dark:bg-neutral-900/90 dark:border-neutral-800/50 shadow-sm">
        <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#F33052] to-[#ff6b8a] rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <Image
                  src="/logo.svg"
                  alt="logo"
                  width={42}
                  height={42}
                  className="relative"
                />
              </div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-[#F33052] to-[#ff6b8a] bg-clip-text text-transparent">
                  Codrr
                </h1>
                <span className="text-[10px] font-semibold bg-[#F33052] text-white px-2 py-1 rounded-full">
                  v1.0
                </span>
              </div>
            </div>

            {/* Auth Button */}
            <div className="flex items-center">
              {!user?.user?.email ? (
                <Authentication>
                  <button className="group relative flex items-center gap-2 font-semibold px-6 py-2.5 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg
                      className="relative flex-shrink-0 size-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    <span className="relative">Sign in</span>
                  </button>
                </Authentication>
              ) : (
                <ProfileAvatar />
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-neutral-950">
        {/* VISIBLE Background Patterns - Like Footer */}
        <div className="absolute inset-0 pointer-events-none">
          
          {/* Primary Chevron/Diamond Pattern - EXACTLY like footer but MORE VISIBLE */}
          <div className="absolute inset-0 opacity-[0.08]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `linear-gradient(45deg, #3B82F6 25%, transparent 25%),
                               linear-gradient(-45deg, #3B82F6 25%, transparent 25%),
                               linear-gradient(45deg, transparent 75%, #3B82F6 75%),
                               linear-gradient(-45deg, transparent 75%, #3B82F6 75%)`,
                backgroundSize: "50px 50px",
                backgroundPosition: "0 0, 0 25px, 25px -25px, -25px 0px",
              }}
            ></div>
          </div>

          {/* Secondary Pattern Layer */}
          <div className="absolute inset-0 opacity-[0.05]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `linear-gradient(45deg, #8B5CF6 25%, transparent 25%),
                               linear-gradient(-45deg, #8B5CF6 25%, transparent 25%),
                               linear-gradient(45deg, transparent 75%, #8B5CF6 75%),
                               linear-gradient(-45deg, transparent 75%, #8B5CF6 75%)`,
                backgroundSize: "100px 100px",
                backgroundPosition: "0 0, 0 50px, 50px -50px, -50px 0px",
              }}
            ></div>
          </div>

          {/* Dot Matrix Pattern */}
          <div className="absolute inset-0 opacity-[0.1]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #3B82F6 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>

          {/* Grid Lines */}
          <div className="absolute inset-0 opacity-[0.06]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `linear-gradient(to right, #8B5CF6 1px, transparent 1px),
                                linear-gradient(to bottom, #3B82F6 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          {/* Diagonal Stripes */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  #3B82F6,
                  #3B82F6 2px,
                  transparent 2px,
                  transparent 15px
                )`,
              }}
            ></div>
          </div>

          {/* Hexagon Pattern */}
          <div className="absolute inset-0 opacity-[0.05]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                  <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
                  <polygon points="49.6,22 62.1,29.2 62.1,43.7 49.6,50.9 37.1,43.7 37.1,29.2" fill="none" stroke="#8B5CF6" strokeWidth="0.5"/>
                  <polygon points="0,22 12.5,29.2 12.5,43.7 0,50.9 -12.5,43.7 -12.5,29.2" fill="none" stroke="#3B82F6" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)"/>
            </svg>
          </div>

          {/* Circuit Pattern */}
          <div className="absolute inset-0 opacity-[0.06]">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M10 10 L30 10 L30 30 L50 30" stroke="#3B82F6" strokeWidth="0.5" fill="none"/>
                  <circle cx="10" cy="10" r="2" fill="#3B82F6"/>
                  <circle cx="30" cy="30" r="2" fill="#8B5CF6"/>
                  <circle cx="50" cy="30" r="2" fill="#3B82F6"/>
                  <path d="M70 70 L70 50 L50 50 L50 30" stroke="#8B5CF6" strokeWidth="0.5" fill="none"/>
                  <circle cx="70" cy="70" r="2" fill="#8B5CF6"/>
                  <circle cx="50" cy="50" r="2" fill="#3B82F6"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit)"/>
            </svg>
          </div>

          {/* Subtle Gradient Overlay to blend patterns */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50"></div>

          {/* Polygon Background - More Visible */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.15]">
            <svg
              className="w-full h-full"
              viewBox="0 0 1920 1080"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M960 0L1920 540V1080L960 1620L0 1080V540L960 0Z"
                  fill="url(#paint0_linear)"
                  fillOpacity="0.5"
                />
                <path
                  d="M960 270L1680 720V1080L960 1350L240 1080V720L960 270Z"
                  fill="url(#paint1_linear)"
                  fillOpacity="0.4"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="960"
                  y1="0"
                  x2="960"
                  y2="1620"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="1" stopColor="#8B5CF6" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="960"
                  y1="270"
                  x2="960"
                  y2="1350"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#8B5CF6" stopOpacity="0.3" />
                  <stop offset="1" stopColor="#3B82F6" stopOpacity="0.3" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Gradient Orbs - More Visible */}
          <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-violet-100/50 dark:from-blue-900/20 dark:to-violet-900/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-violet-100/50 to-blue-100/50 dark:from-violet-900/20 dark:to-blue-900/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 sm:pt-32 sm:pb-28">
          {/* Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 dark:border-neutral-700">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                AI-Powered Development Platform
              </span>
            </div>
          </div>

          {/* Hero Text */}
          <div className="max-w-3xl text-center mx-auto space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              Build Frontend
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                With Codrr
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              AI-powered frontend development made simple. Create stunning web
              apps instantly with smart templates and real-time customization.
              Transform ideas into production-ready code in minutes.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Authentication redirectOnSuccess="/dashboard">
                <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
                  <span>Get Started</span>
                  <svg
                    className="flex-shrink-0 size-5 transition-transform group-hover:translate-x-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </Authentication>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-white dark:bg-neutral-950">
        {/* Background Pattern - Similar to Hero but different design */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Zigzag Pattern */}
          <div className="absolute inset-0 opacity-[0.06]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `linear-gradient(135deg, #8B5CF6 25%, transparent 25%),
                                 linear-gradient(225deg, #8B5CF6 25%, transparent 25%),
                                 linear-gradient(45deg, #8B5CF6 25%, transparent 25%),
                                 linear-gradient(315deg, #8B5CF6 25%, transparent 25%)`,
                backgroundPosition: "20px 0, 20px 0, 0 0, 0 0",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          {/* Cross Pattern */}
          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 35px,
                  #3B82F6 35px,
                  #3B82F6 36px
                ),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 35px,
                  #8B5CF6 35px,
                  #8B5CF6 36px
                )`,
              }}
            ></div>
          </div>

          {/* Dot Grid */}
          <div className="absolute inset-0 opacity-[0.08]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, #8B5CF6 1px, transparent 1px)`,
                backgroundSize: "25px 25px",
              }}
            ></div>
          </div>
        </div>

        <div className="relative max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Codrr
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Everything you need to build modern web applications
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Premium Templates",
                desc: "Responsive and mobile-first templates ready for production",
                icon: (
                  <svg
                    className="flex-shrink-0 size-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="10" height="14" x="3" y="8" rx="2" />
                    <path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" />
                    <path d="M8 18h.01" />
                  </svg>
                ),
                gradient: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-500",
              },
              {
                title: "Fully Customizable",
                desc: "Components are easily customized and extendable to fit your needs",
                icon: (
                  <svg
                    className="flex-shrink-0 size-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 7h-9" />
                    <path d="M14 17H5" />
                    <circle cx="17" cy="17" r="3" />
                    <circle cx="7" cy="7" r="3" />
                  </svg>
                ),
                gradient: "from-violet-500 to-purple-500",
                bgColor: "bg-violet-500",
              },
              {
                title: "Free to Use",
                desc: "Every component and plugin is well documented and free",
                icon: (
                  <svg
                    className="flex-shrink-0 size-7"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                ),
                gradient: "from-pink-500 to-rose-500",
                bgColor: "bg-pink-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/95 dark:bg-neutral-800/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-neutral-700 hover:border-transparent overflow-hidden"
              >
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                <div className="absolute inset-[2px] bg-white dark:bg-neutral-800 rounded-2xl"></div>

                {/* Decorative Background Element */}
                <div className="absolute -top-12 -right-12 w-32 h-32 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <div
                    className={`w-full h-full rounded-full bg-gradient-to-br ${item.gradient}`}
                  ></div>
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center size-14 rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    {item.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-violet-600 transition-all duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Animated Underline */}
                  <div className="mt-6 h-1 w-0 group-hover:w-16 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-blue-600"></div>

        {/* Decorative Patterns */}
        <div className="absolute inset-0">
          {/* Dot Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* Diagonal Lines Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 20px,
                  rgba(255,255,255,0.1) 20px,
                  rgba(255,255,255,0.1) 21px
                )`,
              }}
            ></div>
          </div>

          {/* Geometric Shapes */}
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-white/20 rounded-full"></div>
          <div className="absolute top-20 right-20 w-16 h-16 border-4 border-white/20 rotate-45"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 border-4 border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 right-1/3 w-12 h-12 border-4 border-white/20"></div>
        </div>

        <div className="relative max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join developers creating amazing frontends with AI assistance
          </p>
          <Authentication redirectOnSuccess="/dashboard">
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 transition-all duration-300">
              <span>Get Started for Free</span>
              <svg
                className="flex-shrink-0 size-5 transition-transform group-hover:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </Authentication>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800">
        {/* Background Pattern - Same as you liked */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(45deg, #000 25%, transparent 25%),
                             linear-gradient(-45deg, #000 25%, transparent 25%),
                             linear-gradient(45deg, transparent 75%, #000 75%),
                             linear-gradient(-45deg, transparent 75%, #000 75%)`,
              backgroundSize: "60px 60px",
              backgroundPosition: "0 0, 0 30px, 30px -30px, -30px 0px",
            }}
          ></div>
        </div>

        <div className="relative max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Image src="/logo.svg" alt="logo" width={36} height={36} />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#F33052] to-[#ff6b8a] bg-clip-text text-transparent">
                Codrr
              </span>
            </div>
            <p className="text-gray-600 dark:text-neutral-400 mb-6">
              Build frontend with intelligence and speed
            </p>
            <div className="text-sm text-gray-500 dark:text-neutral-500">
              © 2024 Codrr. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}