export default function Home() {
  return (
    <main className="container mx-auto px-4">
      <section>
     <div className="sm:grid grid-cols-2 gap-4 mx-4 mt-8">
           <div className="text-2xl font-medium p-4  flex items-center justify-center">
            <div> 
            <div className="text-4xl font-bold">
                Revive the <span className="text-green-800">athlete</span> in you.
            </div>
            We believe in the transformative power of sport
            and are driven to help athletes and organizations achieve their dreams, leaving a lasting legacy in
            the world of sport and beyond.
            </div>
            </div>
           
          <div> 
            <img src="/frame10.png"   />
          </div>
     </div>



     <div className=" mt-5">
        <div className="p-6">
            <div className="text-4xl  my-2 text-center font-bold">
                Our Philosophy
            </div>
            At Jcrown Sport, we believe that success in sports management is built on a foundation of integrity,
passion, and strategic innovation. Our core philosophy is centered around providing unparalleled
service to athletes, teams, and organizations by fostering growth,
performance excellence, and long-term success.
            </div>
     </div>

     <div className=" mt-5  sm:grid grid-cols-5 ">
      

          <div className="col-span-3 font-medium p-4  ">
            <div className=" p-4 bg-green-800 shadow-lg shadow-gray-900  h-full flex items-center justify-center text-white rounded-2xl">
              <div>
            <div className="text-4xl font-bold">
                Athlethe-Centric Approach
            </div>
            <div className="">
            We are committed to putting athletes at the heart of
          everything we do. Understanding their unique needs and
          aspirations, we strive to create personalized pathways
          that support both their athletic and personal
          development. We aim to empower athletes with the
          resources, guidance, and opportunities needed to
          succeed on and off the field.
            </div>
            </div>
            </div>
            </div>

            <div className="col-span-2 p-2 "> 
            <img src="/frame11.png"  className="mt-2"   />
          </div>
    
      </div>
</section>
    </main>
  )
}