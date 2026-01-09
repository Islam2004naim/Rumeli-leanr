import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

const SyllabusAccordion = ({ syllabus }) => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    if (!syllabus || syllabus.length === 0) return null;

    return (
        <div className="mt-8">
            <h4 className="bold-20 mb-4">Course Curriculum</h4>
            <div className="space-y-3">
                {syllabus.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm transition-all"
                    >
                        <button
                            className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-5 transition-colors"
                            onClick={() => toggleAccordion(index)}
                        >
                            <span className="font-bold text-tertiary">{item.title}</span>
                            {openIndex === index ? (
                                <FaChevronUp className="text-secondary" />
                            ) : (
                                <FaChevronDown className="text-gray-300" />
                            )}
                        </button>
                        {openIndex === index && (
                            <div className="p-5 bg-gray-5 border-t border-gray-100">
                                <p className="text-gray-30 leading-relaxed">
                                    {item.content}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SyllabusAccordion;
