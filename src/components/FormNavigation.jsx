const FormNavigation = ({ step, onNext, onPrev, onSubmit }) => (
  <div className="flex justify-between mt-6">
    {step > 1 && (
      <button className="bg-red-300 px-4 py-2 rounded" onClick={onPrev}>
        Previous
      </button>
    )}
    {step < 3 && (
      <button className="bg-blue-500 hover:bg-green-500 text-white px-4 py-2 rounded" onClick={onNext}>
        Next
      </button>
    )}
    {step === 3 && (
      <button className="bg-blue-500 hover:bg-green-500 text-white px-4 py-2 rounded" onClick={onSubmit}>
        Submit
      </button>
    )}
  </div>
);
export default FormNavigation;
