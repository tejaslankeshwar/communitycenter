'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function SacredSpacesPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1737999482266"
          alt="Sacred Spaces Tour"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Sacred Spaces Tour
              </h1>
              <p className="text-xl text-white/90">
                Experience the beauty and diversity of faith traditions
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-12">
        {/* Back Button */}
        <Link 
          href="/programs"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
          Back to Programs
        </Link>

        {/* Content */}
        <div className="max-w-4xl">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">About the Program</h2>
            <p className="text-neutral-600 mb-6">
              The Sacred Spaces Tour offers a unique opportunity to visit and learn about various places of worship in our community. Through guided visits and meaningful interactions with religious leaders and community members, participants gain firsthand experience of different faith traditions.
            </p>
            <p className="text-neutral-600 mb-6">
              Each tour is carefully designed to promote understanding, respect, and appreciation for the diverse religious practices and architectural heritage in our area.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Tour Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Guided Tours</h3>
                <p className="text-neutral-600">
                  Expert-led tours of temples, mosques, churches, synagogues, and other sacred spaces.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Cultural Exchange</h3>
                <p className="text-neutral-600">
                  Opportunities to engage with community members and learn about their traditions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Educational Resources</h3>
                <p className="text-neutral-600">
                  Comprehensive materials about each faith tradition and sacred space visited.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Group Discussion</h3>
                <p className="text-neutral-600">
                  Facilitated conversations to reflect on experiences and share insights.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Tour Schedule</h2>
            <p className="text-neutral-600 mb-6">
              Tours are conducted monthly and typically include visits to 3-4 different sacred spaces. Each tour includes:
            </p>
            <ul className="list-disc list-inside text-neutral-600 mb-6 space-y-2">
              <li>Welcome orientation and introduction</li>
              <li>Guided tours of each sacred space</li>
              <li>Meetings with religious leaders and community members</li>
              <li>Group discussions and reflection sessions</li>
              <li>Shared meal or refreshments (when appropriate)</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Book a Tour
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
} 