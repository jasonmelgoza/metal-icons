import * as Icons16 from 'metal-icons/16/solid';
import * as Icons24 from 'metal-icons/24/solid';
import { ReactElement, useMemo } from 'react';

// Constants
const ICON_SIZES = ['16', '24'] as const;
const DEFAULT_SIZE = '16';
const ICON_SUFFIX = 'Icon';

// Types
type IconSize = typeof ICON_SIZES[number];
type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;
export type IconName = keyof typeof Icons16;

// Interfaces
interface IconSetType {
  [key: string]: IconComponent;
}

interface IconSetsType {
  [size: string]: IconSetType;
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  /** Name of the icon to render */
  name: IconName;
  /** Size variant of the icon (16px or 24px) */
  size?: IconSize;
}

// Icon set configuration
const IconSets: IconSetsType = {
  '16': Icons16,
  '24': Icons24,
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
  ...props 
}: IconProps): ReactElement | null {
  const IconComponent = useMemo(() => {
    try {
      if (!ICON_SIZES.includes(size)) {
        console.warn(`Invalid icon size: ${size}. Using default size: ${DEFAULT_SIZE}`);
        size = DEFAULT_SIZE;
      }

      const IconSet = IconSets[size];
      const formattedName = formatIconName(name);
      return IconSet[`${formattedName}${ICON_SUFFIX}`] as IconComponent;
    } catch (error) {
      console.error(`Failed to load icon: ${name}`, error);
      return null;
    }
  }, [name, size]);

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props} />;
}
