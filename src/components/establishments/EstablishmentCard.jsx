import { Star, MapPin, Bookmark } from 'lucide-react';
import { useEstablishmentsStore } from '../../store/establishmentsStore';
import { useAuthStore } from '../../store/authStore'; // Додаємо імпорт для доступу до збереження
import '../../style/EstablishmentCard.css'; // Підключаємо стилі

export function EstablishmentCard({ establishment }) {
  const { savedEstablishments, toggleSaved } = useEstablishmentsStore();
  const { saveEstablishment } = useAuthStore(); // Імпортуємо функцію збереження закладу
  const isSaved = savedEstablishments.includes(establishment.id);

  // Функція для обробки збереження закладу
  const handleSave = async () => {
    try {
      await saveEstablishment(establishment.id); // Викликаємо метод для збереження
      toggleSaved(establishment.id); // Оновлюємо локальний стан закладу (якщо потрібно)
    } catch (error) {
      console.error('Error saving establishment:', error);
    }
  };

  return (
    <div className="establishment-card">
      <div className="relative">
        <img
          src={establishment.imageUrl}
          alt={establishment.name}
          className="establishment-image"
        />
        <button
          onClick={handleSave} // Викликаємо handleSave замість toggleSaved
          className="save-est-button"
        >
          <Bookmark
            className={`bookmark-icon ${isSaved ? 'fill-red-600 text-red-600' : 'text-gray-600'}`}
          />
        </button>
      </div>
      <div className="p-6">
        <div className="establishment-title-container">
          <h3 className="establishment-title">
            {establishment.name}
          </h3>
          <div className="rating-container">
            <Star className="rating-icon" />
            <span className="rating-text">{establishment.rating}</span>
          </div>
        </div>
        <div className="address-container">
          <MapPin className="address-icon" />
          {establishment.address}
        </div>
        <p className="establishment-description">{establishment.description}</p>
        <div className="type-tags">
          {establishment.type.map((type) => (
            <span key={type} className="type-tag">
              {type}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
