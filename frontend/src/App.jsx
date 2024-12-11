import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/User/Home";
import ViewProduct from "./Page/User/ViewProduct";
import Login from "./Page/Admin/Login";
import Dashboard from "./Page/Admin/Dashboard";
import UploadArt from "./Page/Admin/UploadArt";
import Category from "./Page/Admin/Category";

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
        <Routes>
          <Route path="/admin/upload-art" element={<UploadArt />} />
        </Routes>
        <Routes>
          <Route path="/admin/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
