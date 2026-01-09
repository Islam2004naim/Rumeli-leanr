import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom' // Assuming navigate is used

export const MySessions = () => {

    const { tutors, courses, currency, token, bookedSessions, cancelSession, enrolledCourses, unenrollFromCourse } = useContext(AppContext)
    const { t } = useTranslation()
    const navigate = useNavigate(); // Initialize useNavigate

    // Helper to get tutor details by ID
    const getTutorData = (id) => tutors.find(t =>
        (t._id && t._id.toString() === id.toString()) ||
        (t.id && t.id.toString() === id.toString())
    );

    // Helper to get course details by ID
    const getCourseData = (id) => courses.find(c =>
        (c.id && c.id.toString() === id.toString()) ||
        (c._id && c._id.toString() === id.toString())
    );

    return (
        <section className='min-h-screen bg-primary/30'>
            {/* Header Background Spacing */}
            <div className='bg-tertiary h-24 md:h-28 w-full shrink-0'></div>

            <div className='max-padd-container py-12'>
                <h2 className='h2 mb-10'>
                    {t('mySessions.title')}
                </h2>

                <div className='flex flex-col gap-6'>
                    {/* Render Booked Sessions (Tutors) */}
                    {bookedSessions.map((session, i) => {
                        const tutor = getTutorData(session.tutorId);
                        if (!tutor) return null;

                        return (
                            <div key={`session-${session.id}`} className="bg-white p-4 md:px-6 md:py-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                                <div className="flex flex-col md:flex-row gap-6 w-full items-center md:items-start">
                                    <div className="relative h-32 w-28 shrink-0 overflow-hidden rounded-xl bg-primary/20">
                                        <img src={tutor.image} alt={tutor.name} className='w-full h-full object-cover' />
                                        <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Session</div>
                                    </div>

                                    <div className='flex-1 flex flex-col gap-2 w-full text-center md:text-left'>
                                        <h5 className='h4 capitalize mb-0! text-tertiary'>{tutor.name}</h5>
                                        <p className='text-secondary font-bold text-sm tracking-wide uppercase'>{tutor.subject}</p>
                                        <p className='text-sm text-gray-30'>
                                            <span className='font-bold text-tertiary'>{t('mySessions.dateTime')}</span> {session.slotDate} | {session.slotTime}
                                        </p>
                                    </div>

                                    <div className='flex flex-col items-center md:items-end justify-between gap-4 md:h-32 py-1'>
                                        <div className='text-lg font-bold text-tertiary bg-primary/30 px-4 py-1 rounded-lg'>
                                            {currency}{tutor.fees || tutor.price}
                                        </div>
                                        <div className='flex gap-3'>
                                            <button
                                                onClick={() => cancelSession(session.id)}
                                                className='px-6 py-2 rounded-full text-sm font-bold bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 transition-all active:scale-95 whitespace-nowrap'
                                            >
                                                {t('mySessions.cancel')}
                                            </button>
                                            <button className='btn-secondary px-8 py-2 rounded-xl text-sm font-bold'>{t('mySessions.pay')}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Render Enrolled Courses */}
                    {enrolledCourses.map((courseId, i) => {
                        const course = getCourseData(courseId);
                        if (!course) return null;

                        return (
                            <div key={`course-${courseId}`} className="bg-white p-4 md:px-6 md:py-4 rounded-2xl shadow-sm border border-gray-100 border-l-4 border-l-green-500 hover:shadow-md transition-all">
                                <div className="flex flex-col md:flex-row gap-6 w-full items-center md:items-start">
                                    <div className="relative h-32 w-28 shrink-0 overflow-hidden rounded-xl bg-primary/20">
                                        <img src={course.image} alt={course.title} className='w-full h-full object-cover' />
                                        <div className="absolute top-2 left-2 bg-green-500 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">Course</div>
                                    </div>

                                    <div className='flex-1 flex flex-col gap-2 w-full text-center md:text-left'>
                                        <h5 className='h4 capitalize mb-0! text-tertiary'>{course.title}</h5>
                                        <p className='text-gray-400 font-bold text-sm'>Instructor: <span className='text-tertiary'>{course.instructor}</span></p>
                                        <p className='text-sm text-green-600 font-bold'>Status: Enrolled & Access Granted</p>
                                    </div>

                                    <div className='flex flex-col items-center md:items-end justify-center gap-4 md:h-32 py-1'>
                                        <div className='text-lg font-bold text-tertiary bg-green-50 px-4 py-1 rounded-lg border border-green-100'>
                                            {currency}{course.price}
                                        </div>
                                        <div className='flex gap-2 w-full'>
                                            <button
                                                onClick={() => unenrollFromCourse(courseId)}
                                                className='px-6 py-2 rounded-full text-sm font-bold bg-red-50 text-red-500 border border-red-100 hover:bg-red-100 transition-all active:scale-95 whitespace-nowrap'
                                            >
                                                {t('mySessions.cancel')}
                                            </button>
                                            <button className='btn-secondary bg-green-500 text-white flex-1 py-3 rounded-xl text-sm font-bold shadow-md hover:bg-green-600 transition-all'>
                                                Start Learning
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {bookedSessions.length === 0 && enrolledCourses.length === 0 && (
                        <div className='flexCenter flex-col py-20 bg-white rounded-3xl border border-dashed border-gray-200'>
                            <p className='text-gray-30 text-lg font-medium'>{t('mySessions.noSessions')}</p>
                            <button onClick={() => navigate('/tutors')} className='btn-secondary mt-6 px-10 py-3 rounded-full font-bold shadow-lg'>{t('mySessions.bookFirst')}</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
