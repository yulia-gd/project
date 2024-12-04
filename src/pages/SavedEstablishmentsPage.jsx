import { useEstablishmentsStore } from '../store/establishmentsStore';
import { EstablishmentCard } from '../components/establishments/EstablishmentCard';

export function SavedEstablishmentsPage() {
  const { establishments, savedEstablishments } = useEstablishmentsStore();
  
  const savedPlaces = establishments.filter((establishment) =>
    savedEstablishments.includes(establishment.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Saved Places</h1>
        <p className="mt-4 text-lg text-gray-600">
          Your personally curated collection of favorite establishments
        </p>
      </div>

      {savedPlaces.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {savedPlaces.map((establishment) => (
            <EstablishmentCard key={establishment.id} establishment={establishment} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">You haven't saved any establishments yet. Explore and save your favorites!</p>
        </div>
      )}
    </div>
  );
}
