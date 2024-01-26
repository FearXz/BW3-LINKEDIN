import "./assets/css/mybootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyProfile from "./components/MyProfile";
import MyNavBar from "./components/MyNavBar";
import MyHome from "./components/MyHome";
import MyJobs from "./components/MyJobs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MyNavBar />
              <MyHome />
            </>
          }
        />
        <Route
          path="/jobs"
          element={
            <>
              <MyNavBar />
              <MyJobs />
            </>
          }
        />
        <Route
          path="/jobs/:searchquery"
          element={
            <>
              <MyNavBar />
              <MyJobs />
            </>
          }
        />
        <Route
          path="/jobs/company/:searchcompany"
          element={
            <>
              <MyNavBar />
              <MyJobs />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <MyNavBar />
              <MyProfile />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
