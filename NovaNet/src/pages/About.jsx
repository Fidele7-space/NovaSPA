import React from "react";
import { Link } from "react-router-dom";
import createPageUrl from "./Index";
import { motion } from "framer-motion";
import { Heart, Shield, Rocket, ArrowRight } from "lucide-react";

const team = [
  { name: "Fidele Nyandwi", role: "CEO & Co-founder", avatar: "FN", gradient: "from-violet-500 to-fuchsia-500" },
  { name: "Patient Dusengimana", role: "CTO & Co-founder", avatar: "PD", gradient: "from-cyan-500 to-blue-500" },
  { name: "Josue Gutaba", role: "Head of Design", avatar: "GJ", gradient: "from-emerald-500 to-teal-500" },
  { name: "Akbal Ndwaniye", role: "Lead Engineer", avatar: "AN", gradient: "from-orange-500 to-amber-500" },
];

const values = [
  { icon: Heart, title: "Human First", desc: "We build technology that amplifies human connection, not replaces it.", gradient: "from-rose-500 to-pink-500" },
  { icon: Shield, title: "Trust & Privacy", desc: "Your data is yours. We are committed to full transparency and security.", gradient: "from-violet-500 to-purple-500" },
  { icon: Rocket, title: "Relentless Growth", desc: "We obsess over your career trajectory, not just your profile views.", gradient: "from-cyan-500 to-blue-500" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white overflow-x-hidden">
      {/* Hero */}
      <section className="relative px-6 py-28 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-violet-400 uppercase mb-4">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            We're reimagining{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              professional networking
            </span>
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            NovaNet was founded in 2026 with a single mission: To make meaningful
            professional connections accessible to everyone, not just those with elite
            networks. We believe the right connection can change your entire career.
          </p>
        </motion.div>
      </section>

      {/* Values */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          What we stand for
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, desc, gradient }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="p-8 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.14] transition-all duration-400"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} mb-5 shadow-lg`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
              <p className="text-zinc-400 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="px-6 pb-28 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Meet the team
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map(({ name, role, avatar, gradient }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.15] transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                {avatar}
              </div>
              <h3 className="font-semibold text-white text-sm mb-1">{name}</h3>
              <p className="text-zinc-500 text-xs">{role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block p-px rounded-3xl bg-gradient-to-r from-violet-600 to-cyan-600"
        >
          <div className="bg-[#09090b] rounded-3xl px-12 py-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to grow your network?</h2>
            <p className="text-zinc-400 mb-8">Join 120,000+ professionals already on NovaNet.</p>
            <Link
              to={createPageUrl("Network")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-violet-500/30 hover:scale-105 text-decoration-none"
            >
              Start Connecting <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}