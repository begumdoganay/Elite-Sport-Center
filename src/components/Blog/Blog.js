import React from 'react';
import './Blog.css';
import BlogHeader from './BlogHeader';
import BlogList from './BlogList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {
  // Blog post data
  const blogPosts = [
    {
      id: 1,
      title: '5 Effective Cardio Workouts That Don\'t Require Equipment',
      date: 'March 5, 2025',
      category: 'Workouts',
      excerpt: 'Discover cardio exercises that can help you burn calories and improve your cardiovascular health without any equipment. Perfect for home workouts or when traveling.',
      image: 'blog1.jpg'
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Nutrition for Muscle Building',
      date: 'February 28, 2025',
      category: 'Nutrition',
      excerpt: 'Learn about the optimal macronutrient ratios, meal timing, and supplement strategies to maximize muscle growth and recovery after intense training sessions.',
      image: 'blog2.jpg'
    },
    {
      id: 3,
      title: 'How Yoga Can Improve Your Flexibility and Strength',
      date: 'February 15, 2025',
      category: 'Wellness',
      excerpt: 'Explore the benefits of incorporating yoga into your fitness routine, including increased flexibility, enhanced strength, better balance, and improved mental focus.',
      image: 'blog3.jpg'
    }
  ];

  return (
    <div className="blog" id="blog">
      <BlogHeader />
      <BlogList blogPosts={blogPosts} />
      
      <div className="blog-more">
        <a href="#" className="view-all-btn">
          View All Articles <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
};

export default Blog;