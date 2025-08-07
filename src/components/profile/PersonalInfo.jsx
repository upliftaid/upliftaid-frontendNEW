import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";

// Initial dummy form data
const initialFormData = {
  firstName: "Sarah",
  lastName: "Johnson",
  phone: "+91120",
  city: "Mumbai",
  age: "21",
  gender: "Female",
  address: "Bandra, Mumbai",
  profession: "Software Engineer",
  interest: "Volunteering, Reading",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
};

const PersonalInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [originalData, setOriginalData] = useState(initialFormData);

  const hasChanges = JSON.stringify(formData) !== JSON.stringify(originalData);

  const handleEditClick = () => setIsEditing(true);

  const handleCancel = () => {
    setFormData(originalData); // Reset to original
    setIsEditing(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Save logic (e.g., API call) would go here
    setOriginalData(formData);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className="w-full shadow-md rounded bg-white p-4 grid gap-6">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl md:text-2xl">
          Personal Information
        </h1>
        {!isEditing && (
          <button
            onClick={handleEditClick}
            className="flex items-center gap-2 text-[#FFB204] font-bold hover:underline"
          >
            <FaRegEdit />
            <span>Edit</span>
          </button>
        )}
      </div>

      <form
        className="grid gap-6 w-full"
        onSubmit={handleSave}
      >
        {/* First Row */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
          <InputField
            {...{
              id: "firstName",
              label: "First Name",
              value: formData.firstName,
              isEditing,
              handleChange,
            }}
          />
          <InputField
            {...{
              id: "lastName",
              label: "Last Name",
              value: formData.lastName,
              isEditing,
              handleChange,
            }}
          />
          <InputField
            {...{
              id: "phone",
              label: "Phone Number",
              value: formData.phone,
              isEditing,
              handleChange,
            }}
          />
          <InputField
            {...{
              id: "city",
              label: "City",
              value: formData.city,
              isEditing,
              handleChange,
            }}
          />
          <InputField
            {...{
              id: "age",
              label: "Age",
              value: formData.age,
              isEditing,
              handleChange,
            }}
          />
          <InputField
            {...{
              id: "gender",
              label: "Gender",
              value: formData.gender,
              isEditing,
              handleChange,
            }}
          />
        </div>

        {/* Address */}
        <div className="grid gap-2">
          <label
            htmlFor="address"
            className="font-medium"
          >
            Address
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            disabled={!isEditing}
            className={`p-2 border rounded-md outline-none font-semibold resize-none min-h-[80px] transition ${
              isEditing
                ? "bg-white border-[#FFB204] focus:ring-2 focus:ring-[#FFB204]"
                : "bg-gray-100 cursor-not-allowed text-gray-500 border-gray-200"
            }`}
          />
        </div>

        {/* Other Info */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
          <InputField
            {...{
              id: "profession",
              label: "Profession",
              value: formData.profession,
              isEditing,
              handleChange,
            }}
          />
          <InputField
            {...{
              id: "interest",
              label: "Interest",
              value: formData.interest,
              isEditing,
              handleChange,
            }}
          />
          <InputField
            {...{
              id: "instagram",
              label: "Instagram",
              value: formData.instagram,
              isEditing,
              handleChange,
            }}
          />
          <InputField
            {...{
              id: "linkedin",
              label: "Linkedin",
              value: formData.linkedin,
              isEditing,
              handleChange,
            }}
          />
        </div>

        {/* Save & Cancel */}
        {isEditing && (
          <div className="flex justify-end gap-4 mt-2">
            <button
              type="button"
              onClick={handleCancel}
              className="p-2 px-4 border border-gray-300 rounded hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!hasChanges}
              className={`p-2 px-4 rounded transition ${
                hasChanges
                  ? "bg-[#FFB204] text-white hover:bg-[#e0a400]"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              Save Changes
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

// Reusable Input Field
const InputField = ({ id, label, value, isEditing, handleChange }) => (
  <div className="grid gap-2">
    <label
      htmlFor={id}
      className="font-medium"
    >
      {label}
    </label>
    <input
      type="text"
      id={id}
      name={id}
      value={value}
      onChange={handleChange}
      disabled={!isEditing}
      className={`p-2 border rounded-md outline-none font-semibold transition ${
        isEditing
          ? "bg-white border-[#FFB204] focus:ring-2 focus:ring-[#FFB204]"
          : "bg-gray-100 cursor-not-allowed text-gray-500 border-gray-200"
      }`}
    />
  </div>
);

export default PersonalInfo;
