import React from 'react';
import EachFAQ from './EachFAQ';
import BlackLinesDotted from '../assets/BlackLinesDotted.svg';

function FAQPageHome() {
  const faqs = [
    {
      question: 'Question 1',
      answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, iusto nihil. Beatae perspiciatis corrupti expedita facere. Veniam, numquam reprehenderit. Totam dolore optio illum ab voluptates incidunt perferendis dignissimos enim similique?'
    },
    {
      question: 'Question 2',
      answer: 'Another answer for question 2.'
    },
    {
        question: 'Question 3',
        answer: 'Another answer for question 3.'
    },
    {
        question: 'Question 4',
        answer: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. In, iusto nihil. Beatae perspiciatis corrupti expedita facere. Veniam, numquam reprehenderit. Totam dolore optio illum ab voluptates incidunt perferendis dignissimos enim similique?'
    },
    {
        question: 'Question 5',
        answer: 'Another answer for question 5.'
    }
    
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="flex flex-col space-y-6">
          {faqs.map((faq, index) => (
            <EachFAQ key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        
      </div>
      <img src={BlackLinesDotted} alt="" className='pt-14 px-5'/>
    </div>
  );
}

export default FAQPageHome;
