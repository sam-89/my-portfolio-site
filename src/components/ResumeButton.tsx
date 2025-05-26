import React, { useState } from 'react';
import { ResumeDownloadModal } from './ResumeDownloadModal';
import { sendDownloaderInfo } from '../lib/emailService';
import { Download } from 'lucide-react';

interface DownloaderInfo {
  name: string;
  organization: string;
  phone: string;
  email: string;
}

const ResumeButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = async (data: DownloaderInfo) => {
    // Send email notification
    await sendDownloaderInfo(data);
    
    // Download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sumanta_Kumar_Patel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close the modal
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
      >
        <Download size={20} />
        Download Resume
      </button>

      <ResumeDownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDownload={handleDownload}
      />
    </>
  );
};

export default ResumeButton; 