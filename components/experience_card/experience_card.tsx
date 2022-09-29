import React from "react";
import Image from "next/image";
//import { Test } from './PortfolioCard.styles';

interface ExperienceCardProps {
    logoSrc: string;
    title: string;
    companyName: string;
    employmentType: string;
    time: string;
    description: string;
    skills: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    logoSrc,
    title,
    companyName,
    employmentType,
    time,
    description,
    skills,
}) => (
    <li className="snap-center">
        <div className="bg-neutral-800 relative flex flex-col justify-between flex-shrink-0 min-h-[28rem] w-[85vw] lg:w-80 overflow-hidden rounded-lg p-5">
            <div>
                <div className="flex mb-1">
                    <div className="w-[30%]">
                        <Image
                            src={logoSrc}
                            className="rounded-full"
                            alt={companyName}
                            width="200"
                            height="200"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                    <div className="w-[70%] items-center pl-5 pt-2">
                        <h2 className="text-lg leading-6">{title}</h2>
                        <h5 className="text-xs font-thin">{time}</h5>
                    </div>
                </div>
                <h3 className="inline-block text-lg">{companyName}</h3>
                <span className="text-xs font-thin text-neutral-400 mx-2">
                    {employmentType}
                </span>
                <p className="mt-2 text-neutral-400 text-sm">{description}</p>
            </div>
            <div className="mt-5">
                <h2 className="text-xl">Skills</h2>
                <div className="flex flex-wrap mt-4 gap-5 opacity-70">
                    {skills.map((skill) => {
                        return (
                            <Image
                                key={skill}
                                src={`/assets/icons/${skill}.png`}
                                alt={skill}
                                height="25"
                                width="25"
                                objectFit="contain"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    </li>
);

export default ExperienceCard;
