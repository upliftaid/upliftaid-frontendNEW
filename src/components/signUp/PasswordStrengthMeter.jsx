import React from 'react';

export const PasswordStrengthMeter = ({ password }) => {
  const calculateStrength = (password) => {
    let strength = 0;
    const issues = [];

    if (password.length >= 8) strength += 25;
    else issues.push('At least 8 characters');

    if (/[A-Z]/.test(password)) strength += 25;
    else issues.push('One uppercase letter');

    if (/[0-9]/.test(password)) strength += 25;
    else issues.push('One number');

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 25;
    else issues.push('One special character');

    return { strength, issues };
  };

  if (!password) return null;

  const { strength, issues } = calculateStrength(password);

  const getStrengthLabel = (strength) => {
    if (strength === 100) return 'Strong';
    if (strength >= 75) return 'Good';
    if (strength >= 50) return 'Fair';
    return 'Weak';
  };

  const getStrengthColor = (strength) => {
    if (strength === 100) return 'text-green-600';
    if (strength >= 75) return 'text-yellow-600';
    if (strength >= 50) return 'text-orange-600';
    return 'text-red-600';
  };

  const getBarColor = (strength) => {
    if (strength === 100) return 'bg-green-500';
    if (strength >= 75) return 'bg-yellow-500';
    if (strength >= 50) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="mt-3">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs text-gray-600">Password Strength</span>
        <span className={`text-xs font-medium ${getStrengthColor(strength)}`}>
          {getStrengthLabel(strength)}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div 
          className={`h-2 rounded-full transition-all duration-300 ${getBarColor(strength)}`}
          style={{ width: `${strength}%` }}
        />
      </div>
      {issues.length > 0 && (
        <div className="text-xs text-gray-600">
          Required: {issues.join(', ')}
        </div>
      )}
    </div>
  );
};