import task from '../Models/task.model.js'


export const createTodo = async (req, res) => {
  try {
    const todo = await task.create({
      user: req.user,
      title: req.body.title,
    });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTodos = async (req, res) => {
  try {
    const todos = await task.find({ user: req.user });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const updateTodo = async (req, res) => {
  try {
    const todo = await task.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });

    if (todo.user.toString() !== req.user) {
      return res.status(403).json({ message: "Not authorized" });
    }

    todo.title = req.body.title || todo.title;
    todo.completed = req.body.completed ?? todo.completed;
    const updated = await todo.save();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const deleteTodo = async (req, res) => {
  try {
    const todo = await task.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    if (todo.user.toString() !== req.user) {
      return res.status(403).json({ message: "Not authorized" });
    }
    await task.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error in deleteTodo:", error);
    res.status(500).json({ message: error.message });
  }
};

