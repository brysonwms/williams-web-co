
import React from 'react';
import { 
  Layout, 
  Cloud, 
  Settings, 
  Zap, 
  ShieldCheck, 
  Smartphone,
  BarChart3,
  Globe
} from 'lucide-react';
import { Service, PortfolioItem, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'Bespoke, high-converting websites designed specifically for small businesses. No templates, just professional results.',
    icon: <Layout className="w-6 h-6" />,
    features: ['Custom UI/UX', 'Mobile Responsive', 'Conversion Optimized', 'SEO Foundation']
  },
  {
    id: 'hosting',
    title: 'Premium Hosting',
    description: 'Ultra-fast cloud hosting with 99.9% uptime. We handle the technical side so you can focus on your business.',
    icon: <Cloud className="w-6 h-6" />,
    features: ['SSL Certificates', 'Daily Backups', 'Global CDN', 'Managed Updates']
  },
  {
    id: 'maintenance',
    title: 'Site Management',
    description: 'Ongoing support and maintenance to keep your site secure, fast, and up-to-date every single month.',
    icon: <Settings className="w-6 h-6" />,
    features: ['Security Patches', 'Content Updates', 'Monthly Reporting', 'Priority Support']
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 1,
    title: 'The Local Kitchen',
    category: 'Restaurant',
    imageUrl: 'https://picsum.photos/id/42/800/600',
    description: 'Modern booking system and menu showcase for a neighborhood bistro.'
  },
  {
    id: 2,
    title: 'Elite Law Firm',
    category: 'Professional Services',
    imageUrl: 'https://picsum.photos/id/48/800/600',
    description: 'Trust-focused landing page with advanced lead capture functionality.'
  },
  {
    id: 3,
    title: 'Fresh Bloom Florist',
    category: 'Retail',
    imageUrl: 'https://picsum.photos/id/30/800/600',
    description: 'Visual-heavy e-commerce experience for a local flower shop.'
  },
  {
    id: 4,
    title: 'Constructo Group',
    category: 'Construction',
    imageUrl: 'https://picsum.photos/id/20/800/600',
    description: 'Project portfolio site highlighting large-scale commercial builds.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'Owner',
    company: 'The Bloom Studio',
    content: 'Williams Web Co. transformed our online presence. We saw a 40% increase in leads within the first month.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Partner',
    company: 'Chen & Associates',
    content: 'Professional, responsive, and technical masters. Our new site is lightning fast and works perfectly on mobile.'
  }
];

export const STATS = [
  { label: 'Client Satisfaction', value: '100%' },
  { label: 'Avg. Load Time', value: '< 1s' },
  { label: 'Hosting Uptime', value: '99.9%' },
];
