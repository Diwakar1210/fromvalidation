import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import EditModal from '../Components/EditModal.jsx';

const MainLayout = () => {
    const navigate = useNavigate();
    function handleLogout(e) {
        sessionStorage.removeItem('Signupdata');
        e.preventDefault();
        navigate('/login');
        console.log('Logged out successfully');
    }
    return (
        <div className="page-wrapper">
            <div className="overlay absolute h-full w-full bg-black opacity-50 hidden"></div>
            <div className="wrapper flex">
                {/* SideNav Starts */}
                <nav className="w-3xs h-screen bg-sky-600">
                    <a href="" className='flex items-center gap-4 p-(--font-size-14)'>
                        <img src={logo} alt="logo" className='w-[50px] rounded-full' />
                        <h3 className="text-3xl font-bold">Logo</h3>
                    </a>
                    <ul>
                        <li>
                            <Link to={'/user'} className='block'>
                                Users
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* SideNav Ends */}

                {/* Main starts */}
                <main className='w-[calc(100%-256px)] bg-sky-950'>
                    {/* Header Starts */}
                    <header className='p-6 bg-sky-800'>
                        <ul className='flex items-center justify-end gap-3'>
                            <li><Link to={'/home'} className='hover:text-red-800 duration-300'>Home</Link ></li>
                            <li><Link to={'/home'} className='hover:text-red-800 duration-300'>About</Link ></li>
                            <li><Link to={'/home'} className='hover:text-red-800 duration-300'>Contact</Link ></li>
                            <li><Link onClick={handleLogout} className='hover:text-red-800 duration-300'>Logout</Link></li>
                        </ul>
                    </header>
                    {/* Header Ends */}
                    {/* Content starts */}
                    <Outlet />
                    {/* Content ends */}
                </main>
                {/* Main ends */}
            </div>
            <EditModal/>
        </div>
    )
}

export default MainLayout