import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import FeaturesGrid from '@/components/FeaturesGrid';
import StatsSection from '@/components/StatsSection';
import HowItWorks from '@/components/HowItWorks';
import Reviews from '@/components/Reviews';
import Pricing from '@/components/Pricing';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bravio',
  alternateName: 'Bravio by Nevolabs',
  url: 'https://hellobravio.com',
  logo: 'https://hellobravio.com/icon.png',
  description:
    'Bravio is field service management software purpose-built for biomedical ISO teams. Track PMs, manage work orders, generate ISO 13485-compliant service reports, and send invoices — all in one platform.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3524, Silverside Suite 35B',
    addressLocality: 'Wilmington',
    addressRegion: 'DE',
    postalCode: '19810-4929',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    url: 'https://cal.com/nevolabs-f6qxzs/30min',
    availableLanguage: 'English',
  },
  sameAs: [],
  foundingDate: '2024',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 1,
    maxValue: 50,
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Bravio',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Field Service Management Software',
  operatingSystem: 'Web, iOS, Android',
  url: 'https://hellobravio.com',
  description:
    'FSM software for biomedical service companies (ISOs) with 5–50 technicians. Features: automated PM scheduling, work order management, ISO 13485-compliant service reports, invoicing, asset lifecycle tracking, and client portal.',
  screenshot: 'https://hellobravio.com/opengraph-image.png',
  creator: {
    '@type': 'Organization',
    name: 'Nevolabs',
  },
  offers: [
    {
      '@type': 'Offer',
      name: 'Plus',
      price: '149',
      priceCurrency: 'USD',
      billingIncrement: 'monthly',
      description: 'Up to 15 users. Customer & Facility Management, Asset Registry, Work Orders, PM Schedules, Service Invoicing.',
    },
    {
      '@type': 'Offer',
      name: 'Premium',
      price: '299',
      priceCurrency: 'USD',
      billingIncrement: 'monthly',
      description: 'Up to 30 users. Everything in Plus plus PM Automation Board, Bulk PM Reminders, Customer Self-Service Booking, Job Downtime Tracking.',
    },
  ],
  featureList: [
    'Automated PM Scheduling',
    'Real-time Work Orders',
    'ISO 13485 Compliant Service Reports',
    'Asset Lifecycle Tracking',
    'Smart Inventory Management',
    'Client Portal Access',
    'Technician Mobile App',
    'Service Invoicing',
    'Compliance Reporting',
    'CMMS for Biomedical Devices',
  ],
  audience: {
    '@type': 'Audience',
    audienceType: 'Biomedical ISO companies, Healthcare Technology Management (HTM) teams, Medical device service organizations',
  },
  keywords: 'biomedical FSM, biomed ISO software, CMMS biomedical, HTM software, ISO 13485 FSM',
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Bravio',
  url: 'https://hellobravio.com',
  description: 'Field Service Management software for biomedical ISO teams.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://hellobravio.com/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

export default function Home() {
  return (
    <main aria-label="Bravio — Biomedical Field Service Management Software">
      <JsonLd data={organizationSchema} />
      <JsonLd data={softwareSchema} />
      <JsonLd data={websiteSchema} />
      <Navbar />
      <Hero />
      <Partners />
      <FeaturesGrid />
      <StatsSection />
      <HowItWorks />
      <Reviews />
      <Pricing />
      <CTABanner />
      <Footer />
    </main>
  );
}
