import { Facebook, Instagram, Github, Linkedin } from "lucide-react";
import { Separator } from "./ui/separator";
import logo from '../assets/logo.png'

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    hotel: [
      {label: "Home", href: "#home"},
      { label: "About Us", href: "#about" },
      { label: "Our Rooms", href: "#rooms" },
      { label: "Gallery", href: "#gallery" },
      { label: "Reviews", href: "#testimonials" },
    ],
    services: [
      { label: "Restaurant & Bar", href: "#" },
      { label: "Spa & Wellness", href: "#" },
      { label: "Conference Rooms", href: "#" },
      { label: "Concierge Service", href: "#" },
    ],
    policies: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Cancellation Policy", href: "#" },
      { label: "FAQs", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "https://m.facbook.com/dan16son", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/_dan_el", label: "Instagram" },
    { icon: Github, href: "https://github.com/dan-seng", label: "Github" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <img src={logo} alt="logo" className="w-20 h-20 rounded" />
            <h3 className="text-white mb-4">LuxuryHotel</h3>
            <p className="text-sm mb-6">
              Experience the perfect blend of luxury, comfort, and exceptional service
              in the heart of the city.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}  
                    target="_blank"
                    aria-label={social.label}
                    className="p-2 bg-gray-800 rounded-full hover:bg-amber-500 transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-white mb-4">Hotel</h4>
            <ul className="space-y-2">
              {footerLinks.hotel.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

    
          <div>
            <h4 className="text-white mb-4">Policies</h4>
            <ul className="space-y-2">
              {footerLinks.policies.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {currentYear} Luxury Hotel. All rights reserved.</p>
          <p>Designed & Built with care for your comfort</p>
          <p>The website is developed by <a href="https://github.com/dan-seng" className="text-amber-500 hover:text-amber-600 transition-colors cursor-[url('./global/cursor.png),auto]">Daniel Gidey</a></p>
        </div>
      </div>
    </footer>
  );
}
