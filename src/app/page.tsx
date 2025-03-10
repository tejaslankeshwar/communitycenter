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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Video/Image Container */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738152998033"
            alt="Interfaith gathering"
            fill
            className="object-cover object-center scale-105"
            priority
            quality={100}
            sizes="100vw"
            style={{ 
              objectPosition: '50% 50%',
              filter: 'brightness(0.7)'
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Subtle Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50" />
          
          {/* Animated Pattern */}
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-[0.02]" />
        </div>

        {/* Content */}
        <div className="container relative z-10 flex items-center justify-center min-h-[90vh] px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mb-8 text-sm text-white/90">
                ✨ <span className="ml-2 font-medium">Welcome to Communion</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                Connect Communities
                <span className="block mt-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Across Faiths
                </span>
              </h3>
              
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join our vibrant community where people from all faiths come together to share, learn, and support one another through meaningful events and connections.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/events"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg hover:from-orange-600 hover:to-yellow-600 transition-all transform hover:scale-105 hover:shadow-xl shadow-lg"
                >
                  Explore Events
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-all transform hover:scale-105 border border-white/20 shadow-lg"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator with updated styling */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center text-white/70">
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <ChevronDownIcon className="w-6 h-6 animate-bounce" />
          </div>
        </div>

        {/* Bottom Fade - Adjusted for better transition */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/90 to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-section-pattern opacity-50" />
        
        <div className="container relative">
          <ScrollReveal>
            <div className="content-narrow text-center mb-12">
              <span className="inline-flex items-center px-4 py-1.5 mb-4 text-xs font-medium bg-primary-50/80 backdrop-blur-sm text-primary-600 rounded-full border border-primary-100/20 shadow-sm">
                OUR IMPACT
              </span>
              <h2>Growing Together</h2>
              <p className="text-content-center text-neutral-600">
                Join our thriving community of faith leaders and members making a difference worldwide
              </p>
            </div>
          </ScrollReveal>

          <div className="grid-auto-fit">
            {stats.map((stat) => (
              <ScrollReveal key={stat.label} width="100%">
                <div className="card text-center group hover:border-primary-100 border-2 border-transparent transition-colors backdrop-blur-sm bg-white/80 shadow-lg">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-50/90 backdrop-blur-sm text-primary-600 mb-4 group-hover:scale-110 transition-transform border border-primary-100/20">
                      {stat.icon}
                    </div>
                    <div className="text-4xl font-bold text-primary-600 mb-2 group-hover:text-primary-700 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-neutral-600">
                      {stat.label}
                    </div>
                  </div>
                  <p className="text-sm text-neutral-500">
                    {stat.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container">
          <ScrollReveal>
            <div className="content-narrow text-center mb-16">
              <h2>
                Uniting Communities Through Innovation
              </h2>
              <p className="text-content-center text-neutral-600">
                Experience a platform that seamlessly blends technology with spirituality, creating meaningful connections.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid-auto-fit">
            {features.map((feature) => (
              <ScrollReveal key={feature.title} width="100%">
                <div className="card h-full">
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3>
                    {feature.title}
                  </h3>
                  <p className="text-content text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <FeaturedPrograms />

      {/* Upcoming Events Preview */}
      <section className="section-padding bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold text-primary-900 mb-2">
                  Featured Events
                </h2>
                <p className="text-lg text-neutral-600">
                  Join our upcoming community gatherings and celebrations
                </p>
              </div>
              <Link
                href="/events"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
              >
                View All Events
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid gap-6">
            {upcomingEvents.slice(0, 3).map((event) => (
              <ScrollReveal key={event.title} width="100%">
                <EventCard event={event} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-neutral-50">
        <div className="container">
          <ScrollReveal>
            <div className="content-narrow text-center mb-16">
              <span className="text-sm font-medium text-accent-500 mb-2 block">
                COMMUNITY VOICES
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900">
                Stories of Connection & Growth
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <ScrollReveal key={testimonial.name} width="100%">
                <div className="card h-full p-6 backdrop-blur-md bg-white/80 border border-white/20 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full ring-2 ring-white/20"
                    />
                    <div>
                      <div className="font-medium text-primary-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-content text-sm text-neutral-600 mb-4">
                    {testimonial.content}
                  </p>
                  <div className="flex gap-1 text-accent-500">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container">
          <ScrollReveal>
            <div className="content-narrow text-center mb-16">
              <span className="text-sm font-medium text-accent-400 mb-2 block">
                OUR IMPACT
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Making a Difference
                <span className="block text-accent-400">In Communities Worldwide</span>
              </h2>
              <p className="text-content-center text-white/70">
                Through our platform, we've facilitated thousands of meaningful connections,
                fostered interfaith dialogue, and created spaces for authentic community building.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {impactStats.map((stat) => (
              <ScrollReveal key={stat.label} width="100%">
                <div>
                  <div className="text-3xl font-bold text-accent-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="content-medium text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                Ready to Join Our Community?
              </h2>
              <p className="text-content-center text-neutral-600 mb-8">
                Start your journey of connection, learning, and growth with like-minded individuals from diverse faith backgrounds.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
              >
                Get Started Now
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Our Programs
            </h2>
            <p className="text-xl text-neutral-600">
              Discover our signature programs designed to foster understanding, build relationships, and create lasting impact.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Interfaith Leadership Program */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738152998033"
                  alt="Interfaith Leadership Program"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  Interfaith Leadership Program
                </h3>
                <p className="text-neutral-600 mb-4">
                  A comprehensive program designed to develop the next generation of interfaith leaders through workshops, mentorship, and hands-on experience.
                </p>
                <Link
                  href="/programs/interfaith-leadership"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Sacred Spaces Tour */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1737999482266"
                  alt="Sacred Spaces Tour"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  Sacred Spaces Tour
                </h3>
                <p className="text-neutral-600 mb-4">
                  Experience guided visits to various places of worship, fostering understanding and appreciation of different faith traditions.
                </p>
                <Link
                  href="/programs/sacred-spaces"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Community Service Initiative */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738151964428"
                  alt="Community Service Initiative"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-900 mb-2">
                  Community Service Initiative
                </h3>
                <p className="text-neutral-600 mb-4">
                  Join faith communities working together on service projects that address local needs and build lasting relationships.
                </p>
                <Link
                  href="/programs/community-service"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              View All Programs
            </Link>
          </div>
        </div>
      </section>

      <ScrollToTop />
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