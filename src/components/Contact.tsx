
import React, { useState } from 'react';
import { Send, Smartphone, MapPin, Mail, Clock } from 'lucide-react';
import SocialIcons from './SocialIcons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted with data:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };
  
  const contactInfo = [
    { icon: Mail, text: 'hello@example.com' },
    { icon: Smartphone, text: '+1 234 567 890' },
    { icon: MapPin, text: 'San Francisco, CA' },
    { icon: Clock, text: 'Mon-Fri: 9am - 6pm' },
  ];
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="animate-slideRight">
            <div className="glass-card rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Let's Connect</h3>
              <p className="text-foreground/80 mb-8">
                I'm currently open for freelance work and exciting opportunities. Feel free to reach out if you have a project in mind or just want to say hello!
              </p>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <item.icon size={18} />
                    </div>
                    <span className="text-foreground/80">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Follow Me:</h4>
                <SocialIcons />
              </div>
            </div>
          </div>
          
          <div className="animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Send Me a Message</h3>
              
              {submitSuccess ? (
                <div className="bg-primary/20 text-primary p-4 rounded-lg mb-6 animate-fadeIn">
                  Thank you for your message! I'll get back to you soon.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-foreground/80 mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-foreground/80 mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-foreground/80 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-foreground/80 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  />
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="hover-glow flex items-center justify-center space-x-2 w-full px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Digital Business Card QR Code */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6 gradient-text">My Digital Business Card</h3>
          <div className="inline-block glass-card p-6 rounded-xl hover-glow">
            {/* Placeholder for QR code */}
            <div className="w-48 h-48 bg-white p-4 rounded-lg mx-auto mb-4">
              <div className="w-full h-full bg-gray-200 rounded-md animate-pulse-soft flex items-center justify-center text-gray-500">
                QR Code
              </div>
            </div>
            <p className="text-foreground/70 text-sm">Scan to save my contact information</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
