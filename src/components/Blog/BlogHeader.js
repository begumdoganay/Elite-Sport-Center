import React from 'react';
import { useInView } from 'react-intersection-observer';
import './BlogHeader.css';

const BlogHeader = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="blog-section" ref={ref}>
      <h2 className={`scroll-animation fade-in ${inView ? 'active' : ''}`}>
        FITNESS BLOG
      </h2>
      <p className={`scroll-animation fade-in ${inView ? 'active' : ''}`}>
        Stay updated with the latest fitness trends, workout tips, and nutrition advice 
        from our expert trainers and health specialists.
      </p>
    </div>
  );
};

export default BlogHeader;