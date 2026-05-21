"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, User, ArrowRight, ShieldAlert, Sparkles, Filter, Bookmark, BookOpen, Leaf, Trees, FlameKindling, Info } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: 'indoor' | 'toxic' | 'weeds' | 'edible' | 'spring' | 'mushrooms' | 'trees' | 'gardening';
  date: string;
  readTime: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  // Featured / Top Posts
  {
    id: 1,
    title: "Top 10 Low-Light Houseplants That Can Survive Dim Spaces",
    excerpt: "A curated list of resilient indoor plants like snake plants, pothos, and ZZ plants, including complete care instructions, light guidelines, and safety alerts for pet owners.",
    category: "indoor",
    date: "May 8, 2026",
    readTime: "6 min read",
    featured: true
  },
  {
    id: 2,
    title: "Lawn & Garden Weeds: A Visual Identification Guide",
    excerpt: "Learn how to spot and identify common garden invaders, from dandelions to crabgrass, using our comprehensive visual reference library and organic management strategies.",
    category: "weeds",
    date: "Apr 29, 2026",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 3,
    title: "Identify Plants Instantly: Tips for Botanical Photography",
    excerpt: "How modern photo-recognition technology is transforming plant identification. Learn the best mobile techniques and lighting angles for highly accurate results.",
    category: "gardening",
    date: "Apr 22, 2026",
    readTime: "5 min read",
    featured: true
  },
  // Toxic Category
  {
    id: 4,
    title: "Cat-Safe Gardening: 50+ Common Plants That Are Toxic to Felines",
    excerpt: "A guide outlining hazardous houseplants, including the lethal lily family, symptoms of ingestion, and safe alternative plants to build a pet-friendly indoor jungle.",
    category: "toxic",
    date: "Apr 15, 2026",
    readTime: "10 min read"
  },
  {
    id: 5,
    title: "Spotting Poison Ivy, Oak, & Sumac: Avoid the Rash This Season",
    excerpt: "Learn how to identify dangerous three-leaf patterns, seasonal color shifts, and what medical steps to take if you accidentally come into contact with them.",
    category: "toxic",
    date: "Apr 08, 2026",
    readTime: "7 min read"
  },
  {
    id: 6,
    title: "Dangerous Spring Fungi and Flora to Avoid Around Kids & Pets",
    excerpt: "Keep your family safe by learning to identify common but hazardous spring growth like poison hemlock, foxglove, and lily of the valley.",
    category: "toxic",
    date: "Mar 28, 2026",
    readTime: "6 min read"
  },
  {
    id: 7,
    title: "Pet Danger: Why Common Spring Bulbs Aren't Animal Friendly",
    excerpt: "Uncover why popular spring bulbs like tulips, daffodils, and hyacinths pose a serious toxic threat to curious dogs and cats.",
    category: "toxic",
    date: "Mar 18, 2026",
    readTime: "5 min read"
  },
  {
    id: 8,
    title: "Dog Safety: Identifying Toxic Garden and Household Plants",
    excerpt: "An essential guide on spotting common flora that can harm your canine companions, plus critical emergency steps if ingestion occurs.",
    category: "toxic",
    date: "Mar 10, 2026",
    readTime: "8 min read"
  },
  {
    id: 9,
    title: "Decoding Poison Ivy: Master the 'Leaves of Three' Rule",
    excerpt: "Master the visual tells that distinguish poison ivy from harmless mimics so you can explore the outdoors with confidence.",
    category: "toxic",
    date: "Mar 02, 2026",
    readTime: "4 min read"
  },
  {
    id: 10,
    title: "Childproofing Your Yard: Hazardous Plants Every Parent Should Know",
    excerpt: "Identify toxic flora commonly found in residential landscapes to keep outdoor play areas safe for toddlers and children.",
    category: "toxic",
    date: "Feb 24, 2026",
    readTime: "6 min read"
  },
  // Spring Plants Category
  {
    id: 11,
    title: "20 US Spring Wildflowers: A Visual Field Guide",
    excerpt: "Find and recognize common spring blooms such as trillium and Virginia bluebells, along with their native habitats and bloom times.",
    category: "spring",
    date: "Apr 12, 2026",
    readTime: "9 min read"
  },
  {
    id: 12,
    title: "15 Early Wildflowers Blooming Before the Canopy Fills",
    excerpt: "A guide to early forest floor blossoms that wake up before the trees leaf out, including bloodroot and spring beauty.",
    category: "spring",
    date: "Mar 22, 2026",
    readTime: "7 min read"
  },
  {
    id: 13,
    title: "Spotting 8 Classic Springtime Blossoms in Your Neighborhood",
    excerpt: "A beginner's checklist for identifying iconic seasonal flowers like magnolias, cherry blossoms, lilacs, and crocuses.",
    category: "spring",
    date: "Mar 05, 2026",
    readTime: "5 min read"
  },
  // Gardening & Grow Zones
  {
    id: 14,
    title: "Zone-by-Zone Planting Guide: What to Grow in May",
    excerpt: "Maximize your harvest with our monthly checklist detailing which herbs, flowers, and vegetables to plant across USDA zones 3-10.",
    category: "gardening",
    date: "May 01, 2026",
    readTime: "7 min read"
  },
  {
    id: 15,
    title: "Lookup Your USDA Hardiness Zone Instantly",
    excerpt: "Use our ZIP code tool and interactive mapping to determine your local climate zone and choose plants suited to your environment.",
    category: "gardening",
    date: "Apr 25, 2026",
    readTime: "4 min read"
  },
  {
    id: 16,
    title: "Frost-Free Dates: When to Safely Start Planting Outside",
    excerpt: "Plan your spring garden safely. Get frost calendars and planting schedules tailored specifically to your region.",
    category: "gardening",
    date: "Apr 19, 2026",
    readTime: "5 min read"
  },
  {
    id: 17,
    title: "15 Herbs and Vegetables to Start Indoors During March",
    excerpt: "Get a head start on the growing season by raising these early seeds on your windowsill or under grow lights.",
    category: "gardening",
    date: "Mar 12, 2026",
    readTime: "6 min read"
  },
  {
    id: 18,
    title: "Sprout vs. Weed: Telling Your Seedlings Apart From Garden Intruders",
    excerpt: "Avoid pulling the wrong shoots! Learn to tell tomato and squash seedlings apart from common garden weeds.",
    category: "gardening",
    date: "Mar 01, 2026",
    readTime: "5 min read"
  },
  {
    id: 19,
    title: "From Sprout to Soil: Seedling Care and Transplant Guide",
    excerpt: "Learn to recognize cotyledon leaves, evaluate true leaf development, and transplant your tray seedlings at the perfect stage.",
    category: "gardening",
    date: "Feb 18, 2026",
    readTime: "6 min read"
  },
  {
    id: 20,
    title: "Recognizing 12 Popular Succulent and Cacti Varieties",
    excerpt: "A quick visual breakdown of popular low-water house plants, helping you differentiate between Echeveria, Sempervivum, and others.",
    category: "gardening",
    date: "Feb 10, 2026",
    readTime: "5 min read"
  },
  {
    id: 21,
    title: "Botanical Key: Identifying Flowers by Petals and Shapes",
    excerpt: "A simple diagnostic guide to identifying wild and cultivated flowers using petal counts, colors, and petal shapes.",
    category: "gardening",
    date: "Jan 28, 2026",
    readTime: "8 min read"
  },
  {
    id: 22,
    title: "Green Thumb 101: A Beginner's Guide to Houseplant Care",
    excerpt: "Master the basics of indoor plant maintenance—covering proper watering cycles, lighting preferences, and forgiving starter species.",
    category: "gardening",
    date: "Jan 15, 2026",
    readTime: "7 min read"
  },
  {
    id: 23,
    title: "The Rise of Photo Botanical Search: How AI Identifies Plants",
    excerpt: "Explore the science behind AI-powered plant recognition and how it helps backyard gardeners discover nature instantly.",
    category: "gardening",
    date: "Jan 05, 2026",
    readTime: "6 min read"
  },
  // Weeds Category
  {
    id: 24,
    title: "Tackling Early Spring Weeds: Organic Eradication Guide",
    excerpt: "Stay ahead of invasive lawn species. Learn to identify and remove chickweed, henbit, and dandelions without harsh chemicals.",
    category: "weeds",
    date: "Apr 11, 2026",
    readTime: "6 min read"
  },
  {
    id: 25,
    title: "10 Troublesome Lawn Weeds and How to Manage Them",
    excerpt: "A comprehensive guide to managing common backyard weeds, offering both organic removals and targeted treatments.",
    category: "weeds",
    date: "Mar 20, 2026",
    readTime: "8 min read"
  },
  {
    id: 26,
    title: "6 Early Spring Weeds That Pop Up First (and Which Are Edible)",
    excerpt: "Identify the first green invaders of the season, including clover and wild violet, and discover which ones make tasty salad additions.",
    category: "weeds",
    date: "Mar 09, 2026",
    readTime: "5 min read"
  },
  {
    id: 27,
    title: "Garden Weeds Glossary: Which to Keep, Which to Pull",
    excerpt: "Not all weeds are bad. Identify common garden weeds and find out which ones improve soil health and which are highly invasive.",
    category: "weeds",
    date: "Feb 15, 2026",
    readTime: "7 min read"
  },
  // Mushrooms Category
  {
    id: 28,
    title: "7 Fatal Fungi Lookalikes That Every Mushroom Hunter Must Know",
    excerpt: "Compare side-by-side characteristics of common edible mushrooms and their highly toxic lookalikes, like morels and false morels.",
    category: "mushrooms",
    date: "May 05, 2026",
    readTime: "8 min read"
  },
  {
    id: 29,
    title: "Foraging Safely: 10 Easy-to-Identify Edible Mushrooms",
    excerpt: "Start your mushroom hunting journey with these beginner-friendly species that have no toxic lookalikes and are easy to recognize.",
    category: "mushrooms",
    date: "Apr 28, 2026",
    readTime: "6 min read"
  },
  {
    id: 30,
    title: "Four-Season Fungi Calendar: When to Hunt Which Mushrooms",
    excerpt: "A monthly guide tracking the peak fruiting windows of prized wild mushrooms (morels, chanterelles, porcinis) throughout the year.",
    category: "mushrooms",
    date: "Apr 14, 2026",
    readTime: "7 min read"
  },
  {
    id: 31,
    title: "Mycology Basics: A Beginner's Guide to Spores and Caps",
    excerpt: "An introductory guide explaining the fundamentals of mushroom anatomy, gills, spore printing, and crucial safety parameters.",
    category: "mushrooms",
    date: "Mar 30, 2026",
    readTime: "5 min read"
  },
  // Trees Category
  {
    id: 32,
    title: "Reading the Canopy: How to Identify Common Trees by Leaf Shape",
    excerpt: "Learn the botanical terms for leaf margins, lobe structures, and branch arrangements to identify local trees at a glance.",
    category: "trees",
    date: "May 02, 2026",
    readTime: "7 min read"
  }
];

