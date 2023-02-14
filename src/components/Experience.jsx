import React from 'react'
import htmlImage from "../assets/html.png";
import cssImage from "../assets/css.png";
import javascriptImage from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwindImage from "../assets/tailwind.png";
import javaImage from "../assets/Java.png";
import hibernateImage from "../assets/Hibernate.png";
import sqlImage from "../assets/my-sql.png";
import mongoDBImage from "../assets/MongoDB.png";
import githubImage from "../assets/github.png";
import postmanimage from "../assets/postman.png";
import visualStuidoImage from "../assets/Visual_Studio_Code.png"; 

const Experience = () => {

    const tech = [
        {
            id:1,
            src: htmlImage,
            title:'HTML',
            style:'shadow-orange-500',
            
        },
        {
            id:2,
            src: cssImage,
            title:'CSS',
            style:'shadow-blue-500',
            
        },
        {
            id:3,
            src: javascriptImage,
            title:'JS',
            style:'shadow-yellow-500',
            
        },
        {
            id:4,
            src: reactImage,
            title:'React JS',
            style:'shadow-blue-500',
            
        },
        {
            id:5,
            src: tailwindImage,
            title:'TailWind',
            style:'shadow-sky-500',
            
        },
        {
            id:6,
            src: javaImage,
            title:'Java',
            style:'shadow-orange-500',
            
        },
        {
            id:7,
            src: hibernateImage,
            title:'Hibernate',
            style:'shadow-orange-300',
            
        },
        {
            id:8,
            src: sqlImage,
            title:'SQL',
            style:'shadow-orange-500',
            
        },
        {
            id:9,
            src: mongoDBImage,
            title:'MongoDb',
            style:'shadow-green-500',
            
        },
        {
            id:10,
            src: visualStuidoImage,
            title:'Visual Studio Code',
            style:'shadow-sky-500',
            
        },
        {
            id:11,
            src: postmanimage,
            title:'Postman',
            style:'shadow-orange-500',
            
        },
        {
            id:12,
            src: githubImage,
            title:'Github',
            style:'shadow-stone-500',
            
        }, 
    ]







    return (
    <div name="experience" className='w-full h-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the Technologies I've worked and Known</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                
            { tech.map(({id,src,title,style})=>(
                // eslint-disable-next-line no-useless-concat
                <div key={id} className={'shadow-md hover:scale-110 duration-500 py-2 rounded-lg' + ' ' + style}>
                <img src={src} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
            </div>
            ))}
                
            </div>
        </div>
    </div>
  )
}

export default Experience