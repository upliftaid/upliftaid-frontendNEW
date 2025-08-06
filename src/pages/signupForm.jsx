import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Eye, 
  EyeOff, 
  User, 
  Mail, 
  Lock, 
  Phone, 
  MapPin, 
  Calendar, 
  Check, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

import { step1Schema, step2Schema } from '../constants/signUp/form';
import { FormField } from '../components/signUp/FormField';
import { PasswordStrengthMeter } from '../components/signUp/PasswordStrengthMeter';
import { MultiSelect } from '../components/signUp/MultiSelect';
import { AvatarUpload } from '../components/signUp/AvatarUpload';

const INTERESTS_OPTIONS = [
  'Technology', 'Sports', 'Music', 'Art', 'Travel', 'Reading', 'Photography', 'Cooking',
  'Gaming', 'Fitness', 'Nature', 'Movies', 'Writing', 'Dancing', 'Volunteering'
];

const SKILLS_OPTIONS = [
  'Programming', 'Design', 'Marketing', 'Writing', 'Teaching', 'Leadership', 'Communication',
  'Project Management', 'Data Analysis', 'Public Speaking', 'Problem Solving', 'Teamwork'
];

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  // Step 1 form
  const step1Form = useForm({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: 'user',
    },
  });

  // Step 2 form
  const step2Form = useForm({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      phone: '',
      address: {
        street: '',
        city: '',
        state: '',
        country: '',
        zip: '',
      },
      dateOfBirth: '',
      avatar: null,
      interests: [],
      skills: [],
    },
  });

  // function to handle only required data
  const handleStep1Submit = async (data) => {
    try {
      // fetch call
      await new Promise((resolve) => setTimeout(resolve, 5000));

      console.log('Step 1 data:', data);
      setCurrentStep(2);
    } catch (error) {
      step1Form.setError("root", {
                type: "manual",
                message: "something went wrong, please try again",
      });
    }
  };

  // function to handle both required and optional data
  const handleStep2Submit = async (data) => {
    try {
      const step1Data = step1Form.getValues();
      const fullData = { ...step1Data, ...data };

      // fetch call
      await new Promise((resolve) => setTimeout(resolve, 5000));

      console.log('Complete form data:', fullData);
      alert('Account created successfully!');
    } catch (error) {
      form2.setError('root', { type: "manual", message: "there is some error, please try again" });
    }
    
  };

  const handleSkip = () => {
    const step1Data = step1Form.getValues();
    console.log('Profile setup skipped, form submitted:', step1Data);
    alert('Account created successfully! You can complete your profile later.');
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const password = step1Form.watch('password');

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#00733C] via-white to-[#00b894]  flex items-center justify-center p-4">
      <div className="w-full max-w-md ">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-green-800">Step {currentStep} of 2</span>
            <span className="text-sm text-green-800">
              {currentStep === 1 ? 'Account Details' : 'Profile Setup'}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / 2) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-800 mb-2">
              {currentStep === 1 ? 'Create Account' : 'Complete Profile'}
            </h1>
            <p className="text-green-800">
              {currentStep === 1 ? 'Join our community today' : 'Tell us more about yourself'}
            </p>
          </div>

          {currentStep === 1 && (
            <form onSubmit={step1Form.handleSubmit(handleStep1Submit)} className="space-y-6 bg-[radial-gradient(#ffffff33_1px,transparent_1px)]">
              {/* Name Field */}
              <FormField 
                label="Full Name" 
                required 
                error={step1Form.formState.errors.name}
              >
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-800 w-5 h-5" />
                  <input
                    {...step1Form.register('name')}
                    type="text"
                    disabled={step1Form.formState.isSubmitting}
                    className={`w-full pl-11 pr-4 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200 ${
                      step1Form.formState.errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  
                </div>
              </FormField>

              {/* Email Field */}
              <FormField 
                label="Email Address" 
                required 
                error={step1Form.formState.errors.email}
              >
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-800 w-5 h-5" />
                  <input
                    {...step1Form.register('email')}
                    type="email"
                    disabled={step1Form.formState.isSubmitting}
                    className={`w-full pl-11 pr-4 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200 ${
                      step1Form.formState.errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email"
                  />
                </div>
              </FormField>

              {/* Password Field */}
              <FormField 
                label="Password" 
                required 
                error={step1Form.formState.errors.password}
              >
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-800 w-5 h-5" />
                  <input
                    {...step1Form.register('password')}
                    type={showPassword ? 'text' : 'password'}
                    disabled={step1Form.formState.isSubmitting}
                    className={`w-full pl-11 pr-11 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200 ${
                      step1Form.formState.errors.password ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Create a strong password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-800 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <PasswordStrengthMeter password={password || ''} />
              </FormField>

              {/* Role Selection */}
              <FormField label="Role" required>
                <Controller
                  name="role"
                  control={step1Form.control}
                  render={({ field }) => (
                    <div className="grid grid-cols-2 gap-3">
                      {['user', 'volunteer'].map((role) => (
                        <button
                          key={role}
                          type="button"
                          onClick={() => field.onChange(role)}
                          disabled={step1Form.formState.isSubmitting}
                          className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                            field.value === role
                              ? 'border-green-500 bg-green-50 text-green-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="text-center">
                            <div className="text-lg font-medium capitalize">{role}</div>
                            <div className="text-sm text-green-600 mt-1">
                              {role === 'user' ? 'Join as a member' : 'Help the community'}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                />
              </FormField>

              {/* Submit Button */}
              <div className="flex justify-end pt-6">
                <button
                  type="submit"
                  disabled={step1Form.formState.isSubmitting}
                  style={{ opacity: step1Form.formState.isSubmitting ? 0.5 : 1 }}
                  className="flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-xl hover:from-green-600 hover:to-green-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
              {
                step1Form.formState.errors.root && (
                  <div className="text-red-500 text-end text-sm ">
                    {step1Form.formState.errors.root.message}
                  </div>
                )
              }
            </form>
          )}

          {currentStep === 2 && (
            <form onSubmit={step2Form.handleSubmit(handleStep2Submit)} className="space-y-6">
              {/* Avatar Upload */}
              <FormField label="Profile Picture">
                <Controller
                  name="avatar"
                  control={step2Form.control}
                  render={({ field }) => (
                    <AvatarUpload onFileSelect={field.onChange} />
                  )}
                />
              </FormField>

              {/* Phone */}
              <FormField label="Phone Number">
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-800 w-5 h-5" />
                  <input
                    {...step2Form.register('phone')}
                    type="tel"
                    disabled={step2Form.formState.isSubmitting}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl  focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </FormField>

              {/* Date of Birth */}
              <FormField label="Date of Birth">
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-800 w-5 h-5" />
                  <input
                    {...step2Form.register('dateOfBirth')}
                    type="date"
                    disabled={step2Form.formState.isSubmitting}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl  focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200"
                  />
                </div>
              </FormField>

              {/* Address */}
              <FormField label="Address">
                <div className="space-y-3">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-800 w-5 h-5" />
                    <input
                      {...step2Form.register('address.street')}
                      type="text"
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200"
                      disabled={step2Form.formState.isSubmitting}
                      placeholder="Street Address"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      {...step2Form.register('address.city')}
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200"
                      disabled={step2Form.formState.isSubmitting}
                      placeholder="City"
                    />
                    <input
                      {...step2Form.register('address.state')}
                      type="text"
                      disabled={step2Form.formState.isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200"
                      placeholder="State"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      {...step2Form.register('address.country')}
                      type="text"
                      disabled={step2Form.formState.isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200"
                      placeholder="Country"
                    />
                    <input
                      {...step2Form.register('address.zip')}
                      type="text"
                      disabled={step2Form.formState.isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200"
                      placeholder="ZIP Code"
                    />
                  </div>
                </div>
              </FormField>

              {/* Interests */}
              <FormField label="Interests">
                <Controller
                  name="interests"
                  control={step2Form.control}
                  render={({ field }) => (
                    <MultiSelect
                      options={INTERESTS_OPTIONS}
                      selected={field.value || []}
                      onChange={field.onChange}
                      colorClass="bg-green-500"
                    />
                  )}
                />
              </FormField>

              {/* Skills */}
              <FormField label="Skills">
                <Controller
                  name="skills"
                  control={step2Form.control}
                  render={({ field }) => (
                    <MultiSelect
                      options={SKILLS_OPTIONS}
                      selected={field.value || []}
                      onChange={field.onChange}
                      colorClass="bg-green-500"
                    />
                  )}
                />
              </FormField>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={step2Form.formState.isSubmitting}
                  style={{ opacity: step2Form.formState.isSubmitting ? 0.5 : 1 }}
                  className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                >
                  <ChevronLeft className="w-5 h-5 mr-1" />
                  Back
                </button>
                
                <div className="flex items-center space-x-3">
                  
                  <button
                    type="submit"
                    disabled={step2Form.formState.isSubmitting }
                    style={{ opacity: step2Form.formState.isSubmitting ? 0.5 : 1 }}
                    className="flex items-center px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-xl hover:from-green-600 hover:to-green-700 focus:ring-4 focus:ring-blue-200 transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Check className="w-5 h-5 mr-2" />
                    Create Account
                  </button>
                </div>
              </div>
              <button
                    type="button"
                    onClick={handleSkip}
                    disabled={step2Form.formState.isSubmitting}
                    style={{ opacity: step2Form.formState.isSubmitting ? 0.5 : 1 }}
                    className="px-6 text-center w-full cursor-pointer text-gray-600 hover:text-gray-800 font-medium rounded-xl text-[14px]  transition-all duration-200"
                  >
                    Skip for now
                  </button>
                  {
                    step2Form.formState.errors.root && (
                      <div className="text-red-500 text-sm mt-2" >
                        {step2Form.formState.errors.root.message}
                      </div>
                    )
                  }
            </form>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <a href="#" className="font-medium text-white  hover:text-gray-200 transition-colors duration-200">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default App;