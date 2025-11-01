import { Button } from "./ui/button";
import { motion } from "framer-motion";
export default function Hero() {

    const onBookNowClick = () => {
        console.log("Book Now clicked");
    }


    return (
       <section id="">
         <div className="relative h-screen overflow-hidden">
            <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
          <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1723465308831-29da05e011f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc2MTMzODUxMnww&ixlib=rb-4.1.0&q=80&w=1080")',
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className = "relative h-full flex items-center justify-center">
            <div className = "container mx-auto px-4 text-center text-white">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mb-4 text-amber-400 tracking-widest uppercase"
            >
              Welcome to Luxury
            </motion.p> <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mb-6 max-w-4xl mx-auto text-5xl md:text-7xl drop-shadow-2xl"
            >
              Experience Luxury & Comfort
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mb-8 text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto"
            >
              Discover the perfect blend of elegance, comfort, and world-class service
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={onBookNowClick}
                className="bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-12 py-6 shadow-2xl"
              >
                Book Your Stay
              </Button>
            </motion.div>
            </div>
            
        </div>
        </motion.div>
        </div>
       </section>
    )
}