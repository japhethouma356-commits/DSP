function SvgIcon({ children, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </SvgIcon>
  )
}

export function CloseIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </SvgIcon>
  )
}

export function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10.5V20h13V10.5" />
    </SvgIcon>
  )
}

export function NftIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M7 7h10v10H7z" />
      <path d="M9.5 10.5h5" />
      <path d="M9.5 13.5h5" />
    </SvgIcon>
  )
}

export function TradeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M7 7h10" />
      <path d="M7 7 10 4" />
      <path d="M7 7 10 10" />
      <path d="M17 17H7" />
      <path d="M17 17 14 14" />
      <path d="M17 17 14 20" />
    </SvgIcon>
  )
}

export function PoolIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
      <path d="M8 7v10" />
      <path d="M16 7v10" />
    </SvgIcon>
  )
}

export function LoanIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 3v18" />
      <path d="M8 7h6a2 2 0 0 1 0 4H10a2 2 0 0 0 0 4h6" />
    </SvgIcon>
  )
}

export function UserIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M20 21a8 8 0 0 0-16 0" />
      <path d="M12 13a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
    </SvgIcon>
  )
}

export function LockIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M7 11V8a5 5 0 0 1 10 0v3" />
      <rect x="6" y="11" width="12" height="10" rx="2" />
    </SvgIcon>
  )
}

export function GlobeIcon(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.7 4.2 5.9 4.2 9s-1.6 6.3-4.2 9c-2.6-2.7-4.2-5.9-4.2-9S9.4 5.7 12 3z" />
    </SvgIcon>
  )
}

export function RadarIcon(props) {
  return (
    <SvgIcon {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="1.6" />
      <path d="M12 12l6-6" />
      <path d="M8 16a6 6 0 0 0 8 0" />
    </SvgIcon>
  )
}

export function GiftIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M20 12v9H4v-9" />
      <path d="M2 12h20" />
      <path d="M12 12v9" />
      <path d="M4 7h16v5H4z" />
      <path d="M12 7c0-2 1.2-3 3-3s3 1 3 3-1 3-3 3H12" />
      <path d="M12 7c0-2-1.2-3-3-3S6 5 6 7s1 3 3 3h3" />
    </SvgIcon>
  )
}
