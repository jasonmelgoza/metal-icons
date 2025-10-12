import React, { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Layout } from '../components/Layout';
import { Icon, IconName } from '../components/Icon';
import { ChevronDownIcon, SearchIcon } from 'metal-icons/16/solid';
import Styles from '../styles/App.module.css';

// Type definitions
type IconSize = '16' | '24';
type IconVariant = 'solid' | 'outline';

interface IconObject {
  id: string;
  name: IconName;
}

interface SizeSelectorProps {
  value: IconSize;
  onChange: (value: IconSize) => void;
}

interface VariantSelectorProps {
  value: IconVariant;
  onChange: (value: IconVariant) => void;
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
  <div className={Styles.size}>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as IconSize)}
      aria-label="Icon size"
    >
      <option value="16">16px</option>
      <option value="24">24px</option>
    </select>
    <ChevronDownIcon className="icon-chevron" aria-hidden="true" />
  </div>
);

const VariantSelector: React.FC<VariantSelectorProps> = ({ value, onChange }) => (
  <div className={Styles.variant}>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as IconVariant)}
      aria-label="Icon variant"
    >
      <option value="solid">Solid</option>
      <option value="outline">Outline</option>
    </select>
    <ChevronDownIcon className="icon-chevron" aria-hidden="true" />
  </div>
);

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => (
  <div className={Styles.search}>
    <input
      id="search"
      name="search"
      type="text"
      placeholder="Search icons..."
      value={value}
      onChange={onChange}
      aria-label="Search icons"
    />
    <SearchIcon className="icon-search" aria-hidden="true" />
  </div>
);

const InstallCommand: React.FC<InstallCommandProps> = ({ command }) => (
  <div className={Styles.install}>
    <input
      readOnly
      type="text"
      value={command}
      onClick={(e) => e.currentTarget.select()}
      aria-label="Installation command"
    />
  </div>
);

// Update IconGrid to support the variant prop and click handler
const IconGrid: React.FC<{ 
  icons: IconObject[]; 
  iconSize: IconSize;
  iconVariant: IconVariant;
  onIconClick: (iconName: IconName) => void;
}> = ({ icons, iconSize, iconVariant, onIconClick }) => (
  <div className={Styles.grid} role="grid">
    {icons.length > 0 ? (
      icons.map((icon) => (
        <div 
          className={Styles.tile} 
          key={icon.id} 
          role="gridcell"
          onClick={() => onIconClick(icon.name)}
        >
          <Icon name={icon.name} size={iconSize} variant={iconVariant} aria-hidden="true" />
          <p>{icon.name}</p>
        </div>
      ))
    ) : (
      <div className={Styles.empty} role="status">
        No icons found
      </div>
    )}
  </div>
);

// Main component
const Home: React.FC = () => {
  // Updated state to include variant
  const [iconSize, setIconSize] = useState<IconSize>('16');
  const [iconVariant, setIconVariant] = useState<IconVariant>('solid');
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

  const handleIconClick = async (iconName: IconName): Promise<void> => {
    try {
      // Fetch the SVG file from the optimized directory
      const svgPath = `/optimized/${iconSize}/${iconVariant}/${iconName}.svg`;
      const response = await fetch(svgPath);
      
      if (!response.ok) {
        throw new Error('Failed to fetch SVG');
      }
      
      const svgContent = await response.text();
      
      // Copy to clipboard
      await navigator.clipboard.writeText(svgContent);
      
      // Show toast with icon and message
      toast(
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>SVG copied to clipboard</span>
          <Icon name={iconName} size={iconSize} variant={iconVariant} />
        </div>
      );
    } catch (error) {
      console.error('Failed to copy icon:', error);
      toast.error('Failed to copy SVG');
    }
  };

  // Filter icons based on search term
  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Conditional rendering for loading and error states
  if (loading) {
    return (
      <Layout>
        <div role="status" aria-live="polite" className={Styles.loading}>
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
      <div className={Styles.controls}>
        <SearchInput value={searchTerm} onChange={handleSearch} />
        <div className={Styles.options}>
          <SizeSelector value={iconSize} onChange={setIconSize} />
          <VariantSelector value={iconVariant} onChange={setIconVariant} />
        </div>
      </div>
      <IconGrid 
        icons={filteredIcons} 
        iconSize={iconSize} 
        iconVariant={iconVariant} 
        onIconClick={handleIconClick}
      />
    </Layout>
  );
};

export default Home;
