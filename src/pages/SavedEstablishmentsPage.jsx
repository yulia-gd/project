import { useEffect, useState } from 'react';
import { useEstablishmentsStore } from '../store/establishmentsStore';
import { EstablishmentCard } from '../components/establishments/EstablishmentCard';
import '../style/SavedEstablishmentsPage.css';

export function SavedEstablishmentsPage() {
  const { establishments, savedEstablishments, fetchEstablishments } = useEstablishmentsStore((state) => ({
    establishments: state.establishments,
    savedEstablishments: state.savedEstablishments,
    fetchEstablishments: state.fetchEstablishments,
  }));

  const [loading, setLoading] = useState(true);  // Стейт для завантаження

  // Fetch establishments when the component mounts
  useEffect(() => {
    const loadEstablishments = async () => {
      await fetchEstablishments();
      setLoading(false);  // Завершення завантаження після отримання даних
    };
    loadEstablishments();
  }, [fetchEstablishments]);

  const savedPlaces = establishments.filter((establishment) =>
    savedEstablishments.includes(establishment.id)
  );

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Saved Places</h1>
        <p className="page-description">
          Your personally curated collection of favorite establishments
        </p>
      </div>

      {loading ? (
        <div className="loading-state">
          <p>Loading your saved places...</p>
        </div>
      ) : savedPlaces.length > 0 ? (
        <div className="saved-grid">
          {savedPlaces.map((establishment) => (
            <EstablishmentCard key={establishment.id} establishment={establishment} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p className="empty-message">
            You haven't saved any establishments yet. Explore and save your favorites!
          </p>
        </div>
      )}
    </div>
  );
}
