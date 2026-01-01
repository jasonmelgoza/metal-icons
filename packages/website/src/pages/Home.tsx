import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { toast } from 'sonner'
import { Layout } from '../components/Layout'
import { Icon, IconName } from '../components/Icon'
import { ChevronDownIcon, SearchIcon } from 'metal-icons/16/solid'
import { DuplicateIcon, CircleCloseIcon } from 'metal-icons/16/outline'
import Styles from '../styles/App.module.css'

type IconSize = '16' | '24'
type IconVariant = 'solid' | 'outline'

interface IconObject {
  id: string
  name: IconName
}

interface SizeSelectorProps {
  value: IconSize
  onChange: (value: IconSize) => void
}

interface VariantSelectorProps {
  value: IconVariant
  onChange: (value: IconVariant) => void
}

interface SearchInputProps {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClear: () => void
  iconCount?: number
}

interface InstallCommandProps {
  command: string
}

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
)

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
)

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, onClear, iconCount }) => {
  const hasValue = value.length > 0

  const handleClear = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    onClear()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleClear(event)
    }
  }

  const formatCount = (count: number | undefined): string => {
    if (count === undefined) return ''
    return count.toLocaleString()
  }

  const placeholder = iconCount !== undefined 
    ? `Search ${formatCount(iconCount)} icons...`
    : 'Search icons...'

  return (
    <div className={Styles.search}>
      <input
        id="search"
        name="search"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label="Search icons"
        className={hasValue ? Styles.searchInputWithClear : undefined}
      />
      <SearchIcon className="icon-search" aria-hidden="true" />
      {hasValue && (
        <button
          type="button"
          onClick={handleClear}
          onKeyDown={handleKeyDown}
          aria-label="Clear search"
          className={Styles.searchClear}
        >
          <CircleCloseIcon className="icon-clear" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

/**
 * Displays an installation command with copy functionality
 */
const InstallCommand: React.FC<InstallCommandProps> = ({ command }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command)
    } catch (error) {
      console.error('Failed to copy command:', error)
      toast.error('Failed to copy command')
    }
  }

  return (
    <div className={Styles.install}>
      <div className={Styles.installBox}>
        <span className={Styles.installPrefix}>$</span>
        <input
          readOnly
          type="text"
          value={command}
          onClick={(e) => e.currentTarget.select()}
          aria-label="Installation command"
          className={Styles.installInput}
        />
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy installation command"
          className={Styles.installButton}
        >
          <DuplicateIcon className="icon-duplicate" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

const IconGrid: React.FC<{
  icons: IconObject[]
  iconSize: IconSize
  iconVariant: IconVariant
  onIconClick: (iconName: IconName) => void
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
)

/**
 * Main page component displaying the icon library browser
 * Supports filtering, size/variant selection, and copying icons as SVG
 */
const Home: React.FC = () => {
  const [iconSize, setIconSize] = useState<IconSize>('16')
  const [iconVariant, setIconVariant] = useState<IconVariant>('solid')
  const [searchTerm, setSearchTerm] = useState('')
  const [icons, setIcons] = useState<IconObject[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchIcons = async () => {
      try {
        const response = await fetch('/data/icons.json')
        if (!response.ok) {
          throw new Error('Failed to fetch icons')
        }
        const data = await response.json()
        setIcons(data)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred'
        setError(errorMessage)
        console.error('Failed to load icons:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchIcons()
  }, [])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value)
  }

  const handleClearSearch = (): void => {
    setSearchTerm('')
  }

  /**
   * Copies the selected icon's SVG markup to clipboard
   * Renders the icon off-screen to extract the raw SVG markup, then cleans up
   */
  const handleIconClick = async (iconName: IconName): Promise<void> => {
    const container = document.createElement('div')
    container.style.position = 'absolute'
    container.style.left = '-9999px'
    document.body.appendChild(container)

    const root = ReactDOM.createRoot(container)
    
    try {
      root.render(<Icon name={iconName} size={iconSize} variant={iconVariant} />)
      
      // Allow React to complete the render cycle
      await new Promise(resolve => setTimeout(resolve, 0))

      const svgElement = container.querySelector('svg')
      if (!svgElement) {
        throw new Error('SVG element not found')
      }

      await navigator.clipboard.writeText(svgElement.outerHTML)

      toast(
        <>
          <span>SVG copied to clipboard</span>
          <Icon name={iconName} size={iconSize} variant={iconVariant} />
        </>
      )
    } catch (error) {
      console.error('Failed to copy icon:', error)
      toast.error('Failed to copy SVG')
    } finally {
      root.unmount()
      document.body.removeChild(container)
    }
  }

  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (loading) {
    return (
      <Layout>
        <div role="status" aria-live="polite" className={Styles.loading}>
          Loading icons...
        </div>
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <div role="alert" className="error-state">
          {error}
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <InstallCommand command="npm i metal-icons" />
      <div className={Styles.controls}>
        <SearchInput 
          value={searchTerm} 
          onChange={handleSearch} 
          onClear={handleClearSearch}
          iconCount={icons.length}
        />
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
  )
}

export default Home
