import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { ChevronLeft, ShoppingBag, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../components/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="pt-32 pb-20 px-6 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <Link to="/products" className="text-slate-900 mt-4 inline-block underline">Back to products</Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <Link 
          to="/products" 
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors mb-12 group w-fit"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-semibold">Back to products</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-[4/5] bg-slate-50 border border-slate-100 rounded-[32px] overflow-hidden"
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="text-[12px] uppercase tracking-[0.2em] text-slate-400 font-extrabold">{product.category}</span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">{product.name}</h1>
              <p className="text-2xl font-bold text-slate-900">{product.price}</p>
            </div>

            <p className="text-lg text-slate-500 leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 space-y-6">
              <button 
                onClick={() => addToCart(product)}
                className="w-full py-5 bg-black text-white rounded-2xl font-bold hover:bg-slate-900 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3 active:scale-95"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Bag
              </button>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 text-slate-500">
                  <Truck className="w-5 h-5" />
                  <span className="text-xs font-medium">Free Shipping Worldwide</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="text-xs font-medium">2 Year Warranty</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
