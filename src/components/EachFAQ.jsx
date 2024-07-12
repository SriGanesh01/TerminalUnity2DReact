import React, { useState } from 'react';

function EachFAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-[#595959] p-4 rounded-md shadow-md text-[#c2c2c2]">
        <div className="flex justify-between items-center cursor-pointer" onClick={toggleFAQ}>
          <p className="font-bold">{question}</p>
          <span className="text-xl font-bold pb-1">{isOpen ? '-' : '+'}</span>
        </div>
        {isOpen && <p className="">{answer}</p>}
      </div>
    </>
  );
}

export default EachFAQ;
