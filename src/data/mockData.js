import { Users, Target, Heart, Award, Play, Clock, Star, MapPin, Calendar } from 'lucide-react';

// ==========================================
// HOME DATA
// ==========================================
export const featuredProducts = [
  {
    id: 1,
    name: 'Traditional Nepali Gunyou Cholo',
    description: 'Authentic red and gold embroidered traditional dress for classical dance performances',
    price: 5000,
    originalPrice: 7000,
    image: '/img/Traditional Nepali Gunyo Cholo dress.webp',
    rating: 5,
    reviewCount: 24,
    isNew: true,
    discount: 17
  },
  {
    id: 2,
    name: 'Maruni Dress Set',
    description: 'Elegant maroon and gold traditional attire perfect for folk dance performances',
    price: 4550,
    image: '/img/Maruni Dress Set.jpeg',
    rating: 4,
    reviewCount: 18
  },
  {
    id: 3,
    name: 'Dhaka Topi with Traditional Wear',
    description: 'Complete traditional ensemble including the iconic Nepali hat',
    price: 8000,
    image: '/img/Dhaka Topi with Traditional Wear.avif',
    rating: 5,
    reviewCount: 32
  }
];

// ==========================================
// ABOUT DATA
// ==========================================
export const stats = [
  { icon: Users, label: 'Students Taught', value: '10,000+' },
  { icon: Target, label: 'Dance Forms', value: '50+' },
  { icon: Heart, label: 'Cultural Events', value: '500+' },
  { icon: Award, label: 'Years of Excellence', value: '25+' }
];

export const team = [
  {
    name: 'Rajesh Sharma',
    role: 'Founder & Master Dancer',
    image: '/api/placeholder/200/200',
    bio: '25+ years of experience in classical Nepali dance forms'
  },
  {
    name: 'Priya Thapa',
    role: 'Cultural Director',
    image: '/api/placeholder/200/200',
    bio: 'Expert in traditional music and cultural preservation'
  },
  {
    name: 'Suman Rai',
    role: 'Dance Instructor',
    image: '/api/placeholder/200/200',
    bio: 'Specializes in folk dance forms and modern adaptations'
  }
];

// ==========================================
// CULTURE DATA
// ==========================================
export const culturalElements = [
  {
    title: 'Festivals & Celebrations',
    description: 'Nepal\'s rich calendar of festivals showcases diverse cultural traditions',
    image: '/api/placeholder/400/300',
    highlights: [
      'Dashain - Festival of lights and family reunion',
      'Tihar - Celebration of lights and brother-sister bond',
      'Indra Jatra - Ancient festival with masked dances',
      'Losar - Tibetan New Year celebration'
    ]
  },
  {
    title: 'Traditional Music',
    description: 'Melodious instruments and folk songs that accompany our dance forms',
    image: '/api/placeholder/400/300',
    highlights: [
      'Panchai Baja - Traditional musical ensemble',
      'Madal - Two-headed drum used in folk music',
      'Sarangi - Bowed string instrument',
      'Flute - Traditional bamboo flute music'
    ]
  },
  {
    title: 'Art & Architecture',
    description: 'Ancient art forms and architectural marvels that inspire our culture',
    image: '/api/placeholder/400/300',
    highlights: [
      'Pagoda-style temples and monasteries',
      'Thangka paintings depicting Buddhist art',
      'Woodcarving and metal craftsmanship',
      'Traditional Newari architecture'
    ]
  }
];

export const regions = [
  {
    name: 'Kathmandu Valley',
    description: 'Cultural heart of Nepal with ancient traditions',
    dances: ['Lakhey', 'Panchai Baja', 'Charya'],
    image: '/api/placeholder/300/200'
  },
  {
    name: 'Western Nepal',
    description: 'Home to vibrant folk traditions and music',
    dances: ['Deuda', 'Bhajan', 'Maruni'],
    image: '/api/placeholder/300/200'
  },
  {
    name: 'Eastern Nepal',
    description: 'Diverse ethnic groups with unique cultural practices',
    dances: ['Chandi', 'Sakela', 'Tamang Selo'],
    image: '/api/placeholder/300/200'
  },
  {
    name: 'Terai Region',
    description: 'Blend of Nepali and Indian cultural influences',
    dances: ['Tharu Stick Dance', 'Kathi Dance', 'Jhora'],
    image: '/api/placeholder/300/200'
  }
];

