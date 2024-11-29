import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, MapPin } from 'lucide-react';
import { useCountriesStore } from '../store/countriesStore';
import { useEstablishmentsStore } from '../store/establishmentsStore';

export function CountryDetailPage() {
  const { regionId, countryId } = useParams<{ regionId: string; countryId: string }>();
  const countries = useCountriesStore((state) => state.countries);
  const country = countries.find((c) => c.id === countryId);
  const establishments = useEstablishmentsStore((state) => 
    state.filterByCountry(countryId || '')
  );

  if (!country) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p>Country not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to={`/regions/${regionId}`}
        className="inline-flex items-center text-red-600 hover:text-red-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Region
      </Link>

      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={country.imageUrl}
          alt={country.name}
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h1 className="text-4xl font-bold">{country.name}</h1>
          <p className="mt-2 text-lg text-white/90">{country.description}</p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Traditional Dishes</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {country.traditionalDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={dish.imageUrl}
                alt={dish.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{dish.name}</h3>
                <p className="mt-2 text-gray-600">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Establishments</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {establishments.map((establishment) => (
            <div
              key={establishment.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={establishment.imageUrl}
                alt={establishment.name}
                className="w-full h-48 object-cover"
              />
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
          ))}
        </div>
      </div>
    </div>
  );
}