import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useState, useMemo } from 'react';
import { useAuth } from './AuthContext';

const filters = ['All', 'Technology', 'Computers', 'Gear', 'Audio'];

interface ProductListProps {
  searchQuery?: string | null;
}

export default function ProductList({ searchQuery }: ProductListProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  const navigate = useNavigate();
  const { requireAuth } = useAuth();

  // Filter products based on search query and active filter
  const filteredProducts = useMemo(() => {
    let filtered = products;
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by category
    if (activeFilter !== 'All') {
      filtered = filtered.filter(product => product.category === activeFilter);
    }
    
    return filtered;
  }, [searchQuery, activeFilter]);

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Filters and Search Bar Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-4 overflow-x-auto pb-4 md:pb-0 w-full md:w-auto scrollbar-hide text-sm font-medium">
            {filters.map((filter, idx) => (
              <div key={filter} className="flex items-center gap-4">
                <button 
                  onClick={() => setActiveFilter(filter)}
                  className={`whitespace-nowrap transition-colors ${activeFilter === filter ? 'text-black' : 'text-slate-500 hover:text-black'}`}
                >
                  {filter}
                </button>
                {idx < filters.length - 1 && (
                  <span className="text-slate-300 font-light">/</span>
                )}
              </div>
            ))}
          </div>

          <div className="relative w-full md:w-[350px]">
            <input 
              type="text" 
              placeholder="Search for products"
              className="w-full bg-transparent border-none px-0 py-2 text-sm focus:outline-none transition-all pr-10 font-medium placeholder:text-slate-400"
            />
            <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
          {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                onClick={() => requireAuth(() => navigate(`/products/${product.id}`))}
                className="cursor-pointer"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[4/5] bg-slate-50 border border-slate-100 rounded-[32px] overflow-hidden mb-6 relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />
                  </div>
                  <div className="space-y-2 px-1">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-extrabold">{product.category}</span>
                    <h4 className="text-xl font-bold tracking-tight text-slate-900">{product.name}</h4>
                    <p className="text-slate-500 font-semibold">{product.price}</p>
                  </div>
                </motion.div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
