import React from "react";

const Step2ServiceNeeds = ({ data, update, errors }) => {
  const supportOptions = ["Speech Therapy", "Occupational Therapy", "Special Education", "Behavioral Therapy"];

  const handleSupportChange = (e) => {
    const { value, checked } = e.target;
    const updatedSupports = checked
      ? [...data.supportTypes, value]
      : data.supportTypes.filter((s) => s !== value);
    update("supportTypes", updatedSupports);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Service Needs</h2>

      {/* Support Types */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Type of Support Needed</label>
        <div className="flex flex-wrap gap-4">
          {supportOptions.map((option) => (
            <label key={option} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={option}
                checked={data.supportTypes.includes(option)}
                onChange={handleSupportChange}
              />
              {option}
            </label>
          ))}
        </div>
        {errors.supportTypes && <p className="text-red-500 text-sm mt-1">{errors.supportTypes}</p>}
      </div>

      {/* Frequency */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Preferred Frequency</label>
        <select
          className="w-full border p-2 rounded bg-slate-200"
          value={data.frequency}
          onChange={(e) => update("frequency", e.target.value)}
        >
          <option value="">-- Select Frequency --</option>
          <option value="Once a week">Once a week</option>
          <option value="Twice a week">Twice a week</option>
          <option value="Daily">Daily</option>
        </select>
        {errors.frequency && <p className="text-red-500 text-sm mt-1">{errors.frequency}</p>}
      </div>

      {/* Specific Requirements */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Specific Requirements (optional)</label>
        <textarea
          className="w-full border p-2 rounded bg-slate-200"
          rows={4}
          value={data.requirements}
          onChange={(e) => update("requirements", e.target.value)}
          placeholder="Describe any specific needs"
        />
      </div>
    </div>
  );
};

export default Step2ServiceNeeds;
