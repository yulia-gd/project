import { Star, MapPin, Bookmark } from 'lucide-react';
import { useEstablishmentsStore } from '../../store/establishmentsStore';

export function EstablishmentCard({ establishment }) {
  const { savedEstablishments, toggleSaved } = useEstablishmentsStore();
  const isSaved = savedEstablishments.includes(establishment.id);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={establishment.imageUrl}
          alt={establishment.name}
          className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <button
          onClick={() => toggleSaved(establishment.id)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white transition-colors"
        >
          <Bookmark
            className={`h-5 w-5 ${
              isSaved ? 'fill-red-600 text-red-600' : 'text-gray-600'
            } transition-colors duration-300`}
          />
        </button>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {establishment.name}
          </h3>
          <div className="flex items-center text-red-600">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm">{establishment.rating}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          {establishment.address}
        </div>
        <p className="text-gray-600">{establishment.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {establishment.type.map((type) => (
            <span
              key={type}
              className="px-2 py-1 text-xs font-medium text-red-600 bg-red-50 rounded-full"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
