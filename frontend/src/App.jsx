import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/User/Home";
import ViewProduct from "./Page/User/ViewProduct";
import Login from "./Page/Admin/Login";
import Dashboard from "./Page/Admin/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/view-art/:id" element={<ViewProduct />} />
        </Routes>
        <Routes>
          <Route path="/admin/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/admin/panel" element={<Dashboard />} />
        </Routes>
        {/* <Routes>
          <Route path="/view-work/:id" element={<ViewArt />} />
        </Routes>
        <Routes>
          <Route path="/admin/upload-art" element={<UploadArts />} />
        </Routes>
        <Routes>
          <Route path="/admin/category" element={<Category />} />
        </Routes>
        <Routes>
          <Route path="/category/:id" element={<UserCategory />} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
}

export default App;
