import React, { useState, useContext } from 'react'
import { useTranslation } from 'react-i18next'
import uploadIcon from '../assets/upload_icon.png'
import { AppContext } from '../context/AppContext'

export const MyProfil = () => {
    const { t } = useTranslation()
    const [isEditing, setIsEditing] = useState(false)
    const { userData, setUserData } = useContext(AppContext)

    // Handle image change for preview
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUserData(prev => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <section className='min-h-screen bg-primary/30 flex flex-col'>
            {/* Header Background Spacing */}
            <div className='bg-tertiary h-24 md:h-28 w-full shrink-0'></div>

            <div className='flex-1 flexCenter p-4 md:p-10'>
                <div className='bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 w-full max-w-[800px] flex flex-col items-center'>

                    {/* Profile Header */}
                    <div className='flex flex-col items-center text-center gap-4 mb-8'>
                        <div className='relative w-40 h-40 group'>
                            <img
                                src={userData.image}
                                alt="Profile"
                                className={`w-40 h-40 rounded-2xl object-cover shadow-lg border-4 border-white ${isEditing ? 'opacity-70 border-dashed border-secondary' : ''}`}
                            />
                            {isEditing && (
                                <label htmlFor='image' className='absolute inset-0 flexCenter cursor-pointer'>
                                    <div className='flex flex-col items-center bg-black/20 w-full h-full rounded-2xl'>
                                        <div className='mt-12 flex flex-col items-center'>
                                            <img src={uploadIcon} alt="" className='w-10 invert opacity-90' />
                                            <p className='text-sm font-bold text-white mt-1'>{t('profile.upload')}</p>
                                        </div>
                                    </div>
                                    <input type="file" id="image" hidden onChange={handleImageChange} accept="image/*" />
                                </label>
                            )}
                        </div>

                        <div className='mt-2'>
                            {isEditing ? (
                                <div className='flex flex-col items-center gap-3'>
                                    <input
                                        type="text"
                                        value={userData.name}
                                        className='h2 !mb-0 text-center bg-primary/20 px-4 py-2 rounded-xl outline-none w-full max-w-sm border border-gray-100 focus:border-secondary transition-all font-bold'
                                        onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                                        placeholder={t('profile.name_ph')}
                                    />
                                    <input
                                        type="email"
                                        value={userData.email}
                                        className='text-gray-30 text-base text-center bg-primary/20 px-4 py-2 rounded-xl outline-none w-full max-w-sm border border-gray-100 focus:border-secondary transition-all font-medium'
                                        onChange={(e) => setUserData(prev => ({ ...prev, email: e.target.value }))}
                                        placeholder={t('profile.email_ph')}
                                    />
                                </div>
                            ) : (
                                <>
                                    <h2 className='h2 mb-1'>{userData.name}</h2>
                                    <p className='text-gray-30 text-lg font-medium'>{userData.email}</p>
                                </>
                            )}
                        </div>
                    </div>

                    <div className='w-full h-px bg-gray-100 mb-8'></div>

                    {/* Details Sections */}
                    <div className='w-full space-y-10 max-w-2xl'>

                        {/* Personal Details */}
                        <div className='space-y-6'>
                            <div className='flex items-center gap-4'>
                                <h3 className='text-lg font-bold text-gray-400 uppercase tracking-widest'>{t('profile.title')}</h3>
                                <div className='flex-1 h-px bg-gray-50'></div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-[180px_1fr] items-center gap-4 md:gap-x-10'>
                                <p className='font-bold text-tertiary md:text-right'>{t('profile.fullName')}</p>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={userData.name}
                                        className='bg-primary/20 border border-gray-100 rounded-xl px-5 py-3 outline-none focus:border-secondary transition-all w-full font-medium'
                                        onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                                    />
                                ) : (
                                    <p className='text-tertiary font-semibold bg-primary/10 px-6 py-3 rounded-xl border border-gray-50 text-center md:text-left'>{userData.name}</p>
                                )}

                                <p className='font-bold text-tertiary md:text-right'>{t('profile.phone')}</p>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={userData.phone}
                                        className='bg-primary/20 border border-gray-100 rounded-xl px-5 py-3 outline-none focus:border-secondary transition-all w-full font-medium'
                                        onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                                    />
                                ) : (
                                    <p className='text-tertiary font-semibold bg-primary/10 px-6 py-3 rounded-xl border border-gray-50 text-center md:text-left'>{userData.phone}</p>
                                )}

                                <p className='font-bold text-tertiary md:text-right'>{t('profile.dob')}</p>
                                {isEditing ? (
                                    <input
                                        type="date"
                                        value={userData.dob}
                                        className='bg-primary/20 border border-gray-100 rounded-xl px-5 py-3 outline-none focus:border-secondary transition-all w-full font-medium'
                                        onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                                    />
                                ) : (
                                    <p className='text-tertiary font-semibold bg-primary/10 px-6 py-3 rounded-xl border border-gray-50 text-center md:text-left'>{userData.dob}</p>
                                )}

                                <p className='font-bold text-tertiary md:text-right'>{t('profile.gender')}</p>
                                {isEditing ? (
                                    <select
                                        value={userData.gender}
                                        className='bg-primary/20 border border-gray-100 rounded-xl px-5 py-3 outline-none focus:border-secondary transition-all w-full font-medium cursor-pointer'
                                        onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                                    >
                                        <option value="Male">{t('profile.male')}</option>
                                        <option value="Female">{t('profile.female')}</option>
                                        <option value="Other">{t('profile.other')}</option>
                                    </select>
                                ) : (
                                    <p className='text-tertiary font-semibold bg-primary/10 px-6 py-3 rounded-xl border border-gray-50 text-center md:text-left'>{t(`profile.${userData.gender.toLowerCase()}`)}</p>
                                )}
                            </div>
                        </div>

                        {/* Location Details */}
                        <div className='space-y-6'>
                            <div className='flex items-center gap-4'>
                                <h3 className='text-lg font-bold text-gray-400 uppercase tracking-widest'>{t('profile.locationTitle')}</h3>
                                <div className='flex-1 h-px bg-gray-50'></div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-[180px_1fr] items-center gap-4 md:gap-x-10'>
                                <p className='font-bold text-tertiary md:text-right'>{t('profile.city')}</p>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={userData.address.city}
                                        className='bg-primary/20 border border-gray-100 rounded-xl px-5 py-3 outline-none focus:border-secondary transition-all w-full font-medium'
                                        onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, city: e.target.value } }))}
                                    />
                                ) : (
                                    <p className='text-tertiary font-semibold bg-primary/10 px-6 py-3 rounded-xl border border-gray-50 text-center md:text-left'>{userData.address.city}</p>
                                )}

                                <p className='font-bold text-tertiary md:text-right'>{t('profile.country')}</p>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={userData.address.country}
                                        className='bg-primary/20 border border-gray-100 rounded-xl px-5 py-3 outline-none focus:border-secondary transition-all w-full font-medium'
                                        onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, country: e.target.value } }))}
                                    />
                                ) : (
                                    <p className='text-tertiary font-semibold bg-primary/10 px-6 py-3 rounded-xl border border-gray-50 text-center md:text-left'>{userData.address.country}</p>
                                )}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className='flexCenter pt-6'>
                            {isEditing ? (
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className='btn-secondary px-16 py-4 rounded-2xl font-bold shadow-xl active:scale-95 transition-all text-base uppercase tracking-widest'
                                >
                                    {t('profile.save')}
                                </button>
                            ) : (
                                <button
                                    onClick={() => setIsEditing(true)}
                                    className='btn-tertiary border-2 border-tertiary px-16 py-4 rounded-2xl font-bold shadow-md active:scale-95 transition-all text-base uppercase tracking-widest text-tertiary hover:bg-tertiary hover:text-white'
                                >
                                    {t('profile.edit')}
                                </button>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
