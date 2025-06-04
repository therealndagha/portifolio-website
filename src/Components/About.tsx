

const About = () => {
  return (
    <div className="other-sections-container" id="about">
          <div className="flex flex-col items-center justify-center space-y-5">
              <h1 className="text-2xl text-blue-950 font-anton">About Me</h1>
              <div>
                  <img src="ndagha.jpg" alt="ndagha" className="h-auto w-60" />
              </div>
              <div className="flex flex-row justify-center space-x-10 border-b-2 border-slate-100">
                 <h2 className="font-roboto  text-blue-950 font-bold">Background: </h2>
                 <p className="text-slate-600 text-sm font-inter w-72">I was born in Lilongwe, Malawi to Mr John Kang'oma and Mrs Mbamwawi Msiska. I was raised in a family of two. Since childhood I showed passion in electronics and technology. I was always fascinated to understand how and why things worked the way they did. I remember breaking things just to learn how devices work under the hood. It is because of this that I decided to pursue a career in Computer Science.</p>
              </div>
              
              <div className="flex flex-row justify-center space-x-10 border-b-2 border-slate-100 pb-5">
                  <h2 className="font-roboto text-blue-950 font-bold">Education: </h2>
                  <p className="text-slate-600 text-sm font-inter w-72">I studied my Secondary School Education at Dedza Government Secondary School where I got 12 points and through NCHE got selected to study my first Degree at Malawi University of Science and Technology. There I studied Bachelor of Science in Computer Systems and Security. It was an interesting program that exposed me to the world of Computer Science and Cyber Security. This further fueled that love for technology I had in me since childhood. I graduated on 17 October 2024 with a credit.  </p>
              </div>
          </div>
          
    </div>
  )
}

export default About