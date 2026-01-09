import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { FaStar } from 'react-icons/fa6'

export const SimilarTutors = ({ tutId, subject }) => {

    const { tutors } = useContext(AppContext)
    const [filterTutors, setFilterTutors] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (tutors.length > 0 && subject) {
            const similar = tutors.filter((tutor) => tutor.subject === subject && tutor._id !== tutId)
            setFilterTutors(similar)
        }
    }, [tutors, tutId, subject])

    return (
        <section className='py-16'>
            <h3 className='h3 mb-10'>Similar Tutors</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {filterTutors.slice(0, 4).map((item, index) => (
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

                        {/* Text Content */}
                        <div className='absolute bottom-0 left-0 right-0 p-6 text-white'>
                            <div className='flexBetween mb-2'>
                                <h4 className='bold-18 line-clamp-1'>{item.name}</h4>
                                <div className='flexCenter gap-x-1'>
                                    <FaStar className='text-secondary' />
                                    <span className='bold-14'>4.8</span>
                                </div>
                            </div>
                            <p className='text-gray-20 text-xs font-semibold uppercase tracking-wider mb-2'>
                                {item.subject}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
