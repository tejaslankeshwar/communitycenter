'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon, CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline'

interface Event {
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

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden border border-neutral-200">
      <div className="flex flex-col md:flex-row h-full">
        {/* Image */}
        <div className="relative w-full md:w-1/3 h-48 md:h-auto">
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.src = 'https://communionhub.org/static/media/moments-1.ab7ff79bf394a244a0c7.jpg'
            }}
          />
          {/* Date Box */}
          <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2 text-center min-w-[60px]">
            <div className="text-sm font-bold text-primary-600">{event.month}</div>
            <div className="text-2xl font-bold text-primary-900">{event.day}</div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
              event.category === 'Religious' ? 'bg-primary-100 text-primary-600' :
              event.category === 'Social' ? 'bg-accent-100 text-accent-600' :
              'bg-emerald-100 text-emerald-600'
            }`}>
              {event.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-primary-900 mb-2">
            {event.title}
          </h3>
          <p className="text-neutral-600 mb-4">
            {event.description}
          </p>
          <div className="space-y-2">
            <div className="flex items-center text-sm text-neutral-500">
              <CalendarIcon className="w-4 h-4 mr-2" />
              {event.date}
            </div>
            <div className="flex items-center text-sm text-neutral-500">
              <ClockIcon className="w-4 h-4 mr-2" />
              {event.time}
            </div>
            <div className="flex items-center text-sm text-neutral-500">
              <MapPinIcon className="w-4 h-4 mr-2" />
              {event.location}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/events/${event.id}/join`}
              className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
            >
              Join Others
            </Link>
            <Link
              href={`/events/${event.id}`}
              className="inline-flex items-center px-4 py-2 bg-white text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50 transition-colors text-sm font-medium"
            >
              Event Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 