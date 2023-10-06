import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./config/firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./pages/Dashboard";
import Employees from "./pages/users/Employees";
import AdministrationEmployee from "./pages/employee/AdministrationEmployee";
import AllCourses from "./pages/courses/AllCourses";
import CreateCourses from "./pages/courses/CreateCourses";
import CourseCategory from "./pages/courses/CourseCategory";
import CourseDetail from "./pages/courses/CourseDetail";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import PrivateRoute from "./component/privateRoute";
import Profile from "./pages/Profile";
import Admins from "./pages/users/Admins";
import AdminDetailed from "./pages/users/AdminDetailed.jsx";
import AdministrationStudent from "./pages/student/AdministrationStudent";
import Grading from "./pages/student/Grading";
import StudyPlan from "./pages/student/StudyPlan";
import GradingInput from "./pages/student/GradingInput";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route>
            <Route path="/masuk" element={<Login />} />
            <Route path="/daftar" element={<Registration />} />
            <Route path="/profile" exact element={<PrivateRoute redirect />}>
              <Route path="/profile" exact element={<Profile />} />
            </Route>

            <Route path="/" element={<PrivateRoute redirect />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
            <Route path="/daftar-karyawan" element={<PrivateRoute redirect />}>
              <Route path="/daftar-karyawan" element={<Employees />} />
            </Route>
            <Route path="/daftar-admin" element={<PrivateRoute redirect />}>
              <Route path="/daftar-admin" element={<Admins />} />
            </Route>
            <Route path="/informasi-admin" element={<PrivateRoute redirect />}>
              <Route path="/informasi-admin" element={<AdminDetailed />} />
            </Route>
            <Route path="/administrasi-karyawan" element={<AdministrationEmployee />} />

            <Route path="student" element={<PrivateRoute redirect />}>
              <Route path="administration" element={<AdministrationStudent />} />
              <Route path="study-plan" element={<StudyPlan />} />
              <Route path="grading" element={<Grading />} />
              <Route path="grading/:id/:status" element={<GradingInput />} />
            </Route>

            <Route path="/daftar-pelatihan" element={<AllCourses />} />
            <Route path="/buat-pelatihan" element={<CreateCourses />} />
            <Route path="/kategori-pelatihan" element={<CourseCategory />} />
            <Route path="/detail-pelatihan" element={<CourseDetail />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
