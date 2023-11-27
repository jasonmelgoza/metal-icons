import * as Tabs from '@radix-ui/react-tabs'
import {
  Activity,
  Alarm,
  Alert,
  AlignBottom,
  AlignTop,
  Annotation,
  Archive,
  ArrowDown,
  ArrowDownLeft,
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpLeft,
  ArrowUpRight,
  At,
  Battery,
  Beaker,
  Bell,
  BookClosed,
  Bookmark,
  BookmarkPlus,
  BookOpen,
  Briefcase,
  Building,
  Bulb,
  Calendar,
  Camera,
  Cash,
  ChartBar,
  ChatBubbleRound,
  ChatBubbleRoundDots,
  ChatBubbleRoundText,
  ChatBubbleSquare,
  ChatBubbleSquareDots,
  ChatBubbleSquareText,
  ChatBubblesRound,
  ChatBubblesSquare,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsDown,
  ChevronsLeft,
  ChevronsRight,
  ChevronsUp,
  ChevronUp,
  CircleAdd,
  CircleAlert,
  CircleArrowDown,
  CircleArrowLeft,
  CircleArrowRight,
  CircleArrowUp,
  CircleCaretDown,
  CircleCaretLeft,
  CircleCaretRight,
  CircleCaretUp,
  CircleCheck,
  CircleClose,
  CircleHelp,
  CircleInfo,
  CircleMinus,
  Clipboard,
  ClipboardCheck,
  Clock,
  Close,
  CloudDownload,
  CloudUpload,
  Cog,
  Folder,
} from 'metal-icons'

import {
  Activity as OutlineActivity,
  Alarm as OutlineAlarm,
  Alert as OutlineAlert,
  AlignBottom as OutlineAlignBottom,
  AlignTop as OutlineAlignTop,
  Annotation as OutlineAnnotation,
  Archive as OutlineArchive,
  ArrowDown as OutlineArrowDown,
  ArrowDownLeft as OutlineArrowDownLeft,
  ArrowDownRight as OutlineArrowDownRight,
  ArrowLeft as OutlineArrowLeft,
  ArrowRight as OutlineArrowRight,
  ArrowUp as OutlineArrowUp,
  ArrowUpLeft as OutlineArrowUpLeft,
  ArrowUpRight as OutlineArrowUpRight,
  At as OutlineAt,
  Battery as OutlineBattery,
  Beaker as OutlineBeaker,
  Bell as OutlineBell,
  BookClosed as OutlineBookClosed,
  Bookmark as OutlineBookmark,
  BookmarkPlus as OutlineBookmarkPlus,
  BookOpen as OutlineBookOpen,
  Briefcase as OutlineBriefcase,
  Building as OutlineBuilding,
  Bulb as OutlineBulb,
  Calendar as OutlineCalendar,
  Camera as OutlineCamera,
  Cash as OutlineCash,
  ChartBar as OutlineChartBar,
  ChatBubbleRound as OutlineChatBubbleRound,
  ChatBubbleRoundDots as OutlineChatBubbleRoundDots,
  ChatBubbleRoundText as OutlineChatBubbleRoundText,
  ChatBubbleSquare as OutlineChatBubbleSquare,
  ChatBubbleSquareDots as OutlineChatBubbleSquareDots,
  ChatBubbleSquareText as OutlineChatBubbleSquareText,
  ChatBubblesRound as OutlineChatBubblesRound,
  ChatBubblesSquare as OutlineChatBubblesSquare,
  Check as OutlineCheck,
  ChevronDown as OutlineChevronDown,
  ChevronLeft as OutlineChevronLeft,
  ChevronRight as OutlineChevronRight,
  ChevronsDown as OutlineChevronsDown,
  ChevronsLeft as OutlineChevronsLeft,
  ChevronsRight as OutlineChevronsRight,
  ChevronsUp as OutlineChevronsUp,
  ChevronUp as OutlineChevronUp,
  CircleAdd as OutlineCircleAdd,
  CircleAlert as OutlineCircleAlert,
  CircleArrowDown as OutlineCircleArrowDown,
  CircleArrowLeft as OutlineCircleArrowLeft,
  CircleArrowRight as OutlineCircleArrowRight,
  CircleArrowUp as OutlineCircleArrowUp,
  CircleCaretDown as OutlineCircleCaretDown,
  CircleCaretLeft as OutlineCircleCaretLeft,
  CircleCaretRight as OutlineCircleCaretRight,
  CircleCaretUp as OutlineCircleCaretUp,
  CircleCheck as OutlineCircleCheck,
  CircleClose as OutlineCircleClose,
  CircleHelp as OutlineCircleHelp,
  CircleInfo as OutlineCircleInfo,
  CircleMinus as OutlineCircleMinus,
  Clipboard as OutlineClipboard,
  ClipboardCheck as OutlineClipboardCheck,
  Clock as OutlineClock,
  Close as OutlineClose,
  CloudDownload as OutlineCloudDownload,
  CloudUpload as OutlineCloudUpload,
  Cog as OutlineCog,
  Folder as OutlineFolder,
} from 'metal-icons/16/outline'

