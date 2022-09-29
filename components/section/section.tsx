import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUpRightFromSquare,
    faCloudArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
//import { Test } from './PortfolioCard.styles';

interface SectionProps {
    id: string;
    className?: string;
    title: string;
    children?: JSX.Element|JSX.Element[];
}

const Section: React.FC<SectionProps> = ({
    id,
    title,
    className,
    children
}) => (
    <section
        id={id}
        className={`snap-start relative flex flex-col w-full h-screen pt-20 lg:container lg:mx-auto lg:max-w-sm ${className}`}
    >
        <h1 className="text-4xl mb-5 px-4">{title}</h1>
        {children}
    </section>
);

export default Section;
