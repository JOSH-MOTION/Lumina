import { Link } from 'react-router-dom';

export default function Articles() {
  const articles = [
    {
      id: 1,
      title: "How to create the perfect work from home setup",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
      category: "Ideas",
      date: "August 31, 2022",
      image: "https://images.unsplash.com/photo-1512941937309-5f591e5e4c54?q=80&w=800&h=400&fit=crop&grayscale"
    },
    {
      id: 2,
      title: "Alexa vs Siri vs Google Home: Which smart assistant is the best?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
      category: "Tutorials",
      date: "August 31, 2022",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-display">
            Our articles and news
          </h2>
          <Link 
            to="/articles" 
            className="px-6 py-2 border border-slate-900 rounded-full text-sm font-bold text-slate-900 hover:bg-slate-900 hover:text-white transition-all"
          >
            Browse all articles
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {articles.map((article) => (
            <Link 
              key={article.id}
              to={`/articles/${article.id}`}
              className="group block space-y-4"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-gray-50">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-slate-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {article.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-black text-white text-xs font-bold rounded-full">
                    {article.category}
                  </span>
                  <span className="text-sm text-slate-500">
                    {article.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
