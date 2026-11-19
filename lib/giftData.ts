export interface GiftData {
  senderName: string;
  receiverName: string;
  envelopeImage: string;
  cardMessage: string;
  birthdayImage: string;
  birthdayTitle: string;
  birthdayText: string;
  balloonImage: string;
  birthdayWishesTitle: string;
  birthdayWishesMessage: string;
  thingsWeWannaDo: string[];
  loveLetterTitle?: string;
  loveLetterSubtitle?: string;
  loveLetterParagraphs?: string[];
  musicCoverImage: string;
  musicUrl: string;
  songTitle: string;
}

const defaultThings: string[] = [
  "Getting engaged and building a beautiful, warm life together.",
  "Traveling together everywhere.",
  "Growing, changing, falling apart, rising again, becoming different versions of ourselves, and loving each other more every single day.",
  "Performing Umrah together and experiencing our very first Umrah side by side.",
  "Driving around at night, playing songs, with my hair blowing all around me, feeling its freedom without a hijab.",
];

export const defaultLoveLetterParagraphs: string[] = [
  "To My Hima Loving you is the easiest and most beautiful thing I have ever felt it .",
  `You are my safety, my warmth, and the only person I can imagine feeling this happy with.

I love the man you are with me. Your tenderness, the way you comfort me, your hugs, your heart, your voice, your eyes, your smile, and your hand, which I still find myself wondering how I could love so much, and how it manages to make me feel so much tenderness and warmth.

I choose you on the easy days and the difficult ones, today, and in all the years that lie ahead of us.

I love you, and I love that, out of all the possibilities in this world, I was lucky enough to find you and fall in love with you.

Happy birthday, my love, my choice. If I had only one wish to make for all the years ahead, it would be to keep finding you in every lifetime, and to keep choosing you as if it were the first time, the last time, and every time in between.

Hodhod, your girl.❤️`
];

const ahmedGift: GiftData = {
  senderName: "Hadeer",
  receiverName: "Ibrahim",
  envelopeImage: "/images/envelope-placeholder.png",
  cardMessage: "Check out these awesome surprises made just for you, Ibrahim! ✨",
  birthdayImage: "/images/kid-placeholder.jpg",
  birthdayTitle: "To my favorite person,",
  birthdayText:
    "The first time we met,I never knew that an ordinary day would become the most beautiful day of my life, or that one unexpected encounter would bring me my everything. Since then, my days have been filled with warmth, love, and life. ❤️",
  balloonImage: "/images/cat.png",
  birthdayWishesTitle: "Happy 22nd birthday to my favorite person and the kindest man in the world.",
  birthdayWishesMessage:
    `Happy birthday, my love. Every year, I love you more. Every year, we keep choosing each other through everything life brings our way.

I love this day, I look forward to it, and I love the thought of having one day every year that belongs entirely to you. A day to celebrate you, not just because it's your birthday, but because I know how precious your existence is, how grateful I am that Ibrahim is in this world, and how lucky I was that life brought us together by chance.

You're the only person I love the way I feel when I'm with him, the way I miss him, the way I care about every little detail of his life, and the feeling of having someone in this world whose happiness and peace matter so much to me. And that person is you, Ibrahim.

I hope we always find comfort, tenderness, love, and safety in each other. I hope we always remain that warm place we can come back to, with the same tenderness every time. And I hope we never forget that what we have is something worth protecting, nurturing, and growing together.

Happy birthday to the Ibrahim I love... whom I love so much, in every little detail of who he is. May we always keep choosing each other, loving each other, and being there for one another. May we always feel that we've found in each other a place in this world that feels just right for us, a place that feels like us, and is as warm as we are.

Every year, I love you. Every year, you're my love, my best friend, and my comfort. Every year, I'm grateful that we're together.

Happy birthday, my Hima. ❤️`,
  thingsWeWannaDo: defaultThings,
  loveLetterTitle: "The little things I love about you",
  loveLetterSubtitle: "To My Hima, With All My Love <3",
  loveLetterParagraphs: defaultLoveLetterParagraphs,
  musicCoverImage: "/images/song-cover.jpg",
  musicUrl: "/music/our-song.mp3",
  songTitle: "Our Special Track",
};

const giftData: Record<string, GiftData> = {
  ahmed: ahmedGift,
  amir: ahmedGift,
  aya: {
    ...ahmedGift,
    senderName: "Aya",
    cardMessage: "Check out these awesome surprises for YOU!",
  },
};

export default giftData;