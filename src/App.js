import React, { useState } from "react";
import "./App.css";
import AppPage from "./pages/first_page/AppPage";
import StudentPortal , {loader as infocardloader} from "./pages/Student Portal/StudentPortal.js";
import Login from "./Login";
import Mainlogin from "./mainlogin.js";

import { BrowserRouter, Routes,RouterProvider,Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import SideDrawer from "./SideDrawer.js";
import About from "./pages/first_page/About.js";
import Service from "./pages/first_page/Service.js";
import SharedLayout from "./pages/first_page/SharedLayout.js";
import { Navbar, Table } from "./pages/inner_page/Application.js";
import Notification from "./pages/inner_page/Notification.js";

function App() {
  const [login, setLogin] = useState(true);

  // const router = createBrowserRouter([
  //   {
  //     path:'/',
  //     element:<AppPage/>,
  //     children:[
  //       {path:'/',element:<AppPage/>},
  //       {path:'/about',element:<About/>},
  //       {path:'/service',element:<Service/>},
  //       {path:'/login',element:<Login/>},
  //       {path:'/main-login',element:<Mainlogin/>},
  //       {path:'/student-portal',element:<StudentPortal/> , loader: async ()=>{
  //         return  axios.get("http://localhost:8000/student_portal/overview")
  //           .then(response => {
  //               const info = response.data; // This will contain the response data
  //               return info;
  //           })
  //           .catch(error => {
  //               // Handle errors here
  //               console.error('Error fetching data:', error);
  //           })
  //       }}
  //     ]
  //   },
  // ]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={null}>
        <Route index element={<AppPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main-login" element={<Mainlogin />} />
        <Route
          path="/student-portal"
          element={<StudentPortal />}
          loader={infocardloader}
        >

        </Route>
          <Route path={"/student-portal/notification"}
          element={<Notification />}
          />
          <Route path={"/student-portal/profile"} element={null} />
          <Route path={"/student-portal/logout"} element={null} />
          <Route path={"/student-portal/resume-builder"} element={null} />
          <Route path="/student-portal/application" element={<Table />} />
      </Route>
    )
  );

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path={"/"} element={null}>
            <Route index element={<AppPage />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/service"} element={<Service />} />
          </Route>
          <Route path={"login"} element={<Login />} />
          <Route path={"main-login"} element={<Mainlogin />} />
          <Route path={"student-portal"} element={<StudentPortal />} />
          <Route path={"/student-portal"}>
            <Route index path="/student-portal" element={<StudentPortal />} />
            <Route path={"/student-portal/application"} element={<Table />} />
            <Route
              path={"/student-portal/notification"}
              element={<Notification />}
            />
            <Route path={"/student-portal/profile"} element={null} />
            <Route path={"/student-portal/logout"} element={null} />
            <Route path={"/student-portal/resume-builder"} element={null} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
