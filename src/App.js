import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from './layouts/RootLayout'
import HelpLayout from './layouts/HelpLayout'
import Faq from './pages/help/Faq'
import Contact from './pages/help/Contact'
import Error from './pages/Error'
import Careers, { careersLoader } from './pages/career/Careers'
import CareerLayout from './layouts/CareerLayout'
import CareerDetails, {
  careerDetailsLoader
} from './pages/career/CareerDetails'
import CareerError from './pages/career/CareerError'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='help' element={<HelpLayout />}>
        <Route path='faq' element={<Faq />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Route>
      <Route path='careers' element={<CareerLayout />}>
        <Route index element={<Careers />} loader={careersLoader}></Route>
        <Route
          path=':id'
          element={<CareerDetails />}
          loader={careerDetailsLoader}
          errorElement={<CareerError />}
        ></Route>
      </Route>
      <Route path='*' element={<Error />}></Route>
    </Route>
  )
)

function App () {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
