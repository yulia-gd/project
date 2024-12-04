import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function RegionCard({ region }) {
  return (
    <Link
      to={`/regions/${region.id}`}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl"
    >
      <div className="aspect-[16/9] w-full">
        <img
          src={region.imageUrl}
          alt={region.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-600 transition-colors">
          {region.name}
        </h3>
        <p className="mt-2 text-gray-600 line-clamp-2">{region.description}</p>
        <div className="mt-4 flex items-center text-red-600">
          <span className="text-sm font-medium">Explore region</span>
          <ChevronRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
