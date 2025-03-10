export const upcomingEvents = [
  {
    id: 1,
    title: 'Christmas Charity Drive',
    description: 'Join us for our annual charity drive to help those in need during the holiday season.',
    category: 'Charity',
    date: 'Saturday, March 15, 2025',
    time: '5:30 AM IST',
    location: 'St. Mary\'s Church Hall',
    image: 'https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738152998033',
    month: 'MAR',
    day: '15'
  },
  {
    id: 2,
    title: 'Eid-ul-Fitr',
    description: 'Celebrate the end of Ramadan with our community in this special gathering.',
    category: 'Religious',
    date: 'Sunday, March 30, 2025',
    time: '5:30 AM IST',
    location: 'Central Mosque',
    image: 'https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1737999482266',
    month: 'MAR',
    day: '30'
  },
  {
    id: 3,
    title: 'Mahavir Jayanti',
    description: 'Join us in celebrating the birth of Lord Mahavir with special prayers and ceremonies.',
    category: 'Religious',
    date: 'Thursday, April 10, 2025',
    time: '5:30 AM IST',
    location: 'Jain Temple',
    image: 'https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738151964428',
    month: 'APR',
    day: '10'
  },
  {
    id: 4,
    title: 'Good Friday Service',
    description: 'A solemn service commemorating the crucifixion of Jesus Christ.',
    category: 'Religious',
    date: 'Friday, April 18, 2025',
    time: '5:30 AM IST',
    location: 'Community Church',
    image: 'https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738152151720',
    month: 'APR',
    day: '18'
  },
  {
    id: 5,
    title: 'Easter Sunday Service',
    description: 'Celebrate the resurrection of Jesus Christ with our community.',
    category: 'Religious',
    date: 'Sunday, April 20, 2025',
    time: '5:30 AM IST',
    location: 'Community Church',
    image: 'https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738152742578',
    month: 'APR',
    day: '20'
  }
]

export interface Event {
  id: number
  title: string
  description: string
  category: string
  date: string
  time: string
  location: string
  image: string
  month: string
  day: string
} 