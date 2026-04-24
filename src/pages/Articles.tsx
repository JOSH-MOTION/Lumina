import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const allArticles = [
  {
    id: 1,
    title: "The Future of Pro Performance: iPhone 15 Pro",
    description: "Deep dive into the titanium design and the breakthrough A17 Pro chip that redefines what a smartphone can do.",
    category: "Product News",
    date: "April 20, 2024",
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=1200"
  },
  {
    id: 2,
    title: "MacBook Air: Now with the power of M3",
    description: "Discover how the most popular laptop in the world becomes even better with incredible speed and all-day battery life.",
    category: "Mac",
    date: "April 15, 2024",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1200"
  },
  {
    id: 3,
    title: "Mastering Spatial Audio with AirPods Pro",
    description: "A comprehensive guide to setting up and experiencing the most immersive sound experience in your ears.",
    category: "Tutorials",
    date: "April 10, 2024",
    image: "https://images.unsplash.com/photo-1588423770574-91993ca0a8b1?q=80&w=1200"
  },
  {
    id: 4,
    title: "Apple Watch: Your ultimate fitness partner",
    description: "How to use the latest health features on Series 9 and Ultra 2 to reach your personal best.",
    category: "Health",
    date: "April 05, 2024",
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=1200"
  },
  {
    id: 5,
    title: "iPad Pro: The most advanced display ever",
    description: "Exploring the Liquid Retina XDR display and how it transforms the creative workflow for professionals.",
    category: "iPad",
    date: "March 28, 2024",
    image: "https://images.unsplash.com/photo-1544244015-0cd4b3ff869d?q=80&w=1200"
  },
  {
    id: 6,
    title: "Sustainable Tech: Our vision for 2030",
    description: "Learn about Lumina's commitment to the environment and how we're making our products carbon neutral.",
    category: "Vision",
    date: "March 20, 2024",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200"
  }
];

export default function ArticlesPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="space-y-6 mb-20 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-extrabold uppercase tracking-[0.3em] text-slate-400"
          >
            Newsroom
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900"
          >
            Our Latest Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl"
          >
            Explore the latest news, expert guides, and deep dives into the technology that powers your world.
          </motion.p>
        </div>

        {/* Featured Article */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-24"
        >
          <Link to={`/articles/${allArticles[0].id}`} className="group relative block aspect-[21/9] overflow-hidden rounded-[40px] bg-slate-50">
            <img 
              src={allArticles[0].image} 
              alt={allArticles[0].title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-16 text-white max-w-3xl space-y-4">
              <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
                Featured Story
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                {allArticles[0].title}
              </h2>
              <p className="text-white/80 text-sm md:text-base line-clamp-2 md:line-clamp-none">
                {allArticles[0].description}
              </p>
            </div>
          </Link>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {allArticles.slice(1).map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link to={`/articles/${article.id}`} className="group space-y-6 block">
                <div className="aspect-[4/3] overflow-hidden rounded-[32px] bg-slate-50">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                    <span className="text-slate-900">{article.category}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-slate-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 pt-2 group/btn">
                    Read more
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
