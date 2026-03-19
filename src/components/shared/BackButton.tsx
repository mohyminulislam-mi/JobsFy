"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import React from "react";

const BackButton = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const handleBack = () => {
    setTimeout(() => {
      router.back();
    }, 200);
  };

  return (
    <button
      onClick={handleBack}
      className={`flex items-center cursor-pointer bg-black px-5 py-3 text-sm rounded-md transition-all duration-200

        text-white`}
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      <span className="font-semibold">{children}</span>
    </button>
  );
};

export default BackButton;
