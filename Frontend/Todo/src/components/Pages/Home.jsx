import { useEffect, useState } from 'react';
import { UserProfile } from '../../api/UserProfile';
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const [user, setUser] = useState(null);  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
       const res =  await UserProfile();
        setUser(res);
      } catch (error) {
        navigate("/login");
        console.error("❌ Error fetching profile:", error.message);
      }
    };
    fetchData();
  }, [navigate]);

  return (
    <div className="flex-grow h-[100%] flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl bg-zinc-700 shadow-2xl rounded-2xl p-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-2">
          {user?.username ? `Welcome, ${user.username}!` : 'Welcome!'}
        </h2>
        <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
          Organize Your Day Effortlessly
        </h2>
        <p className="text-lg md:text-xl text-zinc-300 max-w-xl mb-8">
          Task Maker helps you plan, track, and complete your tasks efficiently. Boost your productivity today!
        </p>
        <Link to={"/tasks"}>
          <button className="px-6 py-3 cursor-pointer bg-zinc-600 text-white rounded-lg shadow-md hover:bg-zinc-500 transition">
            Make Task
          </button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Home;
