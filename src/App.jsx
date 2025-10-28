

import About from "./components/About";
import Hero from "./components/Hero";
import RoomSection from "./components/RoomSection";
import Navbar from "./components/Navbar";
import GallerySection from "./components/GallerySection";

export default function App() {
    return (
        <div className='App'>
            <Navbar />
            <Hero />
            <About />
            <RoomSection />
            <GallerySection />
        </div>
    )
}