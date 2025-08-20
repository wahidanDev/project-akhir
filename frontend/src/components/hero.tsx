import { ArrowUpRight } from 'lucide-react';
const Hero = () => {
  return (
    <section className="text-center pt-26 bg-gradient-to-t from-[antiquewhite] to-white pb-20">

     
      <div className="flex items-center justify-center space-x-8 mb-6">

        <h1 className="text-[110px] font-rubik font-extrabold text-gray-800">
          Harapan
        </h1>

        <img
          src={"src/assets/hero-photo.jpg"}
          alt="Hero photo"
          className="h-50 w-auto rounded-[150px] shadow-lg"
        />

        <h1 className="text-[110px] font-rubik font-extrabold text-gray-800">
          Bangkit
        </h1>

      </div>


      <h2 className="text-[110px] font-rubik font-extrabold text-gray-800">
        adalah Dukungan
      </h2>

      <div className="flex justify-center gap-6 pt-18 pb-22">
        <button className="bg-green-600 rounded-4xl text-white py-4 px-10 cursor-pointer">
          DONASI
        </button>
        <button className="flex items-center gap-2 cursor-pointer">
          BANTUAN
          <span className="border rounded-full p-2">
            <ArrowUpRight size={16} />
          </span>
        </button>
      </div>

      <div className="w-full max-w-7xl mx-auto border-t-2 border-gray-300 mt-6"></div>

      <div className='flex items-center justify-center gap-28 pt-8'>
        <img src={"src/assets/logoRZ.png"} className="h-22 w-auto"/>
        <img src={"src/assets/yki-logo.png"} className="h-22 w-auto"/>
        <img src={"src/assets/beralamjariyah.png"} className="h-25 w-auto"/>
        <img src={"src/assets/pyi-logo.png"} className="h-16 w-auto"/>
      </div>
    </section>
  );
};

export default Hero;
