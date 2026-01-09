import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';
import { CgMenuLeft } from 'react-icons/cg';
import { RiUserLine } from 'react-icons/ri';
import { MdClose } from 'react-icons/md';
import { TbArrowNarrowRight } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../context/AppContext';

export const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const { t } = useTranslation();
    const { token, setToken, userData } = useContext(AppContext);
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const toggleMenu = () => setMenuOpened((prev) => !prev);

    const logout = () => {
        setToken(false);
        setShowDropdown(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        if (showDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showDropdown]);

    return (
        <header className='absolute top-0 left-0 right-0 z-50 bg-transparent text-white py-5'>
            <div className='max-padd-container flexBetween'>
                <Link to="/" className='font-bold text-2xl flex items-center gap-x-2'>
                    <span className='inline-flex items-center justify-center w-10 h-10 bg-secondary text-white rounded-full italic'>
                        R
                    </span>
                    <span className='tracking-tight text-secondary italic'>umeli Learn</span>
                </Link>

                <div className='flexCenter gap-x-4'>
                    <Navbar
                        menuOpened={menuOpened}
                        toggleMenu={toggleMenu}
                        containerStyles={`${menuOpened ? "flex flex-col gap-y-12 h-screen w-[222px] absolute left-0 top-0 z-50 px-12 py-4 shadow-2xl bg-deep" : " hidden xl:flex gap-x-12 medium-15 px-2 py-1"}`}
                    />

                    {!menuOpened ? (
                        <CgMenuLeft onClick={toggleMenu} className='text-2xl cursor-pointer md:hidden' />
                    ) : (
                        <MdClose onClick={toggleMenu} className='text-2xl cursor-pointer md:hidden' />
                    )}

                    <div className='relative group' ref={dropdownRef}>
                        {token ? (
                            <div>
                                <img
                                    onClick={() => setShowDropdown(!showDropdown)}
                                    src={userData.image}
                                    alt="User Profile"
                                    className='rounded-full w-12 h-12 object-cover cursor-pointer border-2 border-white shadow-md hover:scale-105 transition-transform'
                                />
                                {showDropdown && (
                                    <div className='bg-white shadow-lg p-2 w-48 ring-1 ring-slate-900/10 rounded-xl absolute right-0 top-14 flex flex-col text-tertiary overflow-hidden z-50'>
                                        {/* Menu Items */}
                                        <ul className='flex flex-col gap-1'>
                                            <li
                                                onClick={() => { navigate("/my-profile"); setShowDropdown(false); }}
                                                className='flexBetween cursor-pointer hover:bg-gray-5 px-3 py-2.5 rounded-lg transition-all'
                                            >
                                                <p className='text-sm font-medium'>{t('header.myProfile')}</p>
                                                <TbArrowNarrowRight className='opacity-50 text-lg' />
                                            </li>
                                            <li
                                                onClick={() => { navigate("/my-sessions"); setShowDropdown(false); }}
                                                className='flexBetween cursor-pointer hover:bg-gray-5 px-3 py-2.5 rounded-lg transition-all'
                                            >
                                                <p className='text-sm font-medium'>{t('header.mySessions')}</p>
                                                <TbArrowNarrowRight className='opacity-50 text-lg' />
                                            </li>
                                            <hr className='my-1 border-gray-100' />
                                            <li
                                                onClick={logout}
                                                className='flexBetween cursor-pointer hover:bg-red-50 px-3 py-2.5 rounded-lg transition-all'
                                            >
                                                <p className='text-sm font-medium text-red-500'>{t('header.logout')}</p>
                                                <TbArrowNarrowRight className='opacity-50 text-lg text-red-500' />
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <button
                                onClick={() => navigate("/login")}
                                className='btn-white flexCenter gap-x-2 rounded-full bg-white text-tertiary px-6 py-2 font-medium'
                            >
                                {t('login')}
                                <RiUserLine className='text-xl' />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};