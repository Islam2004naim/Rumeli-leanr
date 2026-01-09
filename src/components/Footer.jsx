import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6'

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10 mt-20">
            <div className="max-padd-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* ABOUT SECTION */}
                    <div className="flex flex-col gap-6">
                        <Link to={'/'} className="bold-24 flex items-center gap-x-2">
                            <span className="inline-flex items-center justify-center h-10 w-10 bg-secondary text-white rounded-full italic">
                                R
                            </span>
                            <span className="text-secondary italic">umeli Learn</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {t("Footer.ptext")}
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a href="#" className="w-9 h-9 bg-white/5 rounded-full flexCenter hover:bg-secondary hover:text-white transition-all">
                                <FaFacebook />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/5 rounded-full flexCenter hover:bg-secondary hover:text-white transition-all">
                                <FaTwitter />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/5 rounded-full flexCenter hover:bg-secondary hover:text-white transition-all">
                                <FaInstagram />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white/5 rounded-full flexCenter hover:bg-secondary hover:text-white transition-all">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4 className="h4 mb-6 text-white border-b border-white/10 pb-2 inline-block">Explore</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li>
                                <Link to="/" className="hover:text-white transition flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                    {t("home")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/tutors" className="hover:text-white transition flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                    {t("tutors")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="hover:text-white transition flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                    {t("blog")}
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-white transition flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                                    {t("contact")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* SUBJECTS */}
                    <div>
                        <h4 className="h4 mb-6 text-white border-b border-white/10 pb-2 inline-block">Subjects</h4>
                        <ul className="space-y-3 text-gray-400 text-sm underline-offset-4">
                            <li className="hover:text-white cursor-pointer transition">{t("Footer.text")}</li>
                            <li className="hover:text-white cursor-pointer transition">{t("Footer.text1")}</li>
                            <li className="hover:text-white cursor-pointer transition">{t("Footer.text2")}</li>
                            <li className="hover:text-white cursor-pointer transition">{t("Footer.text3")}</li>
                        </ul>
                    </div>

                    {/* CONTACT INFO */}
                    <div>
                        <h4 className="h4 mb-6 text-white border-b border-white/10 pb-2 inline-block">Get in Touch</h4>
                        <div className="space-y-4 text-gray-400 text-sm">
                            <div className="flex flex-col">
                                <span className="text-white font-medium">{t("Footer.text4")}</span>
                                <p>+90-000-000-000</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-medium">{t("Footer.text5")}</span>
                                <p>support@rumelilearn.com</p>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white font-medium">{t("Footer.text6")}</span>
                                <p>Istanbul, Turkey</p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="border-none h-px bg-white/10" />

                <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
                    <p>© {new Date().getFullYear()} {t("Footer.text7")}</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition">{t("Footer.text8")}</a>
                        <a href="#" className="hover:text-white transition">{t("Footer.text9")}</a>
                        <a href="#" className="hover:text-white transition">{t("Footer.text10")}</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;