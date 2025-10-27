import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Wifi, Tv, Coffee, Wind, Users, Maximize } from "lucide-react";

export default function RoomsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzYxMzk3OTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: 299,
      shortDesc: "Elegant comfort with city views",
      description:
        "Our Deluxe Rooms offer the perfect blend of comfort and style. Featuring plush bedding, modern amenities, and stunning city views, these rooms are ideal for both business and leisure travelers.",
      capacity: "2 Guests",
      size: "35 sqm",
      amenities: ["King-size bed", "City view", "Work desk", "Mini bar", "Rain shower"],
    },
    {
      id: 2,
      name: "Executive Suite",
      image:
        "https://images.unsplash.com/photo-1632598024410-3d8f24daab57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYxMzcxODk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      price: 549,
      shortDesc: "Spacious luxury with separate living area",
      description:
        "Experience elevated luxury in our Executive Suites. With a separate living room, premium furnishings, and exclusive amenities, these suites provide the ultimate in comfort and sophistication.",
      capacity: "3 Guests",
      size: "60 sqm",
      amenities: [
        "Separate living room",
        "Panoramic views",
        "Nespresso machine",
        "Walk-in closet",
        "Bathtub & shower",
      ],
    },
    {
      id: 3,
      name: "Presidential Suite",
      image:
        "https://images.unsplash.com/photo-1748652252546-6bea5d896bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHByZXNpZGVudGlhbCUyMHN1aXRlfGVufDF8fHx8MTc2MTM4NDc0OHww&ixlib=rb-4.1.0&q=80&w=1080",
      price: 999,
      shortDesc: "The ultimate in opulence and space",
      description:
        "The pinnacle of luxury awaits in our Presidential Suite. Spanning multiple rooms with the finest appointments, private balcony, and dedicated concierge service, this is where dreams become reality.",
      capacity: "4 Guests",
      size: "120 sqm",
      amenities: [
        "Multiple bedrooms",
        "Private balcony",
        "Butler service",
        "Dining area",
        "Spa bathroom",
      ],
    },
    {
        id: 4,
        name: "Superior Room",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        price: 349,
        shortDesc: "Modern style with premium amenities",
        description:
          "Our Superior Rooms offer comfort and style with modern furnishings and all essential amenities, perfect for a relaxing stay.",
        capacity: "2 Guests",
        size: "40 sqm",
        amenities: ["Queen-size bed", "City view", "Mini fridge", "Rain shower"],
      },
      {
        id: 5,
        name: "Family Suite",
        image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        price: 499,
        shortDesc: "Spacious suite for families",
        description:
          "The Family Suite provides ample space for a family with multiple beds, living area, and kid-friendly amenities.",
        capacity: "4 Guests",
        size: "70 sqm",
        amenities: ["Two bedrooms", "Living area", "Kitchenette", "Bathtub"],
      },
      {
        id: 6,
        name: "Junior Suite",
        image: "https://images.unsplash.com/photo-1590490359890-36ff9d682d1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        price: 399,
        shortDesc: "Compact luxury with smart design",
        description:
          "Our Junior Suites are ideal for travelers looking for a touch of luxury in a smaller space, featuring modern furnishings and a cozy ambiance.",
        capacity: "2 Guests",
        size: "45 sqm",
        amenities: ["King-size bed", "Work desk", "Mini bar", "Smart TV"],
      },
      {
        id: 7,
        name: "Honeymoon Suite",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        price: 799,
        shortDesc: "Romantic getaway with private balcony",
        description:
          "Designed for couples, the Honeymoon Suite offers a romantic atmosphere with luxurious amenities and a private balcony with stunning views.",
        capacity: "2 Guests",
        size: "60 sqm",
        amenities: ["King-size bed", "Private balcony", "Jacuzzi", "Romantic lighting"],
      },
      {
        id: 8,
        name: "Garden View Room",
        image: "https://images.unsplash.com/photo-1501117716987-c8e36a9f9d0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        price: 279,
        shortDesc: "Relaxing garden views and cozy comfort",
        description:
          "The Garden View Room provides a serene stay with natural views, perfect for relaxation and a peaceful retreat.",
        capacity: "2 Guests",
        size: "38 sqm",
        amenities: ["Queen-size bed", "Garden view", "Work desk", "Tea & coffee maker"],
      },
    ];

  const allAmenities = [
    { icon: Wifi, label: "Free WiFi" },
    { icon: Tv, label: "Smart TV" },
    { icon: Coffee, label: "Coffee Maker" },
    { icon: Wind, label: "Air Conditioning" },
  ];

  return (
    <section id="rooms" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-amber-500 tracking-widest uppercase mb-4">
            Accommodations
          </p>
          <h2 className="mb-4">Luxury Rooms & Suites</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose from our carefully designed rooms and suites, each offering a unique
            blend of comfort and elegance
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow duration-300">
                <div
                  className="relative aspect-[4/3] overflow-hidden"
                  onClick={() => setSelectedRoom(room)}
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-amber-500 text-white">
                      ${room.price}/night
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2">{room.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {room.shortDesc}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize className="h-4 w-4" />
                      <span>{room.size}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {allAmenities.map((amenity, i) => {
                      const Icon = amenity.icon;
                      return (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                        >
                          <Icon className="h-4 w-4 text-amber-500" />
                          <span>{amenity.label}</span>
                        </div>
                      );
                    })}
                  </div>

                  <Button
                    onClick={() => setSelectedRoom(room)}
                    className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600"
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Room Details Modal */}
      <Dialog open={!!selectedRoom} onOpenChange={() => setSelectedRoom(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedRoom && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedRoom.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={selectedRoom.image}
                    alt={selectedRoom.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl text-amber-500">
                      ${selectedRoom.price}
                      <span className="text-base text-gray-500">/night</span>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{selectedRoom.capacity}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Maximize className="h-4 w-4" />
                        <span>{selectedRoom.size}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {selectedRoom.description}
                  </p>
                  <div>
                    <h4 className="mb-3">Room Amenities</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {selectedRoom.amenities.map((amenity, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                          <span className="text-gray-600 dark:text-gray-300">
                            {amenity}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                  Book This Room
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
