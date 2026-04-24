import { motion } from 'motion/react';
import { useCart } from '../components/CartContext';
import { Trash2, ArrowRight, Minus, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cart, removeFromCart, cartTotal, clearCart, addToCart } = useCart();

  const handleDecrease = (item: any) => {
    // Basic logic to decrease (if we had a decrease function, but for now we'll just re-add with logic if needed)
    // For simplicity, let's just implement a basic view for now.
  };

  if (cart.length === 0) {
    return (
      <div className="pt-48 pb-24 px-6 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-300">
            <Trash2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Your bag is empty.</h2>
          <p className="text-slate-500">Sign in to see if you have any saved items, or continue shopping to add items to your bag.</p>
          <Link 
            to="/products" 
            className="inline-block px-8 py-4 bg-black text-white rounded-2xl font-bold hover:bg-slate-900 transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Review your bag.</h1>
          <p className="text-slate-500 mt-2">Free shipping on every order.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-6 pb-8 border-b border-slate-100 last:border-0"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-50 rounded-3xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{item.name}</h3>
                      <p className="text-sm text-slate-500 mt-1">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-xl font-bold text-slate-900">{item.price}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm font-bold text-red-500 hover:text-red-600 transition-colors"
                    >
                      Remove
                    </button>
                    <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-xl">
                       {/* Simplified quantity controls */}
                       <span className="text-sm font-bold">{item.quantity}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-[32px] space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-900">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Shipping</span>
                  <span className="font-medium text-slate-900">FREE</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Estimated Tax</span>
                  <span className="font-medium text-slate-900">$0.00</span>
                </div>
                <div className="pt-4 border-t border-slate-200 flex justify-between">
                  <span className="text-lg font-bold text-slate-900">Total</span>
                  <span className="text-lg font-bold text-slate-900">${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              <Link 
                to="/checkout"
                className="w-full py-5 bg-black text-white rounded-2xl font-bold hover:bg-slate-900 transition-all flex items-center justify-center gap-2 group"
              >
                Check Out
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="p-6 border border-slate-100 rounded-[24px] space-y-3">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Need some help?</p>
              <p className="text-sm text-slate-600">Chat with a Specialist online or call 1-800-MY-LUMINA.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
