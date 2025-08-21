import React from "react";
import Marquee from "react-fast-marquee";
import Avatar from "react-avatar";
import { motion } from "framer-motion";

const realNames = [
  "Sarah Johnson",
  "Michael Smith",
  "Emily Davis",
  "James Thompson",
  "Olivia Martinez",
  "David Wilson",
  "Sophia Taylor",
  "Daniel Brown",
  "Emma Harris",
  "Christopher White",
  "Isabella Clark",
  "Matthew Lewis"
];

const usernames = [
  "sarah.j",
  "mike_smith",
  "emily.codes",
  "jamest_dev",
  "olivia.designs",
  "davidwilson",
  "sophiaUX",
  "danbrown",
  "emmah_dev",
  "chris.white",
  "isabellacodes",
  "matthewL"
];

const comments = [
  "Absolutely loved working with you everything was delivered as expected!",
  "The website design is stunning and super easy to navigate. Highly recommended!",
  "Your attention to detail is amazing. The final product looks superb!",
  "Fast, professional, and creative. I'll definitely hire you again!",
  "I'm so impressed with your coding skills — you brought my ideas to life perfectly.",
  "Working with you was a pleasure. Communication was smooth & fantastic!"
];

const testimonials = realNames.map((name, index) => ({
  name,
  username: usernames[index],
  comment: comments[index % comments.length]
}));

function Testimonials() {
  return (
    <section className="w-full py-8 sm:py-12 flex flex-col items-center px-2 sm:px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-6 text-center px-4"
      >
        <h1 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-kalam flex items-center justify-center leading-tight">
          Comments from clients all around the world{" "}
        </h1>
      </motion.div>

      {/* First Row */}
      <Marquee pauseOnClick={true} speed={60} gradient={false} className="overflow-y-hidden mb-4">
        {testimonials.slice(0, 2).map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border text-white border-pink-500/20 shadow-lg rounded-2xl p-3 sm:p-4 mx-2 sm:mx-3 w-60 sm:w-72 md:w-80 hover:border-pink-500/40 transition"
          >
            <div className="flex items-center mb-3">
              <Avatar name={t.name} size="40" round={true} className="mr-3 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-sm sm:text-base truncate">{t.name}</h3>
                <p className="text-xs sm:text-sm text-gray-300 truncate">@{t.username}</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm italic leading-relaxed">
              "{t.comment}"
            </p>
          </motion.div>
        ))}
      </Marquee>

      {/* Second Row */}
      <Marquee direction="right" pauseOnClick={true} speed={60} gradient={false} className="overflow-y-hidden">
        {testimonials.slice(3, 5).map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border text-white border-pink-500/20 shadow-lg rounded-2xl p-3 sm:p-4 mx-2 sm:mx-3 w-60 sm:w-72 md:w-80 hover:border-pink-500/40 transition"
          >
            <div className="flex items-center mb-3">
              <Avatar name={t.name} size="40" round={true} className="mr-3 flex-shrink-0" />
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-sm sm:text-base truncate">{t.name}</h3>
                <p className="text-xs sm:text-sm text-gray-300 truncate">@{t.username}</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm italic leading-relaxed">
              "{t.comment}"
            </p>
          </motion.div>
        ))}
      </Marquee>
    </section>
  );
}

export default Testimonials;