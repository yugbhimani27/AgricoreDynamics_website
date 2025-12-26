import { Link } from 'react-router-dom';
import { Sprout, Target, Users, Award } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export function Home() {
  const aboutRef = useRef(null);
  const hookRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const hookInView = useInView(hookRef, { once: true, margin: "-100px" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <div className="scroll-smooth">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-green-600 text-white">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: url('https://images.unsplash.com/photo-1565564331571-c3a69a159944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/75 to-green-600/75 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="mb-6 text-5xl md:text-6xl font-bold"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AgriCore Dynamics
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl mb-8 text-blue-50"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              ISPC Project 2025
            </motion.p>

            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 border border-white/20"
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg md:text-xl">
                Empowering farmers with real-time soil intelligence to optimize crop nutrition and maximize yields.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                to="/product"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Discover NutriScan Pro
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT ISPC ================= */}
      <section className="py-16 bg-white" ref={aboutRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-semibold">About ISPC</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto" />
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              The Integrated Science Project Competition (ISPC) challenges students to develop innovative solutions
              that integrate mathematics, science, and computer science.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              This project integrates chemistry, soil science, mathematical algorithms, and embedded systems
              engineering to address modern agricultural challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECT HOOK ================= */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50" ref={hookRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
            initial="hidden"
            animate={hookInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-lg p-3">
                <Target className="text-white" size={32} />
              </div>
              <div>
                <h2 className="mb-4 text-2xl font-semibold">The Challenge We’re Solving</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Traditional soil testing is expensive and slow. Our real-time NPK & pH system brings
                  precision agriculture to every farmer.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-16 bg-white" ref={featuresRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-semibold">Why NutriScan Pro?</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto" />
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          >
            {/* Feature Cards */}
            {[ 
              { icon: Sprout, title: "Real-Time Monitoring", color: "blue" },
              { icon: Award, title: "Affordable Technology", color: "green" },
              { icon: Users, title: "User-Friendly Interface", color: "gradient" }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="rounded-xl p-6 text-center bg-gradient-to-br from-blue-50 to-green-100 hover:shadow-lg"
                whileHover={{ scale: 1.03 }}
              >
                <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="mb-3 font-semibold">{item.title}</h3>
                <p className="text-gray-700">
                  Simple, fast, and accurate insights for smarter farming decisions.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-green-600 text-white" ref={ctaRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate={ctaInView ? "visible" : "hidden"}
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-semibold">Explore Our Project</h2>
            <p className="text-xl mb-8 text-blue-50">
              Learn about our team, science, and technology.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link
                to="/team"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50"
              >
                Meet the Team
              </Link>
              <Link
                to="/integration"
                className="bg-white/10 border border-white/30 px-6 py-3 rounded-lg hover:bg-white/20"
              >
                Scientific Foundations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
