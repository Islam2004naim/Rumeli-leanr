import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const Navbar = ({ containerStyles, menuOpened }) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'tr' : 'en';
        i18n.changeLanguage(newLang);
    };


    const navLinks = [
        { id: 1, name: 'home', to: '/' },
        { id: 2, name: 'tutors', to: '/tutors' },
        { id: 3, name: 'blog', to: '/blog' },
        { id: 4, name: 'contact', to: '/contact' },
    ];

    return (
        <nav className={containerStyles}>

            {menuOpened && (
                <Link to={'/'} className='bold-24 flex items-center gap-x-2 pb-12'>
                    <span className='inline-flex items-center justify-center w-10 h-10 bg-secondary text-white rounded-full italic'>R</span>
                    <span className='tracking-tight text-secondary italic'>umeli Learn</span>
                </Link>
            )}

            {navLinks.map(({ id, name, to }) => (
                <div key={id} className='inline-flex'>
                    <NavLink
                        to={to}
                        className={({ isActive }) => (isActive ? "active-link" : "text-white")}
                    >

                        <h5 className='medium-16'>{t(name)}</h5>
                    </NavLink>
                </div>
            ))}


            <button
                onClick={toggleLanguage}
                className="ml-4 flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 px-3 py-1.5 rounded-full text-white transition-all cursor-pointer font-medium"
                title={i18n.language === 'en' ? 'Türkçe\'ye çevir' : 'Switch to English'}
            >
                <span className='text-xs uppercase'>{i18n.language}</span>
                <div className='w-5 h-5 rounded-full overflow-hidden flexCenter border border-white/20'>
                    {i18n.language === 'en' ? (
                        <span title="Turkish">🇹🇷</span>
                    ) : (
                        <span title="English">🇺🇸</span>
                    )}
                </div>
            </button>
        </nav>
    );
};