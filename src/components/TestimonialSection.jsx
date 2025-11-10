import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";


export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Business Executive",
      avatar:
        "https://images.unsplash.com/photo-1563132337-f159f484226c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc2MTMxMjQ2NHww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      comment:
        "Absolutely exceptional experience! The attention to detail, from the room amenities to the personalized service, exceeded all expectations. The staff went above and beyond to make my stay memorable. I'll definitely be returning.",
    },
    {
      id: 2,
      name: "James Anderson",
      role: "Travel Blogger",
      avatar:
        "https://images.unsplash.com/photo-1578758837674-93ed0ab5fbab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwxfHx8fDE3NjEyODYyMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      comment:
        "Having stayed at luxury hotels worldwide, Luxe Haven stands out for its perfect blend of modern elegance and warm hospitality. The rooftop pool and spa facilities are world-class. A true gem in the heart of the city.",
    },
    {
      id: 3,
      name: "Emily & David Chen",
      role: "Honeymooners",
      avatar:
        "https://images.unsplash.com/photo-1610112839947-5664d10bab30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MTMwNDY3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
      rating: 5,
      comment:
        "Our honeymoon at Luxe Haven was magical. The Presidential Suite was stunning, and the staff surprised us with champagne and roses. Every moment felt special. Thank you for making our celebration unforgettable!",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-amber-500 tracking-widest uppercase mb-4">
            Guest Reviews
          </p>
          <h2 className="mb-4">What Our Guests Say</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our valued guests about their
            experiences
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Cards */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-12 relative">
                <Quote className="absolute top-8 left-8 h-12 w-12 text-amber-500/20" />
                
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <Avatar className="h-20 w-20 border-4 border-amber-500">
                    <AvatarImage
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                    />
                    <AvatarFallback>
                      {testimonials[currentIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-3">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-amber-500 text-amber-500"
                        />
                      ))}
                    </div>

                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic">
                      "{testimonials[currentIndex].comment}"
                    </p>

                    <div>
                      <p className="text-gray-900 dark:text-white">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-amber-500 w-8"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
