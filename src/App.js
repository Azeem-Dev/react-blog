import Topbar from "./components/topBar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/singleBlogPost/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
function App() {
  const currentUser = false;
  return (
    <Router>
      <Topbar />
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/posts" element={<Home />}></Route>
          <Route
            path="/register"
            element={currentUser ? <Home /> : <Register />}
          ></Route>
          <Route
            path="/login"
            element={currentUser ? <Home /> : <Login />}
          ></Route>
          <Route path="/post/:id" element={<Single />}></Route>
          <Route
            path="/write"
            element={currentUser ? <Write /> : <Login />}
          ></Route>
          <Route
            path="/settings"
            element={currentUser ? <Settings /> : <Login />}
          ></Route>
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
