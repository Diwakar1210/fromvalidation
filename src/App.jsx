import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Signup from './Components/Signup'
import HomePage from './Components/HomePage'
import AccountLayout from './Layout/AccountLayout'
import MainLayout from './Layout/MainLayout'
import Empty from './Components/Empty'
import Protected from './Components/Protected'
import User from "./Pages/User.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<AccountLayout />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
        <Route element={< Protected />}>
          <Route element={<MainLayout />}>
            <Route path='/home' element={<HomePage />} />
            <Route path={'/user'} element={<User />} />
          </Route>
        </Route>
        <Route path='*' element={<Empty />} />
      </Routes>
    </Router>
  )
}

export default App
