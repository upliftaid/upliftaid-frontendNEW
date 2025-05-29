const events = [
  {
    title: "Charity For Education",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
    date: "05.11.2014",
    place: "Rock Stadium",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-1.jpg",
    status: "Happening",
  },
  {
    title: "Donate Clothes",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
    date: "03.11.2014",
    place: "Villey Stadium",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-2.jpg",
    status: "Happening",
  },
  {
    title: "Feed A Hungry Child",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi dolore velit quis rerum facere explicabo.",
    date: "03.05.2025",
    place: "Rock Stadium",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-3.jpg",
    status: "Happening",
  },
  {
    title: "Adopt Child",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi dolore velit quis rerum facere explicabo.",
    date: "03.05.2025",
    place: "Rock Stadium",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-4.jpg",
    status: "Happening",
  },
  {
    title: "Become Volunteer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi dolore velit quis rerum facere explicabo.",
    date: "03.05.2025",
    place: "Villey Stadium",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-5.jpg",
    status: "Happening",
  },
  {
    title: "Donate Money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi dolore velit quis rerum facere explicabo.",
    date: "03.05.2025",
    place: "London Stadium",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-6.jpg",
    status: "Happening",
  },
  {
    title: "Help HomeLess People",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi dolore velit quis rerum facere explicabo.",
    date: "03.05.2025",
    place: "Villey Stadium",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-7.jpg",
    status: "Happening",
  },
  {
    title: "Poor Children's Smile",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi dolore velit quis rerum facere explicabo.",
    date: "03.05.2025",
    place: "Villey Stadium",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-8.jpg",
    status: "Happening",
  },
  {
    title: "Raise Donation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi dolore velit quis rerum facere explicabo.",
    date: "03.05.2025",
    place: "London Stadium",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-9.jpg",
    status: "Happening",
  },
  {
    title: "Charity For Education",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
    date: "05.11.2014",
    place: "Rock Stadium",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-1.jpg",
    status: "Upcoming",
  },
  {
    title: "Raise Donation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi dolore velit quis rerum facere explicabo.",
    date: "03.05.2025",
    place: "London Stadium",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-9.jpg",
    status: "Upcoming",
  },
  {
    title: "Donate Money",
    description:
      "Join us in collecting and distributing food to those in need. Your contribution can make a real difference in someone's life.",
    date: "15.12.2024",
    place: "London Stadium",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-6.jpg",
    status: "Upcoming",
  },
  {
    title: "Adopt Child",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi dolore velit quis rerum facere explicabo.",
    date: "03.05.2025",
    place: "Rock Stadium",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-4.jpg",
    status: "Upcoming",
  },
  {
    title: "Medical Supplies Donation",
    description:
      "Help us provide essential medical supplies to underprivileged communities. Every donation counts towards better healthcare access.",
    date: "20.11.2024",
    place: "City Hospital",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-3.jpg",
    status: "Upcoming",
  },
  {
    title: "Winter Clothing Collection",
    description:
      "Help keep the homeless warm this winter by donating winter clothes and blankets.",
    date: "01.09.2024",
    place: "Winter Shelter",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-4.jpg",
    status: "Expired",
  },
  {
    title: "Blood Donation Camp",
    description:
      "Your blood can save lives. Join our blood donation camp and be a hero in someone's life.",
    date: "25.08.2024",
    place: "Red Cross Center",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-5.jpg",
    status: "Expired",
  },
  {
    title: "Tech for Education",
    description:
      "Donate your old computers and tablets to help bridge the digital divide in education.",
    date: "15.07.2024",
    place: "Tech Hub",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-6.jpg",
    status: "Expired",
  },
  {
    title: "Donate Clothes for Needy",
    description:
      "A successful clothing drive that helped provide warm clothes to hundreds of underprivileged families during winter.",
    date: "01.06.2024",
    place: "Community Hall",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-7.jpg",
    status: "Expired",
  },
  {
    title: "Feed a Hungry Child",
    description:
      "A heartwarming initiative that provided nutritious meals to over 500 children from low-income families.",
    date: "15.05.2024",
    place: "City Food Bank",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-8.jpg",
    status: "Expired",
  },
  {
    title: "Poor Children's Smile",
    description:
      "A special day filled with joy and activities for underprivileged children, bringing smiles to their faces.",
    date: "01.04.2024",
    place: "Children's Park",
    image:
      "https://zozothemes.com/html/the-charity/img/sections/blog/news-9.jpg",
    status: "Expired",
  },
];
export default events;
