import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Icon, IconName } from '../components/Icon';

const SizeSelector = ({ value, onChange }: {
  value: '16' | '24';
  onChange: (size: '16' | '24') => void;
}) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value as '16' | '24')}
    aria-label="Icon size"
  >
    <option value="16">16px</option>
    <option value="24">24px</option>
  </select>
);

interface IconObject {
  id: string;
  name: IconName;
}

interface InstallCommandProps {
  command: string;
}

// Extracted InstallCommand component
const InstallCommand = ({ command }: InstallCommandProps) => (
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

// Extracted SearchInput component
const SearchInput = ({ value, onChange }: { 
  value: string; 
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
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

function Home(): React.ReactElement {
  const [iconSize, setIconSize] = useState<'16' | '24'>('16');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [icons, setIcons] = useState<IconObject[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadIcons = async (): Promise<void> => {
      try {
        const response = await fetch('/data/icons.json');
        if (!response.ok) {
          throw new Error('Failed to fetch icons');
        }
        const data = await response.json();
        setIcons(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
        console.error('Failed to load icons:', error);
      } finally {
        setLoading(false);
      }
    };

    loadIcons();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

  return (
    <Layout>
      <InstallCommand command="yarn add metal-icons" />
      <div className="controls">
        <SearchInput value={searchTerm} onChange={handleSearch} />
        <SizeSelector value={iconSize} onChange={setIconSize} />
      </div>
      <div className="grid" role="grid">
        {filteredIcons.length > 0 ? (
          filteredIcons.map((icon) => (
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
    </Layout>
  );
}

export default Home;
