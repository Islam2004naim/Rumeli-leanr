import React, { useContext, useEffect, useState } from 'react'
import tutor1 from '../assets/tutor1.png'
import tutor2 from '../assets/tutor2.png'
import tutor3 from '../assets/tutor3.png'
import { useTranslation } from 'react-i18next'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'
import { FaStar } from 'react-icons/fa6'

export const Tutors = () => {
    const { subject } = useParams()
    const { t } = useTranslation();
    const { tutors, navigate } = useContext(AppContext)
    const [filterTutors, setFilterTutors] = useState([])



    const applyFilter = () => {
        if (subject) {
            setFilterTutors(tutors.filter(tutor => tutor.subject === subject))
        } else {
            setFilterTutors(tutors)
        }
    }

    useEffect(() => {
        applyFilter()
    }, [tutors, subject])

    return (
        <section className='min-h-screen bg-primary'>
            {/* Header Background Area (to make white header text visible) */}
            <div className='bg-tertiary h-24 md:h-28 w-full'></div>

            <div className='max-padd-container py-12'>
                <div className="flex flex-col items-center text-center mb-12">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
                        <h3 className="h2 capitalize text-tertiary mb-0">
                            {t("Tutors.title")}
                        </h3>
                        <div className="inline-flex items-center -space-x-4">
                            <img
                                src={tutor1}
                                alt=""
                                width={50}
                                height={50}
                                className="rounded-full shadow-lg ring-4 ring-white object-cover aspect-square z-10"
                            />
                            <img
                                src={tutor2}
                                alt=""
                                width={50}
                                height={50}
                                className="rounded-full shadow-lg ring-4 ring-white object-cover aspect-square z-20"
                            />
                            <img
                                src={tutor3}
                                alt=""
                                width={50}
                                height={50}
                                className="rounded-full shadow-lg ring-4 ring-white object-cover aspect-square z-30"
                            />
                        </div>
                    </div>

                    <p className="text-gray-30 max-w-2xl text-center text-sm md:text-base leading-relaxed">
                        {t("Tutors.ptext")}
                    </p>
                </div>

                {/* Categories/Filter Bar */}
                <div className='flexCenter bg-tertiary text-white rounded-2xl mb-12 flex-wrap py-2 md:py-3 px-4 md:px-10 shadow-xl overflow-hidden'>
                    <div className='flex flex-wrap items-center justify-center gap-x-1 md:gap-x-12'>
                        {['All', 'Mathematics', 'Science', 'Commerce', 'Computer', 'Languages', 'Arts'].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => cat === 'All' ? navigate('/tutors') : (subject === cat ? navigate('/tutors') : navigate(`/tutors/${cat}`))}
                                className={`px-4 py-3 md:px-4 md:py-4 cursor-pointer transition-all border-b-4 border-transparent text-sm md:text-base font-bold hover:text-secondary active:scale-95 whitespace-nowrap ${cat === 'All' && !subject ? "border-secondary text-secondary" : (subject === cat ? "border-secondary text-secondary" : "text-white/90")}`}
                            >
                                {t(`categories.${cat.toLowerCase()}`)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tutor Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {filterTutors.map((item, index) => (
                        <div
                            onClick={() => { navigate(`/sessions/${item._id}`); window.scrollTo(0, 0) }}
                            key={index}
                            className='group relative overflow-hidden rounded-2xl aspect-4/5 shadow-lg cursor-pointer bg-white'
                        >
                            {/* Background Image */}
                            <img
                                src={item.image}
                                alt={item.name}
                                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                            />

                            {/* Gradient Overlay */}
                            <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent' />

                            {/* Content at Bottom */}
                            <div className='absolute bottom-0 left-0 right-0 p-5 text-white'>
                                <div className='flex items-center gap-1.5 text-yellow-500 mb-1'>
                                    <FaStar className='text-sm' />
                                    <span className='text-sm font-bold text-white'>4.8</span>
                                </div>
                                <h5 className='text-lg font-bold leading-tight'>{item.name}</h5>
                                <p className='text-xs text-gray-300'>{t(`categories.${item.subject.toLowerCase()}`)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Tutors