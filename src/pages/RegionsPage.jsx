import { useRegionsStore } from '../store/regionsStore';
import { RegionCard } from '../components/regions/RegionCard';
import { Globe } from 'lucide-react';
import '../style/RegionPage.css';

export function RegionsPage() {
  const regions = useRegionsStore((state) => state.regions);

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="header-icon">
          <Globe className="globe-icon" />
        </div>
        <h1 className="page-title">Explore World Cuisines</h1>
        <p className="page-description">
          Discover culinary traditions from different parts of the world
        </p>
      </div>

      <div className="regions-grid">
        {regions.map((region) => (
          <RegionCard key={region.id} region={region} />
        ))}
      </div>
    </div>
  );
}
