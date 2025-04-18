import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Icon, IconName } from '../components/Icon';

// Type definitions
type IconSize = '16' | '24';

interface IconObject {
  id: string;
  name: IconName;
}

interface SizeSelectorProps {
  value: IconSize;
  onChange: (size: IconSize) => void;
}

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface InstallCommandProps {
  command: string;
}

// UI Components
const SizeSelector: React.FC<SizeSelectorProps> = ({ value, onChange }) => (
  <div className="menu">
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as IconSize)}
      aria-label="Icon size"
    >
      <option value="16">16px</option>
      <option value="24">24px</option>
    </select>
  </div>
);

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => (
  <div className="filter">
    <input
      id="search"
      name="search"
      type="text"
      placeholder="Search icons..."
      value={value}
      onChange={onChange}
      aria-label="Search icons"
    />
  </div>
);

const InstallCommand: React.FC<InstallCommandProps> = ({ command }) => (
  <div className="install">
    <input
      readOnly
      type="text"
      value={command}
      onClick={(e) => e.currentTarget.select()}
      aria-label="Installation command"
    />
  </div>
);

const IconGrid: React.FC<{ icons: IconObject[]; iconSize: IconSize }> = ({ icons, iconSize }) => (
  <div className="grid" role="grid">
    {icons.length > 0 ? (
      icons.map((icon) => (
        <div className="tile" key={icon.id} role="gridcell">
          <Icon name={icon.name} size={iconSize} aria-hidden="true" />
          <p>{icon.name}</p>
        </div>
      ))
    ) : (
      <div className="empty" role="status">
        No icons found
      </div>
    )}
  </div>
);

// Main component
const Home: React.FC = () => {
  // State
  const [iconSize, setIconSize] = useState<IconSize>('16');
  const [searchTerm, setSearchTerm] = useState('');
  const [icons, setIcons] = useState<IconObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Data fetching
  useEffect(() => {
    const fetchIcons = async () => {
      try {
        const response = await fetch('/data/icons.json');
        if (!response.ok) {
          throw new Error('Failed to fetch icons');
        }
        const data = await response.json();
        setIcons(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred';
        setError(errorMessage);
        console.error('Failed to load icons:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchIcons();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  // Filter icons based on search term
  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Conditional rendering for loading and error states
  if (loading) {
    return (
      <Layout>
        <div role="status" aria-live="polite" className="loading-state">
          Loading icons...
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div role="alert" className="error-state">
          {error}
        </div>
      </Layout>
    );
  }

  // Main render
  return (
    <Layout>
      <InstallCommand command="yarn add metal-icons" />
      <div className="controls">
        <SearchInput value={searchTerm} onChange={handleSearch} />
        <SizeSelector value={iconSize} onChange={setIconSize} />
      </div>
      <IconGrid icons={filteredIcons} iconSize={iconSize} />
    </Layout>
  );
};

export default Home;
