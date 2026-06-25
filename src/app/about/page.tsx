'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { CalendlyButton } from '@/components/CalendlyButton';
import { teamMembers, TeamMemberCard } from '@/components/TeamMemberCard';

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-white'>
      <NavBar />

      {/* Hero Section with Background Image */}
      <section
        className='relative py-20 lg:py-28 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: 'url(/about/hero.webp)',
        }}
      >
        <div className='absolute inset-0 bg-black/40'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10'>
          <div className='text-center'>
            <Badge className='bg-white/90 backdrop-blur-sm text-riseon-green mb-6 border border-white/20'>Meet the Team</Badge>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg'>
              World-Class Educators.{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 drop-shadow-lg'>Personalized Mentorship.</span>
            </h1>
            <p className='text-lg md:text-xl text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-md'>
              RiseOn brings together a diverse team of educators, researchers, and academic mentors from top universities and leading schools. From literacy development and STEM
              education to admissions consulting and academic research, our team provides students with the expertise and guidance needed to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='bg-riseon-green text-white mb-4'>Our Educators</Badge>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-4'>Meet Our Team</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Experienced educators and specialists dedicated to helping every student reach their full potential.
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-riseon-green text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>Ready to Start Your Journey?</h2>
          <p className='text-xl mb-8 text-white/90 max-w-3xl mx-auto'>Connect with our team and discover how personalized mentorship can transform your academic journey.</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <CalendlyButton size='lg' className='bg-white text-riseon-green hover:bg-gray-100 px-8 py-3'>
              Book Free Consultation
            </CalendlyButton>
            <Link href='/services'>
              <Button size='lg' variant='outline' className='border-white bg-white text-riseon-green px-8 py-3'>
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
