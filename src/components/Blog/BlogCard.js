import React from 'react';
import './BlogCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BlogCard = ({ blog }) => {
  const { title, date, category, excerpt, image } = blog;

  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src={require(`../../assets/images/${image}`)} alt={title} />
        <div className="blog-category">{category}</div>
      </div>
      <div className="blog-content">
        <h3>{title}</h3>
        <p className="blog-date">
          <FontAwesomeIcon icon={faCalendar} /> {date}
        </p>
        <p className="blog-excerpt">{excerpt}</p>
        <a href="#" className="blog-read-more">
          Read More <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;