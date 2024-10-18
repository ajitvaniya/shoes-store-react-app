import React from 'react';

const Step5 = ({ formData, setFormData, handleSubmit, prevStep }) => {
    return (
        <div className="flex-col items-center h-screen bg-gray-900 text-white p-10 gap-5">
            <div className='flex-col gap-5'>
                 <div className='flex gap-2 m-4'>


                        <label>
                            <input
                                className='text-black'
                                type="checkbox"
                                checked={formData.agree}
                                onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                            />
                            I agree to the terms and conditions.
                        </label>
                </div>
            </div>
            <div className='flex gap-5  m-4'> 
                <button onClick={prevStep}>Back</button>
                <button onClick={handleSubmit} disabled={!formData.agree}>Submit</button>
            </div>
        </div>
    );
};

export default Step5;
