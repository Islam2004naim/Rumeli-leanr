import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import CourseCard from './CourseCard';

const FeaturedCourses = () => {
    const { courses } = useContext(AppContext);

    return (
        <section className="max-padd-container py-16">
            <div className="flex Between items-end mb-12">
                <div>
                    <h2 className="h2 uppercase">Featured Courses</h2>
                    <p className="max-w-md">Explore our top-rated courses and start learning today with the best instructors.</p>
                </div>
                {/* <button className="btn-light hidden md:block">View All Courses</button> */}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {courses.slice(0, 12).map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedCourses;
