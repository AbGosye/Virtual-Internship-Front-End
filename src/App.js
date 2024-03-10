import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideNav from "./Components/Coordinator/SideNav";
import Nav from "./Components/Coordinator/Nav";
import Users from "./Components/Coordinator/Users";
import Certification from "./Components/Coordinator/Certification";
import AddTask from "./Components/Coordinator/AddTask";
import AddPost from "./Components/Coordinator/AddPost";
import ViewTask from "./Components/Applicant/ViewTask";
import Main from "./Components/Applicant/Main";
import UvCoordinatorMain from "./Components/UvCoordinator/UvCoordinatorMain";
import Assign from "./Components/UvCoordinator/Assign";
import Profile from "./Components/UvCoordinator/Profile";
import RegisterSupervisor from "./Components/UvCoordinator/RegisterSupervisor";
import ViewStudent from "./Components/UvCoordinator/ViewStudent";
import CoordinatorEvaluate from "./Components/Coordinator/CoordinatorEvaluate";
import CoordinatorProfile from "./Components/Coordinator/CoordinatorProfile";
import Tasks from "./Components/Coordinator/Tasks";
import TaskDetails from "./Components/Coordinator/TaskDetails";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideNav />} />
        <Route index element={<SideNav />} />

        <Route path="Coordinator" element={<Nav />}>
          <Route index element={<Users />} />
          <Route path="Certification" element={<Certification />} />
          <Route path="AddTask" element={<AddTask />} />
          <Route path="AddPost" element={<AddPost />} />
          <Route path="Evaluate" element={<CoordinatorEvaluate />} />
          <Route path="Profile" element={<CoordinatorProfile />} />
          <Route path="Tasks" element={<Tasks />} />
          <Route path="TaskDetails" element={<TaskDetails />} />
        </Route>
        <Route path="Applicant" element={<Main />}>
          <Route index element={<Main />} />
          <Route path="ViewTask" element={<ViewTask />} />
        </Route>

        <Route path="UvCoordinator" element={<UvCoordinatorMain />}>
          <Route index element={<vCoordinatorMain />} />
          <Route path="Assign" element={<Assign />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="RegisterSupervisor" element={<RegisterSupervisor />} />
          <Route path="ViewStudent" element={<ViewStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
