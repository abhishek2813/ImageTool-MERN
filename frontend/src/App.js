import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/images" element={<h1>Images</h1>} />
        <Route path="/signup" element={<h1>Signup</h1>} />
      </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
