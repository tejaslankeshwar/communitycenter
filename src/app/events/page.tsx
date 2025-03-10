'use client'

import { useState } from 'react'
import { CalendarIcon, MapPinIcon, PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { EventCard } from '@/components/client/EventCard'
import { ScrollReveal } from '@/components/client/ScrollReveal'
import { upcomingEvents } from '@/data/events'

const categories = ['All', 'Religious', 'Charity', 'Social']

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [events, setEvents] = useState(upcomingEvents)
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    category: 'Religious',
    description: '',
    image: 'https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738152998033' // Default image
  })

  const filteredEvents = events
    .filter(event => selectedCategory === 'All' || event.category === selectedCategory)
    .filter(event => 
      searchQuery === '' || 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase())
    )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Format the date string from the form
    const dateObj = new Date(formData.date)
    const formattedDate = dateObj.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    // Create new event object
    const newEvent = {
      id: events.length + 1,
      ...formData,
      date: formattedDate,
      month: dateObj.toLocaleString('en-US', { month: 'short' }).toUpperCase(),
      day: dateObj.getDate().toString()
    }

    // Add new event to the list
    setEvents([...events, newEvent])
    
    // Reset form
    setFormData({
      title: '',
      date: '',
      time: '',
      location: '',
      category: 'Religious',
      description: '',
      image: 'https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738152998033'
    })
    setShowForm(false)
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Upcoming Events
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Join our diverse community events and be part of meaningful interfaith connections and celebrations.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-12">
        <div className="container">
          {/* Search and Filters */}
          <div className="mb-8">
            {/* Search Bar */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 bg-white rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            </div>

            {/* Filters and Add Event Button */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
              >
                <PlusIcon className="w-5 h-5 mr-2" />
                Add Event
              </button>
            </div>
          </div>

          {/* Add Event Form */}
          {showForm && (
            <div className="mb-8">
              <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold mb-4">Add New Event</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Title</label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Date</label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-3 py-2 border rounded-lg"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Time</label>
                        <input
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full px-3 py-2 border rounded-lg"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Location</label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg"
                        required
                      >
                        {categories.filter(cat => cat !== 'All').map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Description</label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg"
                        rows={3}
                        required
                      />
                    </div>
                    <div className="flex justify-end gap-4">
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-4 py-2 text-neutral-600 hover:text-neutral-800"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                      >
                        Add Event
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Events Grid */}
          <div className="grid gap-6">
            {filteredEvents.map((event) => (
              <ScrollReveal key={event.id}>
                <EventCard event={event} />
              </ScrollReveal>
            ))}
            {filteredEvents.length === 0 && (
              <div className="text-center py-12 text-neutral-500">
                No events found for this category.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
} 