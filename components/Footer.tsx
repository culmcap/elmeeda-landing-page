export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-2xl font-display font-bold text-white">
            Elmeeda
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-gray-400">
            <a href="#how-it-works" className="hover:text-white transition-colors">
              Platform
            </a>
            <a href="#integrations" className="hover:text-white transition-colors">
              Integrations
            </a>
            <a
              href="https://www.linkedin.com/in/jayallayorov/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2025 Elmeeda. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
