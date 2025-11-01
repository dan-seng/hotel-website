import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Calendar } from "./ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Calendar as CalendarIcon,
  Users,
  Hotel,
} from "lucide-react";
import { format } from "date-fns";


export default function BookingForm() {
  const [checkIn, setCheckIn] = useState();
  const [checkOut, setCheckOut] = useState();
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking Request:\nCheck-in: ${checkIn ? format(checkIn, "PPP") : "Not selected"}\nCheck-out: ${checkOut ? format(checkOut, "PPP") : "Not selected"}\nGuests: ${guests}\nRoom Type: ${roomType || "Not selected"}`,
    );
  };

  return (
    <section id="booking-section" className="py-20 bg-linear-to-br from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-amber-500 tracking-widest uppercase mb-4">
            Reserve Your Stay
          </p>
          <h2 className="mb-4">Book Your Perfect Room</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Select your dates and preferences to secure your
            luxurious getaway
          </p>
        </motion.div>
     
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Card className="max-w-4xl mx-auto p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
               
                <div className="space-y-2">
                  <Label
                    htmlFor="check-in"
                    className="flex items-center gap-2"
                  >
                    <CalendarIcon className="h-4 w-4 text-amber-500" />
                    Check-in Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left transition-all hover:border-amber-500"
                      >
                        {checkIn ? (
                          format(checkIn, "PPP")
                        ) : (
                          <span className="text-gray-500">
                            Select date
                          </span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="check-out"
                    className="flex items-center gap-2"
                  >
                    <CalendarIcon className="h-4 w-4 text-amber-500" />
                    Check-out Date
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left transition-all hover:border-amber-500"
                      >
                        {checkOut ? (
                          format(checkOut, "PPP")
                        ) : (
                          <span className="text-gray-500">
                            Select date
                          </span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        disabled={(date) =>
                          date < (checkIn || new Date())
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
               
                <div className="space-y-2">
                  <Label
                    htmlFor="guests"
                    className="flex items-center gap-2"
                  >
                    <Users className="h-4 w-4 text-amber-500" />
                    Number of Guests
                  </Label>
                  <Select
                    value={guests}
                    onValueChange={setGuests}
                  >
                    <SelectTrigger className="transition-all hover:border-amber-500">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">
                        2 Guests
                      </SelectItem>
                      <SelectItem value="3">
                        3 Guests
                      </SelectItem>
                      <SelectItem value="4">
                        4 Guests
                      </SelectItem>
                      <SelectItem value="5">
                        5+ Guests
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="room-type"
                    className="flex items-center gap-2"
                  >
                    <Hotel className="h-4 w-4 text-amber-500" />
                    Room Type
                  </Label>
                  <Select
                    value={roomType}
                    onValueChange={setRoomType}
                  >
                    <SelectTrigger className="transition-all hover:border-amber-500">
                      <SelectValue placeholder="Select room type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deluxe">
                        Deluxe Room - $299/night
                      </SelectItem>
                      <SelectItem value="suite">
                        Executive Suite - $549/night
                      </SelectItem>
                      <SelectItem value="presidential">
                        Presidential Suite - $999/night
                      </SelectItem>
                      <SelectItem value="family">
                        Family Suite - $1,299/night
                      </SelectItem>
                      <SelectItem value="luxury">
                        Luxury Suite - $1,599/night
                      </SelectItem>
                      <SelectItem value="royal">
                        Royal Suite - $2,999/night
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

             
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  className="transition-all focus:border-amber-500"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="transition-all focus:border-amber-500"
                />
              </div>

             
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-linear-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-6"
                >
                  Check Availability & Book
                </Button>
              </motion.div>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}