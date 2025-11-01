

import About from "./components/About";
import Hero from "./components/Hero";
import RoomSection from "./components/RoomSection";
import Navbar from "./components/Navbar";
import GallerySection from "./components/GallerySection";
import BookingForm from "./components/BookingForm";
import FooterSection from "./components/FooterSection";

export default function App() {
    return (
        <div className='App'>
            <Navbar />
            <Hero id="home"/>
            <About id="about"/>
            <RoomSection id="rooms"/>
            <GallerySection id="gallery"/>
            <BookingForm id="booking-section"/>
            <FooterSection id="footer"/>
        </div>
    )
}