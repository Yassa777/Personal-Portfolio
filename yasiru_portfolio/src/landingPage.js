import { ArrowUp } from 'lucide-react';
import logo from './assets/images/logo.png'; 
import { Link } from 'react-router-dom';
import GraphView from './components/GraphView';

const PortfolioLanding = () => {
  return (
    <div className="min-h-screen bg-[#F8FAED] p-8 text-gray-700">
      {/* Navigation */}
      <nav className="flex justify-end gap-8 text-gray-600 mb-16 text-lg">
        <a href="#welcome" className="hover:text-gray-900">Welcome</a>
        <Link to="/projects" className="hover:text-gray-900">Projects</Link>
        <a href="#reads" className="hover:text-gray-900">Favorite Reads</a>
        <a href="#blog" className="hover:text-gray-900">Blog</a>
        <a href="#contact" className="hover:text-gray-900">Contact</a>
      </nav>

      {/* Main Content */}
      <div className="flex justify-between items-start gap-8">
        <main className="w-1/2 ml-12 text-left">
          <div className="flex items-center gap-6 mb-12">
            <h1 className="text-6xl font-bold">Welcome to my page,</h1>
            <img
              src={logo}
              alt="Illustration"
              className="w-40 h-40"
            />
          </div>

          <div className="space-y-6 text-lg font-sans">
            <p>My name's Yasiru.</p>

            <p>
              I just finished my undergrad degree in Computer Science at the
              University Of Westminster, London. It was pretty cool.
            </p>

            <p>Feel free to check out my projects.</p>

            <p>I love reading, playing football and making music.</p>

            <p className="flex items-center gap-2">
              Long term, I hope to <span role="img" aria-label="smile">😁</span> change the world{' '}
              <span role="img" aria-label="smile">😁</span> or something like that.
            </p>
          </div>

          {/* Footer Button */}
          <div className="mt-16 flex justify-start">
            <button className="bg-black text-white px-6 py-2 rounded-full">
              HMU
            </button>
          </div>

          {/* Back to Top */}
          <div className="mt-16 flex justify-start text-gray-400">
            <a href="#top" className="flex items-center gap-2">
              <ArrowUp size={16} /> Back to Top
            </a>
          </div>
        </main>

        {/* Graph View */}
        <div className="w-1/2 min-h-[600px]">
          <div className="h-[500px]">
            <GraphView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioLanding;