export const values = [
  {
    icon: Heart,
    title: 'Harmony with Nature',
    description: 'Living in balance with the natural world and respecting all living beings'
  },
  {
    icon: Users,
    title: 'Community Spirit',
    description: 'Strong emphasis on family bonds, community cooperation, and social harmony'
  },
  {
    icon: Calendar,
    title: 'Festival Celebrations',
    description: 'Regular festivals that bring communities together in joy and celebration'
  },
  {
    icon: MapPin,
    title: 'Cultural Diversity',
    description: 'Celebrating the rich diversity of ethnic groups and their unique traditions'
  }
];

// ==========================================
// DANCE DATA
// ==========================================
export const danceCategories = [
  {
    id: 'classical',
    title: 'Classical Dance',
    description: 'Traditional court dances performed in royal palaces',
    image: '/api/placeholder/400/300',
    forms: ['Lakhey Dance', 'Panchai Baja', 'Hanuman Dance'],
    difficulty: 'Advanced',
    duration: '2-3 hours'
  },
  {
    id: 'folk',
    title: 'Folk Dance',
    description: 'Regional dances reflecting local culture and traditions',
    image: '/api/placeholder/400/300',
    forms: ['Maruni Dance', 'Deuda Dance', 'Tamang Selo'],
    difficulty: 'Intermediate',
    duration: '1-2 hours'
  },
  {
    id: 'ritual',
    title: 'Ritual Dance',
    description: 'Sacred dances performed during religious ceremonies',
    image: '/api/placeholder/400/300',
    forms: ['Charya Dance', 'Gundrupa', 'Bhutan Dance'],
    difficulty: 'Advanced',
    duration: '3-4 hours'
  }
];

export const features = [
  {
    icon: Users,
    title: 'Expert Instructors',
    description: 'Learn from master dancers with decades of experience'
  },
  {
    icon: Play,
    title: 'Video Tutorials',
    description: 'Step-by-step video guides for self-paced learning'
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    description: 'Classes available mornings, evenings, and weekends'
  },
  {
    icon: Star,
    title: 'Cultural Immersion',
    description: 'Deep dive into Nepali traditions and heritage'
  }
];

// ==========================================
// JOURNEY DATA
// ==========================================
export const milestones = [
  {
    year: '1999',
    title: 'Foundation',
    description: 'Dilip Dance was founded by Rajesh Sharma with a vision to preserve and promote Nepali dance heritage.',
    image: '/api/placeholder/300/200',
    type: 'foundation'
  },
  {
    year: '2005',
    title: 'First International Performance',
    description: 'Performed at the World Cultural Festival in India, bringing Nepali dance to a global audience.',
    image: '/api/placeholder/300/200',
    type: 'achievement'
  },
  {
    year: '2010',
    title: 'Academy Establishment',
    description: 'Opened our first dedicated dance academy in Kathmandu, formalizing our teaching methodology.',
    image: '/api/placeholder/300/200',
    type: 'expansion'
  },
  {
    year: '2015',
    title: 'Digital Learning Platform',
    description: 'Launched online learning platform, making traditional dance education accessible worldwide.',
    image: '/api/placeholder/300/200',
    type: 'innovation'
  },
  {
    year: '2020',
    title: 'Cultural Preservation Award',
    description: 'Received UNESCO recognition for cultural preservation efforts during the pandemic.',
    image: '/api/placeholder/300/200',
    type: 'recognition'
  },
  {
    year: '2024',
    title: 'Global Expansion',
    description: 'Established partnerships with cultural institutions worldwide, expanding our reach to 30+ countries.',
    image: '/api/placeholder/300/200',
    type: 'growth'
  }
];

export const teachingPhilosophy = [
  {
    icon: Heart,
    title: 'Cultural Respect',
    description: 'Every dance form is taught with deep respect for its cultural and spiritual significance.'
  },
  {
    icon: Users,
    title: 'Inclusive Learning',
    description: 'Our classes welcome students of all ages, backgrounds, and skill levels.'
  },
  {
    icon: Award,
    title: 'Authentic Techniques',
    description: 'We preserve traditional techniques while making them accessible to modern learners.'
  },
  {
    icon: Calendar,
    title: 'Holistic Development',
    description: 'Dance education encompasses physical, mental, and cultural growth.'
  }
];

export const studentStories = [
  {
    name: 'Priya Shrestha',
    role: 'Professional Dancer',
    story: 'Dilip Dance transformed my understanding of Nepali culture. What started as a hobby became my life\'s passion.',
    image: '/api/placeholder/150/150',
    achievement: 'National Dance Champion 2023'
  },
  {
    name: 'Michael Chen',
    role: 'Cultural Enthusiast',
    story: 'As someone from a different culture, I found the teachings incredibly welcoming and transformative.',
    image: '/api/placeholder/150/150',
    achievement: 'Completed Advanced Lakhey Dance Course'
  },
  {
    name: 'Sita Rai',
    role: 'Dance Teacher',
    story: 'The comprehensive training I received here enabled me to start my own dance school in Pokhara.',
    image: '/api/placeholder/150/150',
    achievement: 'Established Rai Dance Academy'
  }
];

