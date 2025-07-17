import React, { useEffect, useState } from 'react'


const Home = () => {
  const texts = ['Adeola Jegede', 'Frontend Developer', 'Trained by PeterTechy', 'Trained by kingRobert at 1141Group', 'Open Source Contributor', 'React Enthusiast'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000); // change text every 2 seconds

    return () => clearInterval(interval); // cleanup
  }, []);
  return (
    <div>
       <div className="text-center text-white mt-11">
      <h2 className="text-5xl font-bold mb-4">Welcome to my React Router App</h2>
       <p className='text-3xl'>I’m  <span className=" text-green-600 text-3xl ">{texts[index]}</span></p>
    </div>
    </div>
  )
}

export default Home
