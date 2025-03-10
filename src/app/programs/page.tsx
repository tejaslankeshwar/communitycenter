'use client'

import Link from 'next/link'
import Image from 'next/image'

const programs = [
  {
    id: 'interfaith-leadership',
    title: 'Interfaith Leadership Program',
    description: 'A comprehensive program designed to develop the next generation of interfaith leaders through workshops, mentorship, and hands-on experience.',
    image: 'https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738152998033',
  },
  {
    id: 'sacred-spaces',
    title: 'Sacred Spaces Tour',
    description: 'Experience guided visits to various places of worship, fostering understanding and appreciation of different faith traditions.',
    image: 'https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1737999482266',
  },
  {
    id: 'community-service',
    title: 'Community Service Initiative',
    description: 'Join faith communities working together on service projects that address local needs and build lasting relationships.',
    image: 'https://res.cloudinary.com/dxqv8mbpg/image/upload/f_auto,q_auto/v1/event-images/event_1738151964428',
  }
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Discover our signature programs designed to foster understanding, build relationships, and create lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {programs.map((program) => (
              <div key={program.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 relative h-64 md:h-auto">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h2 className="text-2xl font-bold text-primary-900 mb-4">
                      {program.title}
                    </h2>
                    <p className="text-neutral-600 mb-6">
                      {program.description}
                    </p>
                    <Link
                      href={`/programs/${program.id}`}
                      className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 