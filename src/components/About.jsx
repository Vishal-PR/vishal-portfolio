import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500' >About</p>
            </div>
            <p className='text-xl mt-20'>
            Hi, I am Vishal Pippirichetti, and I have completed my bachelor's in engineering from Mumbai University.
            in the field of information technology in the year 2019. 
            </p>
            <br/>
            <p className='text-xl'>
            In the year 2020, I began my professional career at DXC Technology as a Java Backend Developer.
            I have 2.9 years of experience in the IT industry.<br/>
            I create web applications with the following technology stack: Core Java, Exception, Spring Boot, Hibernate, RestAPI, and SQL.<br/>
            I am familiar with microservices and frontend technologies such as HTML, CSS, JS, and React.
            </p>
        </div>
    </div>
  )
}

export default About