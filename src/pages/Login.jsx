import React, { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import loginImg from '../assets/login.png'
import { AppContext } from '../context/AppContext'

export const Login = () => {
    const { t } = useTranslation()
    const [state, setState] = useState('Login')
    const { setToken, navigate } = useContext(AppContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        // Simulate login
        setToken('dummytoken')
        navigate('/')
    }

    return (
        <section className='min-h-screen flex flex-col md:flex-row bg-white'>
            {/* Left Side: Image */}
            <div className='hidden md:block md:w-[50%] h-screen'>
                <img
                    src={loginImg}
                    alt="Login Illustration"
                    className='w-full h-full object-cover'
                />
            </div>

            {/* Right Side: Form */}
            <div className='flex-1 flexCenter p-8 md:p-20'>
                <div className='w-full max-w-[450px] flex flex-col gap-y-10'>
                    <h2 className='text-4xl font-bold text-tertiary'>{state === 'Login' ? t('auth.login') : t('auth.signup')}</h2>

                    <form onSubmit={onSubmitHandler} className='flex flex-col gap-5'>
                        {state === 'Sign Up' && (
                            <div className='flex flex-col gap-2'>
                                <label className='text-sm font-medium text-gray-700'>{t('auth.fullName')}</label>
                                <input
                                    type="text"
                                    placeholder={t('auth.fullName')}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className='bg-[#F8F9FA] border border-gray-100 rounded-lg px-4 py-3.5 outline-none focus:border-tertiary transition-all text-sm'
                                    required
                                />
                            </div>
                        )}

                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-medium text-gray-700'>{t('auth.email')}</label>
                            <input
                                type="email"
                                placeholder={t('auth.email')}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='bg-[#F8F9FA] border border-gray-100 rounded-lg px-4 py-3.5 outline-none focus:border-tertiary transition-all text-sm'
                                required
                            />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-sm font-medium text-gray-700'>{t('auth.password')}</label>
                            <input
                                type="password"
                                placeholder={t('auth.password')}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='bg-[#F8F9FA] border border-gray-100 rounded-lg px-4 py-3.5 outline-none focus:border-tertiary transition-all text-sm'
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className='bg-[#333333] text-white py-3.5 rounded-lg font-bold shadow-md hover:bg-black transition-all active:scale-95 mt-4'
                        >
                            {state === 'Login' ? t('auth.login') : t('auth.createAccount')}
                        </button>
                    </form>

                    <div className='flex flex-col gap-3'>
                        <p className='text-sm text-tertiary font-semibold cursor-pointer hover:underline w-max'>
                            {t('auth.forgotPassword')}
                        </p>

                        {state === 'Login' ? (
                            <p className='text-sm text-gray-500 font-medium'>
                                {t('auth.dontHaveAccount')}{' '}
                                <span
                                    onClick={() => setState('Sign Up')}
                                    className='text-tertiary font-bold cursor-pointer hover:underline ml-1'
                                >
                                    {t('auth.createAccount')}
                                </span>
                            </p>
                        ) : (
                            <p className='text-sm text-gray-500 font-medium'>
                                {t('auth.alreadyAccount')}{' '}
                                <span
                                    onClick={() => setState('Login')}
                                    className='text-tertiary font-bold cursor-pointer hover:underline ml-1'
                                >
                                    {t('auth.loginHere')}
                                </span>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
