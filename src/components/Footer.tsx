import { MailIcon, PhoneIcon } from 'lucide-react';
import React from 'react';

export function Footer() {
  return (
    <footer className='bg-riseon-green text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid md:grid-cols-3 gap-8'>
          <div>
            <div className='flex items-center space-x-3 mb-4'>
              <div>
                <h3 className='text-xl font-bold'>RiseOn Education</h3>
                <p className='text-sm text-white/80'>From Pages to Possibilities</p>
              </div>
            </div>
            <p className='text-white/80'>Personalized Academic Enrichment & Admissions Guidance for Ambitious Students</p>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>Services</h4>
            <ul className='space-y-2 text-white/80'>
              <li>K–12 Academic Enrichment</li>
              <li>U.S. & Canada Private School Admissions Consulting</li>
              <li>Enrichment & Profile Building Programs</li>
              <li>U.S. College Counseling</li>
              <li>Academic Supervision & Executive Function Coaching</li>
            </ul>
          </div>

          <div>
            <h4 className='text-lg font-semibold mb-4'>Contact</h4>
            <div className='space-y-2 text-white/80'>
              <span>130 Esna Park Drive, Unit 2B | </span>
              <span>Markham, ON | </span>
              <span>Toronto Area</span>
            </div>
            <div className='space-y-2 text-white/80 mt-5'>
              <p>
                <PhoneIcon className='inline-block mr-2' /> Phone: 905-205-2295
              </p>
              <p>
                <MailIcon className='inline-block mr-2' /> Email: contact@riseoneducation.com
              </p>
            </div>
          </div>
        </div>

        <div className='border-t border-white/20 mt-12 pt-8 text-center text-white/60'>
          <p>&copy; 2025 RiseOn Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
