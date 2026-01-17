import React from 'react'
import { Link } from 'react-router-dom'
import { subjectsData } from "../assets/data"
import { useTranslation } from 'react-i18next'

export const Subjects = () => {
    const { t } = useTranslation();

    return (
        <section className='max-padd-container py-10 xl:py-25  '>
            {/* Header section */}
            <div className='max-w-[800px] mx-auto text-center mb-16'>
                <h3 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    {t("subjects.h3")}
                </h3>               <p className='text-gray-500 text-lg'>{t("subjects.p")}</p>
            </div>

            {/* Subjects grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-12'>
                {subjectsData.map((subject, i) => (
                    <Link
                        to={`/tutors/${subject.name}`}
                        key={i}
                        className='flex flex-col items-center group '
                    >
                        <div className='w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center bg-white rounded-2xl shadow-sm border border-transparent group-hover:border-secondary/20 group-hover:shadow-md transition-all duration-300 mb-4'>
                            <img
                                src={subject.image}
                                alt={subject.name}
                                className='w-14 h-14 sm:w-16 sm:h-16 object-contain'
                            />
                        </div>
                        <h5 className='text-base font-semibold text-tertiary group-hover:text-secondary transition-colors text-center'>
                            {t(`categories.${subject.name.toLowerCase()}`)}
                        </h5>
                    </Link>
                ))}
            </div>
        </section>
    )
}
export default Subjects;
