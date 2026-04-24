import { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useAuth } from './AuthContext';

export default function FeaturedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { requireAuth } = useAuth();
  const featured = products.filter(p => p.isFeatured);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-display">
            Featured Products
          </h2>
          <Link to="/products" className="text-sm font-bold text-slate-900 border-b border-slate-900 pb-1 hover:text-slate-400 hover:border-slate-300 transition-all">
            Browse all products
          </Link>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex gap-3 md:gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-10 px-4 -mx-4"
          >
            {featured.map((product, index) => (
              <div 
                key={product.id}
                className="min-w-[160px] md:min-w-[180px] flex-shrink-0 snap-start relative"
              >
                {/* Navigation Arrow on First Card */}
                {index === 0 && (
                  <button 
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 hover:scale-110 transition-all hidden md:flex"
                  >
                    <ChevronLeft className="w-3 h-3 text-slate-900" />
                  </button>
                )}
                
                {/* Navigation Arrow on Last Card */}
                {index === featured.length - 1 && (
                  <button 
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200 hover:scale-110 transition-all hidden md:flex"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-900" />
                  </button>
                )}

                <div 
                  onClick={() => requireAuth(() => navigate(`/products/${product.id}`))}
                  className="group block cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden relative mb-2 transition-all duration-500 group-hover:bg-gray-100">
                    {/* Category Badge */}
                    <div className="absolute top-1 left-1 z-10 px-1.5 py-0.5 bg-white rounded shadow-sm">
                      <span className="text-[6px] font-bold text-slate-900 uppercase tracking-wider">
                        {product.category.toUpperCase()}
                      </span>
                    </div>
                    
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-semibold text-slate-900 leading-tight">
                      {product.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 leading-relaxed line-clamp-2">
                      Lorem ipsum dolor sit amet dolor sit consectetur adipiscing elit elit.
                    </p>
                    <p className="text-xs font-bold text-slate-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
