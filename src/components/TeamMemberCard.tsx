'use client';

import { useState } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import Image from 'next/image';

export interface TeamMember {
  name: string;
  title: string;
  image: string;
  description: string;
  expertise: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Aime Kayembe',
    title: 'French Specialist | OCT Certified Teacher',
    image: '/team/Aime\u0301.jpg',
    description:
      'Aime is a French educator currently pursuing a Ph.D. in K–12 Educational Leadership at the University of Calgary. He holds both a Bachelor\'s and Master\'s degree in Education from Trent University and teaches French at Lakefield College School, one of Ontario\'s leading boarding schools. As a certified DELF examiner, he helps students develop advanced language proficiency while building confidence in French communication and cultural understanding.',
    expertise: 'French (Core, Extended & Immersion), DELF Preparation, AP French, IB French',
  },
  {
    name: 'Daniel Pun',
    title: 'IB & Academic Enrichment Specialist | OCT Certified Teacher',
    image: '/team/Daniel.jpg',
    description:
      'Daniel holds a Master of Education and Bachelor of Education from Wilfrid Laurier University, as well as an Honours B.A. in English from the University of Toronto. With experience as an IB MYP Coordinator and curriculum leader, he specializes in helping students excel in academic writing, humanities, and interdisciplinary learning.',
    expertise: 'IB MYP/DP English, Humanities, Academic Writing, SSAT',
  },
  {
    name: 'Ryan Cook',
    title: 'SAT & Humanities Specialist',
    image: '/team/Ryan.jpg',
    description:
      'Ryan earned his M.A. in Philosophy from Princeton University and taught in the Department of Philosophy at UCLA for eight years. He has extensive experience teaching SAT, ACT, SSAT, and advanced humanities courses, helping students strengthen critical thinking, reading comprehension, and academic writing skills.',
    expertise: 'SAT, ACT, SSAT, OSSD / AP English, Philosophy, History, Academic Writing',
  },
  {
    name: 'Dr. Suzy Wang',
    title: 'Literacy Development Specialist',
    image: '/team/suzy.jpg',
    description:
      'Dr. Wang holds a Ph.D. in Linguistics from Wilfrid Laurier University and an M.Ed. from Boston University. With years of experience teaching students from diverse backgrounds, she specializes in literacy development, vocabulary acquisition, reading comprehension, and academic writing.',
    expertise: 'Reading & Writing Development, SSAT, Literary Analysis',
  },
  {
    name: 'Yashu Shi',
    title: 'ESL & Language Development Specialist',
    image: '/team/Yashu.jpg',
    description:
      'Yashu holds a Master\'s degree in Education from the University of Glasgow and is currently pursuing further studies in Curriculum and Pedagogy at the University of Toronto. She has extensive experience supporting multilingual learners and helping students develop confidence in reading, writing, and communication.',
    expertise: 'ESL, Literacy Development, TOEFL, IELTS',
  },
  {
    name: 'Tess Qiu',
    title: 'Biology & Life Sciences Specialist',
    image: '/team/Tess.JPG',
    description:
      'Tess holds a Master\'s degree in Education and is an IB-certified science educator. She has taught across public schools, private schools, and educational institutions in North America, helping students achieve outstanding results in AP Biology, IB Biology, and senior science courses.',
    expertise: 'AP Biology, IB Biology, A-Level Biology, OSSD Biology & Chemistry',
  },
  {
    name: 'Claire Buttery',
    title: 'English Literature & Writing Specialist',
    image: '/team/Claire.jpg',
    description:
      'Claire is currently pursuing a Ph.D. in English Literature at Western University and holds both a B.A. and M.A. in English from the University of Toronto. She specializes in literary analysis, academic writing, SSAT preparation, and helping students develop strong reading and communication skills.',
    expertise: 'OSSD & AP English Tutoring, English Literature, Reading Comprehension, Academic Writing, SSAT',
  },
  {
    name: 'Thomas Zhang',
    title: 'Math & Science Specialist',
    image: '/team/Thomas.jpg',
    description:
      'Thomas holds a Master\'s degree in Educational Psychology and brings over 20 years of teaching and curriculum leadership experience. He has worked extensively with AP, IB, OSSD, and international curricula, helping students achieve exceptional outcomes in mathematics and science.',
    expertise: 'AP Calculus, AP Physics, IB Math, IB Physics, SAT Math, OSSD Math & Science',
  },
];

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Card className='border-riseon-cream shadow-lg hover:shadow-xl transition-all duration-300 h-full'>
      <CardHeader className='text-center p-8'>
        <div className='w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-riseon-cream relative'>
          {!imageError ? (
            <Image
              src={member.image}
              alt={`${member.name} - ${member.title}`}
              width={128}
              height={128}
              className='w-full h-full object-cover object-[center_15%]'
              onError={() => setImageError(true)}
            />
          ) : (
            <div className='w-full h-full bg-gradient-to-br from-riseon-green to-green-700 flex items-center justify-center'>
              <span className='text-white text-xl font-bold'>
                {member.name
                  .split(' ')
                  .map((n: string) => n[0])
                  .join('')}
              </span>
            </div>
          )}
        </div>

        <CardTitle className='text-riseon-green text-xl mb-2'>{member.name}</CardTitle>
        <CardDescription className='text-gray-600 font-medium mb-4'>{member.title}</CardDescription>
        <p className='text-gray-700 text-sm leading-relaxed mb-4 text-left'>{member.description}</p>
        <div className='text-left pt-4 border-t border-gray-200'>
          <p className='text-sm font-semibold text-riseon-green mb-2'>Expertise:</p>
          <Badge className='bg-riseon-cream text-riseon-green text-xs font-normal whitespace-normal text-left leading-relaxed'>
            {member.expertise}
          </Badge>
        </div>
      </CardHeader>
    </Card>
  );
}
