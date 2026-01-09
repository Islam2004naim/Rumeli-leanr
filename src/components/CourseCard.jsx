import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa6';

const CourseCard = ({ course }) => {
    const { currency, addToFavorites, favorites, enrollInCourse, enrolledCourses } = useContext(AppContext);

    const isFavorite = favorites.includes(course.id.toString());
    const isEnrolled = enrolledCourses.includes(course.id.toString());

    return (
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 group">
            <div className="relative">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        addToFavorites(course.id.toString());
                    }}
                    className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-md rounded-full text-red-500 hover:bg-white transition-colors shadow-sm"
                >
                    {isFavorite ? <FaHeart /> : <FaRegHeart />}
                </button>
                <div className="absolute bottom-4 left-4 bg-secondary text-tertiary px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    {course.category}
                </div>
            </div>

            <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar className="text-sm" />
                        <span className="text-sm font-bold">{course.rating}</span>
                    </div>
                    <span className="text-tertiary font-bold">{currency}{course.price}</span>
                </div>

                <h3 className="bold-18 mb-2 line-clamp-1">{course.title}</h3>
                <p className="text-gray-400 text-xs mb-4">by <span className="text-tertiary font-medium">{course.instructor}</span></p>

                <p className="text-gray-30 text-sm line-clamp-2 mb-6 h-10">
                    {course.description}
                </p>

                <div className="flex gap-3">
                    <Link
                        to={`/sessions/${course.id}`}
                        className="flex-1 text-center bg-primary text-tertiary py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors"
                    >
                        Details
                    </Link>
                    <button
                        onClick={() => enrollInCourse(course.id.toString())}
                        disabled={isEnrolled}
                        className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${isEnrolled ? 'bg-green-100 text-green-600 cursor-default' : 'bg-secondary text-tertiary hover:opacity-90 active:scale-95'}`}
                    >
                        {isEnrolled ? "Enrolled" : "Enroll Now"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
