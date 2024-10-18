import React from 'react';

const Step4 = ({ formData, setFormData, nextStep, prevStep }) => {
    return (
        <div className="flex-col items-center h-screen bg-gray-900 text-white p-10 gap-5">
            <div className='flex-col gap-5'>
                <div className='flex gap-2 m-4'>
                    <label>Bank Account Number:</label>
                    <input
                        className='text-black'
                        type="text"
                        value={formData.bankAccount}
                        onChange={(e) => setFormData({ ...formData, bankAccount: e.target.value })}
                    />
                </div>
                <div className='flex gap-2 m-4'>
                    <label>Bank Name:</label>
                    <input
                        className='text-black'
                        type="text"
                        value={formData.bankName}
                        onChange={(e) => setFormData({ ...formData, bankName: e.target.value })}
                    />
                </div>
                <div className='flex gap-2 m-4'>
                    <label>IFSC Code:</label>
                    <input
                        className='text-black'
                        type="text"
                        value={formData.ifscCode}
                        onChange={(e) => setFormData({ ...formData, ifscCode: e.target.value })}
                    />
                </div>
            </div>
            <div className='flex gap-5  m-4'>

                <button onClick={prevStep}>Back</button>
                <button onClick={nextStep}>Next</button>
            </div>
        </div>
    );
};

export default Step4;
