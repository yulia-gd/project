import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { EstablishmentCard } from '../components/establishments/EstablishmentCard';
import { useCountriesStore } from '../store/countriesStore'; // Import the countries store
import { useEstablishmentsStore } from '../store/establishmentsStore'; // Import the establishments store
import '../style/CountryDetailPage.css';
export function CountryDetailPage() {
  const { regionId, countryId } = useParams();

  // Get countries, selectedCountry and fetchCountries from the countries store
  const { countries, selectedCountry, setSelectedCountry, fetchCountries, fetchDishesByCountry } = useCountriesStore();

  // Get establishments, fetchEstablishments and filterByCountry from the establishments store
  const { establishments, fetchEstablishments, filterByCountry } = useEstablishmentsStore();

  // State to store traditional dishes
  const [traditionalDishes, setTraditionalDishes] = useState([]);

  // Fetch countries and establishments data if not already loaded
  useEffect(() => {
    if (countries.length === 0) {
      fetchCountries(); // Fetch countries if not loaded
    }
    if (establishments.length === 0) {
      fetchEstablishments(); // Fetch establishments if not loaded
    }
  }, [countries, establishments, fetchCountries, fetchEstablishments]);

  // Set the selected country based on countryId
  useEffect(() => {
    const selected = countries.find((c) => c.id === countryId);
    if (selected) {
      setSelectedCountry(selected);
      // Fetch dishes for the selected country from the store
      fetchTraditionalDishes(selected.name); // Note that we're passing the country name
    }
  }, [countries, countryId, setSelectedCountry]);

  // Function to fetch traditional dishes by countryId
  const fetchTraditionalDishes = async (countryName) => {
    const dishes = await fetchDishesByCountry(countryName);
    setTraditionalDishes(dishes); // Set the dishes in the state
  };

  // Filter establishments based on countryId
  const filteredEstablishments = filterByCountry(countryId);

  // If there's no selected country, return an error message
  if (!selectedCountry) {
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
          src={selectedCountry.imageUrl}
          alt={selectedCountry.name}
          className="hero-image"
        />
        <div className="hero-gradient-overlay" />
        <div className="hero-text">
          <h1 className="hero-title">{selectedCountry.name}</h1>
          <p className="hero-description">{selectedCountry.description}</p>
        </div>
      </div>

      {/* Traditional Dishes Section */}
      <div className="mt-12">
        <h2 className="section-title">Traditional Dishes</h2>
        <div className="establishments-grid">
          {traditionalDishes.length > 0 ? (
            traditionalDishes.map((dish) => (
              <div key={dish.id} className="traditional-dish-card">
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
            ))
          ) : (
            <p>No traditional dishes available.</p>
          )}
        </div>
      </div>

      {/* Popular Establishments Section */}
      <div className="mt-12">
        <h2 className="section-title">Popular Establishments</h2>
        <div className="establishments-grid">
          {filteredEstablishments.map((establishment) => (
            <EstablishmentCard key={establishment.id} establishment={establishment} />
          ))}
        </div>
      </div>
    </div>
  );
}
