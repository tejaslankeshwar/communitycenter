import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { ScrollReveal } from './client/ScrollReveal'

const programs = [
  {
    title: 'Interfaith Leadership Program',
    description: 'A comprehensive program designed to develop the next generation of interfaith leaders through workshops, mentorship, and hands-on experience.',
    image: 'https://communionhub.org/static/media/moments-1.ab7ff79bf394a244a0c7.jpg',
    link: '/programs/leadership',
  },
  {
    title: 'Sacred Spaces Tour',
    description: 'Experience guided visits to various places of worship, fostering understanding and appreciation of different faith traditions.',
    image: 'https://communionhub.org/static/media/moments-2.1ffdbef7fa235e0af2be.avif',
    link: '/programs/sacred-spaces',
  },
  {
    title: 'Community Service Initiative',
    description: 'Join faith communities working together on service projects that address local needs and build lasting relationships.',
    image: 'https://communionhub.org/static/media/moments-3.71fa7813105dddf86c48.avif',
    link: '/programs/community-service',
  },
]

export function FeaturedPrograms() {
  return (
    <section className="section-padding bg-neutral-50">
      <div className="container">
        <ScrollReveal>
          <div className="content-narrow text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 mb-4 text-xs font-medium bg-primary-50 text-primary-600 rounded-full">
              OUR PROGRAMS
            </span>
            <h2>
              Transformative Experiences
            </h2>
            <p className="text-content-center text-lg text-neutral-600">
              Discover our signature programs designed to foster understanding, build relationships, and create lasting impact.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid-auto-fit">
          {programs.map((program) => (
            <ScrollReveal key={program.title} width="100%">
              <div className="card card-hover h-full flex flex-col">
                <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-xl">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3>
                    {program.title}
                  </h3>
                  <p className="text-content text-neutral-600 flex-grow">
                    {program.description}
                  </p>
                  <Link
                    href={program.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mt-4 group"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
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