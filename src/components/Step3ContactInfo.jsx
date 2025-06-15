import React from "react";

const Step3ContactInfo = ({ data, update, errors }) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Contact Information</h2>

      {/* Parent's Name */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Parent's Full Name</label>
        <input
          type="text"
          value={data.parentName}
          onChange={(e) => update("parentName", e.target.value)}
          placeholder="Enter full name"
          className="w-full border p-2 rounded bg-slate-200"
        />
        {errors.parentName && <p className="text-red-500 text-sm mt-1">{errors.parentName}</p>}
      </div>

      {/* Email Address */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Email Address</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="example@domain.com"
          className="w-full border p-2 rounded bg-slate-200"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Phone Number */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Phone Number</label>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder="Digits only"
          className="w-full border p-2 rounded bg-slate-200"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>
    </div>
  );
};

export default Step3ContactInfo;
