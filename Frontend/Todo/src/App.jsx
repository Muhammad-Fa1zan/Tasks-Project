import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./components/AuthUsers/Register";
import LoginUser from "./components/AuthUsers/Login";
import Profile from "./components/Pages/Profile";
import Home from "./components/Pages/Home";
import Layout from "./components/Pages/layout";
import Tasks from "./components/Pages/Tasks";
import About from "./components/Pages/About";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginUser />} />
          <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="profile" element={<Profile />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
