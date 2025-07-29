// src/api/BlogAPI.jsx
import new1 from '../../assets/images/news-1.jpg';
import new2 from '../../assets/images/news-2.jpg';
import new3 from '../../assets/images/news-3.jpg';
import new4 from '../../assets/images/news-4.jpg';
import new5 from '../../assets/images/news-5.jpg';
import new6 from '../../assets/images/news-6.jpg';

export const fetchBlogData = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          blogPosts: [
            {
              title: 'Charity for education',
              img: new1,
              desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              author: 'John Deo',
              date: '03.11.2014',
              categories: ['Travel', 'Nature', 'Business'],
            },
            {
              title: 'Donate Clothes',
              img: new2,
              desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              author: 'John Deo',
              date: '03.11.2014',
              categories: ['Travel', 'Nature', 'Business'],
            },
            {
              title: 'Feed A Hungry Child',
              img: new3,
              desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              author: 'John Deo',
              date: '03.11.2014',
              categories: ['Travel', 'Nature', 'Business'],
            },
            {
              title: 'Adopt Child',
              img: new4,
              desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
              author: 'John Deo',
              date: '03.11.2014',
              categories: ['Travel', 'Nature', 'Business'],
            },
            {
                title: 'Become Volunteer',
                img: new5,
                desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                author: 'John Deo',
                date: '03.11.2014',
                categories: ['Travel', 'Nature', 'Business'],
              },
              {
                title: 'Donate Money',
                img: new6,
                desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                author: 'John Deo',
                date: '03.11.2014',
                categories: ['Travel', 'Nature', 'Business'],
              },
          ],
          popularPosts: [
            { img: new1, desc: 'The standard chunk of Lorem Ipsum used since.', date: '03.11.2014' },
            { img: new2, desc: 'The standard chunk of Lorem Ipsum used since.', date: '03.11.2014' },
            { img: new3, desc: 'The standard chunk of Lorem Ipsum used since.', date: '03.11.2014' },
          ],
          categories: ['Awareness', 'Blog', 'Education', 'Food', 'Gallery', 'Health', 'Lifesaving', 'Water'],
          archives: ['August 2014', 'September 2014', 'October 2014', 'November 2014', 'December 2014'],
          tags: ['Charity', 'Child', 'Education', 'Food', 'Homeless', 'Hungry', 'Water'],
        });
      }, 1000); // Simulate 1s delay
    });
  };
  