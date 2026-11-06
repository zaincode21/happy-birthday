import type { BirthdayConfig } from '../types/birthday'

/**
 * Everything personal about the page lives here.
 * Change `name` and `sender`, then edit the memories and letter copy below.
 */
export const birthday: BirthdayConfig = {
  name: 'Nikuze Ange',
  sender: 'Alex',
  hero: {
    // Change this to the actual birthday. It is the only date shown on the page.
    dateLabel: '6 November',
    headline: 'Happy birthday,',
    subline:
      'We met over a story reply on Snapchat. Somewhere between the 2am voice notes and the streak neither of us would break, you became one of my favourite people.',
    scrollCue: 'Make a wish',
    tag: 'for Ange',
  },
  wish: {
    heading: 'Make a wish.',
    intro: 'Five candles, one wish.',
    litStatus: 'Five candles lit.',
    blownStatus: 'Wish made. Happy birthday, Nikuze Ange.',
    blowLabel: 'Blow out the candles',
    micLabel: 'Use my microphone',
    micStopLabel: 'Stop listening',
    micRequesting: 'Waiting for microphone access…',
    listeningStatus: 'Listening. Blow toward the cake.',
    deniedLabel: 'Microphone access is blocked. The button works.',
    unsupportedLabel: 'No microphone here. Use the button.',
    againLabel: 'Light them again',
  },
  // Photos live in /public/memories. Replace a file and keep its name, or
  // point `photo.src` at a new one.
  memories: {
    heading: 'Things I kept.',
    intro: 'Six things from the years since that first reply.',
    items: [
      {
        id: 'first-call',
        kind: 'photo',
        label: 'The first call',
        date: '23:57',
        note: 'The camera was already on when I picked up. I remember laughing before either of us said anything.',
        tilt: -2.2,
        offset: 0,
        photo: {
          src: '/memories/the-first-call.jpg',
          alt: 'Ange smiling on a late-night video call, with a small inset of me',
          width: 900,
          height: 1125,
        },
      },
      {
        id: 'tuesday-307',
        kind: 'note',
        label: '3:07 AM',
        date: 'A Tuesday',
        note: 'That night set the pattern. Most of what we know about each other was typed after midnight.',
        tilt: 1.4,
        offset: 26,
        lines: ['you: are you awake', 'me: unfortunately', 'you: good'],
      },
      {
        id: 'camera-roll',
        kind: 'photo',
        label: 'The camera roll',
        date: '07:16',
        note: 'You sent a screenshot of your camera roll and told me to pick a favourite. I still have not answered.',
        tilt: 1.8,
        offset: 46,
        photo: {
          src: '/memories/the-camera-roll.jpg',
          alt: 'Ange’s photo gallery with a selfie of her in the centre',
          width: 900,
          height: 1125,
        },
      },
      {
        id: 'half-asleep',
        kind: 'photo',
        label: 'Half asleep',
        date: 'One night',
        note: 'You were half asleep and still talking. I stayed on the call until you actually drifted off.',
        tilt: -1.6,
        offset: 6,
        photo: {
          src: '/memories/the-late-call.jpg',
          alt: 'Ange lying down during a late-night video call, with a small inset of me',
          width: 900,
          height: 1125,
        },
      },
      {
        id: 'your-side',
        kind: 'photo',
        label: 'Your side',
        date: '03:29',
        note: 'Headphones on, cap pulled low, three in the morning. Neither of us hung up.',
        tilt: -1.8,
        offset: 34,
        photo: {
          src: '/memories/your-side.jpg',
          alt: 'A man in headphones and a cap on a 3am video call, with a small inset of Ange',
          width: 900,
          height: 1125,
        },
      },
      {
        id: 'pink-light',
        kind: 'photo',
        label: 'Pink light',
        date: 'This year',
        note: 'The mirror photo you sent with no context. I saved it before I replied.',
        tilt: 2.2,
        offset: 0,
        photo: {
          src: '/memories/pink-light.jpg',
          alt: 'Ange taking a mirror selfie under pink light, phone in hand',
          width: 900,
          height: 1125,
        },
      },
    ],
  },
  letter: {
    heading: 'One more thing.',
    tagLabel: 'Open me',
    openAnnouncement: 'The letter is open.',
    closeLabel: 'Close the letter',
    paragraphs: [
      'Happy birthday, Nikuze Ange.',
      "We met because of a story reply. I can't remember what the story was, which feels unfair, because I remember everything after it.",
      "You're the first person I text when something happens. You answer at hours you shouldn't be awake, and you remember the small things I only say once.",
      'I hope this year gives you more sleep and better news. And a few days worth telling me about in too much detail.',
      'Thank you for being my friend.',
    ],
    signOff: 'With love,',
  },
  closing: {
    note: "That's the whole page. Happy birthday, Nikuze Ange.",
    againLabel: 'Light the candles again',
    backToTopLabel: 'Back to top',
  },
}
