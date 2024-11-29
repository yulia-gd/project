import { useRegionsStore } from '../store/regionsStore';
import { RegionCard } from '../components/regions/RegionCard';
import { Globe } from 'lucide-react';

export function RegionsPage() {
  const regions = useRegionsStore((state) => state.regions);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Globe className="h-12 w-12 text-red-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Explore World Cuisines</h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover culinary traditions from different parts of the world
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {regions.map((region) => (
          <RegionCard key={region.id} region={region} />
        ))}
      </div>
    </div>
  );
}