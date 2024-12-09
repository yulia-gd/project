import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useCountriesStore } from '../store/countriesStore';
import { useEstablishmentsStore } from '../store/establishmentsStore';
import { EstablishmentCard } from '../components/establishments/EstablishmentCard';
import '../style/CountryDetailPage.css';

export function CountryDetailPage() {
  const { regionId, countryId } = useParams(); // без типізації
  const countries = useCountriesStore((state) => state.countries);
  const country = countries.find((c) => c.id === countryId);
  const establishments = useEstablishmentsStore((state) =>
    state.filterByCountry(countryId || '')
  );

  if (!country) {
    return (
      <div className="page-container">
        <p>Country not found</p>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Back link */}
      <Link to={`/regions/${regionId}`} className="back-link">
        <ArrowLeft className="back-link-icon" />
        Back to Region
      </Link>

      {/* Hero section with country image */}
      <div className="hero-image-container">
        <img
          src={country.imageUrl}
          alt={country.name}
          className="hero-image"
        />
        <div className="hero-gradient-overlay" />
        <div className="hero-text">
          <h1 className="hero-title">{country.name}</h1>
          <p className="hero-description">{country.description}</p>
        </div>
      </div>

      {/* Traditional Dishes Section */}
      <div className="mt-12">
        <h2 className="section-title">Traditional Dishes</h2>
        <div className="establishments-grid">
          {country.traditionalDishes.map((dish) => (
            <div
              key={dish.id}
              className="traditional-dish-card"
            >
              <img
                src={dish.imageUrl}
                alt={dish.name}
                className="traditional-dish-image"
              />
              <div className="traditional-dish-content">
                <h3 className="traditional-dish-title">{dish.name}</h3>
                <p className="traditional-dish-description">{dish.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Establishments Section */}
      <div className="mt-12">
        <h2 className="section-title">Popular Establishments</h2>
        <div className="establishments-grid">
          {establishments.map((establishment) => (
            <EstablishmentCard key={establishment.id} establishment={establishment} />
          ))}
        </div>
      </div>
    </div>
  );
}
