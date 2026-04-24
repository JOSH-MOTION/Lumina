import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { ArrowRight } from 'lucide-react';
import { useAuth } from '../components/AuthContext';

const categoryData: Record<string, { title: string, description: string, image: string }> = {
  technology: {
    title: 'Technology',
    description: 'Experience innovation with the latest iPhone, Apple Watch, and cutting-edge mobile technologies designed to keep you connected.',
    image: 'https://images.unsplash.com/photo-1510512271953-bc115ef042c1?q=80&w=1200'
  },
  audio: {
    title: 'Audio',
    description: 'Immerse yourself in high-fidelity sound. From AirPods Pro to HomePod, experience audio like never before with Spatial Audio.',
    image: 'https://images.unsplash.com/photo-1588423770574-91993ca0a8b1?q=80&w=1200'
  },
  gear: {
    title: 'Accessories',
    description: 'Essential gear for your Apple ecosystem. Discover AirTags, protective cases, and premium accessories to complement your lifestyle.',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200'
  },
  computers: {
    title: 'Mac & iPad',
    description: 'Power your productivity with the world’s most advanced computers. Explore the latest MacBook, iMac, and iPad Pro powered by Apple Silicon.',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200'
  }
};

export default function Category() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { requireAuth } = useAuth();
  const data = categoryData[category?.toLowerCase() || ''];
  
  const filteredProducts = products.filter(
    p => p.category.toLowerCase() === category?.toLowerCase()
  );

  if (!data) {
    return (
      <div className="pt-32 pb-20 px-6 text-center">
        <h2 className="text-2xl font-bold">Category not found</h2>
        <Link to="/" className="text-slate-900 mt-4 inline-block underline">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Category Hero Section */}
      <section className="flex flex-col md:flex-row min-h-[60vh] border-b border-slate-100">
        <div className="flex-1 flex flex-col justify-center px-10 md:px-20 py-20 bg-slate-50/30">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 max-w-xl"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-slate-900">{data.title}</h1>
            <p className="text-lg text-slate-500 leading-relaxed">
              {data.description}
            </p>
          </motion.div>
        </div>
        <div className="flex-1 relative min-h-[400px]">
          <img 
            src={data.image} 
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
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
                  <div className="aspect-[4/5] bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden mb-6 relative">
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
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-400">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
