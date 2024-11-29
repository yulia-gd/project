import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, UtensilsCrossed} from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { isAuthenticated, user, logout } = useAuthStore();

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6">
          <Link to="/" className="flex items-center space-x-2">
            <UtensilsCrossed className="h-8 w-8 text-rad-600" />
            <span className="text-2xl font-bold text-gray-900">
              World<span className="text-red-600">Cuisine</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link to="/regions" className="text-gray-700 hover:text-pink-600 transition-colors">
              Regions
            </Link>
            <Link to="/establishments" className="text-gray-700 hover:text-pink-600 transition-colors">
              Establishments
            </Link>
            {isAuthenticated ? (
              <>
             <Link to="/saved" className="text-gray-700 hover:text-pink-600 transition-colors">
                Saved Places
            </Link>
    <div className="flex items-center space-x-4">
      <Link
        to="/profile"
        className="text-gray-700 hover:text-pink-600 transition-colors"
      >
        {user?.name}
      </Link>
      <button
        onClick={logout}
        className="text-gray-700 hover:text-pink-600 transition-colors"
      >
        Logout
      </button>
    </div>
  </>
): (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors"
                >
                  Register
                </Link>
              </div>
            )}
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/regions"
                className="text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Regions
              </Link>
              <Link
                to="/establishments"
                className="text-gray-700 hover:text-red-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Establishments
              </Link>
              {isAuthenticated ? (
            <>
              <Link to="/saved" className="text-gray-700 hover:text-pink-600 transition-colors">
                Save Places
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                >
                  {user?.name}
                </Link>
                <button
                  onClick={logout}
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            </>
) : (
  <div className="flex items-center space-x-4">
    <Link
      to="/login"
      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors"
    >
      Login
    </Link>
    <Link
      to="/register"
      className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-colors"
    >
      Register
    </Link>
  </div>
)}

            </div>
          </div>
        )}
      </div>
    </header>
  );
}