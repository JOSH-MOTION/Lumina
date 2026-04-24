import { motion } from 'motion/react';
import { Mail, MessageSquare, Phone, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900"
          >
            How can we help?
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-500 leading-relaxed"
          >
            Our team of specialists is here to assist you with everything from technical support to product advice.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-10 bg-slate-50 rounded-[40px] space-y-6 group hover:bg-slate-100 transition-colors"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <MessageSquare className="w-7 h-7 text-slate-900" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Chat with us</h3>
            <p className="text-slate-500">Live chat with a specialist 24/7 for immediate assistance.</p>
            <button className="flex items-center gap-2 text-sm font-bold text-slate-900 pt-2 group/btn">
              Start a session
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-10 bg-slate-50 rounded-[40px] space-y-6 group hover:bg-slate-100 transition-colors"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <Mail className="w-7 h-7 text-slate-900" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Email support</h3>
            <p className="text-slate-500">Send us your detailed inquiry and we'll get back to you within 24 hours.</p>
            <button className="flex items-center gap-2 text-sm font-bold text-slate-900 pt-2 group/btn">
              Send an email
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-10 bg-slate-50 rounded-[40px] space-y-6 group hover:bg-slate-100 transition-colors"
          >
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm">
              <Phone className="w-7 h-7 text-slate-900" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Call us</h3>
            <p className="text-slate-500">Speak directly with a Lumina Expert. Available Mon-Fri, 9am-6pm.</p>
            <button className="flex items-center gap-2 text-sm font-bold text-slate-900 pt-2 group/btn">
              1-800-MY-LUMINA
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Visit our Studio</h2>
              <p className="text-lg text-slate-500 max-w-md">
                Experience Lumina in person at our flagship studio in Silicon Valley.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-slate-50 rounded-3xl flex items-center justify-center">
                <MapPin className="w-8 h-8 text-slate-900" />
              </div>
              <div className="space-y-1">
                <p className="text-xl font-bold text-slate-900">Lumina Headquarters</p>
                <p className="text-slate-500">123 Tech Avenue, Silicon Valley, CA</p>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/50"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">First Name</label>
                  <input type="text" className="w-full bg-slate-50 rounded-2xl px-6 py-5 border-none focus:ring-2 focus:ring-slate-900 transition-all outline-none" placeholder="John" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">Last Name</label>
                  <input type="text" className="w-full bg-slate-50 rounded-2xl px-6 py-5 border-none focus:ring-2 focus:ring-slate-900 transition-all outline-none" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">Email Address</label>
                <input type="email" className="w-full bg-slate-50 rounded-2xl px-6 py-5 border-none focus:ring-2 focus:ring-slate-900 transition-all outline-none" placeholder="john@lumina.com" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">Message</label>
                <textarea className="w-full bg-slate-50 rounded-2xl px-6 py-5 border-none focus:ring-2 focus:ring-slate-900 transition-all outline-none min-h-[160px]" placeholder="Tell us what's on your mind..."></textarea>
              </div>
              <button className="w-full py-5 bg-black text-white rounded-2xl font-bold hover:bg-slate-900 transition-all flex items-center justify-center gap-2 group">
                Send message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
