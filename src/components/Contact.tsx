import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Properly format the API URL based on environment (local vs production)
      const apiUrl = process.env.NODE_ENV === 'development' 
        ? 'http://localhost:3001/api/contact-message' 
        : '/api/contact-message';
        
      console.log('Sending message to:', apiUrl);
        
      // Send the form data to the API endpoint
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      // Check if response is ok before trying to parse JSON
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', response.status, errorText);
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
      }
      
      // Safely parse JSON with error handling
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error('Failed to parse JSON response:', jsonError);
        throw new Error('Invalid response from server');
      }
      
      // Show success toast
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Clear form data
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Show error toast
      toast({
        title: "Error Sending Message",
        description: error instanceof Error ? error.message : 'Please try again later.',
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-8800122446",
      href: "tel:+918800122446"
    },
    {
      icon: Mail,
      label: "Email",
      value: "sumantakumar.patel@gmail.com",
      href: "mailto:sumantakumar.patel@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "text-gray-400 hover:text-white",
      bgColor: "bg-gray-800/50 hover:bg-gray-700/50"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "#",
      color: "text-blue-400 hover:text-blue-300",
      bgColor: "bg-blue-500/20 hover:bg-blue-500/30"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original.svg",
      label: "Kaggle",
      href: "#",
      color: "text-[#20BEFF] hover:text-[#20BEFF]/80",
      bgColor: "bg-[#20BEFF]/20 hover:bg-[#20BEFF]/30"
    },
    {
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iIzJFQzg2NiI+PHBhdGggZD0iTTEyIDI0YzYuNjI3IDAgMTItNS4zNzMgMTItMTJTMTguNjI3IDAgMTIgMCAwIDUuMzczIDAgMTJzNS4zNzMgMTIgMTIgMTJ6bTAtMi4yMjJjLTUuNDA3IDAtOS43NzgtNC4zNzEtOS43NzgtOS43NzhTNi41OTMgMi4yMjIgMTIgMi4yMjJzOS43NzggNC4zNzEgOS43NzggOS43NzgtNC4zNzEgOS43NzgtOS43NzggOS43Nzh6bTQuNjY3LTYuMDU2Yy4yMjItLjU1Ni4zMzMtMS4xMTEuMzMzLTEuNjY3IDAtMi4yMjItMS43NzgtNC00LTRzLTQgMS43NzgtNCA0IDEuNzc4IDQgNCA0YzEuMTExIDAgMi4xMTEtLjQ0NCAyLjg4OS0xLjE2N2wuNTU2LjU1NmMtLjg4OS44ODktMi4wNDQgMS4zMzMtMy4yMjIgMS4zMzMtMi42NjcgMC00LjgzMy0yLjE2Ny00LjgzMy00LjgzM3MyLjE2Ny00LjgzMyA0LjgzMy00LjgzMyA0LjgzMyAyLjE2NyA0LjgzMyA0LjgzM2MwIDEuMTc4LS40NDQgMi4zMzMtMS4zMzMgMy4yMjJsLS41NTYtLjU1NnptLTUuMzMzLTIuMjIyYy0uNjExIDAtMS4xMTEtLjUtMS4xMTEtMS4xMTFzLjUtMS4xMTEgMS4xMTEtMS4xMTEgMS4xMTEuNSAxLjExMSAxLjExMS0uNSAxLjExMS0xLjExMSAxLjExMXoiLz48L3N2Zz4=",
      label: "HackerEarth",
      href: "#",
      color: "text-[#2EC866] hover:text-[#2EC866]/80",
      bgColor: "bg-[#2EC866]/20 hover:bg-[#2EC866]/30"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next AI/ML project? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new opportunities, innovative projects, 
                and collaborative ventures in AI/ML and full-stack development.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all"
                >
                  <div className="bg-blue-500/20 p-3 rounded-lg">
                    <item.icon className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`p-3 ${social.bgColor} backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-blue-500/50 ${social.color} transition-all`}
                  >
                    {typeof social.icon === 'string' ? (
                      <img src={social.icon} alt={social.label} className="w-6 h-6" />
                    ) : (
                      <social.icon size={24} />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full px-6 py-4 ${isSubmitting ? 'bg-gray-600' : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'} rounded-lg font-semibold text-white shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2 transition-all`}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                {isSubmitting ? (
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                ) : (
                  <Send size={20} />
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
