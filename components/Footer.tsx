import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-slate-900 text-slate-200 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold text-lg text-white mb-3">Mama Kevina Foundation</h3>
          <p className="text-sm text-green-300 italic">"SERVICE IN THE HEART OF AFRICA"</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/about" className="hover:text-green-300">Our History</Link></li>
            <li><Link href="/work" className="hover:text-green-300">Core Interventions</Link></li>
            <li><Link href="/team" className="hover:text-green-300">Our Team</Link></li>
            <li><Link href="/contact" className="hover:text-green-300">Get in Touch</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">Contact Information</h4>
          <p className="text-sm text-green-300">Agururu 1A, Tororo Municipality, Tororo District</p>
          <p className="text-sm text-green-300">P.O. Box 300504, Tororo</p>
          <p className="text-sm text-green-300">Email: info@mamakevinafoundation.org</p>
          <p className="text-sm text-green-300">Tel: +256701963704 / +256772303785</p>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Mama Kevina Foundation. Registered Ugandan Indigenous NGO. All rights reserved.
      </div>
    </footer>
  );
}