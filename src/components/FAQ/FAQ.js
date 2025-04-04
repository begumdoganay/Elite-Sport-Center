import React from 'react';
import './FAQ.css';
import FAQHeader from './FAQHeader';
import FAQList from './FAQList';

const FAQ = () => {
  // FAQ data
  const faqItems = [
    {
      id: 1,
      question: 'What are your operating hours?',
      answer: 'Our facility is open from 6:00 AM to 10:00 PM Monday through Friday, and 8:00 AM to 8:00 PM on weekends. Elite members have 24/7 access with their keycard.'
    },
    {
      id: 2,
      question: 'Do you offer free trial periods?',
      answer: 'Yes! We offer a 3-day free trial pass for all new visitors. This includes access to our gym facilities and one group class of your choice. Contact us to schedule your trial visit.'
    },
    {
      id: 3,
      question: 'What fitness classes do you offer?',
      answer: 'We offer a wide variety of classes including yoga, pilates, spinning, HIIT, Zumba, strength training, and more. Check our class schedule for specific times and instructors.'
    },
    {
      id: 4,
      question: 'Can I freeze my membership?',
      answer: 'Yes, memberships can be frozen for medical reasons or extended travel for up to 3 months per year. Premium and Elite members can freeze their memberships at any time, while Basic members need to provide documentation.'
    },
    {
      id: 5,
      question: 'Do you have personal trainers available?',
      answer: 'Yes, we have certified personal trainers available for one-on-one sessions. Premium members receive 2 sessions per month, and Elite members receive 4 sessions per month included in their membership. Additional sessions can be purchased separately.'
    },
    {
      id: 6,
      question: 'Is there parking available?',
      answer: 'Yes, we offer free parking for all members in our dedicated parking lot. During peak hours, overflow parking is available in the adjacent garage.'
    },
    {
      id: 7,
      question: 'Do you have showers and locker rooms?',
      answer: 'Yes, we have fully equipped locker rooms with showers, saunas, and complimentary towel service. Elite members have access to premium locker rooms with additional amenities.'
    },
    {
      id: 8,
      question: 'What is your cancellation policy?',
      answer: 'Memberships can be cancelled with 30 days\' notice. For class reservations, we ask that you cancel at least 12 hours in advance to avoid a late cancellation fee. Emergency situations are handled on a case-by-case basis.'
    }
  ];

  // Split FAQ items into two columns
  const leftColumnFAQs = faqItems.slice(0, 4);
  const rightColumnFAQs = faqItems.slice(4);

  return (
    <div className="faq" id="faq">
      <FAQHeader />
      <div className="faq-container">
        <FAQList items={leftColumnFAQs} animationDirection="right" />
        <FAQList items={rightColumnFAQs} animationDirection="left" />
      </div>
      <div className="faq-more">
        <p>Still have questions?</p>
        <a href="#contact" className="contact-btn">Contact Us</a>
      </div>
    </div>
  );
};

export default FAQ;