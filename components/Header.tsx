import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-2xl px-3 py-1 rounded">
            NH
          </div>
          <span className="hidden sm:inline font-bold text-lg">NextHire</span>
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <Link href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</Link>
          <Link href="#benefits" className="text-gray-700 hover:text-blue-600 transition">Benefits</Link>
          <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">Testimonials</Link>
          <Link href="#pricing" className="text-gray-700 hover:text-blue-600 transition">Pricing</Link>
        </nav>

        <div className="flex gap-3">
          <button className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
            Sign In
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
