import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "some address, Mekelle, Ethiopia",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+251 945 012 123",
    },
    {
      icon: Mail,
      title: "Email",
      details: "da16gi@gmail.com",
    },
    {
      icon: Clock,
      title: "Reception Hours",
      details: "24/7 Service Available",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-amber-500 tracking-widest uppercase mb-4">Get In Touch</p>
          <h2 className="mb-4">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions or special requests? We're here to help make your stay
            perfect
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8">
              <h3 className="mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Abeba"
                      className="transition-all focus:border-amber-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Abebe"
                      className="transition-all focus:border-amber-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="someemail@gmail.com"
                    className="transition-all focus:border-amber-500"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+251 9xx xxx xxx"
                    className="transition-all focus:border-amber-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="transition-all focus:border-amber-500"
                    required
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
          
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-amber-500/10 rounded-lg">
                          <Icon className="h-5 w-5 text-amber-500" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                            {info.title}
                          </p>
                          <p className="text-sm text-gray-900 dark:text-white">
                            {info.details}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            
            <Card className="overflow-hidden h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7577.417327115814!2d39.45274163343796!3d13.496410170440953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x166afd6b55f58eb5%3A0xce2c0683e6d40c84!2z4YiG4Ym04YiNIOGNleGIi-GKlOGJtSDhiJjhiZDhiIggLyBQbGFuZXQgSG90ZWwgTWVxZWxsZQ!5e1!3m2!1sen!2sus!4v1762771297186!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Location"
              />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
