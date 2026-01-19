import React from 'react'
import { FaUserFriends, FaClock, FaUserSecret } from "react-icons/fa"
import { useTranslation } from 'react-i18next';
import { BsClipboardFill } from "react-icons/bs"

export const Features = () => {
    const { t } = useTranslation();

    return (

        <section className='mx-auto max-w-[1140px] px-10 lg:px-8  relative bottom-5 flex flex-col gap-y-6 translate-x-5'>


            <div className='flex flex-wrap bg-light rounded-3xl p-10 shadow-sm'>
                <div className='flex flex-col gap-y-2 p-2 rounded-xl max-w-[233px]'>
                    <FaUserSecret className='text-xl mb-2 mt-4' />
                    <h5 className='text-xl mb-2 font-bold mt-4'>
                        {t("features.title")}
                    </h5>
                    <p>{t("features.Lorem")}</p>

                </div>
            </div>


            <div className='flex flex-wrap bg-red-500 text-white rounded-3xl p-10 shadow-md'>
                <div className='flex flex-col gap-y-2 p-2 rounded-xl max-w-[233px]'>
                    <FaClock className='text-xl mb-2 mt-4' />
                    <h5 className='text-xl mb-2 font-bold mt-4'>
                        {t("features.text1")}
                    </h5>

                </div>
            </div>

            {/* الكرت الثالث */}
            <div className='flex flex-wrap gap-x-4 bg-light rounded-3xl p-10 shadow-sm'>
                <div className='flex flex-col gap-y-2 p-2 rounded-xl max-w-[233px]'>
                    <BsClipboardFill className='text-xl mb-2 mt-4' />
                    <h5 className='text-xl mb-2 font-bold mt-4'>
                        {t("features.text2")}
                    </h5>

                </div>
            </div>

            <div className='flex flex-wrap gap-x-4 bg-light rounded-3xl p-10 shadow-sm'>
                <div className='flex flex-col gap-y-2 p-2 rounded-xl max-w-[233px]'>
                    <FaUserFriends className='text-xl mb-2 mt-4' />
                    <h5 className='text-xl mb-2 font-bold mt-4'>
                        {t("features.text3")}
                    </h5>

                </div>
            </div>

        </section>
    )
}
export default Features;
