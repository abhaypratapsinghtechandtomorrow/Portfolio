import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass border-b border-white/10 py-3' : 'py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold gradient-text">
          Abhay.dev
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`text-sm font-medium transition-all duration-200 hover:text-purple-400 ${
                  location.pathname === link.path ? 'text-purple-400' : 'text-gray-400'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden md:block px-5 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-sm font-semibold hover:opacity-90 transition-all duration-200"
        >
          Hire Me
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-400 hover:text-white"
        >
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}/>
          <div className={`w-6 h-0.5 bg-current my-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
          <div className={`w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}/>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden glass mx-4 mt-2 p-4 rounded-2xl">
          {links.map(link => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 px-4 text-sm font-medium rounded-xl transition-all duration-200 hover:bg-white/10 ${
                location.pathname === link.path ? 'text-purple-400' : 'text-gray-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block mt-2 px-4 py-3 text-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-sm font-semibold"
          >
            Hire Me
          </Link>
        </div>
      )}
    </nav>
  )
}