import styles from './Icons.module.css'

export default function Icons({}) {
  return (
    <>
      <Tabs.Root className={styles.TabsRoot} defaultValue="tab1">
        <Tabs.List
          className={styles.TabsList}
          aria-label="Choose an icon style to view"
        >
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Solid
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            Outline
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="tab1">
          <div className={styles.grid}>
            <Activity />
            <Alarm />
            <Alert />
            <AlignBottom />
            <AlignTop />
            <Annotation />
            <Archive />
            <ArrowDown />
            <ArrowDownLeft />
            <ArrowDownRight />
            <ArrowLeft />
            <ArrowRight />
            <ArrowUp />
            <ArrowUpLeft />
            <ArrowUpRight />
            <At />
            <Battery />
            <Beaker />
            <Bell />
            <BookClosed />
            <Bookmark />
            <BookmarkPlus />
            <BookOpen />
            <Briefcase />
            <Building />
            <Bulb />
            <Calendar />
            <Camera />
            <Cash />
            <ChartBar />
            <ChatBubbleRound />
            <ChatBubbleRoundDots />
            <ChatBubbleRoundText />
            <ChatBubbleSquare />
            <ChatBubbleSquareDots />
            <ChatBubbleSquareText />
            <ChatBubblesRound />
            <ChatBubblesSquare />
            <Check />
            <ChevronDown />
            <ChevronLeft />
            <ChevronRight />
            <ChevronUp />
            <ChevronsDown />
            <ChevronsLeft />
            <ChevronsRight />
            <ChevronsUp />
            <CircleAdd />
            <CircleAlert />
            <CircleArrowDown />
            <CircleArrowLeft />
            <CircleArrowRight />
            <CircleArrowUp />
            <CircleCaretDown />
            <CircleCaretLeft />
            <CircleCaretRight />
            <CircleCaretUp />
            <CircleCheck />
            <CircleClose />
            <CircleHelp />
            <CircleInfo />
            <CircleMinus />
            <Clipboard />
            <ClipboardCheck />
            <Clock />
            <Close />
            <CloudDownload />
            <CloudUpload />
            <Cog />
            <Folder />
          </div>
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="tab2">
          <div className={styles.grid}>
            <OutlineActivity />
            <OutlineAlarm />
            <OutlineAlert />
            <OutlineAlignBottom />
            <OutlineAlignTop />
            <OutlineAnnotation />
            <OutlineArchive />
            <OutlineArrowDown />
            <OutlineArrowDownLeft />
            <OutlineArrowDownRight />
            <OutlineArrowLeft />
            <OutlineArrowRight />
            <OutlineArrowUp />
            <OutlineArrowUpLeft />
            <OutlineArrowUpRight />
            <OutlineAt />
            <OutlineBattery />
            <OutlineBeaker />
            <OutlineBell />
            <OutlineBookClosed />
            <OutlineBookmark />
            <OutlineBookmarkPlus />
            <OutlineBookOpen />
            <OutlineBriefcase />
            <OutlineBuilding />
            <OutlineBulb />
            <OutlineCalendar />
            <OutlineCamera />
            <OutlineCash />
            <OutlineChartBar />
            <OutlineChatBubbleRound />
            <OutlineChatBubbleRoundDots />
            <OutlineChatBubbleRoundText />
            <OutlineChatBubbleSquare />
            <OutlineChatBubbleSquareDots />
            <OutlineChatBubbleSquareText />
            <OutlineChatBubblesRound />
            <OutlineChatBubblesSquare />
            <OutlineCheck />
            <OutlineChevronDown />
            <OutlineChevronLeft />
            <OutlineChevronRight />
            <OutlineChevronUp />
            <OutlineChevronsDown />
            <OutlineChevronsLeft />
            <OutlineChevronsRight />
            <OutlineChevronsUp />
            <OutlineCircleAdd />
            <OutlineCircleAlert />
            <OutlineCircleArrowDown />
            <OutlineCircleArrowLeft />
            <OutlineCircleArrowRight />
            <OutlineCircleArrowUp />
            <OutlineCircleCaretDown />
            <OutlineCircleCaretLeft />
            <OutlineCircleCaretRight />
            <OutlineCircleCaretUp />
            <OutlineCircleCheck />
            <OutlineCircleClose />
            <OutlineCircleHelp />
            <OutlineCircleInfo />
            <OutlineCircleMinus />
            <OutlineClipboard />
            <OutlineClipboardCheck />
            <OutlineClock />
            <OutlineClose />
            <OutlineCloudDownload />
            <OutlineCloudUpload />
            <OutlineCog />
            <OutlineFolder />
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </>
  )
}
