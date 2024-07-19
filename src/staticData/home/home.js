import SecurityIcon from "@/src/components/icons/home/SecurityIcon";
import EmailIcon from "@/src/components/icons/home/EmailIcon";
import LocationIcon from "@/src/components/icons/home/LocationIcon";
import PhoneIcon from "@/src/components/icons/home/PhoneIcon";
import SeoIcon from "@/src/components/icons/home/SeoIcon";
import UiUxIcon from "@/src/components/icons/home/UiUxIcon";
import WebDevIcon from "@/src/components/icons/home/WebDevIcon";
import {
  FaBlog,
  FaBriefcase,
  FaFolderOpen,
  FaGraduationCap,
  FaRegEnvelopeOpen,
} from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { BiCheckDouble, BiCommentCheck } from "react-icons/bi";

import JavaImage from "@/public/assets/img/skill/java.svg";
import PythonImage from "@/public/assets/img/skill/python-4.svg";
import SpringImage from "@/public/assets/img/skill/spring-3.svg";
import DjangoImage from "@/public/assets/img/skill/django.svg";
import DockerImage from "@/public/assets/img/skill/docker-3.svg";
import NextJsImage from "@/public/assets/img/skill/next-js.svg";

import partner1Image from "@/public/assets/img/partners/logo1.svg";
import partner2Image from "@/public/assets/img/partners/logo2.svg";
import partner3Image from "@/public/assets/img/partners/logo3.svg";
import partner4Image from "@/public/assets/img/partners/logo4.svg";

import userImage from "@/public/assets/img/user-sidebar-thumb.png";
import userImageLight from "@/public/assets/img/user-sidebar-thumb-light.png";

import portfolioImage1Thumb from "@/public/assets/img/portfolio/portfolio-img1.png";
import portfolioImage1 from "@/public/assets/img/portfolio/portfolio-img1.png";

import portfolioImage2Thumb from "@/public/assets/img/portfolio/portfolio-img2.png";
import portfolioImage2 from "@/public/assets/img/portfolio/portfolio-img2.png";

import portfolioImage3Thumb from "@/public/assets/img/portfolio/portfolio-img3.png";
import portfolioImage3 from "@/public/assets/img/portfolio/portfolio-img3.png";

import portfolioImage4Thumb from "@/public/assets/img/portfolio/portfolio-img4.png";
import portfolioImage4 from "@/public/assets/img/portfolio/portfolio-img4.png";

import projectInner1Image from "@/public/assets/img/blog/article-inner1.png";
import projectInner2Image from "@/public/assets/img/blog/article-inner2.png";

import blog1Thumbnail from "@/public/assets/img/blog/article1.png";
import blog1Image from "@/public/assets/img/blog/article1.png";
import blog2Thumbnail from "@/public/assets/img/blog/article2.png";
import blog2Image from "@/public/assets/img/blog/article2.png";
import blog3Thumbnail from "@/public/assets/img/blog/article3.png";
import blog3Image from "@/public/assets/img/blog/article3.png";

import author1 from "@/public/assets/img/testimonial/author1.png";
import author2 from "@/public/assets/img/testimonial/author2.png";
import { IoHomeOutline } from "react-icons/io5";

export const introduce = {
  iconBox: {
    Icon: <IoHomeOutline className="text-theme" size={14} />,
    title: "INTRODUCE",
  },
  heading: {
    // heading1: "Creating Solutions",
    heading2: "Engineering Tomorrow's Software Solutions",
  },
  desc: (
    <p>
     As a dedicated {" "}
      <span className="font-medium text-black dark:text-white/90">
      Software Develope
      </span>{" "}
      ,I specialize in crafting powerful systems and applications tailored for success.
    </p>
  ),
  jobs: [
    {
      id: 1,
      title: "Available for work",
      icon: <BiCheckDouble size={25} className="text-theme mr-1" />,
    },
    {
      id: 2,
      title: "Full Time Job",
      icon: <BiCheckDouble size={25} className="text-theme mr-1" />,
    },
  ],
};

