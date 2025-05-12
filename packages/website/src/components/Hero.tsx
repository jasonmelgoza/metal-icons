"use client"

import * as motion from "motion/react-client"
import { useEffect, useState, useMemo, useCallback } from "react"
import {
  ActivityIcon,
  AlarmIcon,
  AlertIcon,
  AnnotationIcon,
  ArchiveIcon,
  AtIcon,
  BatteryIcon,
  BeakerIcon,
  BellIcon,
  BookClosedIcon,
  BookmarkIcon,
  BriefcaseIcon,
  BuildingIcon,
  BulbIcon,
  CalendarIcon,
  CameraIcon,
  CashIcon,
  ChartBarIcon,
  ChatBubbleRoundIcon,
  ClockIcon,
  CloudDownloadIcon,
  CogIcon,
  CreditCardIcon,
  DashboardIcon,
  DocumentIcon,
  DownloadIcon,
  FlagIcon,
  FolderIcon,
  GlobeIcon,
  HeartIcon,
  InboxIcon,
  LinkIcon,
  LocationIcon,
  LockIcon,
  MailIcon,
  SearchIcon,
} from "metal-icons/16/solid"

type IconType = 'activity' | 'alarm' | 'alert' | 'annotation' | 'archive' | 'at' | 'battery' | 'beaker' | 'bell' | 'book-closed' | 'bookmark' | 'briefcase' | 'building' | 'bulb' | 'calendar' | 'camera' | 'cash' | 'chart-bar' | 'chat-bubble-round' | 'clock' | 'cloud-download' | 'cog' | 'credit-card' | 'dashboard' | 'document' | 'download' | 'flag' | 'folder' | 'globe' | 'heart' | 'inbox' | 'link' | 'location' | 'lock' | 'mail' | 'search'

export default function Hero() {
  const [order, setOrder] = useState(initialOrder)
  const [selectedIconId, setSelectedIconId] = useState<string | null>(null)

  const iconMap = useMemo(() => ({
    activity: ActivityIcon,
    alarm: AlarmIcon,
    alert: AlertIcon,
    annotation: AnnotationIcon,
    archive: ArchiveIcon,
    at: AtIcon,
    battery: BatteryIcon,
    beaker: BeakerIcon,
    bell: BellIcon,
    'book-closed': BookClosedIcon,
    bookmark: BookmarkIcon,
    briefcase: BriefcaseIcon,
    building: BuildingIcon,
    bulb: BulbIcon,
    calendar: CalendarIcon,
    camera: CameraIcon,
    cash: CashIcon,
    'chart-bar': ChartBarIcon,
    'chat-bubble-round': ChatBubbleRoundIcon,
    clock: ClockIcon,
    'cloud-download': CloudDownloadIcon,
    cog: CogIcon,
    'credit-card': CreditCardIcon,
    dashboard: DashboardIcon,
    document: DocumentIcon,
    download: DownloadIcon,
    flag: FlagIcon,
    folder: FolderIcon,
    globe: GlobeIcon,
    heart: HeartIcon,
    inbox: InboxIcon,
    link: LinkIcon,
    location: LocationIcon,
    lock: LockIcon,
    mail: MailIcon,
    search: SearchIcon,
  }), [])

  // Memoize the shuffle function
  const shuffleIcons = useCallback(() => {
    const numIconsToShuffle = 3;
    const newOrder = [...order];
    
    // Get unique random indices
    const indices = new Set<number>();
    while (indices.size < numIconsToShuffle) {
      indices.add(Math.floor(Math.random() * order.length));
    }
    const uniqueIndices = Array.from(indices);
    
    // Get the items to shuffle
    const itemsToShuffle = uniqueIndices.map(i => newOrder[i]);
    
    // Shuffle the items
    for (let i = itemsToShuffle.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [itemsToShuffle[i], itemsToShuffle[j]] = [itemsToShuffle[j], itemsToShuffle[i]];
    }
    
    // Put the shuffled items back
    uniqueIndices.forEach((originalIndex, i) => {
      newOrder[originalIndex] = itemsToShuffle[i];
    });
    
    setOrder(newOrder);
  }, [order]);

  // Effect for shuffling icons
  useEffect(() => {
    const shuffleTimeout = setTimeout(shuffleIcons, 6000);
    return () => clearTimeout(shuffleTimeout);
  }, [shuffleIcons]);

  // Memoize the random icon selection
  const selectRandomIcon = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * order.length)
    setSelectedIconId(order[randomIndex].id)
  }, [order]);

  // Effect for rotating a random icon
  useEffect(() => {
    if (selectedIconId === null) {
      selectRandomIcon()
    }

    const rotationTimeout = setTimeout(selectRandomIcon, 4000)
    return () => clearTimeout(rotationTimeout)
  }, [order, selectedIconId, selectRandomIcon])

  // Memoize the icon rendering function
  const renderIcon = useCallback((iconType: IconType) => {
    const Icon = iconMap[iconType]
    return Icon ? <Icon /> : <FolderIcon />
  }, [iconMap])

  // Memoize the list of icons
  const iconList = useMemo(() => (
    order.map((item) => (
      <motion.li key={item.id} layout transition={spring} style={{ ...itemStyle }}>
        <motion.div
          animate={selectedIconId === item.id ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}
        >
          {renderIcon(item.icon)}
        </motion.div>
      </motion.li>
    ))
  ), [order, selectedIconId, renderIcon])

  return (
    <ul style={container}>
      {iconList}
    </ul>
  )
}

const initialOrder: { id: string; icon: IconType }[] = [
  { id: "item1", icon: "activity" },
  { id: "item2", icon: "alarm" },
  { id: "item3", icon: "alert" },
  { id: "item4", icon: "annotation" },
  { id: "item5", icon: "archive" },
  { id: "item6", icon: "at" },
  { id: "item7", icon: "battery" },
  { id: "item8", icon: "beaker" },
  { id: "item9", icon: "bell" },
  { id: "item10", icon: "book-closed" },
  { id: "item11", icon: "bookmark" },
  { id: "item12", icon: "briefcase" },
  { id: "item13", icon: "building" },
  { id: "item14", icon: "bulb" },
  { id: "item15", icon: "calendar" },
  { id: "item16", icon: "camera" },
  { id: "item17", icon: "cash" },
  { id: "item18", icon: "chart-bar" },
  { id: "item19", icon: "chat-bubble-round" },
  { id: "item20", icon: "clock" },
  { id: "item21", icon: "cloud-download" },
  { id: "item22", icon: "cog" },
  { id: "item23", icon: "credit-card" },
  { id: "item24", icon: "dashboard" },
  { id: "item25", icon: "document" },
  { id: "item26", icon: "download" },
  { id: "item27", icon: "flag" },
  { id: "item28", icon: "folder" },
  { id: "item29", icon: "globe" },
  { id: "item30", icon: "heart" },
  { id: "item31", icon: "inbox" },
  { id: "item32", icon: "link" },
  { id: "item33", icon: "location" },
  { id: "item34", icon: "lock" },
  { id: "item35", icon: "mail" },
  { id: "item36", icon: "search" },
]

/**
 * ==============   Styles   ================
 */

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
}

const container = {
  listStyle: "none",
  padding: 0,
  margin: "0 0 4rem 0",
  position: "relative" as const,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(16px, 1fr))",
  gap: 32,
  width: "100%",
  maxWidth: 400,
  justifyContent: "center",
}

const itemStyle = {
  width: 16,
  height: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}
