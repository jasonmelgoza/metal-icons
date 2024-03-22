import { ImageResponse } from '@vercel/og'
import {
  Activity,
  ArrowDown,
  ArrowRight,
  Archive,
  BookClosed,
  BookOpen,
  Bookmark,
  BookmarkPlus,
  Document,
  DocumentMinus,
  DocumentPlus,
  Documents,
} from 'metal-icons/24/outline'

export const config = {
  runtime: 'edge',
}

export default async function handler() {
  // Make sure the font exists in the specified path:
  const fontData = await fetch(
    new URL('../../../assets/INTER__.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          height: '100%',
          width: '100%',
          padding: 64,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          background: '#000',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            height: '100%',
            width: '67.7%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flex: '1',
              color: '#fff',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="140"
              fill="none"
              viewBox="0 0 100 140"
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
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              fontFamily: '"Inter"',
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: '-.048em',
              textAlign: 'left',
              color: 'white',
              lineHeight: 1.3,
            }}
          >
            Metal Icons
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              fontSize: 21,
              fontWeight: 400,
              letterSpacing: '-.02em',
              lineHeight: 1.5,
              textAlign: 'left',
              color: 'white',
            }}
          >
            v0.1.25
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 24,
            height: '100%',
            width: '33.3%',
            color: 'white',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: 24,
            }}
          >
            <Activity style={{ width: 64, height: 64 }} />
            <ArrowDown style={{ width: 64, height: 64 }} />
            <ArrowRight style={{ width: 64, height: 64 }} />
            <Archive style={{ width: 64, height: 64 }} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: 24,
            }}
          >
            <BookClosed style={{ width: 64, height: 64 }} />
            <BookOpen style={{ width: 64, height: 64 }} />
            <Bookmark style={{ width: 64, height: 64 }} />
            <BookmarkPlus style={{ width: 64, height: 64 }} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: 24,
            }}
          >
            <Document style={{ width: 64, height: 64 }} />
            <DocumentMinus style={{ width: 64, height: 64 }} />
            <DocumentPlus style={{ width: 64, height: 64 }} />
            <Documents style={{ width: 64, height: 64 }} />
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Inter',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  )
}
