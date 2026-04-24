export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    category: 'Technology',
    price: '$ 999.00 USD',
    image: '/p1.jpg',
    description: 'Forged in titanium. Featuring the ground-breaking A17 Pro chip, a customizable Action button and a more versatile Pro camera system.',
    features: ['Titanium Design', 'A17 Pro Chip', '48MP Main Camera', 'USB-C Connectivity']
  },
  {
    id: 2,
    name: 'MacBook Air M3',
    category: 'Computers',
    price: '$ 1,099.00 USD',
    image: '/p2.jpg',
    description: 'Strikingly thin and fast, so you can work, play or create anywhere. Powered by the M3 chip for incredible performance and battery life.',
    features: ['M3 Chip', '13.6-inch Liquid Retina Display', 'Up to 18 Hours Battery Life', '1080p FaceTime HD Camera']
  },
  {
    id: 3,
    name: 'iPad Pro',
    category: 'Computers',
    price: '$ 799.00 USD',
    image: '/p3.jpg',
    description: 'The ultimate iPad experience. Now with the M2 chip, a world-class Liquid Retina display and blazing-fast wireless connectivity.',
    features: ['M2 Chip', 'Liquid Retina Display', 'Apple Pencil Hover', 'Thunderbolt Support']
  },
  {
    id: 4,
    name: 'AirPods Pro (2nd Gen)',
    category: 'Audio',
    price: '$ 249.00 USD',
    image: '/p4.jpg',
    description: 'Rebuilt from the sound up. AirPods Pro feature up to 2x more Active Noise Cancellation, plus Adaptive Transparency and Personalized Spatial Audio.',
    features: ['H2 Apple Silicon', 'Active Noise Cancellation', 'Adaptive Transparency', 'MagSafe Charging Case']
  },
  {
    id: 5,
    name: 'Apple Watch Series 9',
    category: 'Technology',
    price: '$ 399.00 USD',
    image: '/p5.jpg',
    description: 'Smarter. Brighter. Mightier. Features a powerful new S9 SiP, a magical new way to use your watch without touching the screen, and double the brightness.',
    features: ['S9 SiP Chip', 'Double Tap Gesture', 'On-Device Siri', 'Carbon Neutral Options']
  },
  {
    id: 6,
    name: 'iMac 24"',
    category: 'Computers',
    price: '$ 1,299.00 USD',
    image: '/p6.jpg',
    description: 'The world’s best all-in-one desktop, now supercharged by the M3 chip. With a stunning 24-inch 4.5K Retina display in a thin, colorful design.',
    features: ['M3 Chip', '4.5K Retina Display', '1080p FaceTime HD Camera', 'Six-Speaker Sound System']
  },
  {
    id: 7,
    name: 'Apple TV 4K',
    category: 'Technology',
    price: '$ 129.00 USD',
    image: '/p7.jpg',
    description: 'The ultimate entertainment experience. Bring the magic of the cinema to your living room with 4K Dolby Vision, HDR10+ and Dolby Atmos.',
    features: ['A15 Bionic Chip', 'Siri Remote', '4K Dolby Vision', 'Smart Home Hub']
  },
  {
    id: 8,
    name: 'AirTag',
    category: 'Gear',
    price: '$ 29.00 USD',
    image: '/p8.jpg',
    description: 'Lose your knack for losing things. AirTag is an easy way to keep track of your stuff. Attach one to your keys, slip another in your backpack.',
    features: ['Find My App Integration', 'Precision Finding', 'Built-in Speaker', 'IP67 Water Resistance'],
    isFeatured: true
  },
  {
    id: 9,
    name: 'Magic Keyboard',
    category: 'Technology',
    price: '$ 99.00 USD',
    image: '/p9.jpg',
    description: 'Magic Keyboard delivers a remarkably comfortable and precise typing experience. It’s also wireless and rechargeable, with an incredibly long-lasting battery.',
    features: ['Bluetooth Connectivity', 'Rechargeable Battery', 'Multimedia Keys', 'Ultra-slim Profile'],
    isFeatured: true
  },
  {
    id: 10,
    name: 'Studio Display',
    category: 'Computers',
    price: '$ 1,599.00 USD',
    image: '/p10.jpg',
    description: 'A big, beautiful window into new worlds. Studio Display draws you in from the moment you turn it on. It has a slim, all-screen design and a 27-inch 5K Retina display.',
    features: ['27-inch 5K Retina Display', '12MP Ultra Wide Camera', 'Six-Speaker Sound System', 'Three USB-C Ports'],
    isFeatured: true
  },
  {
    id: 11,
    name: 'MacBook Pro 14"',
    category: 'Computers',
    price: '$ 1,599.00 USD',
    image: '/p11.jpg',
    description: 'Mind-blowing. Head-turning. Supercharged by the M3, M3 Pro or M3 Max chip. Up to 22 hours of battery life. The world’s best laptop display.',
    features: ['M3 Pro Chip', 'Liquid Retina XDR Display', 'MagSafe 3 Charging', 'SDXC Card Slot'],
    isFeatured: true
  },
  {
    id: 12,
    name: 'iPad Air',
    category: 'Computers',
    price: '$ 599.00 USD',
    image: '/p12.jpg',
    description: 'Light. Bright. Full of might. Supercharged by the Apple M2 chip. 12MP Ultra Wide front camera with Center Stage. Blazing-fast 5G.',
    features: ['M2 Chip', '10.9-inch Liquid Retina Display', 'Touch ID', 'USB-C Connectivity'],
    isFeatured: true
  },
  {
    id: 13,
    name: 'Apple Pencil (2nd Gen)',
    category: 'Technology',
    price: '$ 129.00 USD',
    image: '/p13.jpg',
    description: 'The new Apple Pencil delivers pixel-perfect precision and industry-leading low latency, making it great for drawing, sketching, coloring, taking notes, and more.',
    features: ['Magnetic Pairing', 'Wireless Charging', 'Double-tap to Change Tools', 'Pixel-perfect Precision']
  },
  {
    id: 14,
    name: 'Magic Mouse',
    category: 'Technology',
    price: '$ 79.00 USD',
    image: '/p14.jpg',
    description: 'Magic Mouse is wireless and rechargeable, with an optimized foot design that lets it glide smoothly across your desk.',
    features: ['Multi-Touch Surface', 'Wireless Connectivity', 'Rechargeable Battery', 'Bluetooth Support']
  },
  {
    id: 15,
    name: 'Magic Trackpad',
    category: 'Technology',
    price: '$ 129.00 USD',
    image: '/p15.jpg',
    description: 'Magic Trackpad is wireless and rechargeable, and it includes the full range of Multi-Touch gestures and Force Touch technology.',
    features: ['Force Touch', 'Multi-Touch Surface', 'Wireless Connectivity', 'Rechargeable Battery']
  },
  {
    id: 16,
    name: 'HomePod (2nd Gen)',
    category: 'Audio',
    price: '$ 299.00 USD',
    image: '/p16.jpg',
    description: 'HomePod is a powerhouse of a speaker. Apple‑engineered audio technology and advanced software deliver high‑fidelity sound throughout the room.',
    features: ['High-excursion Woofer', 'Beamforming Tweeters', 'Spatial Audio', 'Siri Built-in']
  },
  {
    id: 17,
    name: 'HomePod mini',
    category: 'Audio',
    price: '$ 99.00 USD',
    image: '/p17.jpg',
    description: 'Jam-packed with innovation, HomePod mini delivers unexpectedly big sound for a speaker of its size.',
    features: ['360-degree Audio', 'Siri Intelligent Assistant', 'Smart Home Hub', 'Privacy & Security']
  },
  {
    id: 18,
    name: 'Mac Studio',
    category: 'Computers',
    price: '$ 1,999.00 USD',
    image: '/p18.jpg',
    description: 'A true powerhouse. Mac Studio is an entirely new Mac desktop. It packs outrageous performance, extensive connectivity, and new capabilities into an unbelievably compact form.',
    features: ['M2 Max or M2 Ultra Chip', 'Advanced Thermal System', 'Extensive Connectivity', 'Supercompact Design']
  },
  {
    id: 19,
    name: 'iPhone 15',
    category: 'Technology',
    price: '$ 799.00 USD',
    image: '/p19.jpg',
    description: 'Dynamic Island comes to iPhone 15. New 48MP Main camera. Innovative new design features back glass that has color infused throughout the entire material.',
    features: ['Dynamic Island', '48MP Main Camera', 'A16 Bionic Chip', 'USB-C Connectivity']
  },
  {
    id: 20,
    name: 'iPad mini',
    category: 'Computers',
    price: '$ 499.00 USD',
    image: '/p20.jpg',
    description: 'Mega power. Mini sized. iPad mini has been meticulously designed to be absolutely beautiful. An all-new enclosure features a new edge-to-edge screen.',
    features: ['8.3-inch Liquid Retina Display', 'A15 Bionic Chip', 'Ultra Wide Camera', '5G Capable']
  }
];