export const partners = [
  {
    imgUrl: partner1Image,
    altText: "Partner Name 1",
    link: "#",
  },
  {
    imgUrl: partner2Image,
    altText: "Partner Name 2",
    link: "#",
  },
  {
    imgUrl: partner3Image,
    altText: "Partner Name 3",
    link: "#",
  },
  {
    imgUrl: partner4Image,
    altText: "Partner Name 4",
    link: "#",
  },
  {
    imgUrl: partner2Image,
    altText: "Partner Name 5",
    link: "#",
  },
  {
    imgUrl: partner4Image,
    altText: "Partner Name 6",
    link: "#",
  },
  {
    imgUrl: partner2Image,
    altText: "Partner Name 7",
    link: "#",
  },
  {
    imgUrl: partner4Image,
    altText: "Partner Name 8",
    link: "#",
  },
  {
    imgUrl: partner2Image?.src,
    altText: "Partner Name 9",
    link: "#",
  },
];

export const technologies = [
  {
    id: 1,
    title: "Python",
    skill: "87",
    url: "#",
  },
  {
    id: 2,
    title: "Django",
    skill: "85",
    url: "#",
  },
  {
    id: 3,
    title: "Java",
    skill: "80",
    url: "#",
  },
  {
    id: 4,
    title: "Java Spring",
    skill: "79",
    url: "#",
  },
  {
    id: 5,
    title: "Node.js",
    skill: "71",
    url: "#",
  },
  {
    id: 6,
    title: "Typescript",
    skill: "81",
    url: "#",
  },
  {
    id: 7,
    title: "PostgreSQL",
    skill: "83",
    url: "#",
  },
  {
    id: 8,
    title: "Docker",
    skill: "82",
    url: "#",
  },
  {
    id: 9,
    title: "Git/Github",
    skill: "85",
    url: "#",
  },
  {
    id: 10,
    title: "React",
    skill: "73",
    url: "#",
  },
  {
    id: 11,
    title: "Next.js",
    skill: "74",
    url: "#",
  },
  {
    id: 12,
    title: "HTML",
    skill: "75",
    url: "#",
  },
  {
    id: 13,
    title: "CSS/SCSS",
    skill: "72",
    url: "#",
  }
];

export const userDetails = [
  {
    field: "Phone",
    value: "+55 (88) 9 99306514",
  },
  {
    field: "Linkedin",
    value: "https://www.linkedin.com/in/dev-lucas-santos",
  },
  {
    field: "Language",
    value: "Portuguese, English",
  },
  {
    field: "Email",
    value: "jl.lucassantos098@gmail.com",
  },
  {
    field: "GitHub",
    value: "https://github.com/lucassantos-dev",
  },
];

export const userDetailsSidebar = {
  userImage: userImage,
  userImageLight: userImageLight,
  userName: "Lucas Santos",
  designations: ["Software Developer", "Fullstack", "Backend Developer"],
  basicInfo: [
    {
      id: 1,
      field: "Residence",
      value: "Brazil",
    },
    {
      id: 2,
      field: "City",
      value: "Ceará",
    },
    {
      id: 3,
      field: "Age",
      value: "24",
    },
  ],
  skillsInfo: [
    {
      id: 1,
      name: "Python",
      value: 87,
    },
    {
      id: 2,
      name: "Java",
      value: 80,
    },
    {
      id: 3,
      name: "HTML",
      value: 75,
    },
    // {
    //   id: 3,
    //   name: "CSS",
    //   value: 85,
    // },
    {
      id: 4,
      name: "JS",
      value: 75,
    },
  ],
};

export const projectExperiences = [
  {
    title: "Years Of Experience",
    count: 4,
    postFix: true,
  },
  // {
  //   title: "Handled Projects",
  //   count: 4,
  //   postFix: true,
  // },
  // {
  //   title: "Open Source Libraries",
  //   count: 5,
  //   postFix: true,
  // },
  // {
  //   title: "Awards Won",
  //   count: 18,
  //   postFix: false,
  // },
];

