import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Our Mission & Vision
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Building bridges across faiths, fostering understanding, and creating a more connected world through meaningful interfaith dialogue and community engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary-50 rounded-xl flex items-center justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-neutral-600">
                <p>
                  Founded in 2023, Communion emerged from a vision to create a platform where people of different faiths could come together, share their perspectives, and build meaningful connections.
                </p>
                <p>
                  What started as small interfaith dialogue sessions has grown into a global community, hosting hundreds of events and touching thousands of lives across continents.
                </p>
                <p>
                  Today, we continue to expand our reach, innovate our approach, and strengthen our commitment to fostering understanding and respect across faith traditions.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="/images/about/story.jpg"
                alt="Our journey"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-neutral-600">
              Dedicated individuals working together to build bridges across faiths and foster meaningful connections.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-primary-900">
                  {member.name}
                </h3>
                <p className="text-sm text-neutral-600 mb-2">{member.role}</p>
                <p className="text-sm text-neutral-500">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
              Our Partners
            </h2>
            <p className="text-neutral-600">
              Working together with leading organizations to create positive change.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-20">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Be part of our mission to build bridges and foster understanding across faith communities.
            </p>
            <Link
              href="/events"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-primary-900 bg-white rounded-lg hover:bg-neutral-100 transition-colors"
            >
              Get Involved
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    title: 'Inclusivity',
    description: 'Creating spaces where every faith tradition is respected and valued, ensuring all voices are heard and appreciated.',
    icon: (
      <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0a9 9 0 100-18 9 9 0 000 18zM9 10l3 3m0 0l3-3m-3 3V7" />
      </svg>
    ),
  },
  {
    title: 'Understanding',
    description: 'Promoting dialogue and education to build bridges of understanding between different faith communities.',
    icon: (
      <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Impact',
    description: 'Making meaningful change through community engagement, service projects, and collaborative initiatives.',
    icon: (
      <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

const team = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Founder & Executive Director',
    description: 'Interfaith dialogue expert with 15+ years of experience',
    image: '/images/team/sarah.jpg',
  },
  {
    name: 'Raj Kumar',
    role: 'Community Relations',
    description: 'Building bridges between diverse faith communities',
    image: '/images/team/raj.jpg',
  },
  {
    name: 'David Cohen',
    role: 'Programs Director',
    description: 'Developing impactful interfaith initiatives',
    image: '/images/team/david.jpg',
  },
  {
    name: 'Aisha Rahman',
    role: 'Education Coordinator',
    description: 'Creating inclusive learning experiences',
    image: '/images/team/aisha.jpg',
  },
]

const partners = [
  {
    name: 'Global Interfaith Network',
    logo: '/images/partners/partner1.png',
  },
  {
    name: 'Unity Foundation',
    logo: '/images/partners/partner2.png',
  },
  {
    name: 'Peace Initiative',
    logo: '/images/partners/partner3.png',
  },
  {
    name: 'Community Bridge Builders',
    logo: '/images/partners/partner4.png',
  },
] 