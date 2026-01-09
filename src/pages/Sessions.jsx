import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { FaCircle, FaLocationDot } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next';
import { SimilarTutors } from '../components/SimilarTutors'
import SyllabusAccordion from '../components/SyllabusAccordion'

export const Sessions = () => {
    const { t } = useTranslation();
    const { tutId } = useParams()
    const { tutors, courses, currency, addToFavorites, favorites, enrollInCourse, enrolledCourses, bookSession } = useContext(AppContext)
    const [tutInfo, setTutInfo] = useState(null)
    const [isCourse, setIsCourse] = useState(false)
    const [tutSlots, setTutSlots] = useState([])
    const [slotIndex, setSlotIndex] = useState(0)
    const [slotTime, setSlotTime] = useState('')
    const [isBooked, setIsBooked] = useState(false)

    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

    const getAvailableSlots = async () => {
        setTutSlots([])
        let today = new Date()

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today)
            currentDate.setDate(today.getDate() + i)

            let endTime = new Date()
            endTime.setDate(today.getDate() + i)
            endTime.setHours(21, 0, 0, 0)

            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
            } else {
                currentDate.setHours(10)
                currentDate.setMinutes(0)
            }

            let timeSlots = []
            while (currentDate < endTime) {
                let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: formattedTime
                })
                currentDate.setMinutes(currentDate.getMinutes() + 30)
            }
            setTutSlots(prev => ([...prev, timeSlots]))
        }
    }

    const handleBooking = () => {
        if (!slotTime) {
            alert("Please select a time slot first.");
            return;
        }

        const slotDate = tutSlots[slotIndex][0].datetime.toDateString();
        bookSession(tutInfo._id || tutInfo.id, slotDate, slotTime);
        setIsBooked(true);
        setTimeout(() => setIsBooked(false), 3000); // Reset feedback after 3s
    }

    useEffect(() => {
        // Check tutors first
        let item = tutors.find((t) => t._id === tutId)
        if (item) {
            setTutInfo(item)
            setIsCourse(false)
        } else {
            // Check courses
            item = courses.find((c) => c.id.toString() === tutId)
            if (item) {
                setTutInfo({
                    ...item,
                    name: item.title,
                    qualification: item.instructor,
                    experience: "Expert",
                    subject: item.category,
                    fees: item.price,
                    location: { city: "Online", country: "Platform" },
                    about: item.description,
                    _id: item.id.toString()
                })
                setIsCourse(true)
            }
        }
    }, [tutors, courses, tutId])

    useEffect(() => {
        if (tutInfo && !isCourse) {
            getAvailableSlots()
        }
    }, [tutInfo, isCourse])

    const isFavorite = favorites.includes(tutInfo?._id?.toString() || tutInfo?.id?.toString());
    const isEnrolled = enrolledCourses.includes(tutInfo?._id?.toString() || tutInfo?.id?.toString());

    return (
        <section className='min-h-screen bg-primary'>
            <div className='bg-tertiary h-24 md:h-28 w-full'></div>

            <div className='w-full px-6 lg:px-12 py-12'>
                {tutInfo ? (
                    <div className='max-w-[1600px] mx-auto'>
                        <div className='flex flex-col lg:flex-row gap-12 mb-12 bg-white p-6 md:p-10 rounded-3xl shadow-sm'>
                            {/* Left: Image */}
                            <div className='w-full lg:w-1/3'>
                                <img
                                    src={tutInfo.image}
                                    alt={tutInfo.name}
                                    className='w-full rounded-2xl object-cover aspect-square bg-primary shadow-sm'
                                />

                                <div className='mt-6 flex gap-4'>
                                    <button
                                        onClick={() => addToFavorites(tutInfo._id || tutInfo.id.toString())}
                                        className={`flex-1 py-3 px-6 rounded-full font-bold transition-all border ${isFavorite ? 'bg-red-500 text-white border-red-500' : 'bg-white text-gray-400 border-gray-100'}`}
                                    >
                                        {isFavorite ? 'Removed from Favorites' : 'Add to Favorites'}
                                    </button>
                                </div>
                            </div>

                            {/* Right: Details & Slots */}
                            <div className='w-full lg:w-2/3'>
                                {/* Header Info: Name & Status */}
                                <div className='flex items-center gap-x-4 mb-1'>
                                    <h2 className='h2 mb-0'>{tutInfo.name}</h2>
                                    <div className='flex items-center gap-1 bg-gray-5 px-3 py-1 rounded-full border border-gray-100'>
                                        <FaCircle className={`text-[8px] ${isCourse ? 'text-green-500' : 'text-red-500'}`} />
                                        <span className='text-xs font-bold text-gray-400'>{isCourse ? "Available Now" : t("Sessions.unavailable")}</span>
                                    </div>
                                </div>
                                <p className='bold-18 text-tertiary mb-6'>{tutInfo.qualification}</p>

                                {/* Info Bar Box */}
                                <div className='grid grid-cols-1 md:grid-cols-3 gap-0 mb-14 bg-gray-5 w-full md:w-max rounded-4xl p-6 md:p-12 border-2 border-gray-100 shadow-sm'>
                                    <div className='px-6 md:px-20 border-b md:border-b-0 md:border-r-2 border-gray-100 py-4 md:py-0'>
                                        <p className='text-[14px] md:text-[17px] text-gray-400 font-bold mb-2 md:mb-4 uppercase tracking-widest'>{isCourse ? "RATING" : t("Sessions.text")}</p>
                                        <p className='text-2xl md:text-3xl font-black text-tertiary'>{isCourse ? tutInfo.rating : tutInfo.experience}</p>
                                    </div>
                                    <div className='px-6 md:px-20 border-b md:border-b-0 md:border-r-2 border-gray-100 py-4 md:py-0'>
                                        <p className='text-[14px] md:text-[17px] text-gray-400 font-bold mb-2 md:mb-4 uppercase tracking-widest'>{t("Sessions.subject")}</p>
                                        <p className='text-2xl md:text-3xl font-black text-tertiary'>{tutInfo.subject}</p>
                                    </div>
                                    <div className='px-6 md:px-20 py-4 md:py-0'>
                                        <p className='text-[14px] md:text-[17px] text-gray-400 font-bold mb-2 md:mb-4 uppercase tracking-widest'>{t("Sessions.text1")}</p>
                                        <p className='text-2xl md:text-3xl font-black text-tertiary'>{currency}{tutInfo.fees}{isCourse ? "" : t("Sessions.text2")}</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className='flex items-center gap-2 text-gray-400 mb-10'>
                                    <FaLocationDot className='text-sm' />
                                    <span className='text-sm font-medium'>{tutInfo.location.city}, {tutInfo.location.country}</span>
                                </div>

                                {/* About Me */}
                                <div className='mb-12'>
                                    <h4 className='bold-20 mb-3'>{isCourse ? "Course Description" : t("Sessions.text4")}</h4>
                                    <p className='text-gray-30 leading-relaxed text-[15px] font-medium'>
                                        {tutInfo.about}
                                    </p>
                                </div>

                                {isCourse ? (
                                    <div className='mt-8'>
                                        <SyllabusAccordion syllabus={tutInfo.syllabus} />

                                        <div className='mt-12'>
                                            <button
                                                onClick={() => enrollInCourse(tutInfo._id || tutInfo.id.toString())}
                                                disabled={isEnrolled}
                                                className={`btn-secondary w-full md:w-max px-12 py-5 rounded-full font-bold shadow-lg transition-all text-lg ${isEnrolled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-secondary text-tertiary active:scale-95'}`}
                                            >
                                                {isEnrolled ? "Already Enrolled" : "Enroll Now"}
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    /* Booking Slots for Tutors */
                                    <div>
                                        <h4 className='bold-20 mb-6'>{t("Sessions.bookingSlots")}</h4>

                                        {/* Days Picker */}
                                        <div className='flex gap-4 overflow-x-auto pb-4 no-scrollbar'>
                                            {tutSlots.length > 0 && tutSlots.map((item, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => setSlotIndex(index)}
                                                    className={`flex flex-col items-center justify-center min-w-[72px] py-6 rounded-3xl cursor-pointer transition-all border ${slotIndex === index ? 'bg-secondary text-tertiary border-secondary shadow-md' : 'bg-white text-gray-400 border-gray-100'}`}
                                                >
                                                    <p className='text-xs font-bold mb-1'>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                                                    <p className='text-lg font-bold'>{item[0] && item[0].datetime.getDate()}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Times Picker */}
                                        <div className='flex flex-wrap gap-3 py-8'>
                                            {tutSlots.length > 0 && tutSlots[slotIndex].length > 0 && tutSlots[slotIndex].map((item, index) => (
                                                <p
                                                    key={index}
                                                    onClick={() => setSlotTime(item.time)}
                                                    className={`text-[13px] font-bold px-5 py-2.5 rounded-full cursor-pointer border transition-all whitespace-nowrap ${item.time === slotTime ? 'bg-secondary text-tertiary border-secondary' : 'bg-white text-gray-300 border-gray-100 hover:border-secondary'}`}
                                                >
                                                    {item.time.toLowerCase()}
                                                </p>
                                            ))}
                                        </div>

                                        {/* Final Action Button */}
                                        <button
                                            onClick={handleBooking}
                                            disabled={isBooked}
                                            className={`btn-secondary mt-2 px-10 py-4 rounded-full font-bold shadow-md active:scale-95 transition-all text-tertiary ${isBooked ? 'bg-green-500 text-white' : 'bg-secondary'}`}
                                        >
                                            {isBooked ? "Booking Successful!" : "Book a Session"}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Similar Tutors / Recommended Courses */}
                        {!isCourse && <SimilarTutors tutId={tutId} subject={tutInfo.subject} />}
                    </div>
                ) : (
                    <div className='flexCenter h-[50vh]'>
                        <p className='h4 text-gray-30'>{t("Sessions.text6")}</p>
                    </div>
                )}
            </div>
        </section>
    )
}
