import React from 'react';
import { useInView } from 'react-intersection-observer';
import BlogCard from './BlogCard';
import './BlogList.css';

const BlogList = ({ blogPosts }) => {
  // Set up intersection observer with different thresholds for each blog card
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true });

  // Animation classes for each blog based on position
  const animationClasses = [
    "scroll-animation fade-right",
    "scroll-animation fade-in",
    "scroll-animation fade-left"
  ];

  // Map each blog to their respective ref and inView status
  const blogRefs = [
    { ref: ref1, inView: inView1 },
    { ref: ref2, inView: inView2 },
    { ref: ref3, inView: inView3 }
  ];

  return (
    <div className="blog-container">
      {blogPosts.map((blog, index) => (
        <div
          ref={blogRefs[index].ref}
          key={blog.id}
          className={`${animationClasses[index]} ${blogRefs[index].inView ? 'active' : ''}`}
        >
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;