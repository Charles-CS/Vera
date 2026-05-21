import { Leaf, Twitter, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full pt-12 pb-10 bg-neutral-900/40 border-t border-white/5 mt-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center border border-white/10">
                <Leaf className="text-emerald-400" />
              </div>
              <div>
                <div className="text-white font-semibold text-lg">Vera</div>
                <div className="text-zinc-400 text-sm">AI-powered plant & mushroom identification</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><Link href="/analyze" className="hover:text-white">Identify (Scan)</Link></li>
              <li><Link href="/mushrooms" className="hover:text-white">Mushroom Guide</Link></li>
              <li><Link href="/blog" className="hover:text-white">Guides & Articles</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/docs/04-DATABASE-SCHEMA.md" className="hover:text-white">Data & Docs</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-zinc-400 text-sm mb-4">
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>

            <div className="flex items-center gap-3">
              <Link href="#" className="text-zinc-400 hover:text-white"><Twitter /></Link>
              <Link href="#" className="text-zinc-400 hover:text-white"><Github /></Link>
              <Link href="#" className="text-zinc-400 hover:text-white"><Linkedin /></Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} Vera Intelligence. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <Link href="/contact" className="hover:text-white flex items-center gap-2"><Mail className="w-4 h-4" /> Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
