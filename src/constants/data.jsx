import { FaUsers, FaTint, FaChartLine } from 'react-icons/fa';
import { Lightbulb, Droplets, Home } from 'lucide-react';

export const tabs = [
  {
    title: 'About Us',
    contentType: 'cards',
    content: [
      {
        icon: <FaUsers size={45} />,
        heading: 'WHO WE ARE?',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus facilisis cvallis.',
      },
      {
        icon: <FaTint size={45} />,
        heading: 'VISION',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus facilisis cvallis.',
      },
      {
        icon: <FaChartLine size={45} />,
        heading: 'MISSION',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus facilisis cvallis.',
      },
    ],
  },
  {
    title: 'Our Mission',
    contentType: 'customMission',
  },
  {
    title: 'Why Choose Us?',
    contentType: 'skills',
    content: {
      left: {
        heading: 'WHY CHOOSE US?',
        points: [
          {
            title: 'Worldwide charity programs',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
          },
          { title: 'Leading volunteer groups' },
          { title: 'Charity programs for children' },
        ],
      },
      right: {
        heading: 'OUR SKILLS',
        skills: [
          { label: 'Fund For Childrens', value: 60 },
          { label: 'Fund For Plants', value: 65 },
          { label: 'Fund For Educations', value: 80 },
          { label: 'Fund For Refugees', value: 70 },
        ],
      },
    },
  },
];

export const missionBox1 = [
  {
    id: 1,
    icon: <Lightbulb className="w-8 h-8 text-[#00733C]" />,
    title: "CHARITY FOR EDUCATION",
    description: "We aim to educate underprivileged children and build a stronger future.",
  },
  {
    id: 2,
    icon: <Droplets className="w-8 h-8 text-[#00733C]" />,
    title: "CLEAN WATER FOR PEOPLE",
    description: "We provide clean drinking water to rural and drought-affected areas.",
  },
  {
    id: 3,
    icon: <Home className="w-8 h-8 text-[#00733C]" />,
    title: "HOME FOR HOMELESS",
    description: "We build shelters and homes for the homeless to ensure safety and dignity.",
  },
];

export const missionBox2 = [
  {
    id: 4,
    icon: <FaUsers className="w-8 h-8 text-[#00733C]" />,
    title: "COMMUNITY BUILDING",
    description: "Strengthening communities through volunteer programs and local events.",
  },
  {
    id: 5,
    icon: <FaTint className="w-8 h-8 text-[#00733C]" />,
    title: "CLEAN ENVIRONMENT",
    description: "Organizing clean-up drives and raising awareness about waste management.",
  },
  {
    id: 6,
    icon: <FaChartLine className="w-8 h-8 text-[#00733C]" />,
    title: "SKILL DEVELOPMENT",
    description: "We run workshops to help youth and women acquire job-ready skills.",
  },
];

export const missionBox3 = [
  {
    id: 7,
    icon: <Lightbulb className="w-8 h-8 text-[#00733C]" />,
    title: "INNOVATION FOR IMPACT",
    description: "Fostering tech-based solutions for social life and improve daily life.",
  },
  {
    id: 8,
    icon: <Droplets className="w-8 h-8 text-[#00733C]" />,
    title: "DISASTER RELIEF",
    description: "Quick response and always ready to aid during floods, earthquakes, and other disasters.",
  },
  {
    id: 9,
    icon: <Home className="w-8 h-8 text-[#00733C]" />,
    title: "ELDERLY CARE",
    description: "Supporting senior citizens through healthcare and housing support for better life.",
  },
];
