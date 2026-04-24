import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useAuth } from './AuthContext';

const categories = [
  {
    title: 'Technology',
    description: 'Cutting-edge gadgets designed for modern life. From high-performance drones to innovative tools.',
    image: '/drone.png',
    imgClass: 'w-[280px] md:w-[480px] -right-4 md:right-0 -bottom-4 md:bottom-0'
  },
  {
    title: 'Audio',
    description: 'Immersive sound experiences. Premium headphones and speakers for the audiophile in you.',
    image: '/headphones.png',
    imgClass: 'w-[250px] md:w-[450px] -right-8 md:-right-20 -bottom-4 md:bottom-0'
  },
  {
    title: 'Gear',
    description: 'Essential outdoor and tech accessories. Durable mobile devices and sustainable solutions.',
    image: '/phone.png',
    imgClass: 'w-[320px] md:w-[620px] -right-12 md:-right-20 -bottom-8 md:bottom-0'
  },
  {
    title: 'Computers',
    description: 'Power your productivity. High-performance laptops and computing essentials for work and play.',
    image: '/laptop.png',
    imgClass: 'w-[300px] md:w-[520px] -right-8 md:right-0 -bottom-4 md:bottom-0'
  }
];

function CategoryCard({ category, isBlurred, onHover, onLeave }: any) {
  const navigate = useNavigate();
  const { requireAuth } = useAuth();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only apply tilt on desktop (no touch device)
    if (window.matchMedia('(pointer: coarse)').matches) return;
    
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    onLeave();
  };

  return (
    <motion.div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={handleMouseLeave}
      onClick={() => requireAuth(() => navigate(`/category/${category.title.toLowerCase()}`))}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{ 
        filter: isBlurred ? 'blur(4px) grayscale(0.2)' : 'blur(0px) grayscale(0)',
        opacity: isBlurred ? 0.6 : 1,
        scale: isBlurred ? 0.98 : 1
      }}
      className="group relative bg-slate-50 rounded-[32px] p-6 md:p-10 border border-slate-200 overflow-hidden min-h-[380px] md:min-h-[440px] flex flex-col justify-start hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 cursor-pointer"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative z-10 space-y-4 md:space-y-6 max-w-[200px] md:max-w-[280px]"
      >
        <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">{category.title}</h3>
        <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium line-clamp-3 md:line-clamp-none">
          {category.description}
        </p>
        <div className="flex items-center gap-2 text-xs md:text-sm font-bold pt-2 text-black group/btn">
          Explore category
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </div>
      </div>
      
      <motion.div 
        style={{ 
          transform: "translateZ(75px)",
        }}
        className={`absolute pointer-events-none transition-transform duration-500 ease-out ${category.imgClass}`}
      >
        <img 
          src={category.image} 
          alt={category.title}
          className="w-full h-full object-contain object-right-bottom filter drop-shadow-2xl group-hover:scale-110 transition-transform duration-700"
        />
      </motion.div>
    </motion.div>
  );
}

export default function Categories() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-24 px-6 bg-white perspective-[1000px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {categories.map((category, idx) => (
          <CategoryCard 
            key={category.title}
            category={category}
            isBlurred={hoveredIndex !== null && hoveredIndex !== idx}
            onHover={() => setHoveredIndex(idx)}
            onLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </section>
  );
}
