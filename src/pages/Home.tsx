import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';
import AboutSection from '../components/AboutSection';
import Newsletter from '../components/Newsletter';
import Articles from '../components/Articles';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Lumina | The Future of Apple Products</title>
        <meta name="description" content="Experience innovation at its finest. Discover the complete Apple ecosystem and premium accessories at Lumina." />
        <meta property="og:title" content="Lumina | The Future of Apple Products" />
        <meta property="og:description" content="Experience innovation at its finest. Discover the complete Apple ecosystem and premium accessories at Lumina." />
        <meta property="og:image" content="/og-image.png" />
      </Helmet>
      <Hero />
      <Categories />
      <ProductList />
      <AboutSection />
      <Newsletter />
      <Articles />
    </>
  );
}
