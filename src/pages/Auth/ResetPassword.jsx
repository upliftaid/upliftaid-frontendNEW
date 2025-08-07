import React, { useState } from "react";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { Lock } from "lucide-react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import {z} from "zod";
import { useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField } from "../../components/signUp/FormField";
import { PasswordStrengthMeter } from "../../components/signUp/PasswordStrengthMeter";
import { Eye, EyeOff } from "lucide-react";

const schema = z.object({
    newPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),

    confirmPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character'),
});
export default function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false);
    const [toggleNewPassword, setToggleNewPassword] = useState(false);
    const [toggleConfirmPassword, setToggleConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const {register, handleSubmit, formState:{errors, isSubmitting }, setError, watch} = useForm({resolver: zodResolver(schema)})
    const password = watch('newPassword');

    const onsubmit = async(data) => {
        try {
            const { newPassword, confirmPassword } = data;

            if (newPassword !== confirmPassword) {
                setError("confirmPassword", {
                    type: "manual",
                    message: "Passwords do not match",
                });
                return;
            }

            // your api call
            await new Promise((resolve) => setTimeout(resolve, 5000));
            console.log(data)

        } catch (error) {
            setError("root", {
                type: "manual",
                message: "Invalid email or password",
            });
        }
    }





  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-[#00733C] via-white to-[#00b894] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:20px_20px] z-0"></div>
      <div className="backdrop-blur-lg bg-white/30 border border-white/40 shadow-xl rounded-2xl p-8 w-full max-w-md animate-fade-in-up">
      <div className="flex justify-center mb-6">
        <img
             src={logo}
              alt="Upliftaid Logo"
             className="w-24 h-24 rounded-full shadow-lg object-contain"
        />

      </div>

      <h2 className="text-3xl font-bold text-center text-green-800 mb-6 tracking-tight">
        Please enter your new password
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
        
            <FormField 
                label="Password" 
                required 
                error={errors.newPassword}
            >
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-800 w-5 h-5" />
                  <input
                    {...register('newPassword')}
                    type={toggleNewPassword ? 'text' : 'password'}
                    disabled={isSubmitting}
                    className={`w-full pl-11 pr-11 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200 ${
                      errors.password ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Create a strong password"
                  />
                  <button
                    type="button"
                    onClick={() => setToggleNewPassword(!toggleNewPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-800 hover:text-gray-600"
                  >
                    {toggleNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <PasswordStrengthMeter password={password || ''} />
            </FormField>

            <FormField 
                label="Confirm Password" 
                required 
                error={errors.confirmPassword}
            >
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-800 w-5 h-5" />
                  <input
                    {...register('confirmPassword')}
                    type={toggleConfirmPassword ? 'text' : 'password'}
                    disabled={isSubmitting}
                    className={`w-full pl-11 pr-11 py-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-200 ${
                      errors.password ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Confirm Password"
                  />
                  <button
                    type="button"
                    onClick={() => setToggleConfirmPassword(!toggleConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-800 hover:text-gray-600"
                  >
                    {toggleConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {/* <PasswordStrengthMeter password={password || ''} /> */}
            </FormField>
        
        

        <button
          type="submit"
          disabled={isSubmitting}
          style={isSubmitting ? { cursor: "not-allowed", opacity: 0.5 } : {}}
          className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-transform transform hover:scale-105 duration-200 shadow-md"
        >
          submit
        </button>
        {
            errors.root && <p className="text-red-500 text-center text-xs w-full">{errors.root.message}</p>
        }
      </form>

      <p className="text-center mt-4 text-sm text-green-900">
        <button
        disabled={isSubmitting}
        style={isSubmitting ? { cursor: "not-allowed", opacity: 0.5 } : {}}
          onClick={() => navigate("/forget-password")}
          className="underline font-semibold hover:text-green-700"
        >
          Go back
        </button>
      </p>
    </div>
    </div>
  );
}
