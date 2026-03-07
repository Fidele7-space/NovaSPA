import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../components/AppContext";
import { Send, MapPin, Mail, Twitter, Linkedin, MessageCircle, CheckCircle } from "lucide-react";

const socials = [
  { icon: Twitter, label: "@novanet", href: "#" },
  { icon: Linkedin, label: "NovaNet Inc.", href: "#" },
  { icon: MessageCircle, label: "Discord Community", href: "#" },
];

export default function Contact() {
  const { contactMsg, setContactMsg } = useContext(AppContext);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactMsg(form.message);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-white px-6 py-20 overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest text-violet-400 uppercase">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">
            Let's{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              talk
            </span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Have questions, partnership ideas, or just want to say hello? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.07]">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Message sent!</h3>
                  <p className="text-zinc-400">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Subject</label>
                    <input
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.08] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us more..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.08] text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500/60 focus:bg-white/[0.08] transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 text-white font-semibold transition-all duration-300 shadow-lg shadow-violet-500/30 hover:scale-105"
                  >
                    Send Message
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
              <Mail className="w-5 h-5 text-violet-400 mb-3" />
              <p className="text-sm text-zinc-400 mb-1">Email us</p>
              <p className="font-medium text-white">hello@novanet.io</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
              <MapPin className="w-5 h-5 text-cyan-400 mb-3" />
              <p className="text-sm text-zinc-400 mb-1">Headquarters</p>
              <p className="font-medium text-white">ClearWater Bay, HK</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07]">
              <p className="text-sm font-medium text-zinc-400 mb-4">Follow us</p>
              <div className="space-y-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/[0.05] flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            {contactMsg && (
              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-400">
                <strong>Last message:</strong> "{contactMsg}"
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}