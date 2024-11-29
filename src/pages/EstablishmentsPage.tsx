import { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { useEstablishmentsStore } from '../store/establishmentsStore';
import { EstablishmentCard } from '../components/establishments/EstablishmentCard';

const ESTABLISHMENT_TYPES = [
  'restaurant',
  'street-food',
  'cafe',
  'traditional',
  'casual',
  'fine-dining',
];
export function EstablishmentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const establishments = useEstablishmentsStore((state) => state.establishments);

  const uniqueCountries = Array.from(
    new Set(establishments.map((establishment) => establishment.country))
  );

  const filteredEstablishments = establishments.filter((establishment) => {
    const matchesSearch = establishment.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType = selectedType ? establishment.type.includes(selectedType) : true;
    const matchesCountry = selectedCountry ? establishment.country === selectedCountry : true;
    return matchesSearch && matchesType && matchesCountry;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Culinary Establishments</h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover amazing restaurants and eateries around the world
        </p>
      </div>

      <div className="mb-8 space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search establishments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
          />
        </div>

        <div className="relative">
          <select
            value={selectedType || ''}
            onChange={(e) => setSelectedType(e.target.value || null)}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
          >
            <option value="">All Types</option>
            {ESTABLISHMENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Filter className="h-5 w-5 text-gray-400" />
          </div>
        </div>

        <div className="relative">
          <select
            value={selectedCountry || ''}
            onChange={(e) => setSelectedCountry(e.target.value || null)}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
          >
            <option value="">All Countries</option>
            {uniqueCountries.map((country) => (
              <option key={country} value={country}>
                {country.charAt(0).toUpperCase() + country.slice(1)}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Filter className="h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEstablishments.map((establishment) => (
          <EstablishmentCard
            key={establishment.id}
            establishment={establishment}
          />
        ))}
      </div>

      {filteredEstablishments.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No establishments found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
