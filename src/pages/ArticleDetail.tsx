import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, User, Share2 } from 'lucide-react';

const allArticles = [
  {
    id: 1,
    title: "The Future of Pro Performance: iPhone 15 Pro",
    description: "Deep dive into the titanium design and the breakthrough A17 Pro chip that redefines what a smartphone can do.",
    content: `
      <p>The iPhone 15 Pro represents a significant leap forward in smartphone engineering. By moving to a titanium enclosure, Apple has created the lightest and strongest Pro models ever. But the real magic lies within.</p>
      
      <h2>A17 Pro: A New Chapter for Silicon</h2>
      <p>The A17 Pro is the industry's first 3-nanometer chip, bringing performance and efficiency that was previously unthinkable. With a redesigned GPU, it brings hardware-accelerated ray tracing to iPhone for the first time, enabling console-level gaming on the go.</p>
      
      <blockquote>
        "Titanium is one of the best strength-to-weight ratios of any metal, allowing us to make our lightest Pro models ever while maintaining incredible durability."
      </blockquote>

      <h2>The Action Button</h2>
      <p>Replacing the single-function switch, the new Action button offers additional options so users can choose between quickly accessing the camera or flashlight; activating Voice Memos, Focus modes, Translate, and accessibility features like Magnifier.</p>
    `,
    category: "Product News",
    date: "April 20, 2024",
    author: "James Wilson",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=1200"
  },
  // Add more as needed, but for now we'll use a generic fallback for others
];

export default function ArticleDetail() {
  const { id } = useParams();
  const article = allArticles.find(a => a.id === Number(id)) || allArticles[0];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <Link 
          to="/articles" 
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-900 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Newsroom
        </Link>

        {/* Article Header */}
        <div className="space-y-6 mb-12">
          <div className="flex items-center gap-4 text-xs font-extrabold uppercase tracking-widest text-slate-400">
            <span className="text-slate-900 bg-slate-100 px-3 py-1 rounded-full">{article.category}</span>
            <span>{article.date}</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 leading-tight"
          >
            {article.title}
          </motion.h1>
          
          <div className="flex items-center justify-between py-6 border-y border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold">
                {article.author[0]}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">{article.author}</p>
                <p className="text-xs text-slate-500">Tech Editor</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-slate-400">
              <div className="flex items-center gap-1 text-xs font-bold">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </div>
              <button className="hover:text-slate-900 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Article Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-[16/9] overflow-hidden rounded-[40px] bg-slate-50 mb-16"
        >
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Article Content */}
        <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-p:text-slate-600 prose-p:leading-relaxed prose-blockquote:border-l-4 prose-blockquote:border-slate-900 prose-blockquote:italic prose-blockquote:text-xl prose-blockquote:text-slate-900 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {/* Footer Info */}
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900 mb-2">Subscribe to Lumina Newsroom</h4>
            <p className="text-sm text-slate-500">Get the latest stories delivered to your inbox.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              type="email" 
              placeholder="Email address"
              className="flex-1 md:w-64 px-4 py-3 bg-slate-50 rounded-xl text-sm border-none focus:ring-2 focus:ring-slate-900 focus:outline-none"
            />
            <button className="px-6 py-3 bg-black text-white text-sm font-bold rounded-xl hover:bg-slate-900 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
