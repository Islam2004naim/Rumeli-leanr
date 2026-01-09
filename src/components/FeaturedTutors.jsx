import React, { useContext } from 'react'
import { FaStar } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { AppContext } from '../context/AppContext';

export const FeaturedTutors = () => {
    const { t } = useTranslation();
    const { tutors, navigate } = useContext(AppContext)

    return (
        <section className='max-padd-container py-16 xl:py-24'>
            {/* Header section */}
            <div className='max-w-3xl mx-auto text-center mb-16'>
                <h3 className='text-3xl md:text-4xl font-bold mb-4 capitalize'>
                    {t("FeaturesT.text")}
                </h3>
                <p className='text-gray-500 text-lg max-w-2xl mx-auto'>
                    {t("FeaturesT.text1")}
                </p>
            </div>

            {/* Tutors grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
                {tutors.slice(1, 6).map((tutor, i) => (
                    <div
                        key={i}
                        className='group relative overflow-hidden rounded-2xl aspect-4/5 shadow-lg cursor-pointer'
                    >
                        {/* Background Image */}
                        <img
                            src={tutor.image}
                            alt={tutor.name}
                            className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                        />

                        {/* Gradient Overlay */}
                        <div className='absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent' />

                        {/* Content at Bottom */}
                        <div className='absolute bottom-0 left-0 right-0 p-5 text-white'>
                            <div className='flex items-center gap-1.5 text-yellow-500 mb-1'>
                                {/*yildiz iconu */}
                                <FaStar className='text-sm' />

                                <span className='text-sm font-bold text-white'>4.8</span>
                            </div>
                            <h5 className='text-lg font-bold leading-tight'>{tutor.name}</h5>
                            <p className='text-sm text-gray-300'>{tutor.subject}</p>
                        </div>

                        {/* Hover Overlay with Buttons */}
                        <div className='absolute inset-0 bg-black/40 flex flex-col justify-center items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                            <button
                                onClick={() => {
                                    navigate(`/sessions/${tutor._id}`);
                                    window.scrollTo(0, 0);
                                }}
                                className='bg-white text-black px-8 py-2.5 rounded-full font-semibold hover:bg-secondary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500'
                            >
                                {t("FeaturesT.text2")}
                            </button>
                            <button
                                onClick={() => {
                                    navigate('/tutors');
                                    window.scrollTo(0, 0);
                                }}
                                className='bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-2.5 rounded-full font-semibold hover:bg-white hover:text-black transition-all transform translate-y-4 group-hover:translate-y-0 duration-500 delay-75'
                            >
                                {t("FeaturesT.text3")}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedTutors;
