import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRightIcon, 
  ChevronDownIcon, 
  UserGroupIcon, 
  GlobeAltIcon, 
  SparklesIcon,
  CalendarIcon,
  ClockIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { MotionDiv } from '@/components/client/MotionDiv'
import { ScrollIndicator } from '@/components/client/ScrollIndicator'
import { ScrollToTop } from '@/components/client/ScrollToTop'
import { ScrollReveal } from '@/components/client/ScrollReveal'
import { FeaturedPrograms } from '@/components/FeaturedPrograms'
import { EventCard } from '@/components/client/EventCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <section className="w-full bg-white py-24 sm:py-32">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl mb-8">
              Building Bridges Across Faith Communities
            </h1>
            <p className="text-lg leading-8 text-neutral-700 mb-8">
              Experience a platform that seamlessly blends technology with spirituality,
              creating meaningful connections.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-primary-50">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Build meaningful relationships with people across faiths
              </h3>
              <p className="text-neutral-700">
                Connect with individuals from diverse religious backgrounds and foster understanding through shared experiences.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-primary-50">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Expand your understanding through shared learning
              </h3>
              <p className="text-neutral-700">
                Participate in educational programs and discussions that deepen your knowledge of different faith traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <FeaturedPrograms />
    </main>
  )
}

const stats = [
  {
    value: '15k+',
    label: 'Active Members',
    description: 'Engaged participants from diverse faith backgrounds',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    value: '172+',
    label: 'Communities',
    description: 'Faith communities actively participating worldwide',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '98%',
    label: 'Satisfaction Rate',
    description: 'Members reporting positive community experiences',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: '210%',
    label: 'Growth Rate',
    description: 'Year-over-year community expansion rate',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
]

const features = [
  {
    title: 'Connect & Share',
    description: 'Build meaningful relationships with people who share your values in a welcoming, inclusive environment.',
    icon: (
      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Learn & Grow',
    description: 'Expand your understanding through interfaith dialogue, cultural exchanges, and shared learning experiences.',
    icon: (
      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Participate & Impact',
    description: 'Join events and initiatives that make a real difference in your community and beyond.',
    icon: (
      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
]

const upcomingEvents = [
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

const testimonials = [
  {
    name: 'Sarah Chen',
    location: 'New York, USA',
    content: 'Communion has transformed how I connect with my faith community. The events and discussions have broadened my perspective significantly.',
    avatar: 'https://communionhub.org/static/media/person-1.e3cb6d5f253e917b43c8.avif',
  },
  {
    name: 'Rahul Patel',
    location: 'Mumbai, India',
    content: 'Being part of this platform has helped me understand different faiths better. The interfaith dialogues are enlightening and respectful.',
    avatar: 'https://communionhub.org/static/media/person-2.d351fab1ff18d37a194e.avif',
  },
  {
    name: 'Maria Rodriguez',
    location: 'Madrid, Spain',
    content: "The cultural exchange programs have been incredible. I've made lifelong friends and learned so much about different traditions.",
    avatar: 'https://communionhub.org/static/media/person-3.5d139ff3b34954893cf3.avif',
  },
]

const impactStats = [
  { value: '500+', label: 'Events Organized' },
  { value: '50+', label: 'Countries Reached' },
  { value: '25k+', label: 'Lives Impacted' },
  { value: '100+', label: 'Partner Organizations' },
] 