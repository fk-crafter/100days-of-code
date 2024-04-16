import './index.css';
import Navbar from './Navbar';
import Header from './Header';
import Filters from './Filters';
import ScrollToTop from './ScrollToTop';
import ProductGrid from './ProductGrid';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <section>
        <Filters />
        <ProductGrid />
      </section>
      <ScrollToTop/>
    </div>
  );
}

export default App;