
export default function Services() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="container sm:grid grid-flow-col grid-rows-2 gap-4  sm:p-20">
        <div className="row-span-2 ">
          <img src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844181/frame12_ghalb7.png" className="h-full " alt="" />
        </div>
        <div className=" mt-5 sm:mt-0">
          <img className="h-full" src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844182/frame13_e09asb.png" alt="frame13" />
        </div>
        <div className="mt-5 sm:mt-0">
          <img className="h-full" src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844180/frame14_oirxmw.png" alt="" />
        </div>
      </div>

      <div className="p-3 mt-16">  <h1 className="text-center text-4xl font-bold my-3"> Our Services</h1></div>
      <div className="text-center p-5 mb-16  "> <p>
      </p>At Jcrown Sport, we are a full service sport management and marketing company with a major focus on soccer and a while range of other sports.

        In all our endeavors, we prioritize understanding the unique characteristics, fan bases, and market dynamics of each sport to create tailored marketing campaigns that deliver impactful results.

        Whether it's creating buzz around a team's championship run, showcasing the grit and determination of individual athletes, or capturing the heart-pounding moments of
        extreme sports competitions, Jcrown Sport Marketing leverages its diverse experience and passion
        for sports to elevate the marketing efforts of sports organizations across the
        spectrum of sports disciplines.</div>

      <div className=" flex items-center justify-center">
        <div className="bg-green-800  text-white p-10 sm:p-20 rounded-xl shadow-lg border-black  border-solid 
border-b-8 border-2 max-w-6xl  sm:grid grid-cols-5 gap-0 "    >
          <div className="my-4 sm:my-0 col-span-1"> <img src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844204/pitch_tyejds.svg" alt="" /> </div>

          <div className="col-span-4">
            <h1 className="text-4xl font-bold mb-4">Team Sports</h1>

            <p>
              We have successfully marketed team sports such as basketball, soccer,
              football, baseball, hockey, and more. Our tailored marketing strategies
              for team sports focus on engaging fans, building team identity, and
              creating memorable experiences for spectators both in-person and
              through digital platforms.
            </p>

            <p className="mt-4">
              Through our expertise in sponsorship activation, event marketing, and
              social media management, we have helped numerous teams and sports
              organizations increase their brand presence and connect with
              their loyal fanbase
            </p>
          </div>
        </div>
      </div>


      <div className=" flex items-center justify-center">
        <div className="bg-yellow-500   p-10 sm:p-20 rounded-xl shadow-lg border-black  border-solid 
border-b-8 border-2 max-w-6xl my-20 sm:grid grid-cols-5 gap-0 "    >
          <div className="my-4 sm:my-0 col-span-1"> <img src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844203/dumbell_xdnukg.svg" alt="" /> </div>

          <div className="col-span-4">
            <h1 className="text-4xl font-bold mb-4">Extreme Sports</h1>

            <p>
              In the realm of extreme sports such as snowboarding, surfing, skateboarding, and motocross, we excel at capturing the
              adrenaline-fueled excitement and passion that drive extreme sports enthusiasts. Our marketing approach for extreme sports focuses on authenticity, adrenaline-fueled content creation, and strategic partnerships with influencers and brands that share the same adventurous spirit.


            </p>

            <p className="mt-4">
              By tapping into the thrill-seeking nature of extreme sports fans, we help clients stand out in a crowded marketplace and expand their reach to a global audience of adrenaline junkies.
            </p>
          </div>
        </div>
      </div>


      <div className=" flex items-center justify-center">
        <div className="bg-green-800  text-white p-10 sm:p-20 rounded-xl shadow-lg border-black  border-solid 
border-b-8 border-2 max-w-6xl  sm:grid grid-cols-5 gap-0 "    >
          <div className="my-4 sm:my-0 col-span-1"> <img src="https://res.cloudinary.com/dgso4wgqt/image/upload/v1738844204/running_p6gfee.svg" alt="" /> </div>

          <div className="col-span-4">
            <h1 className="text-4xl font-bold mb-4">Individual Sports</h1>

            <p>
              Our experience in marketing individual sports like tennis, golf, boxing, and track and field has allowed us to develop specialized strategies that highlight the unique skills and personalities of individual athletes.

            </p>

            <p className="mt-4">
              We prioritize athlete branding, influencer partnerships, and personal narrative storytelling to showcase the dedication and accomplishments of individual athletes in a way that resonates with fans and garners support from sponsors and stakeholders

            </p>
          </div>
        </div>
      </div>
    </main>
  )
}