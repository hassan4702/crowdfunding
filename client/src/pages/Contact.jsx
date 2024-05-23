import React, { useState } from "react";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subject, message }),
      });
      if (response.ok) {
        alert("Email sent successfully");
        setSubject("");
        setMessage("");
      } else {
        alert("Error sending email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email");
    }
  };

  return (
    <div className="container mx-auto py-4 px-4">
      <div className="">
        <h2 className="text-4xl font-bold mb-10 mt-20">Have a question?</h2>
        {/* <p className="mb-10">To get started, please log in to your Block Fund account if you have one.</p> */}
        {/* <hr className="border-gray-300 my-8" /> */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-lg font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={handleSubjectChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessageChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows="6"
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-[#8c6dfd] font-semibold text-white rounded hover:bg-[#7868b3]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
