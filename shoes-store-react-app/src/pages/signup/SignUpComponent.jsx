import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import Step1 from "./elements/Step1";
import Step2 from "./elements/Step2";
import Step3 from "./elements/Step3";
import Step4 from "./elements/Step4";
import Step5 from "./elements/Step5";

const SignUpComponent = () => {
  const [step, setStep] = useState(1); // Current step
  const [formData, setFormData] = useState({
    mobile: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    aadharNumber: "",
    panNumber: "",
    aadharDoc: null,
    panDoc: null,
    bankAccount: "",
    bankName: "",
    ifscCode: "",
    agree: false,
  });
  const navigate = useNavigate(); 

 
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("signupForm"));
    if (savedData) {
      setFormData(savedData.data || {});
      setStep(savedData.step || 1);
    }
  }, []);
 
  const saveToLocalStorage = (step, data) => {
    localStorage.setItem("signupForm", JSON.stringify({ step, data }));
  };

  // Handle moving forward
  const nextStep = () => {
    const newStep = step + 1;
    setStep(newStep);
    saveToLocalStorage(newStep, formData);
  };

  
  const prevStep = () => {
    const newStep = step - 1;
    setStep(newStep);
    saveToLocalStorage(newStep, formData);
  };
 
  const handleSubmit = () => { 
      localStorage.setItem("userDetails",JSON.stringify(formData))
      localStorage.removeItem("signupForm"); 
      navigate('/');

  };

  // Render steps based on current step
  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
      case 2:
        return <Step2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 4:
        return <Step4 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
      case 5:
        return <Step5 formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-col items-center h-screen bg-gray-900 text-white p-10 gap-5"> 
      <h1>Signup Step {step}</h1>
      {renderStep()}
    </div>
  );
};

export default SignUpComponent;
