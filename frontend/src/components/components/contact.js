import React, { useState } from 'react';

const MessageForm = () => {
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form className="max-w-sm mx-auto" onSubmit={handleFormSubmit}>
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Your message
      </label>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Leave a comment..."
        value={message}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default MessageForm;