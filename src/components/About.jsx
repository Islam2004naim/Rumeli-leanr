import React from 'react'
import about from '../assets/about1.png'
import { FaArrowRight, FaChalkboard, FaClock, FaUsers } from 'react-icons/fa6'
import PlayButton from '../assets/playButton.png'
import { useTranslation } from 'react-i18next'

export const About = () => {
    const { t } = useTranslation();

    return (
        <section className='max-padd-container px-6 lg:px-12 py-16 xl:py-20 '>

            <div className='max-w-2xl mx-auto text-center pb-16 ' >
                <h3 className='h3'>
                    {t('About.h3')}
                </h3>

                <p>{t('About.text')}</p>
            </div>

            {/*----------------------------------------------------- */}

            <div className='flex flex-col lg:flex-row gap-12'>
                <div className='relative flex-1'>
                    <img src={about} alt="" className='rounded-3xl' />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                        <img src={PlayButton} alt="" height={66} width={66} />
                    </div>
                </div>

                {/*----------------------------------------------------- */}

                <div className='flex-1 flex flex-col justify-center gap-8'>
                    <div className='flex flex-col gap-4'>
                        <h4 className='h4'>
                            {t('About.h4')}
                        </h4>
                        <p className='text-gray-500'>  {t('About.text1')}</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <h5 className='h5'> {t('About.h5')}</h5>
                        <button className='btn-light text-tertiary flexCenter h-10 w-10 rounded-full'> <FaArrowRight /> </button>
                    </div>
                </div>
            </div>

            {/* Features Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 lg:mt-24'>
                {/* Card 1 */}
                <div className='flex flex-col gap-y-3 rounded-3xl bg-[#aedae6] p-8 shadow-sm hover:shadow-md transition-all'>
                    <FaChalkboard className='text-3xl text-tertiary' />
                    <h4 className='h5 font-bold'>
                        {t('About.h4_1')}
                    </h4>
                    <p className='text-sm text-gray-600'>
                        {t('About.text2')}
                    </p>
                </div>

                {/* Card 2 */}
                <div className='flex flex-col gap-y-3 rounded-3xl bg-[#aedbdb] p-8 shadow-sm hover:shadow-md transition-all'>
                    <FaClock className='text-3xl text-tertiary' />
                    <h4 className='h5 font-bold'>
                        {t('About.h4_2')}
                    </h4>
                    <p className='text-sm text-gray-600'>
                        {t('About.text3')}
                    </p>
                </div>

                {/* Card 3 */}
                <div className='flex flex-col gap-y-3 rounded-3xl bg-[#fff6c9] p-8 shadow-sm hover:shadow-md transition-all'>
                    <FaUsers className='text-3xl text-tertiary' />
                    <h4 className='h5 font-bold'>
                        {t('About.h4_3')}
                    </h4>
                    <p className='text-sm text-gray-600'>
                        {t('About.text4')}
                    </p>
                </div>
            </div>

        </section>
    )
}

export default About;
