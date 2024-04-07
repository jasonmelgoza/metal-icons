// Importing necessary modules and data
import { ImageResponse } from '@vercel/og'
import versionData from '../../../data/version.json'

// Configuring the runtime
export const config = {
  runtime: 'edge',
}

// Default function for handling requests
export default async function handler() {
  // Fetching the font data from the specified path
  const fontData = await fetch(new URL('../../../assets/INTER__.ttf', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  )

  // Returning an ImageResponse with the specified layout and styles
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
              color: 'white',
            }}
          >
            {/* SVG for the logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="140"
              fill="none"
              viewBox="0 0 100 140"
            >
              {/* SVG paths */}
            </svg>
          </div>
          {/* Text elements for the title and version */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              fontFamily: '"Inter"',
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: '-0.05em',
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
            {versionData.version}
          </div>
        </div>
        {/* Icon display section */}
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
          {/* Icon Preview */}
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
    },
  )
}
