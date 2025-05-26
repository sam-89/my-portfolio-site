interface DownloaderInfo {
  name: string;
  organization: string;
  phone: string;
  email: string;
}

export const sendDownloaderInfo = async (info: DownloaderInfo) => {
  try {
    // Always use the local API server in development mode
    // The API server is running on port 3001 regardless of the frontend port
    const apiBaseUrl = 
      import.meta.env.DEV ? 'http://localhost:3001' : '';
      
    const response = await fetch(`${apiBaseUrl}/api/resume-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: info.name,
        email: info.email,
        company: info.organization,
        position: 'Resume Downloader'
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to send email');
    }

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}; 