import { ImageResponse } from '@vercel/og'
import {
  BookOpen,
  Folder,
  Document,
  DocumentMinus,
  DocumentPlus,
} from 'metal-icons/24/outline'

export const config = {
  runtime: 'edge',
}

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '56px',
          color: 'white',
          background: 'black',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="140"
          fill="none"
        >
          <path
            fill="#fff"
            d="m71.072 61.371 7.237-49.05a9.464 9.464 0 1 1 18.75 2.588c-8.475 62.1-8.4 50.512-8.4 83.662a37.494 37.494 0 0 1-11.805 27.388 37.49 37.49 0 0 1-28.057 10.112 38.246 38.246 0 0 1-34.913-38.587V70.596a43.385 43.385 0 0 0-2.175-13.687L3.57 32.084a8.56 8.56 0 0 1 16.088-5.85L33.834 61.37H71.07Z"
          />
          <path
            stroke="#202020"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="m71.072 61.371 7.237-49.05a9.464 9.464 0 1 1 18.75 2.588c-8.475 62.1-8.4 50.512-8.4 83.662a37.494 37.494 0 0 1-11.805 27.388 37.49 37.49 0 0 1-28.057 10.112 38.246 38.246 0 0 1-34.913-38.587V70.596a43.385 43.385 0 0 0-2.175-13.687L3.57 32.084a8.56 8.56 0 0 1 16.088-5.85L33.834 61.37H71.07Z"
          />
          <path fill="#fff" d="M33.834 51.434h19.95v41.1h-19.95v-41.1Z" />
          <path
            stroke="#202020"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M33.834 51.434h19.95v41.1h-19.95v-41.1Z"
          />
          <path fill="#fff" d="M53.784 51.434h19.95v41.1h-19.95v-41.1Z" />
          <path
            stroke="#202020"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M53.784 51.434h19.95v41.1h-19.95v-41.1Z"
          />
          <path
            fill="#fff"
            d="M88.659 97.634a19.424 19.424 0 0 0-19.463-19.425H38.934a5.135 5.135 0 0 0-5.175 5.138 14.288 14.288 0 0 0 14.287 14.287H88.66Z"
          />
          <path
            stroke="#202020"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M46.696 119.196v-4.912a16.648 16.648 0 0 1 16.65-16.65h-15.3A14.288 14.288 0 0 1 33.76 83.347a5.137 5.137 0 0 1 5.175-5.138h30.262A19.424 19.424 0 0 1 88.66 97.634"
          />
        </svg>
        <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          <BookOpen style={{ width: 48, height: 48 }} />
          <Folder style={{ width: 48, height: 48 }} />
          <Document style={{ width: 48, height: 48 }} />
          <DocumentPlus style={{ width: 48, height: 48 }} />
          <DocumentMinus style={{ width: 48, height: 48 }} />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
