const projects = [
  {
    id: 1,
    slug: "clean-water-initiative",
    title: "Clean Water Initiative",
    description: "Providing clean water to rural communities.",
    category: "Environment",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6cddAl1Eq4QIJrSFSt7qDiO_vmiqBc27dr5V_kWb4PbBckbCCA4uc_RIZA8dHKFmRfE&usqp=CAU",
    donations: "$120,000",
    peopleHelped: "5,000+",
    pastEvents: [
      {
        title: "Water Distribution Drive",
        date: "2023-03-15",
      },
      {
        title: "Filter Workshop",
        date: "2023-07-10",
      },
      {
        title: "Hygiene Seminar",
        date: "2024-01-22",
      },
    ],
    stats: {
      filtersInstalled: 300,
      wellsBuilt: 12,
      volunteers: 45,
    },
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpE8kPJY5r5uWRC_y6oqxVnQvg5u9MJ3cUfHe7mY2pyWJh6FgV93aDGnddcyieq0g60Ao&usqp=CAU",
      "https://images.ctfassets.net/hnk2vsx53n6l/5tCW7mzojHRPQp0J2Il7IL/dee88db0ac1f11357b51e4ad1a4fe019/CAMBODIA_2013_APRIL__TYLER_RIEWER_-1315.jpg?fm=webp",
    ],
    volunteers: [
      {
        name: "Aisha Khan",
        role: "Field Lead",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      {
        name: "Rahul Verma",
        role: "Coordinator",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
      },
    ],
  },
  {
    id: 2,
    slug: "tree-plantation-drive",
    title: "Tree Plantation Drive",
    description: "Planted 1000+ trees across urban areas.",
    category: "Environment",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOffoYLDC96nalI-nNNURG0iFvH8z7mB3PIJi7dwwMeUVk2FPHi8WDxrRpvc3ilra2aw&usqp=CAU",
    donations: "$60,000",
    peopleHelped: "1,500+",
    pastEvents: [
      {
        title: "Citywide Tree Drive",
        date: "2022-11-05",
      },
      {
        title: "School Awareness Rally",
        date: "2023-04-18",
      },
    ],
    stats: {
      treesPlanted: 1200,
      citiesCovered: 5,
      volunteers: 30,
    },
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ECLVLxBNqBcxq1n9Z52aFFtgzPlPEyVj0w&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmsctmNDpgitW3QKUt7TzEqwwyhttAjmGGg&s",
    ],
    volunteers: [
      {
        name: "Sneha Reddy",
        role: "Volunteer Lead",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Kunal Joshi",
        role: "Logistics Manager",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
      },
    ],
  },
  {
    id: 3,
    slug: "free-health-camp",
    title: "Free Health Camp",
    description: "Medical aid to over 2,000 villagers.",
    category: "Health",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQDSVInJIyB3gDXBcHxvGzmBzWGx5w2xN3hA&s",
    donations: "$85,000",
    peopleHelped: "2,300+",
    pastEvents: [
      {
        title: "Eye Check-up Camp",
        date: "2023-08-12",
      },
      {
        title: "Blood Donation Drive",
        date: "2024-02-05",
      },
    ],
    stats: {
      doctorsInvolved: 18,
      patientsTreated: 2300,
      volunteers: 25,
    },
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAfHBghpc27aAQFKHlbOjsPq7ZaHtGO21bg&s",
      "https://images.unsplash.com/photo-1550831107-1553da8c8464",
    ],
    volunteers: [
      {
        name: "Dr. Anjali Mehta",
        role: "Lead Physician",
        image: "https://randomuser.me/api/portraits/women/50.jpg",
      },
      {
        name: "Arjun Patel",
        role: "Volunteer Coordinator",
        image: "https://randomuser.me/api/portraits/men/59.jpg",
      },
    ],
  },
  {
    id: 4,
    slug: "girls-education-program",
    title: "Girls' Education Program",
    description: "Empowering girls through access to education.",
    category: "Education",
    image: "https://chordindia.org/wp-content/uploads/2020/06/disha-chord6.jpg",
    donations: "$150,000",
    peopleHelped: "1,200+ girls",
    pastEvents: [
      {
        title: "Scholarship Fundraiser",
        date: "2022-09-22",
      },
      {
        title: "Digital Literacy Workshop",
        date: "2023-05-09",
      },
    ],
    stats: {
      schoolsPartnered: 10,
      studentsEnrolled: 1200,
      volunteers: 40,
    },
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8wq5omCNNupXhleNf3doaKb5M6cozp1B-UubMy07hE8gk60F7uc_C46SGkN9v3ASMAak&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfte_Fife3JMsfdhA6DWRJE0Nh33rjfPor2fjnLd9n4_8F0HOaRS0uugJ2AAd_r-SxC_Y&usqp=CAU",
    ],
    volunteers: [
      {
        name: "Neha Sharma",
        role: "Program Director",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
      },
      {
        name: "Vikram Singh",
        role: "Mentor",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
      },
    ],
  },
];

export default projects;
