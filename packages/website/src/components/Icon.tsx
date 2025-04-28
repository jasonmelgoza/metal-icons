import * as Icons16Solid from 'metal-icons/16/solid';
import * as Icons24Solid from 'metal-icons/24/solid';
import * as Icons16Outline from 'metal-icons/16/outline';
import * as Icons24Outline from 'metal-icons/24/outline';
import { ReactElement, useMemo } from 'react';

// Constants
const ICON_SIZES = ['16', '24'] as const;
const ICON_VARIANTS = ['solid', 'outline'] as const;
const DEFAULT_SIZE = '16';
const DEFAULT_VARIANT = 'solid';
const ICON_SUFFIX = 'Icon';

// Types
type IconSize = typeof ICON_SIZES[number];
type IconVariant = typeof ICON_VARIANTS[number];
type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;
export type IconName = keyof typeof Icons16Solid;

// Interfaces
interface IconSetType {
  [key: string]: IconComponent;
}

interface IconSetsType {
  [size: string]: {
    [variant: string]: IconSetType;
  };
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Name of the icon to render */
  name: IconName;
  /** Size variant of the icon (16px or 24px) */
  size?: IconSize;
  /** Style variant of the icon (solid or outline) */
  variant?: IconVariant;
}

// Icon set configuration
const IconSets: IconSetsType = {
  '16': {
    'solid': Icons16Solid,
    'outline': Icons16Outline,
  },
  '24': {
    'solid': Icons24Solid,
    'outline': Icons24Outline,
  }
};

/**
 * Formats a kebab-case string to PascalCase
 * @example arrow-left -> ArrowLeft
 */
const formatIconName = (name: string): string => {
  return name
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
};

/**
 * Icon component that renders SVG icons from the metal-icons library
 */
export function Icon({ 
  name, 
  size = DEFAULT_SIZE,
  variant = DEFAULT_VARIANT,
  ...props 
}: IconProps): ReactElement | null {
  const IconComponent = useMemo(() => {
    try {
      if (!ICON_SIZES.includes(size)) {
        console.warn(`Invalid icon size: ${size}. Using default size: ${DEFAULT_SIZE}`);
        size = DEFAULT_SIZE;
      }

      if (!ICON_VARIANTS.includes(variant)) {
        console.warn(`Invalid icon variant: ${variant}. Using default variant: ${DEFAULT_VARIANT}`);
        variant = DEFAULT_VARIANT;
      }

      const IconSet = IconSets[size][variant];
      const formattedName = formatIconName(name);
      return IconSet[`${formattedName}${ICON_SUFFIX}`] as IconComponent;
    } catch (error) {
      console.error(`Failed to load icon: ${name}`, error);
      return null;
    }
  }, [name, size, variant]);

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props} />;
}
