import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-8 text-center text-sm text-slate-400">
      <div className="flex w-full flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-10 xl:px-14">
        <div className="flex items-center space-x-2 font-semibold text-white">
          <Code2 className="h-5 w-5 text-amber-400" />
          <span>Carl Joshua G. Bernardo</span>
        </div>

        <p className="text-xs text-slate-500">© {new Date().getFullYear()} — Built with React, Tailwind CSS, and Lucide Icons.</p>
      </div>
    </footer>
  );
}
