export default function Newsletter() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-10 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 leading-tight">
            Subscribe to our email newsletter and get 10% off
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
            />
            <button className="bg-black text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-600 text-sm">
              Join the 10,000 users in our newsletter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
