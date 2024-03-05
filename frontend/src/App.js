import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Main from "./components/main";
import Home from "./components/home";
import Table from "./components/table";
import Cn from "./components/subjects/cn/cn";
import Ai from "./components/subjects/ai/ai";
import Dwm from "./components/subjects/dwm/dwm";
import St from "./components/subjects/st/st";
import UnAuth from "./components/unauth";
import Register from "./components/register";
import Wc from "./components/subjects/wc/wc";
import Itn from "./components/subjects/cn/itn";
import Profile from "./components/profile";
import { AuthProvider } from "./context/authContext";
import Subjects from "./components/table/subjects";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="unauth" element={<UnAuth />} />
            <Route path="home" element={<Home />}>
              <Route path="profile" element={<Profile />} />
              <Route path="" element={<Table />}>
                <Route path="" element={<Subjects />} />
                <Route path="wc" element={<Wc />} />
                <Route path="cn" element={<Cn />} />
                <Route path="itn" element={<Itn />} />
                <Route path="dwm" element={<Dwm />} />
                <Route path="ai" element={<Ai />} />
                <Route path="st" element={<St />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
