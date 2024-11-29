import { useParams, Link } from 'react-router-dom';
import { useRegionsStore } from '../store/regionsStore';
import { ArrowLeft, UtensilsCrossed } from 'lucide-react';

export function RegionDetailPage() {
  const { regionId } = useParams<{ regionId: string }>();
  const regions = useRegionsStore((state) => state.regions);
  const region = regions.find((r) => r.id === regionId);

  if (!region) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p>Region not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/regions"
        className="inline-flex items-center text-red-600 hover:text-red-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Regions
      </Link>

      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={region.imageUrl}
          alt={region.name}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl font-bold">{region.name}</h1>
          <p className="mt-2 text-lg text-white/90">{region.description}</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Countries</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {region.countries.map((country) => (
            <Link
              key={country}
              to={`/regions/${region.id}/countries/${country.toLowerCase()}`}
              className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
                    {country}
                  </h3>
                  <UtensilsCrossed className="h-5 w-5 text-red-600" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}