export const services = {
  servicesHeading: {
    icon: <FaBriefcase className="text-theme" />,
    title: "SERVICES",
    heading: "My",
    coloredHeading: "Services",
    description:
      "I create robust and scalable software solutions that go beyond aesthetics.",
  },
  servicesData: [
    {
      id: 1,
      number: "01",
      title: "Web Application Development",
      desc: "Specialization in developing scalable and efficient web applications using technologies such as Python, Django, Node.js, TypeScript, React, and Next.js.",
      icon:  <WebDevIcon />,
    },
    {
      id: 2,
      number: "02",
      title: "API Integration",
      desc: "Implementation of robust integrations with external APIs to expand the functionality of existing systems",
      icon:<UiUxIcon />,
    },
    {
      id: 3,
      number: "03",
      title: "Information Security",
      desc: " Implementation of robust security practices to protect sensitive data and ensure compliance with standards and regulations.",
      icon:  <SecurityIcon />,
    },
    {
      id: 4,
      number: "04",
      title: "Performance Optimization",
      desc: "Analysis and improvement of performance in existing applications, identifying bottlenecks and implementing solutions for optimization.",
      icon:<SeoIcon />,
    },
  ],
};

export const skills = {
  skillsHeading: {
    icon: <FaGraduationCap className="text-theme" />,
    title: "SKILLS",
    heading: "My",
    coloredHeading: "Advantages",
    description:
      "Creative problem solver, experienced in Java and Python, always learning, great team player, client-focused.",
  },
  skillsData: [
    {
      image: PythonImage?.src,
      percent: 87,
      name: "Python",
    },
    {
      image: DjangoImage?.src,
      percent: 85,
      name: "Django",
    },
    {
      image: JavaImage?.src,
      percent: 80,
      name: "Java",
    },
    {
      image: SpringImage?.src,
      percent: 79,
      name: "Sprint Bot",
    },
    {
      image: DockerImage?.src,
      percent: 70,
      name: "Docker",
    },
    {
      image: NextJsImage?.src,
      percent: 75,
      name: "NextJs",
    },
   
  ],
};

export const resume = {
  resumeHeading: {
    icon: <FaFolderOpen className="text-theme" />,
    title: "RESUME",
    heading: "Work",
    coloredHeading: "Experience",
    description:
      "In my professional journey, I've had the opportunity to work on diverse projects that challenged and enhanced my skills. Below are some of the key roles and responsibilities I've undertaken.",
  },
  resumeData: [
    {
      platform: "Tax/Redux Contabilidade",
      duration: "Maio, 2021 - Abril , 2024",
      position: "Full-Stack Developer",
      description:
        "Full Stack Developer responsible for leading accounting process automation projects, using technologies such as Java, Python, Django and Node.js to increase the efficiency and accuracy of daily operations.",
    },
    
  ],
};

export const educations = {
  educationsHeading: {
    icon: "",
    title: "",
    heading: "My",
    coloredHeading: "Education",
    description:
      "My academic background has provided me with a strong foundation in computer science and software development. Here is an overview of my educational achievements.",
  },
  educationsData: [
    {
      institution: "Universidade Estácio de Sá",
      duration: "2020-2024",
      degree: "Diploma in Computer Science",
      description:
        "Degree in Computer Science with a focus on software and systems development, acquiring a solid grounding in programming and software engineering.",
    },
    
  ],
};

