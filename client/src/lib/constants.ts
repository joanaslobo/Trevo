export const programsData = [
  {
    icon: 'fa-guitar',
    title: 'Instrument Lessons',
    description: 'Master a wide range of instruments with our expert instructors. From guitar and piano to traditional Irish and Portuguese instruments.',
    features: [
      'One-on-one personalized instruction',
      'Tailored curriculum for all levels',
      'Regular performance opportunities'
    ],
    colorClass: 'text-[#1a7a3d]',
    borderColorClass: 'bg-[#1a7a3d]',
    linkText: 'View Details',
    linkHref: '/fees'
  },
  {
    icon: 'fa-microphone',
    title: 'Vocal Training',
    description: 'Develop your unique voice through techniques from Irish folk to Portuguese fado and contemporary styles.',
    features: [
      'Breathing and technique fundamentals',
      'Cultural and stylistic exploration',
      'Solo and ensemble opportunities'
    ],
    colorClass: 'text-[#c66b3e]',
    borderColorClass: 'bg-[#c66b3e]',
    linkText: 'View Details',
    linkHref: '/fees'
  },
  {
    icon: 'fa-users',
    title: 'Group Sessions',
    description: 'Experience the joy of making music together in our collaborative group classes and ensemble opportunities.',
    features: [
      'Band and ensemble coaching',
      'Cultural music exploration',
      'Public performance preparation'
    ],
    colorClass: 'text-[#f4b942]',
    borderColorClass: 'bg-[#f4b942]',
    linkText: 'View Details',
    linkHref: '/fees'
  },
  {
    icon: 'fa-graduation-cap',
    title: 'Workshops & Masterclasses',
    description: 'Dive deep into specialized topics with intensive workshops led by visiting artists and our expert faculty.',
    features: [
      'Guest artist presentations',
      'Advanced technique development',
      'Cultural music immersion'
    ],
    colorClass: 'text-[#11622e]',
    borderColorClass: 'bg-[#11622e]',
    linkText: 'View Details',
    linkHref: '/fees'
  },
  {
    icon: 'fa-music',
    title: 'Combo Classes & Shows',
    description: 'Join our performance-focused classes that culminate in public shows showcasing your progress.',
    features: [
      'Performance technique training',
      'Regular showcase opportunities',
      'Community music events'
    ],
    colorClass: 'text-[#9f4d2c]',
    borderColorClass: 'bg-[#9f4d2c]',
    linkText: 'View Details',
    linkHref: '/fees'
  },
  {
    icon: 'fa-door-open',
    title: 'Open Days',
    description: 'Join us for our monthly open days to explore our facilities, meet our instructors, and get a taste of the Trevo experience.',
    features: [
      'Free trial lessons',
      'Instrument demonstrations',
      'Meet current students and faculty'
    ],
    colorClass: 'text-[#bf7b0a]',
    borderColorClass: 'bg-[#bf7b0a]',
    linkText: 'Register Now',
    linkHref: '/contact'
  }
];

export const pricingPlans = [
  {
    title: 'Private Lessons',
    price: '€35',
    unit: '/hour',
    features: [
      'One-on-one instruction',
      'Customized learning plan',
      'All instruments & vocal',
      'Flexible scheduling'
    ],
    buttonText: 'Book Now',
    buttonHref: '/contact',
    colorClass: 'text-[#1a7a3d]',
    bgColorClass: 'bg-[#1a7a3d]',
    iconColorClass: 'text-[#1a7a3d]'
  },
  {
    title: 'Group Classes',
    price: '€20',
    unit: '/session',
    features: [
      '4-8 students per group',
      'Weekly 90-minute sessions',
      'Ensemble experience',
      'Performance opportunities'
    ],
    buttonText: 'Book Now',
    buttonHref: '/contact',
    colorClass: 'text-[#c66b3e]',
    bgColorClass: 'bg-[#c66b3e]',
    iconColorClass: 'text-[#c66b3e]'
  },
  {
    title: 'Workshops',
    price: '€45',
    unit: '/workshop',
    features: [
      'Intensive 3-hour sessions',
      'Guest instructors',
      'Specialized topics',
      'All materials included'
    ],
    buttonText: 'Book Now',
    buttonHref: '/contact',
    colorClass: 'text-[#f4b942]',
    bgColorClass: 'bg-[#f4b942]',
    iconColorClass: 'text-[#f4b942]'
  }
];

export const scheduleData = [
  {
    day: 'Monday',
    morning: 'Private Lessons',
    afternoon: 'Private Lessons',
    evening: 'Group Classes'
  },
  {
    day: 'Tuesday',
    morning: 'Private Lessons',
    afternoon: 'Private Lessons',
    evening: 'Vocal Training'
  },
  {
    day: 'Wednesday',
    morning: 'Private Lessons',
    afternoon: 'Workshops',
    evening: 'Combo Classes'
  },
  {
    day: 'Thursday',
    morning: 'Private Lessons',
    afternoon: 'Private Lessons',
    evening: 'Group Classes'
  },
  {
    day: 'Friday',
    morning: 'Private Lessons',
    afternoon: 'Private Lessons',
    evening: 'Open Jam Sessions'
  },
  {
    day: 'Saturday',
    morning: 'Workshops',
    afternoon: 'Youth Program',
    evening: 'Monthly Performances',
    note: '(First Saturday)'
  }
];
