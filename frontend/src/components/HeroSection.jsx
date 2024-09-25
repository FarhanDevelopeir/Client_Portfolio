import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import bg_img from "../assets/images/bgimg.png"


const HeroSection = () => {

  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Data analytics', 'ML Specialist', 'Web Developer'],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Cleanup Typed.js instance
    };
  }, []);

  const coder = {
    name: 'Saleem Shahzad',
    skills: ['Data analytics', 'AI', 'ML', 'Data visualization', 'Full stack development', 'MySql/Postgress', 'MongoDB'],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function () {
      return this.hardWorker && this.problemSolver && this.skills.length >= 5;
    }
  };
  return (
    <div 
    style={{
      backgroundImage: `url(${bg_img})`
  }}
    className='heroSection pt-32 md:pt-20 flex flex-col md:flex-row justify-between md:px-10 lg:px-36 items-center text-white bg-gray-900 h-full md:h-lvh'>
      <div className=' '>
        <h1 className='text-2xl md:text-5xl font-bold'>Saleem Shahzad</h1>
        <h2 className='py-3 md:py-5 text-2xl md:text-4xl '>I'm <span className='' ref={typedElement} ></span></h2>
        <button className='text-yellow-400 hover:text-black border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-black dark:hover:bg-yellow-400 dark:focus:ring-yellow-900'>Contact ME</button>
      </div>
     
      <div className="heroSection_Code bg-gray-950 text-white rounded-lg border-[1px] border-blue-700 my-12 md:my-0 w-[90%] md:w-[45%]">
      <div className=' border-b-2  border-blue-800 flex px-4 py-5 '>
          <div className='h-3 w-3 bg-yellow-300 rounded-full '></div>
          <div className='h-3 w-3 bg-green-500 rounded-full mx-1 '></div>
          <div className='h-3 w-3 bg-pink-500 rounded-full '></div>
        </div>
        <div className='px-2 md:px-6 py-4'>
        <p className="text-lg font-bold">const <span className=' text-pink-500'>coder</span> = &#123;</p>
      <div className="ml-6">
       
        <p>
          <span className="text-pink-500">name:</span> <span className="text-yellow-300">'{coder.name}'</span>,
        </p>
        <p>
          <span className="text-pink-500">skills:</span> [
        </p>
        <span className="ml-6">
          {coder.skills.map((skill, index) => (
            <span key={index} className="text-yellow-300">
               {skill}  {index < coder.skills.length - 1 && ', '}
            </span>
          ))}
        </span>
        <p>],</p>
        <p>
          <span className="text-pink-500">hardWorker:</span> <span className="text-green-500">{coder.hardWorker.toString()}</span>,
        </p>
        <p>
          <span className="text-pink-500">quickLearner:</span> <span className="text-green-500">{coder.quickLearner.toString()}</span>,
        </p>
        <p>
          <span className="text-pink-500">problemSolver:</span> <span className="text-green-500">{coder.problemSolver.toString()}</span>,
        </p>
        <p>
          <span className="text-pink-500">hireable:</span> <span className="text-yellow-500">function</span>() &#123;
        </p>
        <div className="ml-6">
          <p>return (</p>
          <div className="ml-6">
            <p className="text-blue-400">this.<span className=' text-white'>hardWorker</span> &&</p>
            <p className="text-blue-400">this.<span className=' text-white'>problemSolver</span> &&</p>
            <p className="text-blue-400">this.<span className=' text-white'>skills.length</span> &gt;= 5</p>
          </div>
          <p>);</p>
        </div>
        <p>&#125;,</p>
      </div>
      <p>&#125;;</p>
        </div>
      
    </div>
        
     
    </div>
  )
}

export default HeroSection