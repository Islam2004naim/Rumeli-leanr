import React, { createContext, useState, useEffect } from 'react'
import { tutors } from '../assets/data';
import coursesData from '../data/courses.json';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/user.jpg'

export const AppContext = createContext()

export const AppContextprovider = (props) => {
    const navigate = useNavigate()
    const [token, setToken] = useState("dummytoken")
    const [userData, setUserData] = useState({
        name: "John Doee",
        image: profileImage,
        email: 'user@one.com',
        phone: '1234567890',
        address: {
            city: 'New York',
            country: "USA"
        },
        gender: 'Female',
        dob: '1994-11-20',
    })

    // Courses state
    const [courses, setCourses] = useState(coursesData)
    
    // Favorites state with LocalStorage
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });

    // Enrolled Courses state with LocalStorage
    const [enrolledCourses, setEnrolledCourses] = useState(() => {
        const saved = localStorage.getItem('enrolledCourses');
        return saved ? JSON.parse(saved) : [];
    });

    // Booked Sessions state with LocalStorage
    const [bookedSessions, setBookedSessions] = useState(() => {
        const saved = localStorage.getItem('bookedSessions');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
    }, [enrolledCourses]);

    useEffect(() => {
        localStorage.setItem('bookedSessions', JSON.stringify(bookedSessions));
    }, [bookedSessions]);

    const addToFavorites = (courseId) => {
        setFavorites(prev => {
            if (prev.includes(courseId)) {
                return prev.filter(id => id !== courseId);
            }
            return [...prev, courseId];
        });
    }

    const enrollInCourse = (courseId) => {
        setEnrolledCourses(prev => {
            if (!prev.includes(courseId)) {
                return [...prev, courseId];
            }
            return prev;
        });
    }

    const unenrollFromCourse = (courseId) => {
        setEnrolledCourses(prev => prev.filter(id => id !== courseId));
    }

    const bookSession = (tutorId, slotDate, slotTime) => {
        setBookedSessions(prev => {
            const newBooking = { tutorId, slotDate, slotTime, id: Date.now() };
            return [newBooking, ...prev];
        });
    }

    const cancelSession = (bookingId) => {
        setBookedSessions(prev => prev.filter(booking => booking.id !== bookingId));
    }

    const currency = "$"
    const value = { 
        tutors, 
        courses,
        favorites, 
        addToFavorites, 
        enrolledCourses, 
        enrollInCourse,
        unenrollFromCourse,
        bookedSessions,
        bookSession,
        cancelSession,
        navigate, 
        currency, 
        token, 
        setToken, 
        userData, 
        setUserData 
    }
    
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
export default AppContextprovider;
