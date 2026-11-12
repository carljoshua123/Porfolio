import { ArrowUpRight, Award, CalendarDays, Eye, FileText } from 'lucide-react';
import compTIAITFCertificate from '../assets/resume-webinar-certificate.pdf';
import resumeWebinarCertificate from '../assets/comptia-itf-certificate.pdf';

const certifications = [
  {
    title: 'CompTIA ITF+',
    issuer: 'CompTIA',
    date: 'July 1, 2024',
    description:
      'Foundational knowledge of IT concepts, infrastructure, software, security, and database fundamentals.',
    pdf: compTIAITFCertificate,
  },
  {
    title: 'Debugging Your Resume: Coding the Perfect Profile',
    issuer: 'National University - College of Computing and Information Technologies',
    date: 'August 19, 2026',
    description:
      'Webinar attendance focused on building a strong professional profile and improving a resume for technology careers.',
    pdf: resumeWebinarCertificate,
  },
];

export default function Certifications() {
  return (
    <section className="w-full px-4 py-14 sm:px-6 md:py-20 lg:px-10 xl:px-14">
      <header className="mx-auto mb-12 max-w-2xl text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-amber-300 shadow-lg shadow-amber-950/20">
          <Award className="h-7 w-7" aria-hidden="true" />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
          Learning & Professional Development
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Certifications
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
          Credentials and learning milestones that support my work across IT fundamentals and professional development.
        </p>
      </header>

      <div className="grid gap-5 lg:grid-cols-2">
        {certifications.map((certificate) => (
          <article
            key={certificate.title}
            className="group flex h-full flex-col rounded-2xl border border-slate-700/70 bg-slate-900/70 p-6 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40 hover:bg-slate-900 sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/15 bg-amber-400/10 text-amber-300">
                <FileText className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
              </div>
              <span className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300">
                Certificate
              </span>
            </div>

            <div className="mt-6 flex flex-1 flex-col">
              <h2 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
                {certificate.title}
              </h2>
              <p className="mt-2 text-sm font-medium text-slate-400">{certificate.issuer}</p>
              <p className="mt-4 text-sm leading-6 text-slate-300">{certificate.description}</p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-700/80 pt-5">
                <p className="flex items-center gap-2 text-sm text-slate-400">
                  <CalendarDays className="h-4 w-4 text-amber-300" aria-hidden="true" />
                  Issued {certificate.date}
                </p>
                <a
                  href={certificate.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${certificate.title} PDF in a new tab`}
                  className="inline-flex items-center gap-2 rounded-lg border border-amber-400/30 bg-amber-400/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-wide text-amber-200 transition-colors hover:border-amber-300/60 hover:bg-amber-400/20"
                >
                  <Eye className="h-4 w-4" aria-hidden="true" />
                  View PDF
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
