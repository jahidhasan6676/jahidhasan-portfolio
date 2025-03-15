

const Test = () => {
 


  return (
    <div className="w-11/12 lg:w-10/12 mx-auto py-20">
        <h2 className="text-2xl text-white font-semibold text-center mb-10">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-10 text-white">
        {/* Left: Contact Form */}
        <div className="bg-gray-800 p-4 md:p-8 rounded-lg">
          <form  className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-gray-700 border-none text-white outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-gray-700 text-white outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 rounded-md bg-gray-700 text-white outline-none h-32"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-950 p-3 rounded-md font-semibold transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col justify-center  items-center space-y-6 bg-gray-800 p-4 md:p-8 rounded-lg">
          <h2 className="text-2xl font-semibold md:text-center mr-[70px]">Let's Connect</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-phone text-xl text-blue-500"></i>
              <span className="text-lg">+8801818186676</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-envelope text-xl text-blue-500"></i>
              <span className="text-lg">jh18186676@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fa-brands fa-whatsapp text-xl text-green-500"></i>
              <span className="text-lg">+8801818186676</span>
            </div>
            <div className="flex items-center space-x-3">
              <i className="fa-solid fa-location-dot text-xl text-red-500"></i>
              <span className="text-lg">Cumilla, Bangladesh</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mr-[58px]">
            <a href="#" className="text-blue-400 text-2xl hover:text-blue-500 transition">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="text-blue-400 text-2xl hover:text-blue-500 transition">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-400 text-2xl hover:text-blue-500 transition">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="text-blue-400 text-2xl hover:text-blue-500 transition">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
