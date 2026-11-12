import { motion } from 'framer-motion';
import { ArrowRight, Database, ShieldCheck, Terminal, User } from 'lucide-react';
import profileImage from '../assets/profile.jpg';

export default function Home({ onNavigate }) {
  const focusAreas = ['MERN Stack', 'Flutter Apps', 'System Design', 'IT Solutions'];
  const stats = [
    { label: 'Expertise', value: 'Full-Stack Development', icon: Terminal },
    { label: 'Experience', value: '4th Year BSIT Student', icon: ShieldCheck },
    { label: 'Focus Area', value: 'Secure Systems & UX', icon: Database },
  ];

  const reveal = {
    hidden: { opacity: 0, y: 26 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full px-4 py-12 sm:px-6 md:py-24 lg:px-10 xl:px-14">
      <div className="grid items-center gap-14 lg:grid-cols-12">
        <motion.div
          className="space-y-7 text-center lg:col-span-7 lg:text-left"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.08,
              },
            },
          }}
        >
          <motion.div
            variants={reveal}
            className="inline-flex items-center space-x-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400 backdrop-blur-xl shadow-[0_0_25px_rgba(251,191,36,0.08)]"
          >
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Available for opportunities</span>
          </motion.div>

          <motion.div variants={reveal} className="space-y-4">
            <h1 className="text-5xl font-black tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                Carl Joshua
              </span>
            </h1>

            <p className="text-xl font-semibold tracking-[0.08em] text-slate-300 sm:text-2xl lg:text-3xl">
              Full-Stack Developer | Mobile Engineer | IT Innovation Enthusiast
            </p>
          </motion.div>

          <motion.p
            variants={reveal}
            className="mx-auto max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0"
          >
            I architect and develop comprehensive digital solutions combining robust backend systems, intuitive user interfaces, and scalable cloud infrastructure. Specializing in secure full-stack applications, cross-platform mobile development, and enterprise-grade system design. Passionate about delivering products that solve real problems with elegant, performant code.
          </motion.p>

          <motion.div
            variants={reveal}
            className="flex flex-wrap gap-2 justify-center lg:justify-start"
          >
            {focusAreas.map((item) => (
              <motion.span
                whileHover={{ y: -2, borderColor: 'rgba(251,191,36,0.5)', boxShadow: '0 0 20px rgba(251,191,36,0.14)' }}
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-md"
              >
                {item}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={reveal} className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.45)] backdrop-blur-xl transition-all"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <div className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-400 group-hover:text-amber-300">{stat.label}</div>
                    <StatIcon className="h-4 w-4 text-amber-400/80 group-hover:text-amber-300" />
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-amber-200">{stat.value}</div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div variants={reveal} className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row lg:justify-start">
            <motion.button
              type="button"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('work')}
              className="group relative inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 px-8 py-4 text-base font-semibold text-slate-900 shadow-[0_15px_30px_rgba(251,191,36,0.28)] ring-1 ring-amber-200/60 transition-all sm:w-auto"
            >
              <span>Explore My Work</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1.5" />
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('certifications')}
              className="group inline-flex w-full items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-slate-200 backdrop-blur-xl transition-all hover:border-amber-400/60 hover:bg-white/10 sm:w-auto"
            >
              <User className="mr-2 h-5 w-5 text-amber-400" />
              <span>View Certs</span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, y: 12 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
          className="flex justify-center lg:col-span-5"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
            className="group relative w-full max-w-lg overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_40px_90px_rgba(180,83,9,0.15)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:shadow-[0_40px_90px_rgba(180,83,9,0.25)]"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-amber-400/10 blur-3xl" />

            <div className="mb-6 flex items-center border-b border-white/10 pb-4">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-rose-500/80" />
                <div className="h-3 w-3 rounded-full bg-amber-500/80" />
                <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
                <motion.img
                  whileHover={{ scale: 1.04 }}
                  src={profileImage}
                  alt="Carl Joshua G. Bernardo"
                  className="h-44 w-44 shrink-0 rounded-2xl border-2 border-amber-400/60 object-cover ring-2 ring-amber-400/20 shadow-[0_20px_35px_rgba(251,191,36,0.18)] sm:h-48 sm:w-48 lg:h-52 lg:w-52"
                />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">Carl Joshua G. Bernardo</h3>
                  <p className="font-medium text-amber-400">Full-Stack Developer · Mobile Engineer · IT Student</p>
                  <p className="text-xs text-slate-400">Building secure, scalable digital solutions</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                <div className="flex items-center space-x-2 rounded-xl border border-white/10 bg-slate-900/50 p-3 text-slate-300 transition-all hover:border-amber-400/40 hover:bg-slate-900">
                  <Terminal className="h-4 w-4 text-amber-400" />
                  <span>React & Node.js</span>
                </div>
                <div className="flex items-center space-x-2 rounded-xl border border-white/10 bg-slate-900/50 p-3 text-slate-300 transition-all hover:border-amber-400/40 hover:bg-slate-900">
                  <Database className="h-4 w-4 text-amber-400" />
                  <span>MongoDB & Firebase</span>
                </div>
              </div>

              <div className="rounded-2xl border border-amber-400/20 bg-gradient-to-br from-amber-500/10 to-transparent p-4 text-sm text-slate-300">
                <div className="mb-2 flex items-center gap-2 text-amber-400">
                  <ShieldCheck className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-[0.15em]">Core Expertise</span>
                </div>
                <p className="leading-relaxed">Specialized in building secure full-stack applications, cross-platform mobile solutions, and scalable backend systems with a strong focus on user experience and code quality.</p>
              </div>

              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Available for Work</span>
                </div>
                <span className="text-slate-600">•</span>
                <span>Based in Philippines</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
