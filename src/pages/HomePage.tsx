import { Link } from 'react-router-dom';
import { Globe, Search, BookmarkCheck } from 'lucide-react';
import { useRegionsStore } from '../store/regionsStore';

export function HomePage() {
  const regions = useRegionsStore((state) => state.regions);

  return (
    <div>
    
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Discover the World's</span>
                  <span className="block text-red-600">Culinary Heritage</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Explore authentic cuisines, traditional dishes, and local establishments from every corner of the globe.
                </p>
                <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                  <Link
                    to="/regions"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-800"
                  >
                    Start Exploring
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Globe className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Global Cuisines</h3>
              <p className="mt-2 text-gray-600">
                Explore diverse culinary traditions from different regions of the world.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <Search className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Find Establishments</h3>
              <p className="mt-2 text-gray-600">
                Discover authentic restaurants and eateries in every country.
              </p>
            </div>
            <div className="text-center">
              <div className="flex justify-center">
                <BookmarkCheck className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Save Favorites</h3>
              <p className="mt-2 text-gray-600">
                Create your personal collection of must-visit culinary destinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Regions */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Regions</h2>
            <p className="mt-4 text-lg text-gray-600">
              Begin your culinary journey through these diverse regions
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <Link
                key={region.id}
                to={`/regions/${region.id}`}
                className="group block relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={region.imageUrl}
                    alt={region.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white">{region.name}</h3>
                    <p className="mt-2 text-sm text-white/90 line-clamp-2">
                      {region.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}