"use client";

import React, { useState } from "react";
import { Download, FileText, X, Mail, Phone, MapPin } from "lucide-react";

export default function ResumeViewer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="doodle-btn px-6 py-2.5 bg-violet-100 text-stone-900 font-space-grotesk font-extrabold text-sm border-black flex items-center gap-1.5 hover:bg-violet-200"
      >
        <FileText className="w-4 h-4" /> View Resume Preview
      </button>
      
      <a
        href="/Mohit_Pant_Resume.pdf"
        download
        className="doodle-btn px-6 py-2.5 bg-yellow-100 text-stone-900 font-space-grotesk font-extrabold text-sm border-black flex items-center gap-1.5 hover:bg-yellow-200"
      >
        <Download className="w-4 h-4" /> Download PDF Resume
      </a>

      {/* Modal Backdrop & Dialog */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white border-3 border-black rounded-2xl shadow-[6px_6px_0px_#000] w-full max-w-3xl flex flex-col max-h-[90vh] overflow-hidden rotate-[-0.5deg]">
            {/* Modal Header */}
            <div className="bg-stone-50 border-b-2 border-black p-4 flex justify-between items-center">
              <span className="font-space-grotesk font-black text-sm text-stone-800 flex items-center gap-1.5">
                Mohit_Pant_Resume_Preview.pdf
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-red-50 border border-transparent hover:border-red-400 text-red-500 rounded transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Document body (Direct PDF Viewer) */}
            <div className="flex-1 h-[75vh] w-full bg-stone-100">
              <iframe
                src="/Mohit_Pant_Resume.pdf"
                className="w-full h-full border-0"
                title="Mohit Pant Resume Preview"
              />
            </div>

            {/* Modal Footer */}
            <div className="bg-stone-50 border-t-2 border-black p-4 flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="doodle-btn px-4 py-1.5 bg-stone-100 text-stone-800 font-space-grotesk font-extrabold text-xs border-black hover:bg-stone-200"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
