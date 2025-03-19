import React from 'react'
import Login from './Pages/Login'
import Navbar from './components/Navbar'
import HeroSection from './Pages/student/HeroSection'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Courses from './Pages/student/Courses'
import Course from './Pages/student/Course'
import MyLearning from './Pages/student/MyLearning'
import Profile from './Pages/student/Profile'
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <HeroSection />
            <Courses />
          </>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/mylearning",
        element: <MyLearning />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

const App = () => {
  return (
    <main>
      <RouterProvider router={appRouter}/>
    </main>
  )
}

export default App
