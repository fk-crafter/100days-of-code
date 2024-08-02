const Navbar = () => {
    return ( 
        <header className="w-full flex justify-between items-center p-4 bg-white shadow-md">
        <div className="font-bold text-xl">Logo</div>
        <nav>
          <a href="/" className="ml-4 text-gray-700 hover:text-black">Home</a>
          <a href="/" className="ml-4 text-gray-700 hover:text-black">Info</a>
          <a href="/" className="ml-4 text-gray-700 hover:text-black">Contact</a>
        </nav>
      </header>
     );
}
 
export default Navbar;