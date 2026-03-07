import React from "react";
import { motion } from "framer-motion";
import { UserPlus, UserCheck, Briefcase } from "lucide-react";

const gradients = [
  "from-violet-500 to-fuchsia-500",
  "from-cyan-500 to-blue-500",
  "from-emerald-500 to-teal-500",
  "from-orange-500 to-amber-500",
  "from-rose-500 to-pink-500",
  "from-indigo-500 to-violet-500",
];

export default function ConnectionCard({ person, index, isConnected, onToggle }) {
  const gradient = gradients[index % gradients.length];
  const initials = person.name
    ?.split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-white/[0.15] hover:bg-white/[0.06] transition-all duration-400 overflow-hidden"
    >
      {/* Subtle hover glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            {person.avatar_url ? (
              <img
                src={person.avatar_url}
                alt={person.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10"
              />
            ) : (
              <div
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
              >
                {initials}
              </div>
            )}
            <div>
              <h3 className="font-semibold text-white text-sm">{person.name}</h3>
              <p className="text-zinc-500 text-xs mt-0.5">{person.company || "Independent"}</p>
            </div>
          </div>

          <button
            onClick={onToggle}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              isConnected
                ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400"
                : "bg-violet-500/10 border border-violet-500/30 text-violet-400 hover:bg-violet-500/20"
            }`}
          >
            {isConnected ? (
              <>
                <UserCheck className="w-3 h-3" />
                Connected
              </>
            ) : (
              <>
                <UserPlus className="w-3 h-3" />
                Connect
              </>
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-3">
          <Briefcase className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="truncate">{person.role}</span>
        </div>

        {person.bio && (
          <p className="text-zinc-500 text-xs leading-relaxed line-clamp-2 mb-4">{person.bio}</p>
        )}

        {person.tags && person.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {person.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.07] text-zinc-400 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}