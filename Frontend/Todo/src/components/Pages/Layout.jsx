import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-800 text-white">
      <Navbar />
      <main className="flex-grow h-100 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
