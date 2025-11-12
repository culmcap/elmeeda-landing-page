export default function Footer() {
  return (
    <footer
      className="py-12 sm:py-16 relative overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Logo */}
          <div className="text-xl sm:text-2xl font-display font-bold text-navy">
            Elmeeda
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8 text-gray-600 text-sm sm:text-base">
            <a href="#how-it-works" className="hover:text-[#4169E1] transition-colors">
              Platform
            </a>
            <a href="#integrations" className="hover:text-[#4169E1] transition-colors">
              Integrations
            </a>
            <a
              href={process.env.NEXT_PUBLIC_WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4169E1] transition-colors"
            >
              Join Waitlist
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © 2025 Elmeeda. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
