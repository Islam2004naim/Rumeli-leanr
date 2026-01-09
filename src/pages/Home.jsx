import React from 'react'
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { Subjects } from '../components/Subjects'
import { FeaturedTutors } from '../components/FeaturedTutors'
import FeaturedCourses from '../components/FeaturedCourses'
import { About } from '../components/About'

export const Home = () => {
    return (
        <>
            <Hero />
            <Features />
            <Subjects />
            <FeaturedTutors />
            <FeaturedCourses />
            <About />
        </>
    )
}
export default Home;
