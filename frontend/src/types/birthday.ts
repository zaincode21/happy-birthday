export type BlowState =
  | 'idle'
  | 'requesting'
  | 'listening'
  | 'denied'
  | 'unsupported'
  | 'blown'

export interface Photo {
  src: string
  alt: string
  width: number
  height: number
}

interface MemoryBase {
  id: string
  label: string
  date: string
  note: string
  /** Rotation in degrees, applied to the card wrapper. */
  tilt: number
  /** Vertical offset in pixels, applied on tablet and up. */
  offset: number
}

export interface PhotoMemory extends MemoryBase {
  kind: 'photo'
  photo: Photo
}

export interface NoteMemory extends MemoryBase {
  kind: 'note'
  lines: string[]
}

export type Memory = PhotoMemory | NoteMemory

export interface BirthdayConfig {
  name: string
  sender: string
  hero: {
    dateLabel: string
    headline: string
    subline: string
    scrollCue: string
    tag: string
  }
  wish: {
    heading: string
    intro: string
    litStatus: string
    blownStatus: string
    blowLabel: string
    micLabel: string
    micStopLabel: string
    micRequesting: string
    listeningStatus: string
    deniedLabel: string
    unsupportedLabel: string
    againLabel: string
  }
  memories: {
    heading: string
    intro: string
    items: Memory[]
  }
  letter: {
    heading: string
    tagLabel: string
    openAnnouncement: string
    closeLabel: string
    paragraphs: string[]
    signOff: string
  }
  closing: {
    note: string
    againLabel: string
    backToTopLabel: string
  }
}
