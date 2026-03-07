import React, { useContext } from "react";
import { Link } from "react-router-dom";
import createPageUrl from "./Index";
import { AppContext } from "../components/AppContext";
import { motion } from "framer-motion";
import { Users, Zap, Globe, ArrowRight, Star, TrendingUp } from "lucide-react";


const stats = [
  { label: "Members", value: "120K+", icon: Users },
  { label: "Connections Made", value: "4.8M", icon: Zap },
  { label: "Countries", value: "98", icon: Globe },
];

const features = [
  {
    title: "Smart Matching",
    desc: "AI-powered matching connects you with the right professionals.",
    icon: Star,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    title: "Real-Time Feed",
    desc: "Stay updated with insights from your professional network.",
    icon: TrendingUp,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Global Reach",
    desc: "Connect with professionals across 98 countries worldwide.",
    icon: Globe,
    gradient: "from-emerald-500 to-teal-600",
  },
];

export default function Home() {

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 text-center overflow-hidden">        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto px-[40px]"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-lightblue-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Now live · 120,000+ professionals connected {/*Imaginary numbers */}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-center">
            <span className="text-white-900 text-center">Where careers</span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              accelerate.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            NovaNet is the premium professional networking platform designed for
            ambitious people. Build meaningful connections that open real doors.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
            <Link
              to={createPageUrl("Network")}
              className="group text-decoration-none flex items-center gap-2 px-8 py-2 rounded-10 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-slate-900 font-semibold text-base transition-all duration-300 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105"
            >
              Explore Network
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to={createPageUrl("About")}
              className="flex items-center px-4 py-2 rounded-2 border border-white/10 bg-black hover:bg-white-500 hover:text-slate text-white font-semibold transition-all duration-300 backdrop-blur text-decoration-none mx-auto"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        {/* Stats bar */}
      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="relative flex flex-row justify-center gap-8 md:gap-16 mt-20  h-[40px] w-auto mb-20 bg-none"
        >
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="flex flex-row items-center bg-surface gap-2">
              <Icon className="w-5 h-5 text-violet-400 mb-1" />
              <span className="text-3xl font-bold text-zinc">{value}</span>
              <span className="text-sm text-zinc-500">{label}</span>
            </div>
         
          ))}
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-6 pb-32 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Built for professionals,{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              by Fidele
            </span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Every feature crafted to maximize your professional growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ title, desc, icon: Icon, gradient }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative p-8 rounded-2xl bg-grey border border-slate-200 shadow-sm hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-500 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${gradient} mb-5 shadow-lg`}
              >
                <Icon className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-blue mb-2">{title}</h3>
              <p className="text-zinc-700 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}