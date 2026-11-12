import { Mail, MessageSquare, Send, Smartphone, UserRound } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full px-4 py-12 sm:px-6 md:py-20 lg:px-10 xl:px-14">
      <div className="grid items-start gap-8 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400">
            <Mail className="h-3.5 w-3.5" />
            <span>Let’s Connect</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">Contact</h2>
            <p className="text-base leading-relaxed text-slate-400 sm:text-lg">
              I'm always interested in hearing about exciting projects, internship opportunities, and collaborations. Whether you have a product idea, need technical consultation, or want to discuss full-stack development, I'm here to help. Let's connect and build something great together.
            </p>
          </div>

          <div className="space-y-3 rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-800/80 to-slate-900/60 p-6 shadow-lg">
            <div className="flex items-center gap-3 text-slate-300">
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-2 text-amber-400">
                <UserRound className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Name</div>
                <div className="font-medium text-white">Carl Joshua G. Bernardo</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-2 text-amber-400">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</div>
                <div className="font-medium text-white">cjgbernardo21@gmail.com</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-2 text-amber-400">
                <MessageSquare className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Focus</div>
                <div className="font-medium text-white">Full-stack builds & mobile products</div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-300">
              <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-2 text-amber-400">
                <Smartphone className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Viber</div>
                <a
                  href="viber://chat?number=%2B639954753803"
                  className="font-medium text-white transition-colors hover:text-amber-300"
                >
                  09954753803
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-800/80 to-slate-900/60 p-8 shadow-[0_30px_80px_rgba(180,83,9,0.15)]"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">Send a message</h3>
              <p className="mt-1 text-sm text-slate-400">Tell me about your idea, opportunity, or project.</p>
            </div>

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-amber-500/60 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-amber-500/60 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Hi Carl, I'd like to talk about..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-amber-500/60 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 font-semibold text-slate-900 transition-all hover:-translate-y-0.5 hover:bg-amber-300"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>

              {isSubmitted && (
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  Message sent successfully
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