// ==========================================
// TYPES OF DANCE DATA
// ==========================================
export const danceTypes = [
  {
    id: 1,
    name: 'Lakhey Dance',
    category: 'classical',
    description: 'A masked dance performed during Indra Jatra festival to drive away evil spirits',
    region: 'Kathmandu Valley',
    difficulty: 'Advanced',
    duration: '2-3 hours',
    culturalSignificance: 'Religious and protective ritual',
    image: '/api/placeholder/300/200',
    videoUrl: '#',
    history: 'Ancient dance form dating back to Malla dynasty'
  },
  {
    id: 2,
    name: 'Maruni Dance',
    category: 'folk',
    description: 'Traditional Newari dance performed during weddings and festivals',
    region: 'Kathmandu Valley',
    difficulty: 'Intermediate',
    duration: '1-2 hours',
    culturalSignificance: 'Celebrates joy and prosperity',
    image: '/api/placeholder/300/200',
    videoUrl: '#',
    history: 'Popular among Newar community for centuries'
  },
  {
    id: 3,
    name: 'Deuda Dance',
    category: 'folk',
    description: 'Folk dance from western Nepal with devotional songs and movements',
    region: 'Western Nepal',
    difficulty: 'Intermediate',
    duration: '45 minutes - 1 hour',
    culturalSignificance: 'Devotional and storytelling',
    image: '/api/placeholder/300/200',
    videoUrl: '#',
    history: 'Evolved from ancient devotional practices'
  },
  {
    id: 4,
    name: 'Panchai Baja',
    category: 'classical',
    description: 'Classical dance accompanied by traditional musical instruments',
    region: 'Kathmandu Valley',
    difficulty: 'Advanced',
    duration: '3-4 hours',
    culturalSignificance: 'Court entertainment and cultural preservation',
    image: '/api/placeholder/300/200',
    videoUrl: '#',
    history: 'Performed in royal courts during Malla period'
  },
  {
    id: 5,
    name: 'Tamang Selo',
    category: 'folk',
    description: 'Traditional Tamang community dance with rhythmic movements',
    region: 'Northern Nepal',
    difficulty: 'Beginner',
    duration: '30-45 minutes',
    culturalSignificance: 'Community bonding and celebration',
    image: '/api/placeholder/300/200',
    videoUrl: '#',
    history: 'Integral part of Tamang cultural festivals'
  },
  {
    id: 6,
    name: 'Charya Dance',
    category: 'ritual',
    description: 'Sacred Buddhist dance performed in monasteries',
    region: 'Kathmandu Valley',
    difficulty: 'Advanced',
    duration: '4-5 hours',
    culturalSignificance: 'Spiritual practice and meditation',
    image: '/api/placeholder/300/200',
    videoUrl: '#',
    history: 'Ancient Buddhist ritual dance tradition'
  },
  {
    id: 7,
    name: 'Jhyaure Dance',
    category: 'folk',
    description: 'A popular romantic folk dance with lively beats and graceful gestures',
    region: 'Hilly Regions',
    difficulty: 'Beginner',
    duration: '30-45 minutes',
    culturalSignificance: 'Entertainment and celebration of youth',
    image: '/api/placeholder/300/200',
    videoUrl: '#',
    history: 'A staple of Gandharva musical traditions'
  },
  {
    id: 8,
    name: 'Sorathi Dance',
    category: 'folk',
    description: 'Traditional dance of the Gurung community featuring elaborate storytelling',
    region: 'Western Nepal',
    difficulty: 'Intermediate',
    duration: '2-3 hours',
    culturalSignificance: 'Storytelling and cultural identity',
    image: '/api/placeholder/300/200',
    videoUrl: '#',
    history: 'Derived from ancient mythological tales'
  },
  {
    id: 9,
    name: 'Kauda Dance',
    category: 'folk',
    description: 'A cheerful dance performed by the Magar community during festivals',
    region: 'Mid-Western Nepal',
    difficulty: 'Beginner',
    duration: '1-2 hours',
    culturalSignificance: 'Expression of joy and communal harmony',
    image: '/api/placeholder/300/200',
    videoUrl: '#',
    history: 'Passed down orally through generations'
  },
  {
    id: 10,
    name: 'Ghatu Dance',
    category: 'ritual',
    description: 'A trancelike dance performed exclusively by young girls',
    region: 'Gandaki Province',
    difficulty: 'Advanced',
    duration: '3-4 hours',
    culturalSignificance: 'Spiritual offering and mythological recounting',
    image: '/api/placeholder/300/200',
    videoUrl: '#',
    history: 'Associated with the spring season and local deities'
  },
  {
    id: 11,
    name: 'Tharu Stick Dance',
    category: 'folk',
    description: 'Energetic rhythmic dance using wooden sticks (Dandia style)',
    region: 'Terai Region',
    difficulty: 'Intermediate',
    duration: '45-60 minutes',
    culturalSignificance: 'Harvest celebration and warding off wild animals',
    image: '/api/placeholder/300/200',
    videoUrl: '#',
    history: 'Deeply rooted in the agrarian lifestyle of the Tharu people'
  },
  {
    id: 12,
    name: 'Sakela Dance',
    category: 'ritual',
    description: 'Performed by the Kirat community to worship mother nature',
    region: 'Eastern Nepal',
    difficulty: 'Intermediate',
    duration: '1-2 hours',
    culturalSignificance: 'Nature worship and harvest blessings',
    image: '/api/placeholder/300/200',
    videoUrl: '#',
    history: 'Celebrated during the Udhauli and Ubhauli festivals'
  }
];

