import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from 'react-router-dom';

import './App.css';
import MainTabBar from './component/TabBar/MainTabBar';

// Root layout: TabBar + Outlet for route content
function Layout() {
  return (
    <>
      <MainTabBar />
      <Outlet /> {/* renders the current route */}
    </>
  );
}

// Create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* <Route index element={<VTuberList />} /> {/* default route */}
      {/* <Route path="vtubers" element={<VTuberList />} /> */}
      {/* <Route path="organizations" element={<OrganizationList />} /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
