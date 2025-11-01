

import { useInView } from "framer-motion";
import { useState, useRef } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { X } from "lucide-react";
import { motion } from "framer-motion";


export default function GallerySection() {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin:'-100px'});
    const [selectedImage, setSelectedImage] = useState(null);
    const galleryImages = [
        {
          url: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzYxMzk3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
          title: "Luxury Room",
        },
        {
          url: "https://images.unsplash.com/photo-1570213489059-0aac6626cade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjByZXNvcnR8ZW58MXx8fHwxNzYxMzI2NjIxfDA&ixlib=rb-4.1.0&q=80&w=1080",
          title: "Resort Pool",
        },
        {
          url: "https://images.unsplash.com/photo-1543539571-2d88da875d21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzYxMzMzNzk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
          title: "Restaurant",
        },
        {
          url: "https://images.unsplash.com/photo-1604161926875-bb58f9a0d81b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHNwYSUyMHdlbGxuZXNzfGVufDF8fHx8MTc2MTM5OTc5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
          title: "Spa & Wellness",
        },
        {
          url: "https://images.unsplash.com/photo-1746702475474-e95e3365fe98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwbHV4dXJ5fGVufDF8fHx8MTc2MTI5MjAwMnww&ixlib=rb-4.1.0&q=80&w=1080",
          title: "Hotel Lobby",
        },
        {
          url: "https://images.unsplash.com/photo-1632598024410-3d8f24daab57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMzcxODk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
          title: "Executive Suite",
        },
      ];

    return (
        <section 
         id="gallery"
         ref={ref}
         className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                 initial={{ opacity: 0, y:0 }}
                 animate={isInView ? {opacity: 1, y:0} : {}}
                 className="text-center mb-16"
                >
                    <p className='text-amber-500 tracking-widest uppercase mb-4'>
                        Visual Tour
                    </p>
                    <h2 className='mb-4'>
                        Photo Gallery
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" >
                        Explore our stunning facilities and luxurious accomodiations through our curated gallery.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    { galleryImages.map((image, index) =>(
                        <motion.div 
                        key={index}
                        initial={{ opacity: 0, scale:0.8 }}
                        animate={isInView ? {opacity: 1, scale:1} : {}}
                        transition={{delay: index * 0.1}}
                        whileHover={{scale:1.05}}
                        className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                         index === 0 ? 'md:col-span-2 md:row-span-2' : 'aspect-square'
                        }`}
                          onClick={() => setSelectedImage(image.url)}
                        >
                            <img
                             src={image.url} 
                             alt={image.title} 
                             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                             <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                     <h3 className="text-white">{image.title}</h3>
                                    </div>
                                </div>
                        </motion.div>
                    )) }
                </div>
            </div>
            <Dialog
            open={!!selectedImage}
            onOpenChange={() => setSelectedImage(null)}
            >
                <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
                    <button
                      onClick={() => setSelectedImage(null)}
                      className="absoute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                    >
                        <X className="w-8 h-8" />

                    </button>
                        {selectedImage && (
                            <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            src={selectedImage}
                            alt="Gallery image"
                            className="w-full h-auto rounded-lg"
                            />
                        )}

                </DialogContent>

            </Dialog>
        </section>
    );
}