import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, GraduationCap, MessageCircle, Target, Star, MapPin, Phone, Mail, CheckCircle, Lightbulb, Award } from 'lucide-react';
import Link from 'next/link';
import { NavBar } from '@/components/NavBar';
import { Footer } from '@/components/Footer';
import { CalendlyButton } from '@/components/CalendlyButton';

const whyChooseItems = [
  '10+ Years of Educational Experience',
  'Students from Leading GTA Private Schools',
  'Personalized Learning Plans',
  'Research, Competitions & Enrichment Opportunities',
  'Private School & University Admissions Expertise',
  'High-Touch Mentorship & Ongoing Support',
];

export default function Home() {
  return (
    <div className='min-h-screen bg-white'>
      <NavBar />

      {/* Hero Section */}
      <section className='bg-gradient-to-br from-riseon-cream to-white py-20 lg:py-28'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-riseon-green mb-6 leading-tight'>
                Empowering Students to Excel in{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-riseon-green to-green-700'>School, University, and Beyond</span>
              </h1>
              <p className='text-lg md:text-xl text-gray-700 mb-8 leading-relaxed'>
                Personalized academic enrichment, admissions consulting, and mentorship for ambitious students across the Greater Toronto Area.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <CalendlyButton size='lg' className='bg-riseon-green hover:bg-riseon-green/90 text-white px-8 py-3'>
                  Book Free Consultation
                </CalendlyButton>
                <Button size='lg' variant='outline' className='border-riseon-green text-riseon-green hover:bg-riseon-green hover:text-white px-8 py-3'>
                  <Link href='/services'>Learn More</Link>
                </Button>
              </div>
            </div>
            <div className='relative'>
              <div className='bg-riseon-green rounded-2xl p-6 shadow-2xl'>
                <div className='w-full h-64 bg-riseon-cream rounded-xl flex items-center justify-center p-6'>
                  <Image
                    src='/home/full-logo-opposite-transparent-2.png'
                    alt='RiseOn Education'
                    width={300}
                    height={200}
                    className='object-contain max-w-full max-h-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id='services' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='bg-riseon-cream text-riseon-green mb-4 hover:bg-riseon-cream hover:text-riseon-green'>Our Services</Badge>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-4'>Comprehensive Academic Excellence</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>We offer personalized academic support designed to unlock your full potential and guide you to excellence.</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <Card className='border-riseon-cream hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-riseon-green rounded-lg flex items-center justify-center mb-4'>
                  <BookOpen className='w-6 h-6 text-white' />
                </div>
                <CardTitle className='text-riseon-green'>K–12 Academic Enrichment</CardTitle>
                <CardDescription>Build strong foundations, critical thinking, and a love of learning across all subjects.</CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-riseon-cream hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-riseon-green rounded-lg flex items-center justify-center mb-4'>
                  <GraduationCap className='w-6 h-6 text-white' />
                </div>
                <CardTitle className='text-riseon-green'>Private School Admissions</CardTitle>
                <CardDescription>Expert guidance through every stage of the independent school admissions process.</CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-riseon-cream hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-riseon-green rounded-lg flex items-center justify-center mb-4'>
                  <Star className='w-6 h-6 text-white' />
                </div>
                <CardTitle className='text-riseon-green'>Enrichment & Profile Building</CardTitle>
                <CardDescription>Research, competitions, and passion projects to build a compelling academic profile.</CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-riseon-cream hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-riseon-green rounded-lg flex items-center justify-center mb-4'>
                  <Users className='w-6 h-6 text-white' />
                </div>
                <CardTitle className='text-riseon-green'>U.S. College Counseling</CardTitle>
                <CardDescription>Personalized, long-term planning and mentorship for competitive U.S. admissions.</CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-riseon-cream hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-riseon-green rounded-lg flex items-center justify-center mb-4'>
                  <Target className='w-6 h-6 text-white' />
                </div>
                <CardTitle className='text-riseon-green'>Executive Function Coaching</CardTitle>
                <CardDescription>Develop organizational skills, study habits, and self-discipline for lifelong success.</CardDescription>
              </CardHeader>
            </Card>

            <Card className='border-riseon-cream hover:shadow-lg transition-shadow'>
              <CardHeader>
                <div className='w-12 h-12 bg-riseon-green rounded-lg flex items-center justify-center mb-4'>
                  <MessageCircle className='w-6 h-6 text-white' />
                </div>
                <CardTitle className='text-riseon-green'>1:1 Academic Supervision</CardTitle>
                <CardDescription>Personalized guidance, accountability, and mentorship for your academic journey.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About RiseOn Education Section */}
      <section id='about' className='py-20 bg-riseon-cream/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto'>
            <Badge className='bg-riseon-green text-white mb-4'>About RiseOn Education</Badge>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-8'>Great Education Goes Beyond Grades</h2>
            <div className='space-y-6 text-lg text-gray-700 leading-relaxed'>
              <p>At RiseOn Education, we believe that great education goes beyond grades.</p>
              <p>
                Founded by experienced educators with over a decade of experience in academic enrichment, private school admissions, and U.S. college counseling, RiseOn provides
                personalized mentorship and long-term guidance to help students thrive both academically and personally.
              </p>
              <p>
                We work with students from many of the Greater Toronto Area&apos;s leading private schools, helping them build strong academic foundations, develop critical
                thinking and communication skills, explore meaningful opportunities, and prepare for future success.
              </p>
              <p>
                Whether a student is strengthening core academic skills, pursuing research and enrichment opportunities, preparing for standardized tests, or navigating the
                admissions process, our goal remains the same: To help students become confident, capable, and intellectually curious lifelong learners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <Badge className='bg-riseon-cream text-riseon-green mb-4'>Our Philosophy</Badge>
              <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-6'>Education Beyond the Classroom</h2>
              <div className='space-y-6 text-lg text-gray-700 leading-relaxed'>
                <p>
                  We believe education is not simply about achieving higher grades. True success comes from developing strong communication skills, intellectual curiosity, critical
                  thinking, and the confidence to pursue meaningful opportunities.
                </p>
                <p>
                  Our goal is to help students become independent learners who are prepared not only for their next academic milestone, but for lifelong success.
                </p>
              </div>
            </div>
            <div className='bg-riseon-cream/50 rounded-2xl p-8 shadow-xl'>
              <div className='w-16 h-16 bg-riseon-green rounded-full flex items-center justify-center mb-6'>
                <Lightbulb className='w-8 h-8 text-white' />
              </div>
              <blockquote className='text-lg italic text-gray-700 leading-relaxed'>
                &quot;True success comes from developing strong communication skills, intellectual curiosity, critical thinking, and the confidence to pursue meaningful
                opportunities.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Why Families Choose RiseOn Section */}
      <section className='py-20 bg-riseon-cream/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='bg-riseon-green text-white mb-4'>Why RiseOn</Badge>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-4'>Why Families Choose RiseOn</h2>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20'>
            {whyChooseItems.map((item, index) => (
              <div key={index} className='flex items-start space-x-3 bg-white rounded-xl p-6 shadow-md'>
                <CheckCircle className='w-6 h-6 text-riseon-green flex-shrink-0 mt-0.5' />
                <span className='text-gray-700 font-medium'>{item}</span>
              </div>
            ))}
          </div>

          {/* Student Success Stories */}
          <div className='text-center mb-12'>
            <Badge className='bg-riseon-cream text-riseon-green mb-4'>Student Success Stories</Badge>
            <h3 className='text-2xl md:text-3xl font-bold text-riseon-green'>Real Results, Real Impact</h3>
          </div>

          <div className='grid lg:grid-cols-2 gap-8'>
            {/* Case Study A */}
            <Card className='border-riseon-cream shadow-lg'>
              <CardHeader className='p-8'>
                <div className='flex items-center space-x-3 mb-4'>
                  <div className='w-10 h-10 bg-riseon-green rounded-lg flex items-center justify-center'>
                    <Award className='w-5 h-5 text-white' />
                  </div>
                  <CardTitle className='text-riseon-green text-xl'>Case Study A: IB English Success</CardTitle>
                </div>
                <div className='space-y-4 text-gray-700'>
                  <div>
                    <p className='font-semibold text-riseon-green mb-1'>Student Profile</p>
                    <p className='text-sm'>Grade 10 Student • Toronto French School</p>
                  </div>
                  <div>
                    <p className='font-semibold text-riseon-green mb-1'>Challenge</p>
                    <p className='text-sm leading-relaxed'>
                      The student was struggling to consistently achieve top marks in IB English assessments and needed support with literary analysis, textual interpretation, and
                      academic writing.
                    </p>
                  </div>
                  <div>
                    <p className='font-semibold text-riseon-green mb-1'>Our Approach</p>
                    <p className='text-sm mb-2'>RiseOn paired the student with an experienced IB English instructor and focused on:</p>
                    <ul className='text-sm space-y-1 list-disc list-inside'>
                      <li>Literary analysis and close reading skills</li>
                      <li>Constructing sophisticated arguments</li>
                      <li>Integrating textual evidence effectively</li>
                      <li>Improving essay organization and clarity</li>
                      <li>Understanding IB assessment expectations and rubrics</li>
                    </ul>
                  </div>
                  <div>
                    <p className='font-semibold text-riseon-green mb-1'>Outcome</p>
                    <p className='text-sm mb-2'>After just six tutoring sessions, the student achieved assessment scores of:</p>
                    <p className='text-2xl font-bold text-riseon-green mb-2'>8 / 8 / 8 / 8</p>
                    <p className='text-sm leading-relaxed'>
                      Beyond the grades, the student demonstrated stronger analytical thinking, greater confidence when discussing literature, and a more structured approach to
                      academic writing.
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Case Study B */}
            <Card className='border-riseon-cream shadow-lg'>
              <CardHeader className='p-8'>
                <div className='flex items-center space-x-3 mb-4'>
                  <div className='w-10 h-10 bg-riseon-green rounded-lg flex items-center justify-center'>
                    <Award className='w-5 h-5 text-white' />
                  </div>
                  <CardTitle className='text-riseon-green text-xl'>Case Study B: 17-Point Improvement in English</CardTitle>
                </div>
                <div className='space-y-4 text-gray-700'>
                  <div>
                    <p className='font-semibold text-riseon-green mb-1'>Student Profile</p>
                    <p className='text-sm'>Grade 7 Student</p>
                  </div>
                  <div>
                    <p className='font-semibold text-riseon-green mb-1'>Challenge</p>
                    <p className='text-sm leading-relaxed'>
                      The student entered the program with significant gaps in foundational English skills, particularly vocabulary, grammar, and written expression. These
                      challenges often led to frustration and a lack of confidence when completing school assignments, which in turn affected academic performance.
                    </p>
                  </div>
                  <div>
                    <p className='font-semibold text-riseon-green mb-1'>Our Approach</p>
                    <p className='text-sm leading-relaxed'>
                      Rather than focusing solely on schoolwork, we began by strengthening the student&apos;s foundation through targeted instruction in vocabulary, grammar, and
                      sentence construction. As these core skills improved, we gradually introduced more advanced reading comprehension and writing activities designed to develop
                      critical thinking and communication skills. Throughout the process, we placed a strong emphasis on building confidence and creating positive learning experiences,
                      helping the student develop a more proactive and independent approach to English learning.
                    </p>
                  </div>
                  <div>
                    <p className='font-semibold text-riseon-green mb-1'>Outcome</p>
                    <p className='text-sm mb-2'>Within six months, the student&apos;s school English average improved from:</p>
                    <p className='text-2xl font-bold text-riseon-green mb-2'>77% → 94%</p>
                    <p className='text-sm leading-relaxed'>
                      More importantly, the student developed significantly greater confidence in their English abilities. As their foundational skills strengthened and their
                      self-confidence grew, they became more willing to participate in class, tackle challenging assignments, and express their ideas effectively—contributing directly
                      to their improved academic performance.
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id='contact' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='bg-riseon-cream text-riseon-green mb-4 hover:bg-riseon-cream hover:text-riseon-green'>Get In Touch</Badge>
            <h2 className='text-3xl md:text-4xl font-bold text-riseon-green mb-4'>Ready to Rise with Us?</h2>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>Take the first step towards academic excellence. Contact us today to schedule your free consultation.</p>
          </div>

          <div className='grid md:grid-cols-2 gap-12 items-stretch'>
            <div className='flex flex-col'>
              <h3 className='text-2xl font-bold text-riseon-green mb-6'>Contact Information</h3>
              <div className='space-y-6'>
                <div className='flex items-center'>
                  <MapPin className='w-5 h-5 text-riseon-green mr-3 flex-shrink-0' />
                  <div>
                    <p className='font-semibold text-gray-900'>Address</p>
                    <p className='text-gray-600'>130 Esna Park Drive, Unit 2B, Markham, ON</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <Phone className='w-5 h-5 text-riseon-green mr-3 flex-shrink-0' />
                  <div>
                    <p className='font-semibold text-gray-900'>Phone</p>
                    <p className='text-gray-600'>905-205-2295</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <Mail className='w-5 h-5 text-riseon-green mr-3 flex-shrink-0' />
                  <div>
                    <p className='font-semibold text-gray-900'>Email</p>
                    <p className='text-gray-600'>contact@riseoneducation.com</p>
                  </div>
                </div>
              </div>
              <div className='mt-auto pt-8'>
                <CalendlyButton className='w-full bg-riseon-green hover:bg-riseon-green/90 text-white py-3'>Book Free Consultation</CalendlyButton>
              </div>
            </div>

            <div className='flex flex-col'>
              <div className='bg-white rounded-xl shadow-md overflow-hidden border border-riseon-cream flex flex-col flex-1'>
                <div className='bg-riseon-green px-4 py-3'>
                  <h4 className='text-white font-semibold text-sm'>Find Us</h4>
                </div>
                <div className='relative flex-1 min-h-64'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.8844444444444!2d-79.3791!3d43.8561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d39c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2s130%20Esna%20Park%20Dr%2C%20Markham%2C%20ON!5e0!3m2!1sen!2sca!4v1234567890'
                    className='w-full h-full border-0 absolute inset-0'
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    title='RiseOn Education Location - 130 Esna Park Drive, Unit 2B, Markham, ON'
                  ></iframe>
                </div>
                <div className='px-4 py-3 bg-riseon-cream/30'>
                  <p className='text-sm text-gray-600'>
                    <MapPin className='w-4 h-4 inline mr-1 text-riseon-green' />
                    Unit 2B, 130 Esna Park Drive, Markham
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
