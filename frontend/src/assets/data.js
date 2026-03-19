import {
  BadgeCheck,
  BrainCircuit,
  Cable,
  CloudCog,
  Code2,
  Cpu,
  Globe,
  GraduationCap,
  Headset,
  Layers3,
  MonitorSmartphone,
  Network,
  Rocket,
  ShieldCheck,
  Wrench
} from 'lucide-react';

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Training', path: '/training' },
  { name: 'IT Solutions', path: '/solutions' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' }
];

export const services = [
  {
    title: 'Web Development',
    description: 'Responsive business websites and portals engineered for speed, trust, and conversion.',
    icon: Globe
  },
  {
    title: 'Software Development',
    description: 'Custom applications tailored to streamline workflows, data visibility, and operations.',
    icon: Code2
  },
  {
    title: 'IT Support',
    description: 'Proactive infrastructure support, issue resolution, and managed IT assistance.',
    icon: Headset
  },
  {
    title: 'Product Development',
    description: 'Scalable digital product design and engineering from concept validation to release.',
    icon: Rocket
  }
];

export const technologies = [
  'Python',
  'AWS',
  'Azure',
  'React',
  'Node.js',
  'MongoDB',
  'Cyber Security',
  'DevOps',
  'Web Development',
  'Networking'
];

export const testimonials = [
  {
    name: 'Raghav Menon',
    role: 'Operations Director, NexaCore',
    quote: 'Xceller helped us modernize our internal platforms and reduce turnaround time across teams.'
  },
  {
    name: 'Priya Sharma',
    role: 'HR Lead, TechBridge Academy',
    quote: 'Their training programs are practical, engaging, and directly aligned with current industry needs.'
  },
  {
    name: 'Daniel George',
    role: 'Founder, BlueSprint Labs',
    quote: 'From strategy to execution, the delivery quality felt like working with a highly mature product team.'
  }
];

export const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '25+', label: 'Industry Experts' },
  { value: '10K+', label: 'Learners Trained' }
];

export const courses = [
  { name: 'Python', duration: '8 Weeks', level: 'Beginner to Intermediate', icon: BrainCircuit },
  { name: 'AWS', duration: '6 Weeks', level: 'Intermediate', icon: CloudCog },
  { name: 'Azure', duration: '6 Weeks', level: 'Intermediate', icon: Layers3 },
  { name: 'Cyber Security', duration: '10 Weeks', level: 'Advanced', icon: ShieldCheck },
  { name: 'Web Development', duration: '12 Weeks', level: 'Beginner to Advanced', icon: MonitorSmartphone }
];

export const solutions = [
  {
    title: 'Enterprise Solutions',
    description: 'Business-ready software ecosystems integrating teams, data, and decision-making in one flow.',
    icon: Cpu
  },
  {
    title: 'SaaS Development',
    description: 'Subscription-based platforms with secure architecture, analytics, and scalable tenant support.',
    icon: BadgeCheck
  },
  {
    title: 'Networking',
    description: 'Reliable network planning, device integration, and resilient connectivity for modern operations.',
    icon: Network
  },
  {
    title: 'Maintenance Services',
    description: 'Lifecycle maintenance, patching, monitoring, and continuous optimization for uptime confidence.',
    icon: Wrench
  }
];

export const values = [
  { title: 'Innovation', description: 'We solve business problems with practical, future-ready technology.' },
  { title: 'Reliability', description: 'Clients trust us for consistent delivery, support, and measurable outcomes.' },
  { title: 'Growth', description: 'We empower both organizations and learners to move forward with confidence.' }
];

export const team = [
  { name: 'Aarav Nair', role: 'Founder & Strategy Lead' },
  { name: 'Sneha Pillai', role: 'Head of Training Programs' },
  { name: 'Mithun Roy', role: 'Engineering Manager' },
  { name: 'Ananya Das', role: 'Client Success Lead' }
];

export const galleryImages = [
  {
    title: 'Cloud Workshop',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Team Collaboration',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Networking Session',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Training Lab',
    image:
      'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Leadership Meetup',
    image:
      'https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Product Demo Day',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80'
  }
];

export const footerLinks = {
  services: ['Web Development', 'Software Development', 'IT Support', 'Training'],
  company: ['About Us', 'Gallery', 'IT Solutions', 'Contact'],
  social: ['LinkedIn', 'Instagram', 'YouTube']
};

export const highlights = [
  {
    icon: Cable,
    title: 'Integrated Delivery',
    description: 'Advisory, engineering, support, and training under one trusted technology partner.'
  },
  {
    icon: GraduationCap,
    title: 'Career-Focused Training',
    description: 'Practical courses guided by professionals working with today’s real-world toolchains.'
  },
  {
    icon: CloudCog,
    title: 'Cloud-Ready Systems',
    description: 'Deployable architectures built for resilience, security, and sustainable growth.'
  }
];
