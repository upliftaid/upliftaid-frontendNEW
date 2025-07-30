import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

const PersonalInfo = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Optional: store form values in state if needed later
  // const [formData, setFormData] = useState({ ... })

  const handleEditClick = () => setIsEditing(true);
  const handleCancel = () => setIsEditing(false);
  const handleSave = (e) => {
    e.preventDefault();
    // Save logic goes here (API call etc.)
    setIsEditing(false);
  };

  return (
    <div className="w-full shadow-md rounded bg-white p-4 grid gap-6">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-xl md:text-2xl">Personal Information</h1>
        {!isEditing && (
          <div
            className="flex items-center gap-2 text-[#FFB204] font-bold cursor-pointer"
            onClick={handleEditClick}
          >
            <FaRegEdit />
            <p>Edit</p>
          </div>
        )}
      </div>

      <form className="grid gap-6 w-full" onSubmit={handleSave}>
        {/* First row - Name & Contact */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
          <InputField id="firstName" label="First Name" placeholder="Sarah" disabled={!isEditing} />
          <InputField id="lastName" label="Last Name" placeholder="Jonhson" disabled={!isEditing} />
          <InputField id="phone" label="Phone Number" placeholder="+91120" disabled={!isEditing} />
          <InputField id="city" label="City" placeholder="Mumbai" disabled={!isEditing} />
          <InputField id="age" label="Age" placeholder="21" disabled={!isEditing} />
          <InputField id="gender" label="Gender" placeholder="Female" disabled={!isEditing} />
        </div>

        {/* Address */}
        <div className="grid gap-2">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            placeholder="Bandra, Mumbai"
            className="p-2 border border-gray-200 rounded-md outline-none font-semibold"
            disabled={!isEditing}
          />
        </div>

        {/* Profession & Interest */}
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-4">
          <InputField id="profession" label="Profession" placeholder="Software Engineer" disabled={!isEditing} />
          <InputField id="interest" label="Interest" placeholder="Volunteering, Reading" disabled={!isEditing} />
          <InputField id="instagram" label="Instagram" placeholder="https://www.instagram.com/" disabled={!isEditing} />
          <InputField id="linkedin" label="Linkedin" placeholder="https://www.linkedin.com/" disabled={!isEditing} />
        </div>

        {/* Save & Cancel */}
        {isEditing && (
          <div className="flex justify-end gap-4">
            <button type="button" onClick={handleCancel} className="p-2 border rounded cursor-pointer">
              Cancel
            </button>
            <button type="submit" className="p-2 rounded cursor-pointer bg-[#FFB204] hover:bg-[#E69F00] hover:text-white">
              Save Changes
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

// Reusable input component
const InputField = ({ id, label, placeholder, disabled }) => (
  <div className="grid gap-2">
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      id={id}
      name={id}
      placeholder={placeholder}
      disabled={disabled}
      className={`p-2 border border-gray-200 rounded-md outline-none font-semibold ${
        disabled ? "bg-gray-100 cursor-not-allowed" : ""
      }`}
    />
  </div>
);

export default PersonalInfo;
