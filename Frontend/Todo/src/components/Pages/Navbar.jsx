import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="w-full p-6 flex justify-between items-center bg-zinc-700 shadow-md">
      <h1 className="text-2xl font-bold text-white"><Link to="/">Task Maker</Link></h1>
      <nav>
        <ul className="flex gap-6 text-zinc-300 font-medium">
          <li><Link to="/" className="hover:text-white">Home</Link></li>
          <li><Link to="/tasks" className="hover:text-white">Tasks</Link></li>
          <li><Link to="/about" className="hover:text-white">About</Link></li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
