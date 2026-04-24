import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../components/CartContext';
import { CheckCircle2, Loader2, Lock, CreditCard, ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Checkout() {
  const { cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState('payment'); // 'payment' | 'processing' | 'success'

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('processing');
    
    // Simulate payment processing
    setTimeout(() => {
      setStep('success');
      clearCart();
    }, 3000);
  };

  if (step === 'success') {
    return (
      <div className="pt-48 pb-24 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto space-y-6"
        >
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Thank you for your order.</h2>
          <p className="text-slate-500">Your payment was successful and your order is being prepared. We've sent a confirmation email to your inbox.</p>
          <div className="pt-6">
            <Link 
              to="/products" 
              className="inline-block px-8 py-4 bg-black text-white rounded-2xl font-bold hover:bg-slate-900 transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 bg-slate-50/50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/cart" 
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors mb-12 group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Bag
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Payment Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-slate-100 space-y-8"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-slate-900">Payment Details</h1>
              <div className="flex gap-2">
                <div className="w-8 h-5 bg-slate-100 rounded"></div>
                <div className="w-8 h-5 bg-slate-100 rounded"></div>
                <div className="w-8 h-5 bg-slate-100 rounded"></div>
              </div>
            </div>

            <form onSubmit={handlePayment} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Cardholder Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="John Doe"
                  className="w-full px-5 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-slate-900 transition-all outline-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Card Number</label>
                <div className="relative">
                  <input 
                    required
                    type="text" 
                    placeholder="0000 0000 0000 0000"
                    className="w-full px-5 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-slate-900 transition-all outline-none pl-12"
                  />
                  <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Expiry Date</label>
                  <input 
                    required
                    type="text" 
                    placeholder="MM/YY"
                    className="w-full px-5 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-slate-900 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">CVV</label>
                  <input 
                    required
                    type="text" 
                    placeholder="123"
                    className="w-full px-5 py-4 bg-slate-50 rounded-2xl border-none focus:ring-2 focus:ring-slate-900 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button 
                  disabled={step === 'processing'}
                  className="w-full py-5 bg-black text-white rounded-2xl font-bold hover:bg-slate-900 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {step === 'processing' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      Pay ${cartTotal.toFixed(2)}
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10px] text-center text-slate-400">
                Your transaction is secured with 256-bit SSL encryption.
              </p>
            </form>
          </motion.div>

          {/* Order Summary */}
          <div className="space-y-8 lg:sticky lg:top-32">
            <div className="bg-white/50 backdrop-blur-sm p-8 rounded-[32px] border border-slate-100">
              <h2 className="text-lg font-bold text-slate-900 mb-6">In your bag</h2>
              <div className="space-y-4 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {/* We'll use a small version of items here if needed, but for simplicity just text for now */}
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-500">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-500">Shipping</span>
                  <span className="text-green-500">FREE</span>
                </div>
                <div className="pt-4 border-t border-slate-100 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 px-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400">
                <Lock className="w-4 h-4" />
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                We protect your data with end-to-end encryption. Your card details are never stored on our servers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