export const portfolio = {
  portfolioHeading: {
    icon: <GrTasks className="text-theme" />,
    title: "PORTFOLIO",
    heading: "Featured ",
    coloredHeading: "Projects",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  projectsData: [
    {
      id: 1,
      image: {
        thumbnail: portfolioImage1Thumb?.src,
        image: portfolioImage1?.src,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES:",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
    {
      id: 2,
      image: {
        thumbnail: portfolioImage2Thumb?.src,
        image: portfolioImage2?.src,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
    {
      id: 3,
      image: {
        thumbnail: portfolioImage3Thumb?.src,
        image: portfolioImage3?.src,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
    {
      id: 4,
      image: {
        thumbnail: portfolioImage4Thumb?.src,
        image: portfolioImage4?.src,
        thumbnailText1: "Design",
        thumbnailText2: "Specialization",
      },
      type: "Branding",
      title: "Three wine glasses filled with candies",
      slug: "three-wine-glasses-filled-with-candies",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Envato Theme",
        },
        {
          field: "SERVICES",
          value: "Tips & Tricks, Design",
        },
        {
          field: "DURATION",
          value: "108 hrs",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community. This analysis initiates a three-part series that delves into the influence of AI on intellectual property rights.",
        descriptionLists: [
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src],
      },
    },
  ],
};

export const blogs = {
  blogsHeading: {
    icon: <FaBlog className="text-theme" />,
    title: "BLOG",
    heading: "Latest",
    coloredHeading: "Insights",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  blogsData: [
    {
      image: {
        thumbnail: blog1Thumbnail?.src,
        image: blog1Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Elevate your mornings with perfectly brewed coffee",
      slug: "elevate-your-mornings-with-perfectly-brewed-coffee",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog2Thumbnail?.src,
        image: blog2Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Mastering the clock: A guide to time management",
      slug: "mastering-the-clock-a-guide-to-time-management",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog3Thumbnail?.src,
        image: blog3Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Homeward bound: Crafting a productive home office",
      slug: "homeward-bound-crafting-a-productive-home-office",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog1Thumbnail?.src,
        image: blog1Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Elevate your mornings with perfectly brewed coffee",
      slug: "elevate-your-mornings-with-perfectly-brewed-coffee",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog2Thumbnail?.src,
        image: blog2Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Mastering the clock: A guide to time management",
      slug: "mastering-the-clock-a-guide-to-time-management",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
  ],
};

export const testimonials = {
  testimonialsHeading: {
    icon: <BiCommentCheck className="text-theme" />,
    title: "TESTIMONIAL",
    heading: "What",
    coloredHeading: "People Say",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  testimonialsData: [
    {
      id: 1,
      image: author1?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          Working with <span className="font-semibold text-theme">Reddick</span>{" "}
          is a game-changer. Their coding expertise and commitment to quality
          make every project a success.
        </div>
      ),
      name: "Alex Johnson",
      position: "Developer",
    },
    {
      id: 2,
      image: author2?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          <span className="font-semibold text-theme">Reddick</span> exceeds
          expectations with top-tier coding skills. Reliable, collaborative, and
          a true asset to any project. Highly recommended
        </div>
      ),
      name: "Mily Martin",
      position: "CEO @IT Theme",
    },
    {
      id: 3,
      image: author1?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          Working with <span className="font-semibold text-theme">Reddick</span>{" "}
          is a game-changer. Their coding expertise and commitment to quality
          make every project a success.
        </div>
      ),
      name: "Alex Johnson",
      position: "Developer",
    },
  ],
};

export const contactInfo = {
  contactInfoHeading: {
    icon: <FaRegEnvelopeOpen className="text-theme" />,
    title: "CONTACT",
    heading: "Contact",
    coloredHeading: "Me.",
    description:
      "Feel free to reach out to me through any of the following channels. I'm always open to new opportunities and collaborations.",
  },
  contactInfoData: [
    {
      id: 1,
      field: "Location",
      data: "Juazeiro do norte - CE",
      Icon: <LocationIcon />,
    },
    {
      id: 2,
      field: "E-mail",
      data: "jl.lucassantos098@gmail.com",
      Icon: <EmailIcon />,
    },
    {
      id: 3,
      field: "Phone",
      data: "+55 88 9 9930-6514",
      Icon: <PhoneIcon />,
    },
  ],
};
