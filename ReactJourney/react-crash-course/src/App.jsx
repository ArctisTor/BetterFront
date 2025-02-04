import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import JobPage from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'
 
import MainLayout from './layouts/MainLayout'

import { loadJobData } from './service/JobService'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}> 
        <Route index element={<HomePage/>}/>
        <Route path='/jobs' element={<JobsPage/>}/>
        <Route path='/add-job' element={<AddJobPage/>}/>
        <Route path='/job/:id' element={<JobPage/>} loader={loadJobData}/>
        <Route path='/edit-job/:id' element={<EditJobPage/>} loader={loadJobData}/>
        <Route path='*' element={<NotFoundPage/>}/>

      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  );
}

export default App