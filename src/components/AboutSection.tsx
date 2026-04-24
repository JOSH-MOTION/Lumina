import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto bg-black rounded-[48px] overflow-hidden relative min-h-[500px] flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="flex-1 p-12 md:p-20 z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white font-display">
              Why are we different?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Experience technology like never before. We curate only the most innovative and aesthetically pleasing gadgets that seamlessly integrate into your modern lifestyle.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link 
              to="/about" 
              className="inline-block px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-slate-100 transition-all shadow-xl shadow-white/5"
            >
              About us
            </Link>
          </motion.div>
        </div>

        {/* Image Content */}
        <div className="flex-1 relative w-full h-full min-h-[400px] md:min-h-0 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent z-10" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full flex items-center justify-end"
          >
            <img 
              src="/headphones.png" 
              alt="Premium Audio" 
              className="w-[400px] md:w-[600px] object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)] translate-x-20 md:translate-x-32"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
