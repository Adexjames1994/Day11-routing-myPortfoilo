import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center  rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-4 text-white" data-aos="fade-down">About Me</h2>
      
      
      <div className="flex flex-col md:flex-row items-center gap-6 text-white" >
         <img
         data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
          src="https://res.cloudinary.com/dgp5aqkov/image/upload/v1752322426/ade111_yx5bqc.jpg" // Replace with your actual image URL
          alt="Adeola"
          className="w-48 h-48 object-cover rounded-full border-4 border-lime-700"
        />
        <div className='text-left text-white' data-aos="fade-up">
          <p className="text-lg mb-2 text-white">
            Hi, I’m <span className="font-semibold  text-green-600">Jegede Adeola James</span>, a passionate Frontend Developer based in Abeokuta, Nigeria.
          </p>
          <p className="text-sm  mb-2 text-white">
            I specialize in building responsive websites and web apps using modern technologies like <span className="font-semibold">React, Tailwind CSS, and Next.js</span>.
          </p>
          <p className="text-sm  mb-4 text-white">
            I enjoy solving UI problems, contributing to open source, and turning great designs into real-world projects.
          </p>

          <h4 className="font-semibold text-white mb-2">Skills:</h4>
          <ul className="list-disc list-inside text-sm text-green-600 mb-4">
            <li>HTML, CSS, JavaScript (ES6+)</li>
            <li>React, Node.js</li>
            <li>Tailwind CSS, Bootstrap</li>
            <li>Git, GitHub</li>
          </ul>
          <div className="flex gap-4 mt-4  text-green-600 text-xl">
             <a href="https://github.com/adexjames1994" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/jegedeadeola" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
