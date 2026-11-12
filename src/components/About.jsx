import {
  ArrowUpRight,
  Cloud,
  Cpu,
  GitBranch,
  Globe,
  GraduationCap,
  Layers3,
  LockKeyhole,
  Network,
  Quote,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import ImageCarousel from './ImageCarousel';
import aboutImage from '../assets/about.png';
import aboutImageOne from '../assets/about1.png';
import aboutImageTwo from '../assets/about2.png';

export default function About() {
  const aboutImages = [aboutImage, aboutImageOne, aboutImageTwo];

  const skills = [
    { name: 'React & Next.js', category: 'Frontend', icon: Globe, color: 'text-amber-400' },
    { name: 'Node.js & Express', category: 'Backend', icon: Server, color: 'text-emerald-400' },
    { name: 'Database Design', category: 'Data', icon: Cpu, color: 'text-amber-400' },
    { name: 'Flutter & Dart', category: 'Mobile', icon: Smartphone, color: 'text-amber-400' },
    { name: 'System Architecture', category: 'Design', icon: ShieldCheck, color: 'text-amber-400' },
    { name: 'DevOps & Cloud', category: 'Infrastructure', icon: GitBranch, color: 'text-rose-400' },
  ];

  const strengths = [
    'Full-stack architecture design and system thinking',
    'Building responsive, intuitive user interfaces',
    'Implementing secure authentication and API design',
    'Writing clean, maintainable, well-documented code',
    'Cross-platform development for web and mobile',
    'Database design and optimization for scale',
  ];

  const architecturePillars = [
    {
      title: 'Secure Authentication Flows',
      description: 'Designing resilient identity and verification flows with Node.js/Express OTP validation, session integrity, and controlled access patterns.',
      icon: LockKeyhole,
      accent: 'from-amber-500/20 to-yellow-500/5',
    },
    {
      title: 'Scalable Full-Stack Architecture',
      description: 'Building modular MERN-driven systems with robust APIs, clean service boundaries, scalable data modeling, and product-ready user experiences.',
      icon: Layers3,
      accent: 'from-emerald-500/20 to-amber-500/5',
    },
    {
      title: 'Network Infrastructure & Reliability',
      description: 'Applying enterprise-minded networking principles such as Cisco three-tier hierarchies, VLAN segmentation, switch port security, and fault-tolerant design.',
      icon: Network,
      accent: 'from-sky-500/20 to-amber-500/5',
    },
  ];

  const tinkeringList = [
    { title: 'Advanced Mobile State Management', icon: Smartphone },
    { title: 'Cloud Deployment & CI/CD Pipelines', icon: Cloud },
    { title: 'Modern Security Practices', icon: ShieldCheck },
    { title: 'System Design Patterns', icon: Cpu },
    { title: 'API Performance Optimization', icon: Server },
  ];

  const testimonials = [
    {
      quote:
        'Carl brings a rare combination of technical depth and team-first energy. He handled the problem-solving side of our capstone work with clarity, discipline, and real initiative.',
      name: 'Maria Dela Cruz',
      role: 'Project Lead, TrustPermit Capstone',
    },
    {
      quote:
        'His ability to break down complex systems, collaborate effectively, and still keep the user experience in focus made him a standout contributor on our project team.',
      name: 'Prof. Daniel Reyes',
      role: 'Faculty Adviser, Information Technology Program',
    },
  ];

  return (
    <div className="w-full space-y-16 px-4 py-12 sm:px-6 md:py-20 lg:px-10 xl:px-14">
      <div className="w-full space-y-4 text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">About Me</h2>
        <p className="text-base text-slate-400 sm:text-lg">
          A passionate fourth-year IT student with deep expertise in full-stack development, mobile engineering, and system architecture. I'm committed to building secure, scalable solutions that deliver exceptional user experiences and solve real-world problems.
        </p>
      </div>

      <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-800/80 to-slate-900/60 p-5 shadow-xl sm:p-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/20">
          <ImageCarousel
            images={aboutImages}
            autoPlayInterval={3000}
            imageAlt="Development and troubleshooting workspace"
          />
        </div>
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-400">
            How I Build
          </p>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Turning challenges into useful digital solutions
          </h2>
          <p className="leading-relaxed text-slate-300">
            I enjoy bringing ideas to life, finding the source of technical problems, and making systems work better. My process is grounded in three things:
          </p>
          <div className="flex flex-col items-center gap-2" aria-label="Development process">
            {['CODE', 'DEBUG', 'TROUBLESHOOT'].map((step, index) => (
              <span
                key={step}
                className={`rounded-xl border border-amber-500/25 bg-amber-500/10 px-4 py-2 text-center text-sm font-bold tracking-[0.12em] text-amber-400 ${
                  index === 0 ? 'w-36' : index === 1 ? 'w-48' : 'w-64 max-w-full'
                }`}
              >
                {step}
              </span>
            ))}
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            From writing clear, maintainable code to debugging unexpected behavior and troubleshooting real-world issues, I focus on building reliable experiences that solve problems for people.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
        <div className="rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-800/80 to-slate-900/60 p-8 shadow-xl lg:col-span-5">
          <div className="space-y-4">
            <div className="w-fit rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/20 to-amber-500/5 p-3 text-amber-400">
              <GraduationCap className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Education & Background</h3>
            <p className="leading-relaxed text-slate-300">
              I am a fourth-year <strong className="font-semibold text-white">Bachelor of Science in Information Technology</strong>{' '}
              student at <span className="font-medium text-amber-400">National University-Manila</span>. My academic journey has equipped me with a solid foundation in software engineering, systems architecture, database design, and practical application development.
            </p>
            <p className="leading-relaxed text-slate-300">
              Beyond coursework, I've built real-world projects, collaborated with teams, and stayed current with industry trends through continuous learning and hands-on experimentation.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-slate-700/60 pt-6 text-xs font-mono text-slate-400">
            <span>INSTITUTION: NU-MANILA</span>
            <span className="text-amber-400">STATUS: GRADUATING STUDENT</span>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-800/80 to-slate-900/60 p-8 shadow-xl lg:col-span-7">
          <div className="space-y-5">
            <div className="w-fit rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/20 to-amber-500/5 p-3 text-amber-400">
              <Cpu className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Engineering Philosophy</h3>
            <p className="leading-relaxed text-slate-300">
              I believe in building products that excel in both form and function. Every interface must be intuitive and beautiful, every API must be secure and performant, and every system must be architected for scale, maintainability, and growth.
            </p>
            <p className="leading-relaxed text-slate-300">
              My approach combines deep technical expertise with product thinking—understanding not just how to build, but why we're building. From microservices architecture to pixel-perfect UX, I'm committed to shipping solutions that users love and developers respect.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {strengths.map((strength) => (
              <div
                key={strength}
                className="group rounded-xl border border-slate-700/50 bg-slate-900/70 px-4 py-3 text-sm text-slate-200 transition-all hover:border-amber-500/30 hover:bg-slate-800"
              >
                <div className="flex items-start gap-2">
                  <div className="mt-1 h-2 w-2 rounded-full bg-amber-400 flex-shrink-0" />
                  <span>{strength}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-10 pt-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white sm:text-4xl">Core Technical Skills</h3>
          <p className="mt-2 text-base text-slate-400">Technologies and frameworks I use to architect and develop high-quality digital solutions.</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;

            return (
              <div
                key={`${skill.name}-${index}`}
                className="group rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-800/60 to-slate-900/40 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-amber-500/10 hover:shadow-lg"
              >
                <div className="flex items-center space-x-5">
                  <div className={`rounded-xl border border-slate-700/60 bg-gradient-to-br from-slate-800 to-slate-900 p-3 transition-all group-hover:border-amber-500/40 group-hover:bg-slate-800 ${skill.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-slate-400 group-hover:text-amber-400">{skill.category}</span>
                    <h4 className="text-base font-bold text-white">{skill.name}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-8 pt-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-400">Architecture & Systems Thinking</p>
          <h3 className="text-3xl font-bold text-white sm:text-4xl">Enterprise-grade logic with resilient design foundations</h3>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {architecturePillars.map((pillar) => {
            const IconComponent = pillar.icon;

            return (
              <div
                key={pillar.title}
                className="rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-800/80 to-slate-900/60 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/35"
              >
                <div className={`mb-5 inline-flex rounded-2xl border border-white/10 bg-gradient-to-br ${pillar.accent} p-3 text-amber-400`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                <h4 className="mb-3 text-xl font-bold text-white">{pillar.title}</h4>
                <p className="text-sm leading-relaxed text-slate-300">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-6 pt-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-400">Current Focus</p>
          <h3 className="text-3xl font-bold text-white sm:text-4xl">Currently tinkering / exploring</h3>
        </div>

        <div className="overflow-hidden rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-800/80 to-slate-900/60 p-4 shadow-[0_24px_60px_rgba(15,23,42,0.35)]">
          <div className="marquee-track flex min-w-max gap-4">
            {[...tinkeringList, ...tinkeringList].map((item, index) => {
              const IconComponent = item.icon;

              return (
                <div
                  key={`${item.title}-${index}`}
                  className="flex min-w-[260px] items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100 backdrop-blur-xl"
                >
                  <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-2 text-amber-400">
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">{item.title}</span>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-slate-500" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-8 pt-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-amber-400">Social Proof</p>
          <h3 className="text-3xl font-bold text-white sm:text-4xl">Academic & project endorsements</h3>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-800/80 to-slate-900/60 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.35)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-2 text-amber-400">
                  <Quote className="h-5 w-5" />
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                  Endorsement
                </span>
              </div>

              <p className="text-base leading-relaxed text-slate-200">“{testimonial.quote}”</p>

              <div className="mt-6 border-t border-slate-700/60 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-slate-400">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
