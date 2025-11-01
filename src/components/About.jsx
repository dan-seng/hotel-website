import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Globe, Star } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Award, value: "20+", label: "Years of Excellence" },
    { icon: Users, value: "50K+", label: "Happy Guests" },
    { icon: Globe, value: "100+", label: "Countries Served" },
    { icon: Star, value: "5.0", label: "Average Rating" },
  ];

  return (
    <section
    id="about"
    ref={ref}
    className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900"
  >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-amber-500 tracking-widest uppercase mb-4"
            >
              Our Story
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              Where Luxury Meets Hospitality
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-600 dark:text-gray-300 mb-4"
            >
              For over two decades, LuxuryHotel has been the epitome of refined elegance
              and unparalleled service. Nestled in the heart of the city, our hotel
              offers a sanctuary where timeless sophistication meets modern comfort.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-gray-600 dark:text-gray-300 mb-6"
            >
              Every detail has been meticulously crafted to ensure your stay is nothing
              short of extraordinary. From our world-class amenities to our dedicated
              staff, we're committed to creating unforgettable experiences for each
              guest who walks through our doors.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                      <Icon className="h-5 w-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white">{stat.value}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1746702475474-e95e3365fe98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwbHV4dXJ5fGVufDF8fHx8MTc2MTI5MjAwMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Hotel Lobby"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 }}
                className="aspect-square overflow-hidden rounded-lg mt-8"
              >
                <img
                  src="https://images.unsplash.com/photo-1570213489059-0aac6626cade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjByZXNvcnR8ZW58MXx8fHwxNzYxMzI2NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Hotel Pool"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-4 aspect-video overflow-hidden rounded-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1543539571-2d88da875d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzYxMzMzNzk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Hotel Restaurant"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      </section>
  );
}