const categoryMetadata = [
  { id: 'all', name: 'All Posts', icon: <BookOpen size={16} /> },
  { id: 'indoor', name: 'Indoor Plants', icon: <Leaf size={16} /> },
  { id: 'toxic', name: 'Toxic Plants', icon: <ShieldAlert size={16} /> },
  { id: 'weeds', name: 'Weeds', icon: <Trees size={16} /> },
  { id: 'spring', name: 'Spring Plants', icon: <Sparkles size={16} /> },
  { id: 'mushrooms', name: 'Mushrooms', icon: <FlameKindling size={16} /> },
  { id: 'trees', name: 'Trees', icon: <Trees size={16} /> },
  { id: 'gardening', name: 'Gardening & ID', icon: <Info size={16} /> }
];

const guidesHubs = [
  { title: "Fungi Library", subtitle: "Mushroom & Foraging Guides", icon: "🍄", color: "from-amber-500/20 to-orange-500/20" },
  { title: "Arbor Library", subtitle: "Tree & Bark Identification Guides", icon: "🌳", color: "from-emerald-500/20 to-teal-500/20" },
  { title: "Weed Management", subtitle: "Weed Control & Eradication Guides", icon: "🌿", color: "from-green-500/20 to-lime-500/20" },
  { title: "Houseplant Care", subtitle: "Indoor Styling & Plant Care Tips", icon: "🪴", color: "from-emerald-500/20 to-cyan-500/20" },
  { title: "Poison Prevention", subtitle: "Toxic Flora & Pet Safety Hub", icon: "⚠️", color: "from-red-500/20 to-orange-500/20" },
  { title: "Foraging & Edibles", subtitle: "Wild Plants & Edible Foraging Guides", icon: "🥗", color: "from-yellow-500/20 to-emerald-500/20" },
  { title: "Spring Wildflowers", subtitle: "Seasonal Wildflowers & Gardens", icon: "🌸", color: "from-pink-500/20 to-rose-500/20" }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPosts = blogPosts.filter(post => post.featured);
  const remainingPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 relative overflow-hidden bg-neutral-950 text-neutral-200">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[50%] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={12} />
            <span>From the greenhouse 🌿</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">
            Vera <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Greenhouse</span>
          </h1>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Expert guides to help you identify plants, avoid toxic species, and care for your green friends.
          </p>
        </motion.div>

        {/* Featured Section */}
        {searchQuery === '' && selectedCategory === 'all' && (
          <section className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Bookmark className="text-emerald-400" size={20} />
                <span>Featured Articles</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post, idx) => (
                <div
                  key={post.id}
                  className={`relative overflow-hidden rounded-3xl border border-white/10 p-8 backdrop-blur-sm flex flex-col justify-between hover:border-white/20 transition-all duration-300 ${
                    idx === 0 
                      ? 'lg:col-span-2 bg-gradient-to-br from-emerald-950/20 via-neutral-900/50 to-neutral-900/50' 
                      : 'bg-white/[0.02]'
                  }`}
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/[0.02] rounded-full blur-[80px] -z-10" />
                  <div>
                    <div className="flex items-center gap-3 text-xs text-neutral-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className={`font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors ${
                      idx === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                    }`}>
                      {post.title}
                    </h3>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors mt-auto w-fit"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Filters and Search */}
        <section className="mb-12 border-t border-white/10 pt-16">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-10">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto bg-neutral-900/40 p-1 rounded-xl border border-white/5 backdrop-blur-sm">
              {categoryMetadata.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-lg transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.icon}
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={16} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-900/50 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300"
              />
            </div>
          </div>

          {/* Posts Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {remainingPosts.length > 0 ? (
                remainingPosts.map(post => (
                  <motion.div
                    layout
                    key={post.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 backdrop-blur-sm hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3 text-xs text-neutral-500 mb-3">
                        <span className="uppercase tracking-wider text-[10px] font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar size={10} />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-white text-lg mb-3 group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-neutral-400 text-xs leading-relaxed mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors mt-auto w-fit"
                    >
                      <span>Read More</span>
                      <ArrowRight size={12} />
                    </Link>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-16 text-neutral-500">
                  <ShieldAlert size={48} className="mb-4 text-neutral-600" />
                  <p className="text-lg">No articles found matching your query.</p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* Guides Hub / Libraries Section */}
        <section className="mt-28 border-t border-white/10 pt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">Resource Libraries</h2>
            <p className="text-neutral-400 max-w-xl mx-auto">
              Access curated hub libraries grouping all identification, safety, and care resources in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {guidesHubs.map((hub, i) => (
              <div
                key={i}
                className="bg-white/[0.01] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-3xl mb-4 p-2 bg-neutral-900/50 border border-white/5 rounded-xl w-fit">
                    {hub.icon}
                  </div>
                  <h4 className="font-bold text-white text-base group-hover:text-emerald-400 transition-colors">
                    {hub.title}
                  </h4>
                  <p className="text-neutral-400 text-xs mt-1 leading-relaxed">
                    {hub.subtitle}
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-500 hover:text-emerald-400 transition-colors mt-4 w-fit"
                >
                  <span>Explore Library</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
