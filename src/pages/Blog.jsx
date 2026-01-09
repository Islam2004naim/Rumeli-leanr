import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { blogs } from '../assets/data'

export const Blog = () => {
    const { t } = useTranslation()
    const [category, setCategory] = useState('All')

    const categories = ['All', 'Productivity', 'E-Learning', 'Tutoring', 'EdTech', 'Study Skills', 'Technology', 'Resources', 'Online Learning']

    const filteredBlogs = category === 'All'
        ? blogs
        : blogs.filter(blog => blog.category === category)

    return (
        <section className='min-h-screen bg-primary'>
            {/* Header Background */}
            <div className='bg-tertiary h-24 md:h-28 w-full'></div>

            <div className='max-padd-container py-16'>
                {/* Page Title */}
                <div className='text-center mb-12'>
                    <h1 className='h1 mb-4'>{t('blogPage.title')}</h1>
                    <p className='text-gray-30 max-w-2xl mx-auto'>
                        {t('blogPage.description')}
                    </p>
                </div>

                {/* Category Filter */}
                <div className='flex flex-wrap gap-3 justify-center mb-12'>
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setCategory(cat)}
                            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all ${category === cat
                                ? 'bg-secondary text-tertiary shadow-md'
                                : 'bg-white text-gray-30 hover:bg-gray-5 border border-gray-100'
                                }`}
                        >
                            {t(`categories.${cat.toLowerCase()}`)}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {filteredBlogs.map((blog, index) => (
                        <div
                            key={index}
                            className='group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer'
                        >
                            {/* Blog Image */}
                            <div className='relative overflow-hidden aspect-[4/3]'>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                />
                                {/* Category Badge */}
                                <div className='absolute top-4 left-4'>
                                    <span className='bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-tertiary shadow-md'>
                                        {t(`categories.${blog.category.toLowerCase()}`)}
                                    </span>
                                </div>
                            </div>

                            {/* Blog Content */}
                            <div className='p-6'>
                                <h3 className='bold-18 mb-3 line-clamp-2 group-hover:text-secondary transition-colors'>
                                    {blog.title}
                                </h3>
                                <p className='text-gray-30 text-sm mb-4 line-clamp-3'>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, tempore error?
                                </p>
                                <button className='text-sm font-bold text-tertiary hover:text-secondary transition-colors flex items-center gap-2 group/btn'>
                                    {t('blogPage.continueReading')}
                                    <span className='group-hover/btn:translate-x-1 transition-transform'>→</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredBlogs.length === 0 && (
                    <div className='text-center py-20'>
                        <p className='text-gray-30 text-lg'>{t('blogPage.noBlogs')}</p>
                    </div>
                )}
            </div>
        </section>
    )
}
