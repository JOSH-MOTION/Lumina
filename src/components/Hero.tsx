import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 text-center md:text-left flex flex-col items-center md:items-start">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900"
          >
            The future of your Apple ecosystem
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-md leading-relaxed"
          >
            Experience innovation at its finest. Our curated collection of Apple products and premium accessories brings you the future today.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <Link to="/products" className="px-8 py-4 bg-black text-white rounded-xl text-sm font-medium hover:bg-slate-900 shadow-xl shadow-slate-200 transition-all">
              Browse products
            </Link>
            <Link to="/about" className="px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl text-sm font-medium hover:bg-slate-50 shadow-sm transition-all">
              About us
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 relative"
        >
          <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50">
            <img 
              src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1200" 
              alt="Premium Tech Accessory" 
              className="w-full h-full object-cover"
            />
            {/* Improved Ribbed Glass Overlay */}
            <div className="absolute inset-y-0 right-0 w-2/3 backdrop-blur-[2px] transition-all duration-700" 
                 style={{ 
                   maskImage: 'linear-gradient(to right, transparent, black 100%)',
                   WebkitMaskImage: 'linear-gradient(to right, transparent, black 100%)',
                   backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0px, rgba(255,255,255,0.1) 2px, transparent 2px, transparent 6px)',
                   backgroundSize: '6px 100%'
                 }} />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
