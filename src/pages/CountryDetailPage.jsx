import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useCountriesStore } from '../store/countriesStore';
import { useEstablishmentsStore } from '../store/establishmentsStore';
import { EstablishmentCard } from '../components/establishments/EstablishmentCard';

export function CountryDetailPage() {
  const { regionId, countryId } = useParams(); // без типізації
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Popular Establishments
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {establishments.map((establishment) => (
            <EstablishmentCard key={establishment.id} establishment={establishment} />
          ))}
        </div>
      </div>
    </div>
  );
}
