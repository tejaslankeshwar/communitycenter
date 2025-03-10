'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function CommunityServicePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738151964428"
          alt="Community Service Initiative"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Community Service Initiative
              </h1>
              <p className="text-xl text-white/90">
                Working together to make a difference in our community
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
            <h2 className="text-2xl font-bold text-primary-900 mb-4">About the Initiative</h2>
            <p className="text-neutral-600 mb-6">
              Our Community Service Initiative brings together people from different faith communities to work on service projects that address local needs. Through collaborative efforts, we not only help those in need but also build lasting relationships across religious and cultural boundaries.
            </p>
            <p className="text-neutral-600 mb-6">
              This program embodies the shared values of service and compassion found in all faith traditions, demonstrating how we can achieve more by working together.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Service Areas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Food Security</h3>
                <p className="text-neutral-600">
                  Food drives, community gardens, and meal programs for those experiencing food insecurity.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Education Support</h3>
                <p className="text-neutral-600">
                  Tutoring programs, school supply drives, and educational workshops for underserved communities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Environmental Care</h3>
                <p className="text-neutral-600">
                  Park cleanups, tree planting, and environmental education initiatives.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Senior Support</h3>
                <p className="text-neutral-600">
                  Companionship programs, home maintenance assistance, and technology training for seniors.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Get Involved</h2>
            <p className="text-neutral-600 mb-6">
              There are many ways to participate in our Community Service Initiative:
            </p>
            <ul className="list-disc list-inside text-neutral-600 mb-6 space-y-2">
              <li>Join existing service projects</li>
              <li>Propose new service initiatives</li>
              <li>Volunteer as a project coordinator</li>
              <li>Contribute resources or supplies</li>
              <li>Help with outreach and promotion</li>
            </ul>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Volunteer Now
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-neutral-100 transition-colors"
              >
                View Upcoming Projects
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 