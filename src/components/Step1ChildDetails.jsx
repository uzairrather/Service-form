import React from "react";

const Step1ChildDetails = ({ data, update, errors }) => {
  return (
    <div className="">
      <h2 className="text-xl font-bold mb-4">Child Details</h2>

      {/* Age */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Child's Age</label>
        <input
          type="number"
          value={data.age}
          onChange={(e) => update("age", e.target.value)}
          className="w-full border p-2 rounded bg-slate-200"
          placeholder="Enter age"
        />
        {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
      </div>

      {/* Diagnosis */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Diagnosis</label>
        <input
          type="text"
          value={data.diagnosis}
          onChange={(e) => update("diagnosis", e.target.value)}
          className="w-full border p-2 rounded bg-slate-200"
          placeholder="E.g. Autism, ADHD"
        />
        {errors.diagnosis && <p className="text-red-500 text-sm mt-1">{errors.diagnosis}</p>}
      </div>

      {/* School Type */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">School Type</label>
        <div className="flex gap-6">
          {["Mainstream", "Special", "Home School"].map((type) => (
            <label key={type} className="flex items-center gap-2">
              <input
                type="radio"
                name="schoolType"
                value={type}
                checked={data.schoolType === type}
                onChange={(e) => update("schoolType", e.target.value)}
              />
              {type}
            </label>
          ))}
        </div>
        {errors.schoolType && <p className="text-red-500 text-sm mt-1">{errors.schoolType}</p>}
      </div>
    </div>
  );
};

export default Step1ChildDetails;
