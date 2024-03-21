// AboutMePage.js
import Link from 'next/link';
import React from 'react';

const AboutMe = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-lg bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <img src="https://avatars.githubusercontent.com/u/142780329?v=4" alt="Profile" className="mb-4 rounded-full w-40 h-40 mx-auto" />
        <p className="mb-4 text-justify">
        Hi, I'm Shahariar Kobir Shakil, a web developer with two years of experience in the field. I've honed my skills in various web development technologies and frameworks, allowing me to create dynamic and efficient web solutions.
        </p>
        <h1 className='font-bold text-2xl'>Connect with</h1>
        <div className='flex items-center gap-x-5 pt-3'>
            <Link target='_blank' href={'https://github.com/mask-shakill'}>
                <img className='w-10 h-10' src="https://cdn-icons-png.freepik.com/256/733/733609.png?ga=GA1.1.1242648836.1702358523&" alt="" />
            </Link>
            <Link target='_blank' href={'https://www.linkedin.com/in/mask-shakil/'}>
                <img className='w-10 h-10' src="https://cdn-icons-png.freepik.com/256/3536/3536505.png?ga=GA1.1.1242648836.1702358523&" alt="" />
            </Link>
           
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
