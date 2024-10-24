import localFont from 'next/font/local'

const franklinBkcp = localFont({
  src: './ITCFranklinGothicStd-BkCp.otf',
  variable: '--font-franklin-bkcp',
  weight: '100 900'
})

const franklinDmcp = localFont({
  src: './ITCFranklinGothicStd-DmCp.otf',
  variable: '--font-franklin-dmcp',
  weight: '100 900'
})

const Peregrin = localFont({
  src: './PeregrinStudioDentonLight.otf',
  variable: '--font-Peregrin',
  weight: '300'
})

export { franklinBkcp, franklinDmcp, Peregrin }
