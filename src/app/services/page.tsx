import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, GraduationCap, Star, Users, Target, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { CalendlyButton } from '@/components/CalendlyButton';

export const metadata: Metadata = {
  title: 'Our Services | RiseOn Education | K-12 Tutoring & Admissions Counseling in Toronto',
  description:
    'Comprehensive K-12 academic enrichment, private school admissions consulting, U.S. college counseling, and executive function coaching for ambitious students in the Greater Toronto Area.',
  keywords:
    'K-12 tutoring services Toronto, academic enrichment, admissions counseling, college counseling, executive function coaching, academic supervision, Markham tutoring',
  openGraph: {
    title: 'Our Services | RiseOn Education',
    description: 'Personalized academic enrichment and admissions guidance for ambitious students.',
    url: 'https://riseon-education.com/services',
    type: 'website',
  },
  robots: 'index, follow',
};

function BulletList({ items }: { items: string[] }) {
  return (
    <div className='space-y-2'>
      {items.map((item, index) => (
        <div key={index} className='flex items-start space-x-3'>
          <CheckCircle className='w-5 h-5 text-riseon-green flex-shrink-0 mt-0.5' />
          <span className='text-gray-700'>{item}</span>
        </div>
      ))}
    </div>
  );
}

function ArrowList({ items }: { items: string[] }) {
  return (
    <div className='space-y-2'>
      {items.map((item, index) => (
        <div key={index} className='flex items-start space-x-2'>
          <ArrowRight className='w-4 h-4 text-riseon-green flex-shrink-0 mt-1' />
          <span className='text-sm text-gray-700'>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className='min-h-screen bg-white'>
      <NavBar />

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-riseon-cream to-white py-20 lg:py-28'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <Badge className='bg-riseon-green text-white mb-6'>Our Services</Badge>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-riseon-green mb-6 leading-tight'>
              Comprehensive Academic{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-riseon-green to-green-700'>Excellence</span>
            </h1>
            <p className='text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed'>
              At RiseOn Education, we help students build the academic skills, intellectual curiosity, and confidence needed to thrive in school and beyond. Our programs are
              designed for ambitious students and families seeking personalized, high-quality educational support.
            </p>
          </div>
        </div>
      </section>

      {/* K–12 Academic Enrichment */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center space-x-4 mb-8'>
            <div className='w-16 h-16 bg-riseon-green rounded-xl flex items-center justify-center flex-shrink-0'>
              <BookOpen className='w-8 h-8 text-white' />
            </div>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold text-riseon-green'>K–12 Academic Enrichment</h2>
            </div>
          </div>
          <p className='text-lg text-gray-700 mb-8 max-w-4xl leading-relaxed'>
            At RiseOn, we believe academic success begins with strong foundational skills, intellectual curiosity, and a love of learning. Our enrichment programs are designed to
            help students build confidence, develop critical thinking, and reach their full potential both inside and outside the classroom.
          </p>

          <div className='grid lg:grid-cols-2 gap-12 mb-12'>
            <div>
              <h3 className='text-xl font-semibold text-riseon-green mb-4'>Areas of Support</h3>
              <BulletList
                items={[
                  'Subject Tutoring (English, Math, Science, French, and Humanities)',
                  'IB / AP Tutoring in social sciences, humanities, and science',
                  'Literacy Development & Academic Writing',
                  'Reading Comprehension & Literary Analysis',
                  'Public Speaking & Communication Skills',
                ]}
              />
            </div>
            <div className='space-y-8'>
              <div>
                <h3 className='text-xl font-semibold text-riseon-green mb-4'>Academic Competition Coaching</h3>
                <BulletList
                  items={[
                    'John Locke Essay Competition',
                    'Harvard International Review Academic Writing Contest',
                    'Waterloo Mathematics Competitions',
                    'AMC Mathematics Competitions',
                  ]}
                />
              </div>
              <div>
                <h3 className='text-xl font-semibold text-riseon-green mb-4'>Standardized Test Preparation</h3>
                <BulletList items={['SAT', 'ACT', 'SSAT', 'AP Examinations']} />
              </div>
            </div>
          </div>

          <Card className='border-riseon-green border-2 shadow-lg bg-riseon-cream/20'>
            <CardHeader className='p-8'>
              <div className='flex items-center space-x-3 mb-4'>
                <Sparkles className='w-6 h-6 text-riseon-green' />
                <CardTitle className='text-xl text-riseon-green'>Featured Program: Young Shakespeare</CardTitle>
              </div>
              <CardContent className='pl-0'>
                <p className='text-gray-700 leading-relaxed'>
                  Designed for students ages 6–12, our Young Shakespeare Program combines literary appreciation and drama-based learning to introduce children to some of the
                  world&apos;s greatest stories. Students explore Shakespeare&apos;s characters, themes, and language before bringing the plays to life through performance and a
                  final live showcase.
                </p>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* U.S. & Canada Private School Admissions */}
      <section className='py-20 bg-riseon-cream/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center space-x-4 mb-8'>
            <div className='w-16 h-16 bg-riseon-green rounded-xl flex items-center justify-center flex-shrink-0'>
              <GraduationCap className='w-8 h-8 text-white' />
            </div>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold text-riseon-green'>U.S. & Canada Private School Admissions Consulting</h2>
            </div>
          </div>
          <p className='text-lg text-gray-700 mb-8 max-w-4xl leading-relaxed'>
            We guide families through every stage of the independent school admissions process, helping students present their strongest applications and confidently navigate
            interviews, assessments, and admissions decisions.
          </p>

          <div className='grid lg:grid-cols-2 gap-12'>
            <div>
              <h3 className='text-xl font-semibold text-riseon-green mb-4'>Services Include</h3>
              <BulletList
                items={[
                  'School Selection & Application Strategy',
                  'Admissions Assessments & Interview Preparation',
                  'SSAT Preparation',
                  'Student Profiling & Positioning',
                  'Application Review & Support',
                  'Long-Term Academic Planning',
                ]}
              />
            </div>
            <div className='bg-white rounded-2xl p-8 shadow-lg'>
              <p className='text-gray-700 leading-relaxed'>
                We have experience supporting students applying to many of Canada&apos;s leading independent schools, including UCC, Crescent, TFS, Havergal, Appleby, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrichment & Profile Building */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center space-x-4 mb-8'>
            <div className='w-16 h-16 bg-riseon-green rounded-xl flex items-center justify-center flex-shrink-0'>
              <Star className='w-8 h-8 text-white' />
            </div>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold text-riseon-green'>Enrichment & Profile Building Programs</h2>
            </div>
          </div>
          <p className='text-lg text-gray-700 mb-8 max-w-4xl leading-relaxed'>
            Exceptional university applicants are distinguished not only by their grades, but also by their initiative, intellectual curiosity, and ability to create meaningful
            impact. Our enrichment programs help students explore their interests while building a compelling academic profile.
          </p>

          <div className='grid lg:grid-cols-2 gap-12 mb-12'>
            <div>
              <h3 className='text-xl font-semibold text-riseon-green mb-4'>Programs Include</h3>
              <BulletList
                items={[
                  'Passion Projects',
                  'Academic Research Opportunities',
                  'Entrepreneurship Programs',
                  'Competition-Based Research & Writing Projects',
                  'Leadership Development Initiatives',
                ]}
              />
            </div>
            <Card className='border-riseon-cream shadow-lg'>
              <CardHeader className='p-8'>
                <Badge className='bg-riseon-cream text-riseon-green mb-4 w-fit'>Coming Soon</Badge>
                <CardTitle className='text-xl text-riseon-green mb-4'>AI Courses & Project-Based Learning Programs</CardTitle>
                <CardContent className='pl-0'>
                  <p className='text-gray-700 leading-relaxed'>
                    Students will have opportunities to explore artificial intelligence, machine learning, and real-world applications of emerging technologies through structured
                    coursework and mentor-guided projects.
                  </p>
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* U.S. College Counseling */}
      <section className='py-20 bg-riseon-cream/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center space-x-4 mb-8'>
            <div className='w-16 h-16 bg-riseon-green rounded-xl flex items-center justify-center flex-shrink-0'>
              <Users className='w-8 h-8 text-white' />
            </div>
            <div>
              <h2 className='text-2xl md:text-3xl font-bold text-riseon-green'>U.S. College Counseling</h2>
            </div>
          </div>
          <p className='text-lg text-gray-700 mb-8 max-w-4xl leading-relaxed'>
            Our college counseling program helps students navigate the increasingly competitive U.S. admissions landscape through personalized, long-term planning and mentorship.
          </p>

          <div className='grid lg:grid-cols-2 gap-12'>
            <div>
              <h3 className='text-xl font-semibold text-riseon-green mb-4'>Services Include</h3>
              <BulletList
                items={[
                  'University List Building',
                  'Academic & Extracurricular Planning',
                  'Personal Branding & Positioning',
                  'Summer Program Strategy',
                  'Research & Competition Planning',
                  'Personal Statement & Supplemental Essay Coaching',
                  'Interview Preparation',
                  'Application Review & Submission Support',
                ]}
              />
            </div>
            <div className='bg-white rounded-2xl p-8 shadow-lg flex items-center'>
              <p className='text-gray-700 leading-relaxed italic'>
                Our goal is not simply to help students gain admission, but to help them develop into thoughtful, accomplished, and intellectually engaged young adults.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Specialized Programs */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='bg-riseon-cream text-riseon-green mb-4'>Specialized Programs</Badge>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-4'>Additional Specialized Programs</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              Helping students build the habits, discipline, and executive functioning skills that drive long-term academic success.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8'>
            <Card className='border-riseon-cream shadow-lg'>
              <CardHeader className='p-8'>
                <div className='flex items-center space-x-4 mb-4'>
                  <div className='w-12 h-12 bg-riseon-green rounded-lg flex items-center justify-center'>
                    <Target className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <CardTitle className='text-xl text-riseon-green'>Executive Function & Study Habits</CardTitle>
                    <p className='text-sm text-gray-600 mt-1'>Building the foundation for lifelong academic success</p>
                  </div>
                </div>
                <CardContent className='pl-0'>
                  <p className='text-gray-700 mb-4'>
                    Develop the organizational skills, self-discipline, and learning habits that help students become independent, confident learners.
                  </p>
                  <ArrowList
                    items={[
                      'Time management and prioritization',
                      'Goal setting and accountability',
                      'Organization and planning skills',
                      'Effective study habits and routines',
                      'Independent learning and self-management',
                    ]}
                  />
                </CardContent>
              </CardHeader>
            </Card>

            <Card className='border-riseon-cream shadow-lg'>
              <CardHeader className='p-8'>
                <div className='flex items-center space-x-4 mb-4'>
                  <div className='w-12 h-12 bg-riseon-green rounded-lg flex items-center justify-center'>
                    <Star className='w-6 h-6 text-white' />
                  </div>
                  <div>
                    <CardTitle className='text-xl text-riseon-green'>1:1 Academic Supervision</CardTitle>
                    <p className='text-sm text-gray-600 mt-1'>Personalized guidance, accountability, and mentorship</p>
                  </div>
                </div>
                <CardContent className='pl-0'>
                  <p className='text-gray-700 mb-4'>
                    Our flagship Academic Supervision Program helps students stay organized, develop strong learning habits, and take ownership of their academic journey.
                  </p>
                  <ArrowList
                    items={[
                      'Weekly academic planning and check-ins',
                      'Assignment and deadline management',
                      'Progress monitoring and accountability',
                      'Parent communication and updates',
                      'Long-term academic strategy and course planning',
                    ]}
                  />
                </CardContent>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-20 bg-riseon-green text-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-6'>Ready to Start Your Journey?</h2>
          <p className='text-xl mb-8 text-white/90 max-w-3xl mx-auto'>Join the students who have transformed their academic potential with RiseOn Education.</p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <CalendlyButton size='lg' className='bg-white text-riseon-green hover:bg-gray-100 px-8 py-3'>
              Book Free Consultation
            </CalendlyButton>
            <Link href='/#contact'>
              <button className='inline-flex items-center justify-center rounded-md border border-white bg-transparent text-white hover:bg-white/10 px-8 py-3 text-lg font-medium transition-colors'>
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
