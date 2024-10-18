import React, { useState } from 'react';

const Step1 = ({ formData, setFormData, nextStep }) => {
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!formData.mobile) {
      setError("Mobile number is required.");
      return;
    }
    // Simulate an API call to check if the user has already filled the form
    const userExists = false; // Simulated result
    if (userExists) {
      setError("User has already filled the form.");
    } else {
      nextStep();
    }
  };

  return (
    <div className="flex-col items-center h-screen bg-gray-900 text-white p-10 gap-5">
        <div className='flex gap-5'>
            <label>Mobile Number:</label>
            <input
                type="text"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            />
        </div>
        <div>
            <button onClick={handleNext} className='text-white bg-blue'>Next</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      
    </div>
  );
};

export default Step1;
