import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaLocationDot, FaEnvelope, FaPhone, FaHeadset } from 'react-icons/fa6'

export const Contact = () => {
    const { t } = useTranslation()

    return (
        <section className='min-h-screen bg-primary'>
            {/* Header Background */}
            <div className='bg-tertiary h-24 md:h-28 w-full'></div>

            <div className='w-full px-6 lg:px-12 py-16'>
                <div className='bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-gray-100 w-full max-w-[1700px] mx-auto'>
                    <div className='flex flex-col lg:flex-row gap-16 lg:gap-32'>

                        {/* Left Side: Contact Form */}
                        <div className='flex-1 lg:max-w-[50%]'>
                            <h2 className='h2 mb-4'>
                                {t('Contact.h1_1')} <span className='text-gray-30 font-normal'>{t('Contact.h1_2')}</span>
                            </h2>
                            <p className='text-gray-30 mb-10 max-w-2xl text-base leading-relaxed'>
                                {t('Contact.p')}
                            </p>

                            <form className='flex flex-col gap-6' onSubmit={(e) => e.preventDefault()}>
                                <div className='flex flex-col md:flex-row gap-6'>
                                    <input
                                        type="text"
                                        placeholder={t('Contact.name_ph')}
                                        className='flex-1 bg-primary/40 border border-gray-100 rounded-2xl px-6 py-5 outline-none focus:border-secondary transition-all text-sm font-medium focus:ring-4 focus:ring-secondary/10'
                                    />
                                    <input
                                        type="email"
                                        placeholder={t('Contact.email_ph')}
                                        className='flex-1 bg-primary/40 border border-gray-100 rounded-2xl px-6 py-5 outline-none focus:border-secondary transition-all text-sm font-medium focus:ring-4 focus:ring-secondary/10'
                                    />
                                </div>
                                <textarea
                                    rows="10"
                                    placeholder={t('Contact.msg_ph')}
                                    className='bg-primary/40 border border-gray-100 rounded-2xl px-6 py-5 outline-none focus:border-secondary transition-all text-sm font-medium resize-none focus:ring-4 focus:ring-secondary/10'
                                ></textarea>
                                <button
                                    type="submit"
                                    className='btn-secondary w-full md:w-max px-16 py-5 rounded-2xl font-bold shadow-lg active:scale-95 transition-all mt-4 text-base'
                                >
                                    {t('Contact.btn')}
                                </button>
                            </form>
                        </div>

                        {/* Right Side: Contact Details */}
                        <div className='flex-1'>
                            <h2 className='h2 mb-4'>
                                {t('Contact.h2_1')} <span className='text-gray-30 font-normal'>{t('Contact.h2_2')}</span>
                            </h2>
                            <p className='text-gray-30 mb-12 max-w-xl text-base leading-relaxed'>
                                {t('Contact.p1')}
                            </p>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16'>
                                {/* Location */}
                                <div className='flex items-start gap-6'>
                                    <div className='p-5 bg-primary/40 rounded-2xl border border-gray-100 shadow-sm'>
                                        <FaLocationDot className='text-secondary text-2xl' />
                                    </div>
                                    <div>
                                        <h4 className='bold-18 mb-2 whitespace-nowrap'>{t('Contact.location')}</h4>
                                        <p className='text-gray-30 text-base leading-relaxed'>{t('Contact.loc_val')}</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className='flex items-start gap-6'>
                                    <div className='p-5 bg-primary/40 rounded-2xl border border-gray-100 shadow-sm'>
                                        <FaEnvelope className='text-secondary text-2xl' />
                                    </div>
                                    <div>
                                        <h4 className='bold-18 mb-2 whitespace-nowrap'>{t('Contact.email')}</h4>
                                        <p className='text-gray-30 text-base leading-relaxed'>{t('Contact.email_val')}</p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className='flex items-start gap-6'>
                                    <div className='p-5 bg-primary/40 rounded-2xl border border-gray-100 shadow-sm'>
                                        <FaPhone className='text-secondary text-2xl' />
                                    </div>
                                    <div>
                                        <h4 className='bold-18 mb-2 whitespace-nowrap'>{t('Contact.phone')}</h4>
                                        <p className='text-gray-30 text-base leading-relaxed'>{t('Contact.phone_val')}</p>
                                    </div>
                                </div>

                                {/* Support */}
                                <div className='flex items-start gap-6'>
                                    <div className='p-5 bg-primary/40 rounded-2xl border border-gray-100 shadow-sm'>
                                        <FaHeadset className='text-secondary text-2xl' />
                                    </div>
                                    <div>
                                        <h4 className='bold-18 mb-2 whitespace-nowrap'>{t('Contact.support')}</h4>
                                        <p className='text-gray-30 text-base leading-relaxed'>{t('Contact.support_val')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
