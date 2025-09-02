"use client";
import React from "react";

interface WarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const WarningModal: React.FC<WarningModalProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 h-full flex items-center justify-center bg-black bg-opacity-70 px-6 z-[999]">
      <div className="bg-black p-6 rounded-lg shadow-lg text-center ">
        <p className="text-lg font-bold">Warning!</p>
        <p className="mt-2 text-slate-300">
          This project is still in development. Some features may not work properly.
        </p>
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={onClose}
            className="bg-red-500 px-4 py-2 rounded text-white"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-slate-700 px-4 py-2 rounded text-white"
          >
            Continue to Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;