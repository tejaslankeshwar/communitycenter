'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, MapPinIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { upcomingEvents } from '@/data/events'

export default function EventDetailsPage() {
  const params = useParams()
  const eventId = Number(params.id)
  
  const event = upcomingEvents.find(e => e.id === eventId)

  if (!event) {
    return (
      <div className="min-h-screen bg-neutral-50 pt-20">
        <div className="container py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-primary-900 mb-4">Event Not Found</h1>
            <Link 
              href="/events"
              className="inline-flex items-center text-primary-600 hover:text-primary-700"
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Events
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="container py-12">
        {/* Back Button */}
        <Link 
          href="/events"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Events
        </Link>

        {/* Event Details */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Event Image */}
          <div className="relative h-[400px]">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="mb-4">
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                  event.category === 'Religious' ? 'bg-primary-100 text-primary-600' :
                  event.category === 'Social' ? 'bg-accent-100 text-accent-600' :
                  'bg-emerald-100 text-emerald-600'
                }`}>
                  {event.category}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
              <p className="text-white/90 text-lg">{event.description}</p>
            </div>
          </div>

          {/* Event Info */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start">
                <CalendarIcon className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-primary-900 mb-1">Date</h3>
                  <p className="text-neutral-600">{event.date}</p>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-primary-900 mb-1">Time</h3>
                  <p className="text-neutral-600">{event.time}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="w-6 h-6 text-primary-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-primary-900 mb-1">Location</h3>
                  <p className="text-neutral-600">{event.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href={`/events/${event.id}/join`}
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Join This Event
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 