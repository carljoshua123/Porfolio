import { Building2, Car, ExternalLink, ShieldAlert } from 'lucide-react';
import { useState } from 'react';
import ImageCarousel from './ImageCarousel';

// Import TrustPermit carousel images
import trustpermit from '../assets/logo.png';
import trustpermit1 from '../assets/trustpermit1.png';
import trustpermit2 from '../assets/trustpermit2.png';
import trustpermit3 from '../assets/trustpermit3.png';
import trustpermit4 from '../assets/trustpermit4.png';
import barangayLogin from '../assets/brgy.png';
import barangayAdmin from '../assets/brgy1.png';
import barangayResident from '../assets/barangay2.png';

const projects = [
  {
    title: 'Car Rental Platform',
    category: 'Full-Stack',
    type: 'fullstack',
    description:
      'Enterprise-grade rental management system with real-time inventory, Stripe payments, and admin analytics.',
    overview:
      'Comprehensive car rental platform designed for fleet operators and customers. Built with modern React frontend, Node.js backend, and MongoDB database. Features secure payment processing, real-time vehicle tracking, booking management, and detailed rental analytics for business intelligence.',
    features: [
      'Real-time vehicle inventory and availability management',
      'Integrated Stripe payment gateway with invoice generation',
      'Advanced booking and reservation system with conflict prevention',
      'Multi-role dashboard (Admin, Customer, Staff) with analytics',
      'Automated email notifications and SMS updates',
      'Insurance and damage tracking system',
    ],
    outcomes: ['100% booking completion flow', 'Secure payment processing', 'Admin analytics dashboard', 'Automated reporting system'],
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    icon: Car,
    accentColor: 'from-amber-500 to-orange-600',
    liveLink: 'https://your-car-rental-live.com',
    githubLink: 'https://github.com/yourusername/car-rental',
    image: '/assets/car-rental.jpg',
  },
  {
    title: 'TrustPermit',
    category: 'Full-Stack',
    type: 'fullstack',
    description:
      'Secure cross-platform permit verification platform featuring a MERN stack backend, blockchain verification links, and automated EmailJS OTP workflows.',
    overview:
      'TrustPermit is an enterprise-grade, cross-platform permit verification and management system engineered to eliminate fraud and streamline institutional compliance. It features a robust MERN stack backend, secure EmailJS OTP authentication flows, immutable tracking links, and dedicated real-time dashboards for administrative staff.',
    features: [
      'Full-stack MERN architecture (MongoDB, Express.js, React, Node.js) paired with cross-platform mobile support (Flutter/Dart).',
      'Reliable server-side OTP generation and verification flows using Node.js, Express, and EmailJS integrations.',
      'Integrated secure blockchain-inspired verification hashes and links to ensure complete document authenticity and auditability.',
      'Dynamic, role-based administration panels providing real-time analytics, status updates, and streamlined workflow management.',
    ],
    outcomes: ['Cross-platform solution with web & mobile parity', 'Secure verification flow with digital signatures', 'Real-time synchronization', 'Complete audit trail compliance'],
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Flutter', 'Dart', 'EmailJS'],
    icon: ShieldAlert,
    accentColor: 'from-amber-500 to-yellow-600',
    liveLink: 'https://trustpermit-webclient.vercel.app/',
    githubLink: 'https://github.com/yourusername/trustpermit',
    carousel: [trustpermit, trustpermit1, trustpermit2, trustpermit3, trustpermit4],
  },
  {
    title: 'Barangay Management System',
    category: 'Full-Stack',
    type: 'fullstack',
    description:
      'A community portal connecting residents with barangay services. Residents can submit reports and service requests and review their history, while staff manage community activity through an administration dashboard.',
    overview:
      'BarangayConnect Portal brings residents and local government services together in one digital platform. Residents can access community information, submit reports, request assistance, and review their activity, while barangay staff use an administration dashboard to monitor reports, emergencies, incidents, service requests, and resident activity.',
    features: [
      'Resident portal with Home, About, Report, Request, and History sections.',
      'Administration dashboard for monitoring reports, emergencies, incidents, requests, and resident accounts.',
      'Community reporting tools for regular, anonymous, emergency, and incident reports.',
      'Resident service requests and a history view for following submitted activity.',
      'Report location summary with area-based distribution.',
      'Account access for residents and barangay administrators.',
    ],
    icon: Building2,
    accentColor: 'from-yellow-500 to-amber-600',
    liveLink: 'https://frontend-nine-weld-60.vercel.app/',
    carousel: [barangayLogin, barangayAdmin, barangayResident],
  },
];

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(projects[1]);

  const spotlightImage = selectedProject?.carousel?.[0] ?? selectedProject?.image;

  return (
    <div className="w-full px-3 py-10 sm:px-5 lg:px-10 xl:px-14">
      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#050b12] shadow-[0_30px_80px_rgba(2,6,23,0.7)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,146,25,0.22),transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(251,146,60,0.18),transparent_30%)]" />

        <div className="relative grid gap-6 p-4 lg:grid-cols-[1.4fr_0.82fr] lg:p-6">
          <div className="rounded-[28px] border border-white/10 bg-[#050b12]/90 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:p-7">
            <div className="mb-8 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-amber-300">C</span>
                <span className="font-semibold">LensCove</span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5 text-[11px] font-medium text-slate-300">
                <button type="button" className="rounded-full bg-white/5 px-2 py-1">Discover</button>
                <button type="button" className="rounded-full bg-transparent px-2 py-1 text-slate-400">Meetup</button>
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] text-amber-300">○</span>
              </div>
            </div>

            <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-amber-300">
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  Stay Connected
                </div>

                <h2 className="max-w-md text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-[4.1rem] lg:leading-[0.95]">
                  Where your World meets your Network
                </h2>

                <p className="max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
                  I build digital experiences that connect people, ideas, and systems through secure, scalable, and human-centered product design.
                </p>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(projects[0])}
                    className="rounded-xl bg-amber-400 px-4 py-2.5 text-sm font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-amber-300"
                  >
                    Get Started
                  </button>
                  <button
                    type="button"
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:border-amber-400/50 hover:bg-white/10"
                  >
                    Learn More
                  </button>
                </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {projects.map((project) => {
                const IconComponent = project.icon;
                const isActive = selectedProject?.title === project.title;

                return (
                  <button
                    type="button"
                    key={project.title}
                    onClick={() => setSelectedProject(project)}
                    className={`w-full rounded-2xl border p-3 text-left transition-all duration-300 ${
                      isActive
                        ? 'border-amber-400/50 bg-amber-500/10 shadow-[0_0_0_1px_rgba(251,191,36,0.25)]'
                        : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                    }`}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <div className="rounded-xl border border-white/10 bg-slate-900/70 p-2 text-amber-300">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <span className="rounded-full border border-white/10 bg-slate-900/70 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-slate-300">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-base font-semibold text-white">{project.title}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-[#090f15]/90 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="text-sm text-slate-300">Live Rooms</div>
              <span className="rounded-full border border-amber-400/20 bg-amber-500/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-amber-300">Live</span>
            </div>

            <div className="space-y-4">
              <div className="project-spotlight overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#2b1d18] via-[#120d0d] to-[#0e1620] p-3">
                {selectedProject?.carousel ? (
                  <div className="mb-3 overflow-hidden rounded-[18px] border border-white/10 bg-slate-950/70">
                    <ImageCarousel images={selectedProject.carousel} autoPlayInterval={3200} />
                  </div>
                ) : spotlightImage ? (
                  <img
                    key={selectedProject?.title}
                    src={spotlightImage}
                    alt={selectedProject?.title}
                    className="mb-3 h-56 w-full rounded-[18px] object-cover shadow-[0_15px_30px_rgba(251,146,60,0.18)]"
                  />
                ) : (
                  <div className="mb-3 h-56 rounded-[18px] bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.6),transparent_25%),linear-gradient(145deg,#3b1a12,#18181b,#0f172a)]" />
                )}

                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="text-lg font-semibold text-white">{selectedProject?.title ?? '21 August'}</div>
                    <div className="mt-1 text-sm text-slate-300">
                      {selectedProject?.description ?? 'A freestyle session with rising stars'}
                    </div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-slate-200">
                    {selectedProject?.category ?? '5K Followers'}
                  </div>
                </div>
              </div>

              {selectedProject?.liveLink && (
                <a
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-300"
                >
                  Visit {selectedProject.title}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              )}

              {(selectedProject?.title === 'TrustPermit' ||
                selectedProject?.title === 'Barangay Management System') && (
                <>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-amber-300">System Overview</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">
                      {selectedProject.overview}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-amber-300">Core Technologies & Features</p>
                    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-200">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-amber-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
