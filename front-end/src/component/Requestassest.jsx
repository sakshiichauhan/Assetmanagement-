import React, { useState } from "react";

const AssetRequestForm = () => {
  const [formData, setFormData] = useState({
    requesterName: "",
    employeeId: "",
    department: "",
    jobTitle: "",
    contactInfo: "",
    assetType: "",
    assetDescription: "",
    assetQuantity: 1,
    modelVersion: "",
    serialNumber: "",
    purpose: "",
    priority: "Medium",
    estimatedCost: "",
    costCenter: "",
    managerApproval: false,
    deliveryDate: "",
    deliveryLocation: "",
    vendorBrand: "",
    quoteInvoice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here, e.g., sending to a server
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Asset Request Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Requester Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="requesterName"
              value={formData.requesterName}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Employee ID</label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Contact Info</label>
            <input
              type="text"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        {/* Asset Details */}
        <div className="mt-6">
          <h3 className="text-xl font-medium">Asset Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">Asset Type</label>
              <input
                type="text"
                name="assetType"
                value={formData.assetType}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Asset Description</label>
              <input
                type="text"
                name="assetDescription"
                value={formData.assetDescription}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Asset Quantity</label>
              <input
                type="number"
                name="assetQuantity"
                value={formData.assetQuantity}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                min="1"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Model/Version</label>
              <input
                type="text"
                name="modelVersion"
                value={formData.modelVersion}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block font-medium">Serial Number</label>
              <input
                type="text"
                name="serialNumber"
                value={formData.serialNumber}
                onChange={handleChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Justification and Approval */}
        <div className="mt-6">
          <label className="block font-medium">Purpose/Justification</label>
          <textarea
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            rows="3"
            required
          ></textarea>

          <div className="mt-4">
            <label className="block font-medium">Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="mt-4">
            <label className="block font-medium">Estimated Cost</label>
            <input
              type="text"
              name="estimatedCost"
              value={formData.estimatedCost}
              onChange={handleChange}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mt-4">
            <label className="block font-medium">Manager Approval</label>
            <input
              type="checkbox"
              name="managerApproval"
              checked={formData.managerApproval}
              onChange={(e) => setFormData({ ...formData, managerApproval: e.target.checked })}
              className="mt-1"
            />
            <span className="ml-2">Approve</span>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="mt-6">
          <label className="block font-medium">Requested Delivery Date</label>
          <input
            type="date"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-4">
          <label className="block font-medium">Delivery Location</label>
          <input
            type="text"
            name="deliveryLocation"
            value={formData.deliveryLocation}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssetRequestForm;
