import type { NextPage } from "next";
import Head from "next/head";
import headers from "../assets/headers.json";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import ScrollArrow from "../components/scroll_arrow";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowUpRightFromSquare,
    faEnvelope,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import PortfolioCard from "../components/portfolio_card/portfolio_card";
import Section from "../components/section/section";
import SkillTile from "../components/skill_tile/skill_tile";
import {
    faFacebook,
    faGithub,
    faInstagram,
    faLinkedin,
    faSkyatlas,
    faSkype,
    faTelegram,
    faTwitter,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import EducationCard from "../components/education_card/education_card";
import ExperienceCard from "../components/experience_card/experience_card";

const Home: NextPage = () => {
    return (
        <>
            <Header />
            <main className="w-full h-screen text-white overflow-auto bg-neutral-900 snap snap-y snap-mandatory items-center">
                <Head>
                    <title>{headers.homepage.header}</title>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <meta name="description" content={headers.homepage.description}/>
                </Head>
                <section
                    id="intro"
                    className="snap-start relative flex justify-center items-center w-full h-full"
                >
                    <Image
                        src="/assets/alinaderi.png"
                        className=""
                        layout="fill"
                        objectFit="contain"
                        objectPosition="bottom left"
                        alt="Ali Naderi"
                    />
                    <h1 className="text-6xl absolute translate-x-14 -translate-y-24 lg:text-8xl lg:translate-x-0 lg:translate-y-0">
                        <span className="font-thin">Ali</span>
                        <br />
                        <span className="font-semibold">Naderi</span>
                    </h1>
                    <ScrollArrow />
                    <span className="rotate-90 absolute -right-36 bottom-40 lg:bottom-24 text-xs w-96 leading-5 font-thin tracking-[14px]">
                        TEHRAN &nbsp; IRAN
                        <br />
                        JAN 2002
                    </span>
                </section>
                <Section id="biography" title={"Biography"}>
                    <div className="flex flex-col px-4">
                        <p>
                            My professional life started when I was 14 years
                            old. There was a time when Android Studio was just
                            released and Android was trending at that time. Java
                            was my first experience to enter the world of
                            programming.
                        </p>
                        <p className="mb-8">
                            To launch my educational startup at the age of 15, I
                            needed to do everything without cost. WordPress and
                            Photoshop were the next stage of my professional
                            life. The love for the technology world made me a
                            Full Stack Developer!
                        </p>
                        <Image
                            src="/assets/childhood.jpg"
                            className="rounded-lg"
                            alt="Ali Naderi Childhood"
                            width="200"
                            height="200"
                            objectFit="cover"
                            objectPosition="center"
                        />
                    </div>
                </Section>
                <Section id="experience" title={"Experience"}>
                    <ul className="container-snap snap-mandatory mt-4 pb-8 px-4 w-full flex gap-4 snap-x overflow-x-auto self-center">
                        <ExperienceCard
                            title="Web Designer & &nbsp; &nbsp; &nbsp;
                            Web Developer"
                            companyName="BAYCOTECH"
                            logoSrc="/assets/baycotech.jpg"
                            employmentType="Full Time - Remote"
                            time="AUG 2021 - Present"
                            description="Design and development of software, websites, and digital services for the client. I design and develop WordPress websites for this company."
                            skills={[
                                "wordpress",
                                "elementor",
                                "php",
                                "mysql",
                                "javascript",
                                "html",
                                "css",
                                "figma",
                                "photoshop",
                            ]}
                        />
                        <ExperienceCard
                            title="Graphic Designer & Web Developer
                            "
                            companyName="Kianco Group"
                            logoSrc="/assets/kianco.jpg"
                            employmentType="Part Time - Hybrid"
                            time="DEC 2020 - JUN 2021"
                            description="Kian Architecture Commercial Group works in the field of design, reconstruction, and sale of building facade materials. My job at this company was to design and manage websites, produce content and design social media posts, edit and dub videos."
                            skills={[
                                "wordpress",
                                "elementor",
                                "php",
                                "mysql",
                                "javascript",
                                "html",
                                "css",
                                "photoshop",
                            ]}
                        />
                    </ul>
                </Section>
                <Section id="skills" title={"Professional Skills"}>
                    <div className="grid grid-cols-3 gap-4 px-4 mt-4">
                        <SkillTile title="WordPress" icon="wordpress" />
                        <SkillTile title="HTML/CSS" icon="html" />
                        <SkillTile title="JavaScript" icon="javascript" />
                        <SkillTile title="TypeScript" icon="typescript" />
                        <SkillTile title="React" icon="react" />
                        <SkillTile title="Next.js" icon="nextjs" />
                        <SkillTile title="Tailwind" icon="tailwind" />
                        <SkillTile title="Node.js" icon="nodejs" />
                        <SkillTile title="Express" icon="expressjs" />
                        <SkillTile title="NestJS" icon="nestjs" />
                        <SkillTile title="MongoDB" icon="mongodb" />
                        <SkillTile title="Flutter" icon="flutter" />
                        <SkillTile title="Photoshop" icon="photoshop" />
                        <SkillTile title="Premiere" icon="premiere" />
                        <SkillTile title="Figma" icon="figma" />
                    </div>
                </Section>
                <Section id="education" title={"Education"}>
                    <ul className="container-snap snap-mandatory mt-4 pb-8 px-4 w-full flex gap-4 snap-x overflow-x-auto self-center">
                        <EducationCard
                            description="Islamic Azad University according to U.S. News ranks 2nd in Iran. At this stage, we are learning computer basics, IT principles, advanced programming, data structures, databases, IT project management, electrical circuits, algorithm design, AI and expert systems, OS, etc."
                            eduName="Islamic Azad University"
                            eduTitle="Bachelor's Degree,
                            Computer Engineering"
                            logoSrc="/assets/azad.jpg"
                            time="SEP 2022 - Present"
                        />
                        <EducationCard
                            description="Diginext is the innovation and investment center of Digikala Group. In this camp, we built a team, came up with an idea and presented it to the investor. We managed to enter the pre-seed stage. Saeid Mohammadi (Co-Founder and Chairman at Digikala), Soheil Moghadam (CTO at Digikala), and Neda Golshan (VP of Product at Didikala) are the mentors of our team."
                            eduName="Diginext"
                            eduTitle="Startup Camp"
                            logoSrc="/assets/diginext.jpg"
                            time="JUL 2022 - SEP 2022"
                        />
                        <EducationCard
                            description="Saha Aviation University is the only university in Tehran that has a pilot program. All PPL courses are taught at this stage. I was also studying in the same field in high school (Farasot High School). I withdrew from this course for some reasons."
                            eduName="Saha Aviation University"
                            eduTitle="Associate Degree, Piloting (PPL)"
                            logoSrc="/assets/saha.jpg"
                            time="SEP 2020 - SEP 2022"
                        />
                    </ul>
                </Section>
                <Section id="portfolio" title={"Portfolio"}>
                    <ul className="container-snap snap-mandatory mt-4 pb-8 px-4 w-full flex gap-4 snap-x overflow-x-auto self-center">
                        <PortfolioCard
                            badge="Web Design & Development"
                            title="Memarica Website"
                            imageSrc="/assets/memarica.jpg"
                            url="https://memarica.com"
                            description="Memerica is one of the most reliable building material sales companies (especially thermowood) in Iran.
                            The young and creative team of Memerica made me do my best to design the best and most different landing pages for them. I am glad that I could help them."
                            icons={[
                                "wordpress",
                                "elementor",
                                "javascript",
                                "html",
                                "css",
                            ]}
                        />
                        <PortfolioCard
                            badge="Web Design & Development"
                            title="My Personal Website"
                            imageSrc="/assets/alinaderi-personal.jpg"
                            url="https://alinaderi.info"
                            githubUrl="https://github.com/ialinaderi/my-personal-website/"
                            description="My personal site is a very small open source project developed with Next.js. Due to time constraints, it was designed and developed in less than 12 hours."
                            icons={[
                                "react",
                                "nextjs",
                                "typescript",
                                "tailwind",
                                "html",
                                "css",
                                "photoshop",
                                "figma",
                            ]}
                        />
                        <PortfolioCard
                            badge="Graphic Design"
                            title="Kianco Exhibition"
                            imageSrc="/assets/kianco-exhibition.jpg"
                            downloadUrl="/assets/banners.zip"
                            description="The 21st International Construction Industry Exhibition was held in Tehran on August 2021 and Kianco Group was one of the hosts of this exhibition. All the banners in the Kianco Group booth were designed by me."
                            icons={["photoshop"]}
                        />
                        <PortfolioCard
                            badge="Web Design & Development"
                            title="CannaEra Website"
                            imageSrc="/assets/cannaera.jpg"
                            url="https://cannaera.ca"
                            description="CannaEra is a cannabis store in Toronto, Canada. The design and development of this store's website was done by me."
                            icons={[
                                "wordpress",
                                "elementor",
                                "javascript",
                                "html",
                                "css",
                            ]}
                        />
                        <PortfolioCard
                            badge="Web Design & Development"
                            title="Kianco Website"
                            imageSrc="/assets/kiancogroup.jpg"
                            url="https://kiancogroup.com/"
                            description="Kianco Group is one of the largest companies selling facade materials in Iran. The website of this company was designed and developed by me."
                            icons={[
                                "wordpress",
                                "elementor",
                                "javascript",
                                "html",
                                "css",
                            ]}
                        />
                        <PortfolioCard
                            badge="Podcast"
                            title="Parvaz Podcast"
                            imageSrc="/assets/parvaz-cover.jpg"
                            url="https://open.spotify.com/episode/3CmrLL9xeooCEXoRRzPGyZ?si=e69b6d36af4a43a1"
                            description="My first professional podcast called Parvaz (in english means fly) written and narrated by me. Composing, mixing and mastering was done by my good friend Amir Parsa."
                            icons={["audition", "photoshop", "flstudio"]}
                        />
                    </ul>
                </Section>
                <Section id="contact" title={"Contact Me"}>
                    <div className="px-5">
                        <div className="flex gap-2 mt-1">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="text-sm self-center"
                            />
                            <Link href={"tel:989120457077"}>
                                +98 912 045 7077
                            </Link>
                        </div>
                        <div className="flex gap-2 mt-1">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="text-sm self-center"
                            />
                            <Link href={"mailto:alindnaderi@gmail.com"}>
                                alindnaderi@gmail.com
                            </Link>
                        </div>
                        <div className="flex gap-2 mt-1">
                            <FontAwesomeIcon
                                icon={faSkype}
                                className="text-sm self-center"
                            />
                            <Link
                                href={
                                    "https://join.skype.com/invite/fikkxwiBOZZX"
                                }
                            >
                                live:alindnaderi
                            </Link>
                        </div>
                        <div className="flex gap-2 mt-1">
                            <FontAwesomeIcon
                                icon={faTelegram}
                                className="text-sm self-center"
                            />
                            <Link href={"https://t.me/ialinaderi"}>
                                ialinaderi
                            </Link>
                        </div>
                        <div className="flex gap-2 mt-1">
                            <FontAwesomeIcon
                                icon={faWhatsapp}
                                className="text-sm self-center"
                            />
                            <Link href={"https://wa.me/989120457077"}>
                                +98 912 045 7077
                            </Link>
                        </div>
                        <div className="flex gap-4 text-lg mt-3">
                            <a
                                href="https://github.com/ialinaderi/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a
                                href="https://www.instagram.com/isalinaderi/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ialinaderi"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a
                                href="https://twitter.com/ialinaderi"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=100068295273943"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </div>
                    </div>
                </Section>
            </main>
        </>
    );
};

export default Home;
