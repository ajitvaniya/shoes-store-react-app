import React from 'react';

const Step2 = ({ formData, setFormData, nextStep, prevStep }) => {
    return (
        <div className="flex-col items-center h-screen bg-gray-900 text-white p-10 gap-5">
            <div className='flex-col gap-5'>
                <div className='flex gap-2 m-4'>
                    <label>First Name:</label>
                    <input
                    className='text-black'
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                </div>
                <div className='flex gap-5  m-4'>
                    <label>Last Name:</label>
                    <input
                    className='text-black'
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                </div>

                <div className='flex gap-5  m-4 '>
                    <label>Email:</label>
                    <input 
                        className='text-black'
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div className='flex gap-5  m-4'>
                    <label>Address:</label>
                    <textarea
                    className='text-black'
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                </div>
            </div>

            <div>


                <div className='flex gap-5  m-4'>


                    <button onClick={prevStep}>Back</button>
                    <button onClick={nextStep}>Next</button>
                </div>
            </div>
        </div>
    );
};

export default Step2;