export const danceTypesCategories = [
  { id: 'all', name: 'All Types', count: danceTypes.length },
  { id: 'classical', name: 'Classical', count: danceTypes.filter(d => d.category === 'classical').length },
  { id: 'folk', name: 'Folk', count: danceTypes.filter(d => d.category === 'folk').length },
  { id: 'ritual', name: 'Ritual', count: danceTypes.filter(d => d.category === 'ritual').length }
];

// ==========================================
// DRESS DATA
// ==========================================
export const products = [
  {
    id: 1,
    name: 'Traditional Gunyou Cholo',
    description: 'Authentic red and gold embroidered traditional dress for classical dance performances',
    price: 25000,
    originalPrice: 30000,
    image: '/api/placeholder/300/400',
    category: 'classical',
    rating: 5,
    reviewCount: 24,
    isNew: true,
    discount: 17,
    size: ['S', 'M', 'L', 'XL'],
    material: 'Silk and cotton blend'
  },
  {
    id: 2,
    name: 'Maruni Dress Set',
    description: 'Elegant maroon and gold traditional attire perfect for folk dance performances',
    price: 22000,
    image: '/api/placeholder/300/400',
    category: 'folk',
    rating: 4,
    reviewCount: 18,
    size: ['S', 'M', 'L'],
    material: 'Cotton with gold embroidery'
  },
  {
    id: 3,
    name: 'Dhaka Topi with Traditional Wear',
    description: 'Complete traditional ensemble including the iconic Nepali hat',
    price: 18000,
    image: '/api/placeholder/300/400',
    category: 'formal',
    rating: 5,
    reviewCount: 32,
    size: ['M', 'L', 'XL'],
    material: 'Wool and silk'
  },
  {
    id: 4,
    name: 'Charya Dance Costume',
    description: 'Sacred ritual dance attire with intricate Buddhist motifs',
    price: 35000,
    image: '/api/placeholder/300/400',
    category: 'ritual',
    rating: 4,
    reviewCount: 12,
    size: ['M', 'L'],
    material: 'Brocade and silk'
  },
  {
    id: 5,
    name: 'Tamang Traditional Dress',
    description: 'Colorful traditional attire of the Tamang community',
    price: 15000,
    originalPrice: 18000,
    image: '/api/placeholder/300/400',
    category: 'folk',
    rating: 4,
    reviewCount: 15,
    isNew: false,
    discount: 17,
    size: ['S', 'M', 'L'],
    material: 'Wool and cotton'
  },
  {
    id: 6,
    name: 'Newari Bridal Ensemble',
    description: 'Exquisite bridal attire for traditional Newari weddings',
    price: 45000,
    image: '/api/placeholder/300/400',
    category: 'bridal',
    rating: 5,
    reviewCount: 8,
    size: ['M', 'L'],
    material: 'Pure silk with gold work'
  }
];

export const productCategories = [
  { id: 'all', name: 'All Categories', count: products.length },
  { id: 'classical', name: 'Classical Dance', count: products.filter(p => p.category === 'classical').length },
  { id: 'folk', name: 'Folk Dance', count: products.filter(p => p.category === 'folk').length },
  { id: 'ritual', name: 'Ritual Dance', count: products.filter(p => p.category === 'ritual').length },
  { id: 'bridal', name: 'Bridal Wear', count: products.filter(p => p.category === 'bridal').length },
  { id: 'formal', name: 'Formal Wear', count: products.filter(p => p.category === 'formal').length }
];

export const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest' }
];
