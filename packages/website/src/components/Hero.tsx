"use client"

import * as motion from "motion/react-client"
import { useEffect, useState } from "react"
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

export default function Hero() {
  const [order, setOrder] = useState(initialOrder)
  const [selectedIconId, setSelectedIconId] = useState(null)

  // Effect for shuffling icons
  useEffect(() => {
    const shuffleTimeout = setTimeout(() => setOrder(shuffle([...order])), 6000)
    return () => clearTimeout(shuffleTimeout)
  }, [order])

  // Effect for rotating a random icon
  useEffect(() => {
    const selectRandomIcon = () => {
      const randomIndex = Math.floor(Math.random() * order.length)
      setSelectedIconId(order[randomIndex].id)
    }

    // Select an icon immediately on first render
    if (selectedIconId === null) {
      selectRandomIcon()
    }

    const rotationTimeout = setTimeout(() => {
      selectRandomIcon()
    }, 4000)

    return () => clearTimeout(rotationTimeout)
  }, [order, selectedIconId])

  // Function to render the correct icon based on the icon type
  const renderIcon = (iconType) => {
    switch (iconType) {
      case "activity":
        return <ActivityIcon />
      case "alarm":
        return <AlarmIcon />
      case "alert":
        return <AlertIcon />
      case "annotation":
        return <AnnotationIcon />
      case "archive":
        return <ArchiveIcon />
      case "at":
        return <AtIcon />
      case "battery":
        return <BatteryIcon />
      case "beaker":
        return <BeakerIcon />
      case "bell":
        return <BellIcon />
      case "book-closed":
        return <BookClosedIcon />
      case "bookmark":
        return <BookmarkIcon />
      case "briefcase":
        return <BriefcaseIcon />
      case "building":
        return <BuildingIcon />
      case "bulb":
        return <BulbIcon />
      case "calendar":
        return <CalendarIcon />
      case "camera":
        return <CameraIcon />
      case "cash":
        return <CashIcon />
      case "chart-bar":
        return <ChartBarIcon />
      case "chat-bubble-round":
        return <ChatBubbleRoundIcon />
      case "clock":
        return <ClockIcon />
      case "cloud-download":
        return <CloudDownloadIcon />
      case "cog":
        return <CogIcon />
      case "credit-card":
        return <CreditCardIcon />
      case "dashboard":
        return <DashboardIcon />
      case "document":
        return <DocumentIcon />
      case "download":
        return <DownloadIcon />
      case "flag":
        return <FlagIcon />
      case "folder":
        return <FolderIcon />
      case "globe":
        return <GlobeIcon />
      case "heart":
        return <HeartIcon />
      case "inbox":
        return <InboxIcon />
      case "link":
        return <LinkIcon />
      case "location":
        return <LocationIcon />
      case "lock":
        return <LockIcon />
      case "mail":
        return <MailIcon />
      case "search":
        return <SearchIcon />
      default:
        return <FolderIcon />
    }
  }

  return (
    <ul style={container}>
      {order.map((item) => (
        <motion.li key={item.id} layout transition={spring} style={{ ...itemStyle }}>
          <motion.div
            animate={selectedIconId === item.id ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}
          >
            {renderIcon(item.icon)}
          </motion.div>
        </motion.li>
      ))}
    </ul>
  )
}

const initialOrder = [
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
 * ==============   Utils   ================
 */
function shuffle([...array]) {
  return array.sort(() => Math.random() - 0.05)
}

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
  margin: 0,
  position: "relative",
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
