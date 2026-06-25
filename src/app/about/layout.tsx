import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet the Team | RiseOn Education | Expert K-12 Tutoring Team in Toronto',
  description:
    'Meet the world-class educators and academic mentors at RiseOn Education. Our diverse team provides personalized mentorship in literacy, STEM, admissions consulting, and academic research.',
  keywords: 'RiseOn Education team, Toronto tutoring team, education mentors, K-12 tutors, admissions counselors, Markham educators',
  openGraph: {
    title: 'Meet the Team | RiseOn Education',
    description: 'World-class educators and personalized mentorship from top universities and leading schools.',
    url: 'https://riseon-education.com/about',
    type: 'website',
  },
  robots: 'index, follow',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
