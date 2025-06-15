import { useState, useEffect } from "react";
import Step1ChildDetails from "./components/Step1ChildDetails";
import Step2ServiceNeeds from "./components/Step2ServiceNeeds";
import Step3ContactInfo from "./components/Step3ContactInfo";
import FormNavigation from "./components/FormNavigation";

const App = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    age: "",
    diagnosis: "",
    schoolType: "",
    supportTypes: [],
    frequency: "",
    requirements: "",
    parentName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  // Auto-reset after submission
  useEffect(() => {
    if (submitted) {
      const timeout = setTimeout(() => {
        // Reset form and return to step 1
        setFormData({
          age: "",
          diagnosis: "",
          schoolType: "",
          supportTypes: [],
          frequency: "",
          requirements: "",
          parentName: "",
          email: "",
          phone: "",
        });
        setStep(1);
        setSubmitted(false);
      }, 1500); //  3 seconds delay

      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [submitted]);

  //  Step navigation
  const handleNext = () => {
    const stepErrors = validateStep(step);
    if (Object.keys(stepErrors).length === 0) {
      setErrors({});
      setStep(step + 1);
    } else {
      setErrors(stepErrors);
    }
  };

  const handlePrev = () => setStep(step - 1);

  const updateFormData = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    const stepErrors = validateStep(step);
    if (Object.keys(stepErrors).length === 0) {
      console.log("Submitted Data:", formData);
      setSubmitted(true);
    } else {
      setErrors(stepErrors);
    }
  };

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.age) newErrors.age = "Age is required";
      if (!formData.diagnosis) newErrors.diagnosis = "Diagnosis is required";
      if (!formData.schoolType) newErrors.schoolType = "Select school type";
    } else if (step === 2) {
      if (!formData.supportTypes.length) newErrors.supportTypes = "Select at least one support";
      if (!formData.frequency) newErrors.frequency = "Select preferred frequency";
    } else if (step === 3) {
      if (!formData.parentName) newErrors.parentName = "Name is required";
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email is required";
      if (!formData.phone || !/^\d+$/.test(formData.phone)) newErrors.phone = "Valid phone number required";
    }
    return newErrors;
  };

  //  Thank You screen
  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-6 bg-blue-500">
        <div className="bg-green-400 text-white p-10 rounded shadow max-w-md w-full">
          <h1 className="text-3xl font-bold mb-4">Thank You!</h1>
          <p>Your service request has been submitted successfully.</p>
          <p className="mt-2 text-sm">Redirecting to form...</p>
        </div>
      </div>
    );
  }

  return (
      <div className="min-h-screen bg-blue-500 flex items-center justify-center ">
        <div className="max-w-xl w-full p-6 bg-blue-400 border border-red-500  rounded-lg shadow">
          {step === 1 && <Step1ChildDetails data={formData} update={updateFormData} errors={errors} />}
          {step === 2 && <Step2ServiceNeeds data={formData} update={updateFormData} errors={errors} />}
          {step === 3 && <Step3ContactInfo data={formData} update={updateFormData} errors={errors} />}
          <FormNavigation step={step} onNext={handleNext} onPrev={handlePrev} onSubmit={handleSubmit} />
        </div>
    </div>
  );
};

export default App;
