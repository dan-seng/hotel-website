

import About from "./components/About";
import Hero from "./components/Hero";
import RoomSection from "./components/RoomSection";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <div className='App'>
            <Navbar />
            <Hero />
            <About />
            <RoomSection />
        </div>
    )
}