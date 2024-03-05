import React, { useState } from 'react';
import { sections } from "@/data";

interface Section {
    title: string;
}

const Sections: React.FC = () => {
    const [selectedSectionIndex, setSelectedSectionIndex] = useState<number | null>(null);

    const handleSectionClick = (index: number) => {
        setSelectedSectionIndex(index);
    };

    return (
        <div>
            {sections.map((section: Section, index: number) => (
                <li
                    key={index}
                    className={`p-2 rounded cursor-pointer ${selectedSectionIndex === index ? 'bg-sky-50' : ''
                        }`}
                    onClick={() => handleSectionClick(index)}
                >
                    {section.title}
                </li>
            ))}
        </div>
    );
};

export default Sections;
