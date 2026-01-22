import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import { authLink, navItems } from '../../constants/data'
import ModeCtrl from './ModeCtrl';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleMenu = () => {
        setMobileOpen(!mobileOpen);
    }

    return (
        <nav className='sticky top-0 z-50 border-b border-neutral-700/80 backdrop-blur-lg'>
            <div className='container relative'>
                <div className='nav-inside-wrapper flex justify-between items-center p-4'>
                    {/* Logo */}
                    <div className='logo-wrapper flex items-center gap-2'>
                        <div className='logo w-10 h-10 rounded-full border border-neutral-700/80 flex items-center justify-center'>
                            <div className='round-dot w-8 h-8 rounded-full bg-indigo-800'></div>
                        </div>
                        <span className='logo-text text-lg font-bold'>AceDot.Dev</span>
                    </div>

                    {/* Menu */}
                    <ul className='nav-wrapper hidden lg:flex gap-3'>
                        {
                            navItems.map((item, index) => (
                                <li key={index}>
                                    <Link to={item.to}>{item.label}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='info-wrapper hidden lg:flex items-center gap-2'>
                        {
                            authLink.map((item, index) => (
                                <Link key={index} to={item.to}
                                    className={`py-4 px-5 rounded-md text-xs font-medium transision-all ${index === 1 ? "bg-gradient-to-r from-indigo-500 to-indigo-800 text-neutral-200 border-0" : "border border-neutral-300 text-neutral-950 dark:border-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800"}`}>
                                    {item.label}
                                </Link>
                            ))
                        }
                        <ModeCtrl />
                    </div>
                    <div className='lg:hidden flex justify-end'>
                        <button onClick={toggleMenu}>
                            {
                                mobileOpen ? <X /> : <Menu />
                            }
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header