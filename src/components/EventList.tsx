'use client'

import { useState } from 'react'
import { Event } from '@/types/event'
import { format } from 'date-fns'

type Props = {
  events: Event[]
}

const categories = ['All', 'Religious', 'Social', 'Charity']

export default function EventList({ events }: Props) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredEvents = selectedCategory === 'All'
    ? events
    : events.filter(event => event.category === selectedCategory)

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Filter by Category</h2>
        <div className="flex gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredEvents.map(event => (
          <div
            key={event.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-600 mb-2">{event.description}</p>
              </div>
              <span className="inline-block px-3 py-1 rounded-full text-sm bg-accent/10 text-accent">
                {event.category}
              </span>
            </div>
            <div className="mt-4 flex items-center text-sm text-gray-500 space-x-4">
              <span>📅 {format(new Date(event.date), 'MMMM d, yyyy')}</span>
              <span>📍 {event.location}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 