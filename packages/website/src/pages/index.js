// Import necessary modules and components
import fs from 'fs'
import path from 'path'
import { useState } from 'react'
import { Layout } from '@/components'
import {
  ActivityIcon,
  AlarmIcon,
  AlertIcon,
  AlignBottomIcon,
  AlignTopIcon,
  AnnotationIcon,
  ArchiveIcon,
  ArrowDownIcon,
  ArrowDownLeftIcon,
  ArrowDownRightIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  ArrowUpLeftIcon,
  ArrowUpRightIcon,
  AtIcon,
  BatteryIcon,
  BeakerIcon,
  BellIcon,
  BookClosedIcon,
  BookOpenIcon,
  BookmarkPlusIcon,
  BookmarkIcon,
  BriefcaseIcon,
  BuildingIcon,
  BulbIcon,
  CalendarIcon,
  CameraIcon,
  CashIcon,
  ChartBarIcon,
  ChatBubbleRoundDotsIcon,
  ChatBubbleRoundTextIcon,
  ChatBubbleRoundIcon,
  ChatBubbleSquareDotsIcon,
  ChatBubbleSquareTextIcon,
  ChatBubbleSquareIcon,
  ChatBubblesRoundIcon,
  ChatBubblesSquareIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronsDownIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ChevronsUpIcon,
  CircleAddIcon,
  CircleAlertIcon,
  CircleArrowDownIcon,
  CircleArrowLeftIcon,
  CircleArrowRightIcon,
  CircleArrowUpIcon,
  CircleCaretDownIcon,
  CircleCaretLeftIcon,
  CircleCaretRightIcon,
  CircleCaretUpIcon,
  CircleCheckIcon,
  CircleCloseIcon,
  CircleHelpIcon,
  CircleInfoIcon,
  CircleMinusIcon,
  ClipboardCheckIcon,
  ClipboardIcon,
  ClockIcon,
  CloseIcon,
  CloudDownloadIcon,
  CloudUploadIcon,
  CogIcon,
  ColumnsIcon,
  CornerDownLeftIcon,
  CornerDownRightIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  DashboardIcon,
  DisabledIcon,
  DocumentMinusIcon,
  DocumentPlusIcon,
  DocumentIcon,
  DocumentsIcon,
  DownloadIcon,
  DuplicateIcon,
  EditBoxIcon,
  ExternalLinkIcon,
  FilterIcon,
  FlagIcon,
  FloppyIcon,
  FolderMinusIcon,
  FolderPlusIcon,
  FolderIcon,
  GlobeIcon,
  GridIcon,
  HashIcon,
  HeadphonesIcon,
  HeartIcon,
  InboxIcon,
  LayersIcon,
  LayoutColumnsIcon,
  LayoutRowsIcon,
  LinkIcon,
  ListIcon,
  LocationIcon,
  LockIcon,
  LoginIcon,
  LogoutIcon,
  MailIcon,
  MaximizeIcon,
  MinimizeIcon,
  MonitorIcon,
  MoreAltIcon,
  MoreIcon,
  PaperclipIcon,
  PenLineIcon,
  PenIcon,
  PhoneIcon,
  PinIcon,
  PlusIcon,
  RedirectIcon,
  ReloadIcon,
  RepeatIcon,
  RowsIcon,
  SearchIcon,
  SendIcon,
  ShareIcon,
  ShieldAlertIcon,
  ShieldCheckIcon,
  ShieldXIcon,
  ShieldIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  SlashIcon,
  SliderIcon,
  SmartphoneIcon,
  StarIcon,
  SwapHorizontalIcon,
  SwapVerticalIcon,
  TabletIcon,
  TagIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
  TextIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  TrashIcon,
  UploadIcon,
  UserIcon,
  ViewIcon,
  ZoomInIcon,
} from 'metal-icons/16/solid'
import styles from '@/styles/Metal.module.css'

