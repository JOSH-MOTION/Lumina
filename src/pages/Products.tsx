import ProductList from '../components/ProductList';

export default function Products() {
  return (
    <div className="pt-20">
      <div className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">Our Products</h1>
          <p className="text-slate-500 mt-4 max-w-md">
            Explore our curated selection of high-quality tech gadgets and accessories.
          </p>
        </div>
      </div>
      <ProductList />
    </div>
  );
}
