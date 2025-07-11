import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building2, Handshake, Hammer } from 'lucide-react';

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 12 } },
};
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: 0.4 + i * 0.1, type: 'spring', stiffness: 100 } }),
};
const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.6 + i * 0.1, type: 'spring', stiffness: 80 } }),
};
const sectionHeaderVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 12 } },
};

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-primary text-primary-content font-sans">
      {/* Custom Landing Header */}
      <header className="sticky top-0 z-20 bg-primary bg-opacity-95 border-b border-primary-content/10 px-4 py-3 flex justify-between items-center shadow-sm">
        <span className="font-extrabold text-2xl text-accent tracking-tight">Building Buddy</span>
        <nav className="flex gap-6 text-base font-semibold items-center">
          <button onClick={() => scrollToSection('about')} className="hover:text-accent transition">About</button>
          <button onClick={() => scrollToSection('product')} className="hover:text-accent transition">Product</button>
          <button onClick={() => scrollToSection('how')} className="hover:text-accent transition">How It Works</button>
          <button onClick={() => scrollToSection('contact')} className="hover:text-accent transition">Contact</button>
          <Link to="/signup" className="ml-6 rounded-full bg-accent text-white px-6 py-2 font-semibold shadow hover:bg-accent-dark transition">Sign Up</Link>
          <Link to="/signin" className="rounded-full border-2 border-accent text-accent px-6 py-2 font-semibold hover:bg-accent hover:text-white transition ml-2">Log In</Link>
        </nav>
      </header>
      {/* Animated SVG Hero Background */}
      <main className="relative flex-1 flex flex-col items-center justify-center px-4 pt-12 pb-4 overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          aria-hidden="true"
          className="absolute inset-0 -z-10 flex justify-center items-center pointer-events-none select-none"
        >
          {/* SVG background blobs */}
          <svg width="900" height="500" viewBox="0 0 900 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 top-0 -translate-x-1/2 blur-xl opacity-30">
            <ellipse cx="450" cy="120" rx="340" ry="120" fill="#2DD4BF" />
            <ellipse cx="200" cy="300" rx="180" ry="80" fill="#A3A3A3" />
            <ellipse cx="700" cy="350" rx="140" ry="60" fill="#C08401" />
          </svg>
        </motion.div>
        <section className="max-w-lg w-full text-center mb-20" id="hero">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold mb-4 text-accent"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            Building Buddy
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl font-medium mb-6 text-secondary"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            transition={{ delay: 0.2 }}
          >
            Share, Borrow, and Connect with Your Neighbors
          </motion.p>
          <motion.p
            className="mb-8 text-base text-primary-content"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            transition={{ delay: 0.3 }}
          >
            A friendly way to lend, borrow, and build trust in your building community.
          </motion.p>

          <div className="flex justify-center gap-6 mt-8">
            {[
              <Building2 key="b" size={36} className="text-accent drop-shadow-lg" />, 
              <Handshake key="h" size={36} className="text-secondary drop-shadow-lg" />, 
              <Hammer key="t" size={36} className="text-green-500 drop-shadow-lg" />
            ].map((icon, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={iconVariants}
              >
                {icon}
              </motion.span>
            ))}
          </div>
        </section>
        {/* Wavy SVG Section Divider */}
        <svg viewBox="0 0 1440 80" className="w-full h-16 md:h-20 lg:h-24 -mb-1" aria-hidden="true">
          <path fill="#fff" fillOpacity="1" d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>

        {/* About Section */}
        <section id="about" className="max-w-2xl w-full mx-auto mb-16 text-center">
          <motion.h2
            className="text-2xl font-bold mb-2 text-accent"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={sectionHeaderVariants}
          >
            About
          </motion.h2>
          <p className="text-primary-content mb-2">
            Building Buddy is a friendly platform designed to help neighbors share, borrow, and connect within their building community. We believe in building trust, reducing waste, and making life easier for everyone under one roof.
          </p>
        </section>
        {/* Product Section */}
        <section id="product" className="max-w-2xl w-full mx-auto mb-16 text-center">
          <motion.h2
            className="text-2xl font-bold mb-2 text-accent"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={sectionHeaderVariants}
          >
            Product
          </motion.h2>
          <ul className="text-primary-content flex flex-col gap-2">
            <li><strong>Share:</strong> Lend your tools, kitchenware, or anything useful to your neighbors.</li>
            <li><strong>Borrow:</strong> Request what you need—no need to buy or rent elsewhere.</li>
            <li><strong>Connect:</strong> Chat securely in-app, coordinate pickups, and build real community.</li>
            <li><strong>Trusted Community:</strong> Ratings and badges help you know who you can count on.</li>
          </ul>
        </section>
        {/* How It Works Section */}
        <section id="how" className="max-w-2xl w-full mx-auto mb-16 text-center">
          <motion.h2
            className="text-2xl font-bold mb-2 text-accent"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={sectionHeaderVariants}
          >
            How It Works
          </motion.h2>
          <ol className="list-decimal list-inside text-primary-content flex flex-col gap-1 items-center">
            <li>Sign up and join your building’s community.</li>
            <li>Browse or post items you have or need.</li>
            <li>Request to borrow, or respond to requests.</li>
            <li>Chat, coordinate, and arrange pickup/return.</li>
            <li>Leave feedback and earn “Trusted Neighbor” status!</li>
          </ol>
        </section>
        {/* Contact Section */}
        <section id="contact" className="max-w-2xl w-full mx-auto mb-8 text-center">
          <motion.h2
            className="text-2xl font-bold mb-2 text-accent"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
            variants={sectionHeaderVariants}
          >
            Contact
          </motion.h2>
          <p className="text-primary-content mb-2">Questions or feedback? Reach out to our team!</p>
          <a href="mailto:hello@buildingbuddy.app" className="inline-block rounded-full bg-accent text-white px-6 py-2 font-semibold shadow hover:bg-accent-dark transition">Email Us</a>
        </section>
      </main>
      <footer className="bg-secondary text-secondary-content py-6 text-center text-sm mt-auto">
        <div className="mb-2">&copy; {new Date().getFullYear()} BuildingBuddy. All rights reserved.</div>
        <div className="flex justify-center gap-4">
          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
