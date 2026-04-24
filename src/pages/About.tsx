import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Hero Section */}
        <div className="max-w-3xl space-y-8 mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-extrabold uppercase tracking-[0.3em] text-slate-400"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            We believe in the power of simplicity.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium"
          >
            Lumina was founded to curate the finest Apple products and premium accessories, 
            creating a seamless ecosystem where design meets performance.
          </motion.p>
        </div>

        {/* Vision Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="aspect-[21/9] rounded-[40px] overflow-hidden bg-slate-50 mb-24"
        >
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200" 
            alt="Lumina Vision" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900 tracking-tight">The Lumina Philosophy</h3>
            <p className="text-slate-500 leading-relaxed text-lg">
              Technology should be invisible. It should empower you to create, connect, and explore without getting in the way. At Lumina, we don't just sell gadgets; we provide tools for the modern creator.
            </p>
            <p className="text-slate-500 leading-relaxed text-lg">
              Our collection is meticulously selected to ensure that every piece—from the latest iPhone to the smallest accessory—meets the highest standards of Apple-certified excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12">
            <div className="space-y-4 p-8 bg-slate-50 rounded-[32px]">
              <h4 className="text-xl font-bold text-slate-900">Curated Excellence</h4>
              <p className="text-slate-500 leading-relaxed">
                We hand-pick every product in our catalog. If it's in our store, it means it's passed our rigorous tests for design, utility, and durability.
              </p>
            </div>
            <div className="space-y-4 p-8 bg-slate-50 rounded-[32px]">
              <h4 className="text-xl font-bold text-slate-900">Sustainability</h4>
              <p className="text-slate-500 leading-relaxed">
                Like the products we sell, Lumina is committed to a greener future. We prioritize eco-friendly packaging and carbon-neutral operations by 2030.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-20 border-t border-slate-100 text-center space-y-8"
        >
          <p className="text-2xl md:text-4xl font-bold italic tracking-tight text-slate-900 max-w-4xl mx-auto leading-snug">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">— STEVE JOBS</p>
        </motion.div>
      </div>
    </div>
  );
}
