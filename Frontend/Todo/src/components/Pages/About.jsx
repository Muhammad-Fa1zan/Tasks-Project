import { motion } from "framer-motion";

function About() {
  return (
    <div className="bg-zinc-900 flex items-center justify-center p-6 ">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl bg-zinc-800 shadow-2xl rounded-2xl p-10 text-white"
      >
        <h1 className="text-4xl font-bold text-center text-zinc-100 mb-6">
          About This Project
        </h1>

        <p className="text-zinc-300 leading-relaxed mb-6">
          This project is a <span className="font-semibold text-white">Full-Stack MERN Application</span> 
          that allows users to register, log in, manage their profile, and create personal 
          to-do tasks. It was built step by step from scratch, covering both frontend and 
          backend concepts like authentication, protected routes, and CRUD operations.
        </p>

        <h2 className="text-2xl font-semibold text-zinc-100 mb-3">
          ✨ Features
        </h2>
        <ul className="list-disc list-inside text-zinc-300 mb-6 space-y-2">
          <li>User registration with JWT authentication</li>
          <li>Login system with secure password hashing</li>
          <li>Protected profile page (only accessible if logged in)</li>
          <li>Create, update, complete, and delete todos</li>
          <li>Frontend built with <span className="font-semibold text-white">React + Tailwind</span></li>
          <li>Backend built with <span className="font-semibold text-white">Node.js, Express & MongoDB</span></li>
        </ul>

        <h2 className="text-2xl font-semibold text-zinc-100 mb-3">
          ⚙️ Technologies Used
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 text-zinc-300">
          <span className="bg-zinc-700 px-3 py-1 rounded-lg">React</span>
          <span className="bg-zinc-700 px-3 py-1 rounded-lg">Node.js</span>
          <span className="bg-zinc-700 px-3 py-1 rounded-lg">Express.js</span>
          <span className="bg-zinc-700 px-3 py-1 rounded-lg">MongoDB</span>
          <span className="bg-zinc-700 px-3 py-1 rounded-lg">JWT Auth</span>
          <span className="bg-zinc-700 px-3 py-1 rounded-lg">Tailwind CSS</span>
        </div>

        <h2 className="text-2xl font-semibold text-zinc-100 mb-3">
          🚀 Learning Outcomes
        </h2>
        <p className="text-zinc-300 leading-relaxed mb-6">
          While building this project, I learned how to structure a full-stack app, 
          manage authentication, secure backend routes with middleware, 
          and handle state & API calls in React. This project gave me 
          hands-on experience in connecting frontend and backend effectively.
        </p>

        <p className="text-center text-zinc-400 italic">
          "This project is not just a todo app, but a solid foundation for 
          any future full-stack applications."
        </p>
      </motion.div>
    </div>
  );
}

export default About;
