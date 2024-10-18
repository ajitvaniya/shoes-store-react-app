import React from 'react';

const Step3 = ({ formData, setFormData, nextStep, prevStep }) => {
    return (
        <div className="flex-col items-center h-screen bg-gray-900 text-white p-10 gap-5">
            <div className='flex-col gap-5'>
                <div className='flex gap-2 m-4'>

                    <label>Aadhar Number:</label>
                    <input
                    className='text-black'
                        type="text"
                        value={formData.aadharNumber}
                        onChange={(e) => setFormData({ ...formData, aadharNumber: e.target.value })}
                    />
                </div>
                <div className='flex gap-2 m-4'>

                    <label>PAN Number:</label>
                    <input
                    className='text-black'
                        type="text"
                        value={formData.panNumber}
                        onChange={(e) => setFormData({ ...formData, panNumber: e.target.value })}
                    />
                </div>

                <div className='flex gap-2 m-4'>
                    <label>Upload Aadhar Document:</label>
                    <input
                    className='text-black'
                        type="file"
                        onChange={(e) => setFormData({ ...formData, aadharDoc: e.target.files[0] })}
                    />
                </div>
                <div className='flex gap-2 m-4'>

                    <label>Upload PAN Document:</label>
                    <input
                        type="file"
                        className='text-black'
                        onChange={(e) => setFormData({ ...formData, panDoc: e.target.files[0] })}
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

export default Step3;
