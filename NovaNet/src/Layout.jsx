import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import createPageUrl from "./pages/Index";
import { AppContext } from "./components/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, UserCheck } from "lucide-react";

const navLinks = [
  { label: "Home", page: "Home" },
  { label: "Network", page: "Network" },
  { label: "About", page: "About" },
  { label: "Contact", page: "Contact" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { connectedIds } = useContext(AppContext);

  return (
    <header className="fixed top-0 left-0 right-0 w-100 h-auto top-0 z-50">
      <div className="mx-0 mt-0">
        <div className="flex items-center justify-between px-6 py-3 bg-white/80 backdrop-blur-xl border border-slate-200 shadow-lg shadow-xl shadow-black/30">
          {/* Logo */}
          <Link to={createPageUrl("Home")} className="flex items-center gap-2 text-decoration-none">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/30 text-decoration-none">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-black text-lg tracking-tight text-decoration-none">NovaNet</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 w-100 text-decoration-none">
            {navLinks.map(({ label, page }) => {
              const href = createPageUrl(page);
              const active = location.pathname === href || (page === "Home" && location.pathname === "/");
              return (
                <Link
                  key={page}
                  to={href}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-slate-100 text-slate-900"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            {connectedIds.size > 0 && (
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium">
                <UserCheck className="w-3.5 h-3.5" />
                {connectedIds.size} connected
              </div>
            )}
            <Link
              to={createPageUrl("Network")}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white text-sm font-semibold transition-all duration-300 shadow-md shadow-violet-500/25 hover:scale-105 text-decoration-none"
            >
              Explore
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-2 rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-white/[0.08] p-4 space-y-1"
            >
              {navLinks.map(({ label, page }) => {
                const href = createPageUrl(page);
                const active = location.pathname === href;
                return (
                  <Link
                    key={page}
                    to={href}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      active ? "bg-white/[0.08] text-white" : "text-zinc-400 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {label}
                  </Link>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

function PageTransition({ children, currentPageName }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentPageName}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default function Layout({ children, currentPageName }) {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
              body {
                background: #09090b;
                margin: 0;
                font-family: Inter, system-ui, sans-serif;
                color: #0f172a;
                display: grid;
             }`}
  </style>
      <div className=" flex flex-col min-h-screen text-decoration-none mt-auto bg-white">
        <NavBar />
        <div className="pt-0">
          <PageTransition currentPageName={currentPageName}>
            {children}
          </PageTransition>
        </div>

        {/* Footer */}
        <footer className="border-t border-slate-200 mt-auto px-6 py-6 h-[100px] w-full text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-black" />
            </div>
            <span className="font-bold text-black">NovaNet</span>
          </div>
          <p className="text-slate-500 text-sm">© 2026 NovaNet Inc. — Where careers accelerate.</p>
        </footer>
      </div>
    </>
  );
}