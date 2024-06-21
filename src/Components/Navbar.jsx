import React from 'react';
import logo from '../images/logo1.gif'

const Navbar = () => {
  return (
    

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-1 p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
    <img src={logo} className="h-8" alt="Schbang Logo" />
    </a>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-2 md:p-0 mt-2 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-2 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
          <a id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-black bg-white hover:bg-white-800 focus:ring-0 focus:outline-none  font-medium-none text-m px-5 py-2.5 text-center inline-flex items-center" href="#">Work</a>
           </li>
        <li>
          <a id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-black bg-white hover:bg-white-800 focus:ring-0 focus:outline-none  font-medium-none text-m px-5 py-2.5 text-center inline-flex items-center" href="#">Solution  <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" fill="none" viewBox="0 0 10 6">
           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
           </svg>
           </a>
           </li>
        <li>
          <a id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-black bg-white hover:bg-white-800 focus:ring-0 focus:outline-none  font-medium-none text-m px-5 py-2.5 text-center inline-flex items-center" href="#">About<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" fill="none" viewBox="0 0 10 6">
           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
           </svg>
           </a>
        </li>
        <li>
          <a id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-black bg-white hover:bg-white-800 focus:ring-0 focus:outline-none  font-medium-none text-m px-5 py-2.5 text-center inline-flex items-center" href="#">Resources  <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" fill="none" viewBox="0 0 10 6">
           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
           </svg>
           </a>
           </li>
           <li>
          <a id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-black bg-white hover:bg-white-800 focus:ring-0 focus:outline-none  font-medium-none text-m px-5 py-2.5 text-center inline-flex items-center" href="#">Careers</a>
           </li>
           <li>
          <button class="bg-black text-white hover:bg-yellow-300 hover:text-black font-bold rounded-full font-medium-none font-serif text-m px-5 py-2.5 text-center inline-flex items-center" href="#">ContactUs ⟶</button>
          </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar

