const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-8xl mx-auto px-4 md:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <img
            src={"src/assets/logo.png"}
            alt="Logo"
            className="h-10 w-auto"
          />
          <h1 className="text-gray-600 font-bold text-2xl">BersamaPeduli</h1>
        </div>

        <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6 text-gray-600 font-bold text-sm md:text-base">
          <li className="hover:text-gray-400 cursor-pointer">SIAPA KITA</li>
          <li className="hover:text-gray-400 cursor-pointer">BERITA & ACARA</li>
          <li className="hover:text-gray-400 cursor-pointer">PARTISIPASI</li>
        </ul>

        <div className="flex space-x-2">
          <button className="border text-gray-600 px-4 md:px-5 py-2 rounded-full hover:text-white hover:bg-gray-900 transition font-bold text-sm md:text-base">
            SIGN IN
          </button>
          <button className="border text-gray-600 px-4 md:px-5 py-2 rounded-full hover:text-white hover:bg-gray-900 transition font-bold text-sm md:text-base">
            SIGN UP
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
