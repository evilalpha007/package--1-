import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import List from "./components/List";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Login from "./components/Login";
import Master from "./components/Master";
import Ss from "./components/Ss";
import SuperMaster from "./components/SuperMaster";
import Agent from "./components/Agent";
import SubAdmin from "./components/SubAdmin";
import ProtectedRoute from "./authentication/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import AdminRoutes from "./authentication/AdminRoutes";

function App() {
  const { login } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
console.log(data);


  return (
    <>
      <AdminRoutes />
      <Routes>
        <Route exact path="/" element={login ? <List /> : <Login />} />
        <Route element={<ProtectedRoute login={false} />}>
          <Route exact path="ss" element={<Ss />} />
          <Route exact path="Master" element={<Master />} />
          <Route exact path="supermaster" element={<SuperMaster />} />
          <Route exact path="subadmin" element={<SubAdmin />} />
          <Route exact path="agent" element={<Agent />} />
          <Route exact path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// <Route exact path="/" element={<MobdileView />} />