// Mapping of icon names to their corresponding components
// Currently, all icons are mapped to the same FolderIcon for demonstration purposes
const IconMap = {
  activity: ActivityIcon,
  alarm: AlarmIcon,
  alert: AlertIcon,
  'align-bottom': AlignBottomIcon,
  'align-top': AlignTopIcon,
  annotation: AnnotationIcon,
  archive: ArchiveIcon,
  'arrow-down': ArrowDownIcon,
  'arrow-down-left': ArrowDownLeftIcon,
  'arrow-down-right': ArrowDownRightIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-up': ArrowUpIcon,
  'arrow-up-left': ArrowUpLeftIcon,
  'arrow-up-right': ArrowUpRightIcon,
  at: AtIcon,
  battery: BatteryIcon,
  beaker: BeakerIcon,
  bell: BellIcon,
  'book-closed': BookClosedIcon,
  'book-open': BookOpenIcon,
  'bookmark-plus': BookmarkPlusIcon,
  bookmark: BookmarkIcon,
  briefcase: BriefcaseIcon,
  building: BuildingIcon,
  bulb: BulbIcon,
  calendar: CalendarIcon,
  camera: CameraIcon,
  cash: CashIcon,
  'chart-bar': ChartBarIcon,
  'chat-bubble-round-dots': ChatBubbleRoundDotsIcon,
  'chat-bubble-round-text': ChatBubbleRoundTextIcon,
  'chat-bubble-round': ChatBubbleRoundIcon,
  'chat-bubble-square-dots': ChatBubbleSquareDotsIcon,
  'chat-bubble-square-text': ChatBubbleSquareTextIcon,
  'chat-bubble-square': ChatBubbleSquareIcon,
  'chat-bubbles-round': ChatBubblesRoundIcon,
  'chat-bubbles-square': ChatBubblesSquareIcon,
  check: CheckIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  'chevron-up': ChevronUpIcon,
  'chevrons-down': ChevronsDownIcon,
  'chevrons-left': ChevronsLeftIcon,
  'chevrons-right': ChevronsRightIcon,
  'chevrons-up': ChevronsUpIcon,
  'circle-add': CircleAddIcon,
  'circle-alert': CircleAlertIcon,
  'circle-arrow-down': CircleArrowDownIcon,
  'circle-arrow-left': CircleArrowLeftIcon,
  'circle-arrow-right': CircleArrowRightIcon,
  'circle-arrow-up': CircleArrowUpIcon,
  'circle-caret-down': CircleCaretDownIcon,
  'circle-caret-left': CircleCaretLeftIcon,
  'circle-caret-right': CircleCaretRightIcon,
  'circle-caret-up': CircleCaretUpIcon,
  'circle-check': CircleCheckIcon,
  'circle-close': CircleCloseIcon,
  'circle-help': CircleHelpIcon,
  'circle-info': CircleInfoIcon,
  'circle-minus': CircleMinusIcon,
  'clipboard-check': ClipboardCheckIcon,
  clipboard: ClipboardIcon,
  clock: ClockIcon,
  close: CloseIcon,
  'cloud-download': CloudDownloadIcon,
  'cloud-upload': CloudUploadIcon,
  cog: CogIcon,
  columns: ColumnsIcon,
  "corner-down-left": CornerDownLeftIcon,
  "corner-down-right": CornerDownRightIcon,
  "credit-card": CreditCardIcon,
  "currency-dollar": CurrencyDollarIcon,
  dashboard: DashboardIcon,
  disabled: DisabledIcon,
  "document-minus": DocumentMinusIcon,
  "document-plus": DocumentPlusIcon,
  document: DocumentIcon,
  documents: DocumentsIcon,
  download: DownloadIcon,
  duplicate: DuplicateIcon,
  "edit-box": EditBoxIcon,
  "external-link": ExternalLinkIcon,
  filter: FilterIcon,
  flag: FlagIcon,
  floppy: FloppyIcon,
  "folder-minus": FolderMinusIcon,
  "folder-plus": FolderPlusIcon,
  folder: FolderIcon,
  globe: GlobeIcon,
  grid: GridIcon,
  hash: HashIcon,
  headphones: HeadphonesIcon,
  heart: HeartIcon,
  inbox: InboxIcon,
  layers: LayersIcon,
  "layout-columns": LayoutColumnsIcon,
  "layout-rows": LayoutRowsIcon,
  link: LinkIcon,
  list: ListIcon,
  location: LocationIcon,
  lock: LockIcon,
  login: LoginIcon,
  logout: LogoutIcon,
  mail: MailIcon,
  maximize: MaximizeIcon,
  minimize: MinimizeIcon,
  monitor: MonitorIcon,
  "more-alt": MoreAltIcon,
  more: MoreIcon,
  paperclip: PaperclipIcon,
  pen: PenIcon,
  "pen-line": PenLineIcon,
  phone: PhoneIcon,
  pin: PinIcon,
  plus: PlusIcon,
  redirect: RedirectIcon,
  reload: ReloadIcon,
  repeat: RepeatIcon,
  rows: RowsIcon,
  search: SearchIcon,
  send: SendIcon,
  share: ShareIcon,
  "shield-alert": ShieldAlertIcon,
  "shield-check": ShieldCheckIcon,
  "shield-x": ShieldXIcon,
  shield: ShieldIcon,
  "shopping-bag": ShoppingBagIcon,
  "shopping-cart": ShoppingCartIcon,
  slash: SlashIcon,
  slider: SliderIcon,
  smartphone: SmartphoneIcon,
  star: StarIcon,
  "swap-horizontal": SwapHorizontalIcon,
  "swap-vertical": SwapVerticalIcon,
  tablet: TabletIcon,
  tag: TagIcon,
  "text-align-center": TextAlignCenterIcon,
  "text-align-justify": TextAlignJustifyIcon,
  "text-align-left": TextAlignLeftIcon,
  "text-align-right": TextAlignRightIcon,
  text: TextIcon,
  "thumbs-down": ThumbsDownIcon,
  "thumbs-up": ThumbsUpIcon,
  trash: TrashIcon,
  upload: UploadIcon,
  user: UserIcon,
  view: ViewIcon,
  "zoom-in": ZoomInIcon,
}

