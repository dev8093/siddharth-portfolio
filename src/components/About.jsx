import React from 'react'

const About = () => {
  return (

         <div
      name="about"
      className="w-full h-{100}} md:h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Greetings, I'm Siddharth, a Delhi-based enthusiast currently pursuing my second year in Computer Science Engineering at ABES University. With an insatiable passion for coding, I'm well-versed in languages such as C, C++, JavaScript, and Python. Beyond the basics, my skill set extends to encompass technologies like React, Node.js, Express, Tailwind CSS, GitHub, Django, Firebase, and Google Cloud Platform.
        </p>

        <br />

        <p className="text-xl">
        Adventurer at heart, I’m always up for trying something new—whether it’s exploring hidden gems in the city, diving into a good book, or cooking up a storm in the kitchen. I believe in making every moment count and love a good conversation that challenges the mind. Looking for someone who can match my energy, share a laugh, and create memorable experiences together. Let’s see where this journey takes us!
        </p>
      </div>
     </div>
  )
}

export default About
