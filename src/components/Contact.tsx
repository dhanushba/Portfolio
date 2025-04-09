import React from 'react';
import { Smartphone, MapPin, Mail, Clock } from 'lucide-react';
import SocialIcons from './SocialIcons';

const Contact = () => {
  const contactInfo = [
    { icon: Mail, text: 'dhanushba361@gmail.com' },
    { icon: Smartphone, text: '+91 9902548683' },
    { icon: MapPin, text: 'Bengaluru, Karnataka - India ' },
   
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16">Get in Touch</h2>

        <div className="max-w-2xl mx-auto animate-slideUp">
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Hello! I'm a Fresher 🚀</h3>
            <p className="text-foreground/80 mb-8">
              I’m actively seeking entry-level roles, internships, and networking opportunities in tech. 
              Feel free to reach out via any of the options below.
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
              <h4 className="text-lg font-semibold mb-4">Connect With Me:</h4>
              <SocialIcons />
            </div>
          </div>
        </div>
</div>
</section>
)};
        
            

export default Contact;
