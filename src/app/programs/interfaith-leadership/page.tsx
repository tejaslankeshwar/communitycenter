'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function InterfaithLeadershipPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative h-[400px]">
        <Image
          src="https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738152998033"
          alt="Interfaith Leadership Program"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Interfaith Leadership Program
              </h1>
              <p className="text-xl text-white/90">
                Developing the next generation of interfaith leaders
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
              Our Interfaith Leadership Program is designed to empower individuals with the knowledge, skills, and experiences needed to bridge religious and cultural divides in their communities. Through a combination of workshops, mentorship, and hands-on projects, participants develop the capacity to lead interfaith initiatives and foster meaningful dialogue.
            </p>
            <p className="text-neutral-600 mb-6">
              This comprehensive program brings together diverse participants from various faith traditions, creating a rich learning environment that promotes understanding, respect, and collaboration.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">Program Components</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Leadership Workshops</h3>
                <p className="text-neutral-600">
                  Monthly workshops covering topics such as interfaith dialogue, conflict resolution, and community organizing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Mentorship</h3>
                <p className="text-neutral-600">
                  One-on-one guidance from experienced interfaith leaders and religious scholars.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Community Projects</h3>
                <p className="text-neutral-600">
                  Design and implement interfaith initiatives that address community needs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-primary-900 mb-2">Networking</h3>
                <p className="text-neutral-600">
                  Connect with other emerging leaders and build lasting relationships across faith traditions.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">How to Apply</h2>
            <p className="text-neutral-600 mb-6">
              The Interfaith Leadership Program accepts applications twice a year. Candidates should demonstrate:
            </p>
            <ul className="list-disc list-inside text-neutral-600 mb-6 space-y-2">
              <li>Commitment to interfaith work and community service</li>
              <li>Leadership potential or experience</li>
              <li>Willingness to engage in meaningful dialogue with people of different faiths</li>
              <li>Ability to commit to the full program duration (6 months)</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Apply Now
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
} 