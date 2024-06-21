import React from 'react'
import arrow from '../images/arrow.png'
import ph1 from '../images/ph1.jpg'
import ph2 from '../images/ph2.jpg'
import ph3 from '../images/ph3.jpg'
import ph4 from '../images/ph4.jpg'
import ph5 from '../images/ph5.jpg'
import textpng from '../images/text.png'




const HeroSection = () => {
  const currTime = new Date().toLocaleTimeString;
  return (
    <>
    <div className='mr-5'>
    <h1 className='mt-8 p-20 text-gray-900 text-6xl dark:text-white font-bold'>Your Creative, Media & Technology Transformation Partner</h1>
    </div>
    <div class="relative_div">
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/865485976?background=1" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
    </div>
    <div>
    <div className='container-text mt-8'>
        <div class="area-1">
        <span className='mt-8 p-20 text-gray-900 text-4xl dark:text-white font-bold'>What defines us</span>
        <img src={arrow} alt="" />
        </div>
        <div class="area-2" >
        <h1 className='mt-8 p-20 text-gray-900 text-4xl dark:text-white font-bold'>We’re brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core.</h1>
        
   <h5 className='mt-2 pt-2 pb-5 pl-20 text-gray-900 text-2xl dark:text-white font-bold'>We're on a mission to take the very best of Indian creative talent to the world. Driven by a ferocious hunger to create tangible impact for your business, we work with in-house specialists, industry partners and technology leaders to push the boundaries of creativity and put your brand on the global stage.</h5>
   <div className='pl-20'>
   <button class="herobutton font-serif bg-black text-white hover:bg-yellow-300 hover:text-black font-bold py-2 px-4 rounded-full ">
      Dive into our Culture →
     </button>
     </div>
     </div>
    </div>
    </div>


<div id="default-carousel" class="relative w-full h-full" data-carousel="slide">
    {/* <!-- Carousel wrapper --> */}
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div class="hidden:false duration-700 ease-in-out" data-carousel-item>
            <img src={ph1} class="relative  w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 2 --> */}
        <div class="hidden:false duration-700 ease-in-out" data-carousel-item>
            <img src={ph2} class="relative  w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 3 --> */}
        <div class="hidden:false duration-700 ease-in-out" data-carousel-item>
            <img src={ph3} class="relative  w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 4 --> */}
        <div class="hidden:false duration-700 ease-in-out" data-carousel-item>
            <img src={ph4} class="relative  w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 5 --> */}
        <div class="hidden:false duration-700 ease-in-out" data-carousel-item>
            <img src={ph5} class="relative  w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
  
    <div class="relative z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true"  fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>


<div className='text-card flex  m-5 p-5 '>
  <div className='card1 m-2 p-2'>
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Brand Solution</h5>
<p class="font-normal text-gray-700 dark:text-gray-400"> 
We provide customised solutions to meet partner needs. We understand the objectives and requirements to develop strategies & create holistic consumer experiences and fully serve clients.
</p>
<img src={arrow} className='h-10 bg-gray-200 rounded-full' alt="" />
</a>
</div>
<div className='card2  m-2 p-2'>
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tech Solution</h5>
<p class="font-normal text-gray-700 dark:text-gray-400"> 
We provide customised solutions to meet partner needs. We understand the objectives and requirements to develop strategies & create holistic consumer experiences and fully serve clients.
</p>
<img src={arrow} className='h-10 bg-gray-200 rounded-full' alt="" />
</a>
</div>
<div className='card3  m-2 p-2 '>
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Media Solution</h5>
<p class="font-normal text-gray-700 dark:text-gray-400"> 
We provide customised solutions to meet partner needs. We understand the objectives and requirements to develop strategies & create holistic consumer experiences and fully serve clients.
</p>
<img src={arrow} className='h-10 bg-gray-200 rounded-full' alt="" />
</a>
</div>
<div className='card4  m-2 p-2 '>
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Research Solution</h5>
<p class="font-normal text-gray-700 dark:text-gray-400"> 
We provide customised solutions to meet partner needs. We understand the objectives and requirements to develop strategies & create holistic consumer experiences and fully serve clients.
</p>
<img src={arrow} className='h-10 bg-gray-200 rounded-full' alt="" />
</a>
</div>
<div className='card5  m-2 p-2'>
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Film & Photography</h5>
<p class="font-normal text-gray-700 dark:text-gray-400"> 
We provide customised solutions to meet partner needs. We understand the objectives and requirements to develop strategies & create holistic consumer experiences and fully serve clients.
</p>
<img src={arrow} className='h-10 bg-gray-200 rounded-full' alt="" />
</a>
</div>

</div>

<div className='container-1'>
<div>
  <h1 className='mt-8 p-8 text-gray-900 text-4xl dark:text-white font-bold'>Trending Now</h1>
</div>
<div>
 <button className='m-7  border-solid border-2 border-black rounded-full'>Press release</button>
 <span className='flex'>
 <h2 className=' ml-4 pl-4 text-gray-900 text-2xl dark:text-white font-bold'>Schbang appoints Jitto George as Executive Vice President - Media Solutions</h2>
 <h5 className='m-2 pl-10'>3 Minutes</h5>
 </span>
</div>
<hr />
<div>
 <button className='m-7  border-solid border-2 border-black rounded-full'>Press release</button>
 <span className='flex'>
 <h2 className=' ml-4 pl-4 text-gray-900 text-2xl dark:text-white font-bold'>Schbang appoints Jitto George as Executive Vice President - Media Solutions</h2>
 <h5 className='m-2 pl-10'>2.5 Minutes</h5>
 </span>
</div>
<hr />
<div>
 <button className='m-7  border-solid border-2 border-black rounded-full'>Press release</button>
 <span className='flex'>
 <h2 className=' ml-4 pl-4 text-gray-900 text-2xl dark:text-white font-bold'>Schbang appoints Jitto George as Executive Vice President - Media Solutions</h2>
 <h5 className='m-2 pl-10'>2 Minutes</h5>
 </span>

</div>
</div>


<div className='m-10 p-10 text-center'>
<button className='m-7  pl-7 pr-7 border-solid border-2 border-black rounded-full'>India {currTime}</button>
<button className='m-7  pl-7 pr-7 border-solid border-2 border-black rounded-full'>London</button>
<button className='m-7  pl-7 pr-7 border-solid border-2 border-black rounded-full'>Dubai</button>
<button className='m-7 pl-7 pr-7 border-solid border-2 border-black rounded-full'>Amsterdam</button>
</div>

<div className='footer bg-black'>
<img src={textpng} alt="" />

</div>
    </>
  )
}

export default HeroSection
