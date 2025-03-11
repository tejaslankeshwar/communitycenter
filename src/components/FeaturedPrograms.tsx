import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { ScrollReveal } from './client/ScrollReveal'

const programs = [
  {
    title: 'Interfaith Leadership Program',
    description: 'A comprehensive program designed to develop the next generation of interfaith leaders through workshops, mentorship, and hands-on experience.',
    image: '/images/programs/leadership.jpg',
    link: '/programs/leadership',
  },
  {
    title: 'Sacred Spaces Tour',
    description: 'Experience guided visits to various places of worship, fostering understanding and appreciation of different faith traditions.',
    image: '/images/programs/sacred-spaces.jpg',
    link: '/programs/sacred-spaces',
  },
  {
    title: 'Community Service Initiative',
    description: 'Join faith communities working together on service projects that address local needs and build lasting relationships.',
    image: '/images/programs/community-service.jpg',
    link: '/programs/community-service',
  },
]

export function FeaturedPrograms() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium bg-primary-50 text-primary-600 rounded-full">
              OUR PROGRAMS
            </span>
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Transformative Experiences
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Discover our signature programs designed to foster understanding, build relationships, and create lasting impact.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program) => (
            <ScrollReveal key={program.title}>
              <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="relative h-48 rounded-t-xl overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {program.description}
                  </p>
                  <Link
                    href={program.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <Link
              href="/programs"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              View All Programs
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
} 