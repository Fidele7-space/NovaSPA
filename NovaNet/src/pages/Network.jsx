import { useContext, useState, useEffect } from "react";
import { AppContext } from "../components/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import ConnectionCard from "../components/ConnectionCard";
import { Search, Users, UserCheck } from "lucide-react";

const tags = ["All", "Design", "Engineering", "Marketing", "Finance", "Product"];

export default function Network() {
  const { connections, setConnections, connectedIds, toggleConnect } = useContext(AppContext);

  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const data = [
        {
          id: 1,
          name: "Fidele Nyandwi",
          role: "Product Designer",
          company: "Figma",
          tags: ["Design", "Product"]
        },
        {
          id: 2,
          name: "Uwimana Chen",
          role: "Frontend Engineer",
          company: "Stripe",
          tags: ["Engineering"]
        },
        {
          id: 3,
          name: "Radjat Singh",
          role: "Marketing Lead",
          company: "Notion",
          tags: ["Marketing"]
        },
        {
          id: 4,
          name: "Emily Chan",
          role: "Finance Analyst",
          company: "Goldman Sachs",
          tags: ["Finance"]
        },
        {
          id: 5,
          name: "Robert Brown",
          role: "Product Manager",
          company: "Airbnb",
          tags: ["Product"]
        },
        {
          id: 5,
          name: "Sarang Gupta",
          role: "Interns Manager",
          company: "CodVeda",
          tags: ["Marketing"]
        }
      ];

      //I used fake API simulation, but If I had database, I'd use normal API.
      await new Promise((resolve) => setTimeout(resolve, 600));

      setConnections(data);
      setLoading(false);
    };

    load();
  }, [setConnections]);

  const filtered = connections.filter((c) => {
    const matchSearch =
      c.name?.toLowerCase().includes(search.toLowerCase()) ||
      c.company?.toLowerCase().includes(search.toLowerCase()) ||
      c.role?.toLowerCase().includes(search.toLowerCase());

    const matchTag =
      activeTag === "All" || (c.tags || []).includes(activeTag);

    return matchSearch && matchTag;
  });

  return (
    <div className="min-h-screen bg-[#09090b] text-white px-4 md:px-8 py-12 w-full">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Your{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Network
            </span>
          </h1>

          <p className="text-zinc-400 text-lg">
            Discover and connect with world-class professionals.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="flex gap-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <Users className="w-4 h-4 text-violet-400" />
            <span>{connections.length} professionals</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span>{connectedIds.size} connected</span>
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />

            <input
              type="text"
              placeholder="Search by name, role, or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-600 text-black placeholder-zinc-500 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.08] transition-all"
            />
          </div>

          {/* Tag Filters */}
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTag === tag
                    ? "bg-violet-600 text-white shadow-lg shadow-violet-500/30"
                    : "bg-white/[0.05] border border-white/[0.08] text-zinc-400 hover:border-violet-500/50 hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array(6).fill(0).map((_, i) => (
              <div
                key={i}
                className="h-52 rounded-2xl bg-white/[0.03] border border-white/[0.05] animate-pulse"
              />
            ))}
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-24 text-zinc-500"
              >
                No professionals found.
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((person, i) => (
                  <ConnectionCard
                    key={person.id}
                    person={person}
                    index={i}
                    isConnected={connectedIds.has(person.id)}
                    onToggle={() => toggleConnect(person.id)}
                  />
                ))}
              </div>
            )}
          </AnimatePresence>
        )}

      </div>
    </div>
  );
}