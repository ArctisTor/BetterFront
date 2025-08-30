import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from 'react-router-dom';

import './App.css';
import VTuberList from './pages/VTuber/VTuberList';
import TabBar from './component/TabBar/TabBar';

// Root layout: TabBar + Outlet for route content
function Layout() {
  return (
    <>
      <TabBar />
      <Outlet /> {/* renders the current route */}
    </>
  );
}

// Create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<VTuberList />} /> {/* default route */}
      <Route path="vtubers" element={<VTuberList />} />
      {/* <Route path="organizations" element={<OrganizationList />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