// Icon component that takes a name prop and renders the corresponding icon
// If the icon does not exist in the map, it renders nothing
export function Icon({ name, ...props }) {
  const IconWrapper = IconMap[name]
  return IconWrapper ? <IconWrapper {...props} /> : null
}

// Home component that maps over the icons prop and renders an Icon component for each one
// It also includes a search functionality that filters the icons based on the user's input
export default function Home({ icons }) {
  // State for the search term
  const [searchTerm, setSearchTerm] = useState('')

  // Handler for the search input's change event
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  // Filter the icons based on the search term
  const filteredIcons = icons.filter((icon) =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Layout>
      <div className={styles.install}>
        {/* Input field with the installation command, which gets selected on click */}
        <input
          readOnly
          type="text"
          value="yarn add metal-icons"
          onClick={(e) => e.target.select()}
        />
      </div>
      <div className={styles.filter}>
        {/* Search input */}
        <input
          id="search"
          name="search"
          type="text"
          placeholder="Search icons..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className={styles.grid}>
        {/* Render the filtered icons */}
        {filteredIcons.length > 0 ? (
          filteredIcons.map((icon) => (
            <div className={styles.tile} key={icon.id}>
              <Icon name={icon.name} />
              <p>{icon.name}</p>
            </div>
          ))
        ) : (
          <div className={styles.empty}>No icons found</div>
        )}
      </div>
    </Layout>
  )
}

// getStaticProps function to read the icons data from a JSON file
// It reads the file synchronously, parses the JSON data into a JavaScript object,
// and returns the icons data as a prop to the Home component
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'icons.json')
  const jsonData = fs.readFileSync(filePath, 'utf8')
  const icons = JSON.parse(jsonData)

  return {
    props: {
      icons,
    },
  }
}
