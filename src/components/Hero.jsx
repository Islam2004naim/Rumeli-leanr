import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className='bg-hero bg-cover bg-center bg-no-repeat h-[711px] w-full relative pt-24 overflow-hidden'>
            <div className='max-padd-container flex items-center justify-between h-full'>
                <div className='flex-1 max-w-[600px] z-10'>
                    <div className='inline-block px-4 py-1.5 rounded-full border border-white/30 text-secondary mb-6 bg-white/10'>
                        {t("hero.badge")}
                    </div>
                    <h1 className='text-5xl md:text-7xl font-bold text-white leading-tight mb-6'>
                        {t("hero.title")}
                    </h1>
                    <p className='text-white/80 text-lg mb-8 max-w-[500px] leading-relaxed'>
                        {t("hero.description")}
                    </p>
                    <div className='flex gap-4'>
                        <Link to="/register" className='px-8 py-3.5 rounded-full border border-white text-white font-medium hover:bg-white hover:text-deep transition-all'>
                            {t("hero.btnRegister")}
                        </Link>
                        <Link to="/tutors" className='px-8 py-3.5 rounded-full bg-secondary text-deep font-bold hover:opacity-90 transition-all'>
                            {t("hero.btnBook")}
                        </Link>
                    </div>
                </div>

                <div className='hidden lg:block relative'>
                    <img src="/src/assets/hero-girl.png" alt="" className='max-h-[650px] object-contain relative z-10' />
                </div>
            </div>
        </section>
    );
};
