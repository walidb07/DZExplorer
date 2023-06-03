function HeadDash() {

   return (
    <div className="grid grid-flow-col justify-stretch mt-10 space-x-6">
    <div className="flex items-center">
      <div className="flex flex-col ">
        <div className="ml-20 font-poppins font-medium text-4xl">Bienvenue, User!</div>
        <div className="ml-24 mt-0.5 font-poppins text-l text-left">Commencez à explorer l'Algérie!</div>
      </div>
    </div>
    <div className="relative rounded-full overflow-hidden border border-gray-300">
      <input
        type="text"
        className="w-full h-16 px-4 py-2 bg-white rounded-full focus:outline-none"
        placeholder="Search..."
      />
      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </span>
    </div>
    <div className="flex items-center justify-center">
      <img
        src="src/images/DashBoard/Prp.png"
        alt="baby with headphones"
        className="w-20 h-20 rounded-full object-cover"
      />
    </div>
  </div>
    );}

  export default HeadDash