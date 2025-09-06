import { MdDeleteSweep } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoIosSave } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import { getTodos, createTodo, updateTodo, deleteTodo } from "../../api/TasksApi";

function Tasks() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const fetchTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error.message);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleAdd = async () => {
    if (!title.trim()) return;
    const newTodo = await createTodo(title);
    setTodos([...todos, newTodo]);
    setTitle("");
  };

  const handleisComplete = async (id, completed) => {
    const updated = await updateTodo(id, { completed: !completed });
    setTodos(todos.map((todo) => (todo._id === id ? updated : todo)));
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const startEdit = (id, currentTitle) => {
    setEditingId(id);
    setEditTitle(currentTitle);
  };

  const handleEditSave = async (id) => {
    if (!editTitle.trim()) return;
    const updated = await updateTodo(id, { title: editTitle });
    setTodos(todos.map((todo) => (todo._id === id ? updated : todo)));
    setEditingId(null);
    setEditTitle("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mt-5 p-6 max-w-lg mx-auto bg-zinc-700 rounded-xl shadow-md text-white">
        <h2 className="text-2xl font-bold mb-4">My Tasks</h2>

        <div className="flex mb-4  border-zinc-600">
          <input
            className="flex-grow  outline-none border-0 bg-zinc-800 text-white rounded-l px-3 py-2 placeholder-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Tasks..."
          />
          <button
            onClick={handleAdd}
            className="bg-zinc-600 text-white px-4 cursor-pointer py-2 rounded-r hover:bg-zinc-500"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo) => (
            <li
              key={todo._id}
              className="flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            >
              {editingId === todo._id ? (
                <div className="flex items-center w-full justify-between gap-2">
                  <input
                    className="border border-zinc-600 bg-zinc-900 text-white px-2 py-1 rounded flex-grow placeholder-gray-400"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                  />
                  <button
                    onClick={() => handleEditSave(todo._id)}
                    className="cursor-pointer text-[20px] ml-2 text-green-400"
                  >
                    <IoIosSave />
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="cursor-pointer text-[20px] ml-2 text-gray-400"
                  >
                    <MdCancel />
                  </button>
                </div>
              ) : (
                <div className="flex items-center w-full justify-between gap-2">
                  <div className="flex items-center gap-2 flex-grow">
                    <span
                      onClick={() => handleisComplete(todo._id, todo.completed)}
                      className={`cursor-pointer ${todo.completed && "line-through text-gray-400"
                        }`}
                    >
                      {todo.title}
                    </span>
                    <button
                      onClick={() => startEdit(todo._id, todo.title)}
                      className="cursor-pointer text-[20px] ml-2 text-gray-400"
                    >
                      <FaEdit />
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleisComplete(todo._id, todo.completed)}
                      className={`cursor-pointer w-[40px] h-[40px] p-4 text-[20px] ${todo.completed ? "text-green-400" : "text-white"
                        }`}
                    >
                      {todo.completed ? <CiCircleCheck /> : <MdRadioButtonUnchecked />}
                    </button>
                    <button
                      onClick={() => handleDelete(todo._id)}
                      className="cursor-pointer w-[40px] h-[40px] p-4 text-[20px] text-red-400"
                    >
                      <MdDeleteSweep />
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Tasks;
