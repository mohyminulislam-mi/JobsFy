"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, Variants } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
import { 
  Loader2, User, Mail, Phone, Lock, 
  Briefcase, MapPin, Link as LinkIcon, Camera 
} from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    location: "",
    portfolio: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    avatar: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked, files } = e.target;
    
    // Handle mock file upload by creating a local object URL or placeholder
    if (type === "file" && files && files[0]) {
      // In a real app we'd upload to S3/Cloudinary. For this demo, we use a placeholder or local URL
      const url = URL.createObjectURL(files[0]);
      setFormData((prev) => ({ ...prev, avatar: url }));
      toast.success("Image selected!");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validations
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    if (!formData.acceptTerms) {
      toast.error("You must accept the terms and conditions");
      return;
    }
    
    if (formData.password.length < 8) {
      toast.error("Password must be at least 8 characters");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Exclude confirmPassword and acceptTerms from the payload sent to API
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          designation: formData.designation,
          location: formData.location,
          portfolio: formData.portfolio,
          password: formData.password,
          avatar: formData.avatar,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to register");
      }

      toast.success(data.message);
      
      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 1000);
      
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Registration failed");
      setIsLoading(false);
    }
  };

  // Stagger items animation variants
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Toaster position="top-center" />
      
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your Jobfy Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-primary-600 hover:text-primary-500 transition-colors"
            >
              Sign in here
            </Link>
          </p>
        </motion.div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
        <motion.form 
          variants={containerVars}
          initial="hidden"
          animate="show"
          onSubmit={handleSubmit}
          className="bg-white py-8 px-4 shadow-soft sm:rounded-2xl sm:px-10 border border-gray-100 space-y-8"
        >
          {/* Section 1: Personal Info */}
          <motion.div variants={itemVars} className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Personal Information</h3>
            <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="name" name="name" type="text" required
                    value={formData.name} onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email" name="email" type="email" required
                    value={formData.email} onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="phone" name="phone" type="tel" required
                    value={formData.phone} onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2: Professional Details */}
          <motion.div variants={itemVars} className="space-y-4 pt-4">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Professional Details</h3>
            
            <div className="flex items-center space-x-6 mb-6">
              <div className="shrink-0">
                {formData.avatar ? (
                  <img className="h-16 w-16 object-cover rounded-full shadow-md" src={formData.avatar} alt="Current profile photo" />
                ) : (
                  <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300">
                    <User className="h-8 w-8 text-gray-400" />
                  </div>
                )}
              </div>
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <div className="relative group cursor-pointer flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm font-medium text-sm text-gray-700 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500 file:hidden">
                  <Camera className="w-4 h-4 text-gray-500" />
                  <span>Upload Profile Picture</span>
                  <input type="file" name="avatarFile" accept="image/*" onChange={handleChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                </div>
              </label>
            </div>

            <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="designation" className="block text-sm font-medium text-gray-700">Designation *</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Briefcase className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="designation" name="designation" type="text" required
                    value={formData.designation} onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="e.g. Full-Stack Developer"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="location" name="location" type="text"
                    value={formData.location} onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="City, Country"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700">Portfolio Link</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LinkIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="portfolio" name="portfolio" type="url"
                    value={formData.portfolio} onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 3: Security */}
          <motion.div variants={itemVars} className="space-y-4 pt-4">
            <h3 className="text-lg font-medium text-gray-900 border-b pb-2">Security</h3>
            <div className="grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password *</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password" name="password" type="password" required minLength={8}
                    value={formData.password} onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-xl focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                    placeholder="Minimum 8 characters"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password *</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword" name="confirmPassword" type="password" required minLength={8}
                    value={formData.confirmPassword} onChange={handleChange}
                    className={`block w-full pl-10 pr-3 py-2.5 border rounded-xl focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-colors ${
                      formData.confirmPassword && formData.password !== formData.confirmPassword 
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500' 
                        : 'border-gray-300'
                    }`}
                    placeholder="Repeat password"
                  />
                </div>
                {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                   <p className="mt-1 text-xs text-red-500">Passwords do not match.</p>
                )}
              </div>
            </div>
          </motion.div>

          {/* Compliance & Submit */}
          <motion.div variants={itemVars} className="pt-6 space-y-6">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="acceptTerms" name="acceptTerms" type="checkbox" required
                  checked={formData.acceptTerms} onChange={handleChange}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="acceptTerms" className="font-medium text-gray-700">
                  I accept the <a href="#" className="text-primary-600 hover:text-primary-500">Terms and Conditions</a> and <a href="#" className="text-primary-600 hover:text-primary-500">Privacy Policy</a>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading || !formData.acceptTerms || (formData.password !== formData.confirmPassword)}
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                  Creating account...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  );
}
