import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import { EmailVerification } from "./pages/EmailVerification";

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<Home />}>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route path="/verify-email" element={<EmailVerification />} />
    </Routes>
  );
}

export default App;
