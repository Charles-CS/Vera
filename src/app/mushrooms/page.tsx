"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Info, CheckCircle2, Skull, Search, HelpCircle, ChevronDown, BookOpen, Compass, Eye, Disc, Layers, Trees, Calendar, HelpCircle as HelpIcon } from 'lucide-react';
import Link from 'next/link';

interface Mushroom {
  id: number;
  name: string;
  scientific: string;
  category: 'edible' | 'deadly' | 'backyard';
  safety: string;
  badgeType: 'edible' | 'deadly' | 'toxic' | 'caution' | 'medicinal' | 'inedible';
  description: string;
  lookalike?: string;
}

const mushroomsData: Mushroom[] = [
  {
    id: 1,
    name: "Chanterelle",
    scientific: "Cantharellus cibarius",
    category: "edible",
    safety: "Edible — highly prized edible",
    badgeType: "edible",
    description: "Golden-yellow to egg-yolk colored cap, 2–12 cm wide, wavy and irregularly lobed. Distinctive feature: false gills — forking ridges that run down the stem rather than true blade-like gills. Fruity, apricot-like aroma. Found in deciduous and coniferous forests, often near oaks and conifers, from summer through fall. Firm white flesh.",
    lookalike: "Jack O'Lantern (Omphalotus olearius) — bright orange, grows in clusters at tree bases (not scattered), has true sharp gills (not forked ridges), and may glow faintly in the dark. Causes severe gastrointestinal illness."
  },
  {
    id: 2,
    name: "Morel",
    scientific: "Morchella esculenta",
    category: "edible",
    safety: "Edible — must be cooked",
    badgeType: "edible",
    description: "Unmistakable honeycomb-patterned cap with deep, irregular pits and ridges. Cap is attached directly to the hollow stem — if you cut it in half lengthwise, the interior is completely hollow. Colors range from gray to tan to yellowish. Appears in early spring near dying elms, old orchards, and burned areas. Cap height 3–10 cm.",
    lookalike: "False Morel (Gyromitra esculenta) — cap is wrinkled and brain-like, not pitted; stem is not fully hollow; contains gyromitrin, which converts to toxic hydrazine. Can be fatal if eaten raw or undercooked."
  },
  {
    id: 3,
    name: "Chicken of the Woods",
    scientific: "Laetiporus sulphureus",
    category: "edible",
    safety: "Edible — cook thoroughly",
    badgeType: "edible",
    description: "Large, shelf-like brackets in bright orange and yellow layers. No gills — underside has tiny pores. Grows on living or dead hardwoods (especially oaks), occasionally conifers. Flesh is white, thick, and chicken-like in texture when young. Found summer through fall. Older specimens become tough and chalky. Note: some people experience reactions when grown on certain hosts (locust, eucalyptus)."
  },
  {
    id: 4,
    name: "Hen of the Woods / Maitake",
    scientific: "Grifola frondosa",
    category: "edible",
    safety: "Edible — excellent edible and medicinal",
    badgeType: "edible",
    description: "Large overlapping clusters of gray-brown fan-shaped caps, 3–7 cm each, forming a rosette that can weigh 2–20+ lbs. Grows at the base of oaks and other hardwoods, often returning to the same spot each fall. White pores on underside. Complex earthy flavor. Also known for immune-supporting properties."
  },
  {
    id: 5,
    name: "Porcini / King Bolete",
    scientific: "Boletus edulis",
    category: "edible",
    safety: "Edible — one of the most prized edible mushrooms",
    badgeType: "edible",
    description: "Brown to reddish-brown convex cap (5–30 cm), smooth and often sticky when wet. Underside has spongy white to yellowish pores (not gills). Thick, club-shaped pale stem with a fine white net pattern near the top. Rich, nutty flavor. Found under conifers and hardwoods in summer and fall, particularly in montane forests. Flesh does not stain blue when cut."
  },
  {
    id: 6,
    name: "Oyster Mushroom",
    scientific: "Pleurotus ostreatus",
    category: "edible",
    safety: "Edible — widely cultivated and foraged",
    badgeType: "edible",
    description: "Fan-shaped to oyster-shaped caps, 5–25 cm, white to gray to tan. Gills are white, closely spaced, and run down the short off-center stem. Grows in clusters on dead or dying hardwood, especially beech and elm. Found year-round, peaking in fall and winter. Mild, delicate flavor. White spore print.",
    lookalike: "Angel Wings (Pleurocybella porrigens) — smaller, pure white, thinner flesh, grows on conifers (not hardwoods). Has been linked to fatalities in kidney-compromised individuals."
  },
  {
    id: 7,
    name: "Lion's Mane",
    scientific: "Hericium erinaceus",
    category: "edible",
    safety: "Edible — also used medicinally",
    badgeType: "edible",
    description: "Instantly recognizable: a white to cream-colored globe of cascading spines (1–5 cm long), with no cap or gills. Grows as a single mass on dead or dying hardwoods, especially oaks and beeches, in late summer and fall. Flesh is white and firm. Mild, seafood-like flavor. No dangerous lookalikes — truly distinctive."
  },
  {
    id: 8,
    name: "Giant Puffball",
    scientific: "Calvatia gigantea",
    category: "edible",
    safety: "Edible — when all-white inside",
    badgeType: "edible",
    description: "Large white sphere, 10–70 cm across, smooth leathery skin. Grows in meadows, lawns, and forest edges in late summer and fall. Critical ID rule: cut it in half — it must be pure white throughout with no internal features. If you see any outline of a cap, gills, or stem inside, do NOT eat it. Spores turn olive-brown at maturity.",
    lookalike: "Young Amanita \"eggs\" — immature deadly Amanitas (including Death Cap) look like small white orbs when emerging. Always cut any puffball in half: a true puffball is uniformly white inside with no internal structure. Any internal structure means it is NOT a puffball."
  },
  {
    id: 9,
    name: "Death Cap",
    scientific: "Amanita phalloides",
    category: "deadly",
    safety: "DEADLY — responsible for 90%+ of fatalities",
    badgeType: "deadly",
    description: "Pale greenish-yellow to white cap (5–15 cm), smooth and often shiny. White gills, white ring on stem, and a distinctive cup-shaped volva (sac) at the base, often buried underground. Found near oaks and other hardwoods in fall. Symptoms are delayed 6–24 hours after eating, then severe liver and kidney failure occurs. A single cap can kill an adult. There is no antidote — treatment is supportive only."
  },
  {
    id: 10,
    name: "Destroying Angel",
    scientific: "Amanita bisporigera / A. virosa",
    category: "deadly",
    safety: "DEADLY — among the most toxic organisms",
    badgeType: "deadly",
    description: "Pure white in all parts: cap, gills, stem, ring, and volva. Cap 5–12 cm, smooth, slightly sticky. The skirting ring hangs from the upper stem; the bulbous base is enclosed in a white volva. Grows in mixed woods and near oaks in summer and fall. Often mistaken for edible white mushrooms, button mushrooms, or puffballs by inexperienced foragers. Contains amatoxins that destroy liver and kidneys. Symptoms delayed 6–24 hours."
  },
  {
    id: 11,
    name: "False Morel",
    scientific: "Gyromitra esculenta",
    category: "deadly",
    safety: "DEADLY/TOXIC — contains hydrazine compounds",
    badgeType: "toxic",
    description: "Brain-like or saddle-shaped reddish-brown cap (4–15 cm), wrinkled and folded but not pitted like a true morel. The stem is pale, irregularly chambered but not truly hollow. Found in spring in sandy soils under conifers and near rotting wood. Contains gyromitrin, which breaks down into monomethylhydrazine (rocket fuel component) during digestion or cooking. Can cause hemolysis, liver failure, and death, even from inhaling cooking vapors. Never eat raw."
  },
  {
    id: 12,
    name: "Deadly Galerina",
    scientific: "Galerina marginata",
    category: "deadly",
    safety: "DEADLY — same amatoxins as Death Cap",
    badgeType: "deadly",
    description: "Small, honey-brown cap (1–4 cm), slimy when wet, with a fragile ring on the stem. Gills are brown, closely spaced. Grows in clusters on rotting wood, especially conifers, across most seasons. Often mistaken for edible Honey Mushrooms (Armillaria mellea) or Magic Mushrooms by foragers. The ring and rust-brown spore print are key ID features. Dose for dose, contains the same lethal amatoxins as the Death Cap."
  },
  {
    id: 13,
    name: "Jack O'Lantern",
    scientific: "Omphalotus olearius",
    category: "deadly",
    safety: "TOXIC — causes severe GI illness",
    badgeType: "toxic",
    description: "Bright orange to orange-yellow cap (5–20 cm), with true sharp blade-like gills (not ridges). Grows in dense clusters at the base of trees or from buried roots. The gills may faintly bioluminesce (glow green) in complete darkness. Contains illudin toxins; symptoms include severe vomiting, cramps, and diarrhea starting 30 minutes–2 hours after ingestion. Not fatal in healthy adults but extremely unpleasant. Commonly confused with chanterelles."
  },
  {
    id: 14,
    name: "Fly Agaric",
    scientific: "Amanita muscaria",
    category: "deadly",
    safety: "TOXIC — causes delirium",
    badgeType: "toxic",
    description: "The iconic red cap (5–20 cm) with white wart-like spots (which may wash off in rain). White gills, white ring, and bulbous base. Grows near birch and pine from late summer through fall. Contains muscimol and ibotenic acid causing intoxication, delirium, muscle spasms, sweating, vomiting, and loss of consciousness. Rarely fatal in adults but dangerous, especially for children. Never eat or experiment with this mushroom."
  },
  {
    id: 15,
    name: "Fairy Ring Mushroom",
    scientific: "Marasmius oreades",
    category: "backyard",
    safety: "Caution — edible with positive ID",
    badgeType: "caution",
    description: "Small tan to buff cap (2–5 cm), often with a central bump (umbo). Gills are white to cream, widely spaced. Grows in rings or arcs in lawns and meadows in spring and fall. Tough, wiry stem. Responsible for the \"fairy rings\" seen in grass. Must be positively identified as lookalikes include toxic Clitocybe species that also grow in rings."
  },
  {
    id: 16,
    name: "Shaggy Mane / Lawyer's Wig",
    scientific: "Coprinus comatus",
    category: "backyard",
    safety: "Edible — when young and white",
    badgeType: "edible",
    description: "Tall cylindrical white cap (5–15 cm) covered in shaggy white scales with a brown tip. Must be harvested and eaten while young and white — as it matures, the gills auto-digest (autolyze) into an inky black liquid from the bottom up. Found in disturbed soils, roadsides, and lawns in late summer and fall. Do not consume alcohol within several days of eating (like its relative, the Inky Cap)."
  },
  {
    id: 17,
    name: "Turkey Tail",
    scientific: "Trametes versicolor",
    category: "backyard",
    safety: "Medicinal — used in tea/supplements",
    badgeType: "medicinal",
    description: "Thin, leathery, fan-shaped brackets (3–10 cm) in concentric bands of brown, tan, white, and orange — resembling a wild turkey's tail feathers. Grows on dead hardwood logs year-round. Very common. Underside has tiny pores (not gills). Widely researched for immune-supporting properties. Not palatable to eat directly but commonly made into tea or tinctures."
  },
  {
    id: 18,
    name: "Common Puffball",
    scientific: "Lycoperdon perlatum",
    category: "backyard",
    safety: "Edible — when all-white inside",
    badgeType: "edible",
    description: "Small white spherical mushroom (2–6 cm) covered in small spikes and warts. Grows in clusters on soil and rotting wood in forests. Like the giant puffball, must be cut in half and confirmed pure white inside before eating. Matures to produce a brown puffball that releases spores through a hole in the top."
  },
  {
    id: 19,
    name: "Honey Mushroom",
    scientific: "Armillaria mellea",
    category: "backyard",
    safety: "Caution — edible when cooked",
    badgeType: "caution",
    description: "Honey-brown to yellowish cap (3–15 cm), often with small dark scales at center. White to cream gills, distinctive ring on stem. Grows in large clusters at tree bases or from roots, fall through early winter. One of the most common North American mushrooms. Must be cooked thoroughly — causes GI upset raw. The Deadly Galerina closely resembles young Honey Mushrooms and grows in similar habitats. Positive identification is critical."
  },
  {
    id: 20,
    name: "Artist's Conk / Shelf Fungus",
    scientific: "Ganoderma applanatum",
    category: "backyard",
    safety: "Inedible — too tough to eat; medicinal",
    badgeType: "inedible",
    description: "Large (10–70 cm), flat bracket with a gray to brown upper surface and white underside that bruises brown when scratched (hence \"artist's conk\" — you can draw on it). Perennial — grows rings year after year. Grows on dead and dying hardwoods year-round. Used in traditional medicine and tea. Not harmful, just inedible."
  },
  {
    id: 21,
    name: "Bird's Nest Fungus",
    scientific: "Cyathus striatus",
    category: "backyard",
    safety: "Inedible — not toxic, too small & tough",
    badgeType: "inedible",
    description: "Tiny cup-shaped fungus (0.5–1.5 cm tall) shaped exactly like a miniature bird's nest filled with \"eggs\" (spore packets called peridioles). Grooved/striped inner cup walls. Found on wood chips, dead plant debris, and rotting wood in moist conditions. Fascinating to discover, completely harmless, but not edible."
  }
];

const featuresData = [
  {
    title: "Cap Shape and Color",
    icon: <Eye className="text-emerald-400" size={24} />,
    description: "Note the size, color, texture (smooth, scaly, slimy, dry), and shape (convex, flat, funnel, bell-shaped, irregular). Colors can change with age, moisture, and handling, so note fresh specimens. Key shapes include: convex (dome), umbonate (with central bump), depressed (sunken center), and infundibuliform (funnel-shaped)."
  },
  {
    title: "Gill Attachment and Spacing",
    icon: <Layers className="text-emerald-400" size={24} />,
    description: "Are there true gills, pores, teeth, ridges, or no visible structure underneath? If gills are present, note how they attach to the stem: free (don't touch stem), adnate (broadly attached), decurrent (run down stem), or notched. Note spacing (crowded vs. widely spaced) and color."
  },
  {
    title: "Spore Print Color",
    icon: <Disc className="text-emerald-400" size={24} />,
    description: "One of the most reliable ID features. Place the cap gill-side down on white paper for 1–4 hours, cover with a bowl. The color of the spore deposit can range from white, cream, yellow, pink, brown, rust, purple-brown, to black. This single test rules out many dangerous lookalikes — for example, the Death Cap has a white spore print while many brown-spored lookalikes have brown prints."
  },
  {
    title: "Stem Features",
    icon: <Compass className="text-emerald-400" size={24} />,
    description: "Look for: a ring (annulus) — a skirt of tissue partway up the stem; a volva — a cup or sac at the base (indicates Amanita family, which contains most deadly species); a bulbous base; hollow vs. solid interior; texture; and color changes when cut or bruised."
  },
  {
    title: "Habitat and Substrate",
    icon: <Trees className="text-emerald-400" size={24} />,
    description: "Where exactly is it growing? On soil, wood, dung, or leaf litter? Near which tree species? On living wood or dead? In sun or shade? Mycorrhizal species (chanterelle, porcini, fly agaric) are always associated with living tree roots. Saprotrophic species (oyster mushroom, turkey tail) grow on dead wood."
  },
  {
    title: "Season and Region",
    icon: <Calendar className="text-emerald-400" size={24} />,
    description: "Many mushrooms have narrow fruiting windows. Morels appear in early spring; chanterelles and porcini in summer-fall; oysters and honey mushrooms in fall through early winter. Geographic region also matters — some species found in Europe differ from North American counterparts despite similar appearances."
  }
];

const faqsData = [
  {
    question: "Can AI identify mushrooms safely?",
    answer: "AI can help narrow down species by comparing visual features to a large database, but should never be used as the sole basis for determining edibility. AI tools including Snap Plant can be a useful first step to generate candidate species, but mushroom identification often requires examining features like spore print color, smell, bruising reactions, and habitat context that photos alone may not capture. Always cross-reference with field guides and consult a local mycologist before eating any wild-foraged mushroom."
  },
  {
    question: "What is the most dangerous mushroom?",
    answer: "The Death Cap (Amanita phalloides) is responsible for more than 90% of fatal mushroom poisonings worldwide. It contains amatoxins that cause irreversible liver and kidney failure. Symptoms are delayed 6–24 hours after eating, by which time significant organ damage has already occurred. A single cap contains enough toxin to kill an adult human. There is no specific antidote."
  },
  {
    question: "How do I take a spore print?",
    answer: "Remove the cap from the stem. Place the cap gill-side (or pore-side) down on a piece of white paper. Cover with a bowl or cup to prevent air movement. Leave for 1–4 hours (overnight for a stronger print). Carefully lift the cap to reveal the spore deposit. Photograph or note the color. To preserve, lightly spray with hairspray from 30+ cm distance. Always wash hands after handling mushrooms."
  },
  {
    question: "When is mushroom foraging season?",
    answer: "Foraging season varies by region and species. In temperate North America and Europe: spring brings morels (March–May); summer brings chanterelles, porcini, and chicken of the woods (June–August); fall is the peak season with the widest variety (September–November); winter in mild climates can yield oyster mushrooms and velvet shanks. Some species like turkey tail and shelf fungi can be found year-round."
  },
  {
    question: "Are backyard mushrooms poisonous?",
    answer: "Most mushrooms that appear in lawns and yards are harmless, though not necessarily edible. Common lawn species like puffballs, fairy rings, and shaggy manes can be edible with positive identification. However, some genuinely dangerous species do appear in yards — the Death Cap, Destroying Angel, and Deadly Galerina can all grow in residential areas. Never let children or pets eat unknown mushrooms, and if a child ingests any mushroom, call Poison Control immediately (US: 1-800-222-1222)."
  },
  {
    question: "What does \"edible\" mean for mushrooms?",
    answer: "\"Edible\" is not a binary category. Many mushrooms that are generally edible can cause reactions in some individuals, must be cooked (not eaten raw), may cause problems when combined with alcohol, or vary in edibility by subspecies or geographic form. Always start with a small amount when trying any new mushroom for the first time, even after proper identification."
  }
];

export default function MushroomsPage() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'edible' | 'deadly' | 'backyard'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const filteredMushrooms = mushroomsData.filter(mushroom => {
    const matchesCategory = selectedCategory === 'all' || mushroom.category === selectedCategory;
    const matchesSearch = mushroom.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mushroom.scientific.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mushroom.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', name: 'All Species' },
    { id: 'edible', name: 'Edibles' },
    { id: 'deadly', name: 'Deadly & Poisonous' },
    { id: 'backyard', name: 'Backyard Fungi' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-6 relative overflow-hidden text-neutral-200">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb & Hero */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 text-emerald-400 mb-4 text-sm font-medium tracking-wider uppercase">
            <Link href="/" className="hover:text-emerald-300 transition-colors">Home</Link>
            <span>/</span>
            <span>Mushroom Guide</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Mushroom Identification <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Guide</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl leading-relaxed">
            Found a mushroom and want to identify it? This complete guide covers 25+ common mushrooms with safety ratings, key identification features, and dangerous lookalike warnings.
          </p>
        </motion.div>

        {/* Safety Warning */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 mb-16 backdrop-blur-sm flex gap-4 items-start"
        >
          <AlertTriangle className="text-red-500 shrink-0 mt-1" size={28} />
          <div>
            <h3 className="text-red-500 font-bold text-lg mb-2">⚠️ IMPORTANT SAFETY WARNING</h3>
            <p className="text-red-200/80 leading-relaxed">
              Never eat any wild mushroom based on online identification alone. Many deadly mushrooms closely resemble edible ones. Always consult a local mycologist or mushroom expert before consuming any wild-foraged mushroom. <strong>When in doubt, throw it out.</strong>
            </p>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto bg-neutral-900/50 p-1.5 rounded-xl border border-white/5 backdrop-blur-sm">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id as any)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-emerald-500 text-neutral-950 shadow-md shadow-emerald-500/20'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18} />
              <input
                type="text"
                placeholder="Search mushrooms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-neutral-900/50 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300"
              />
            </div>
          </div>

          {/* Mushroom Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[300px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredMushrooms.length > 0 ? (
                filteredMushrooms.map(mushroom => (
                  <motion.div
                    layout
                    key={mushroom.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">{mushroom.name}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${getBadgeStyles(mushroom.badgeType)}`}>
                          {mushroom.badgeType}
                        </span>
                      </div>
                      <p className="text-neutral-500 italic text-sm mb-4">{mushroom.scientific}</p>
                      <p className="text-neutral-300 text-sm leading-relaxed mb-6">{mushroom.description}</p>
                    </div>

                    {mushroom.lookalike && (
                      <div className="bg-red-500/5 border border-red-500/10 rounded-xl p-4 text-red-200/80 text-xs flex gap-2">
                        <AlertTriangle size={16} className="shrink-0 mt-0.5 text-red-400" />
                        <p><strong>Lookalike Warning:</strong> {mushroom.lookalike}</p>
                      </div>
                    )}
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center py-12 text-neutral-500">
                  <AlertTriangle size={48} className="mb-4 text-neutral-600" />
                  <p className="text-lg">No mushrooms found matching your query.</p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* AI CTA Section */}
        <section className="mb-24 pt-8">
           <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10 p-10 text-center backdrop-blur-xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/30 rounded-full blur-[100px] -z-10" />
             <h2 className="text-3xl font-bold text-white mb-4">Identify Your Mushroom with AI</h2>
             <p className="text-lg text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
               Upload a photo of your mushroom and get instant AI identification with safety warnings, edibility rating, and dangerous lookalike alerts. Free, no signup required.
             </p>
             <Link href="/analyze" className="inline-block px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-emerald-500/25">
               Try Snap Plant Free →
             </Link>
             <p className="text-xs text-neutral-500 mt-4">
               <strong>Reminder:</strong> AI identification is a helpful starting point, not a final verdict. Never eat a mushroom based on AI ID alone.
             </p>
           </div>
        </section>

        {/* Identification Features */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Essential Identification Features</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Accurate mushroom identification requires examining multiple characteristics together — never rely on a single feature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuresData.map((feature, i) => (
              <div key={i} className="flex gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                <div className="p-3 bg-neutral-900 rounded-xl h-fit border border-white/5">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Learn more about foraging, safety precautions, and how to verify mushroom types.
            </p>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, index) => (
              <div
                key={index}
                className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex justify-between items-center p-6 text-left hover:bg-white/[0.01] transition-colors duration-300"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`text-neutral-500 transition-transform duration-300 ${
                      openFaqIndex === index ? 'rotate-185 text-emerald-400' : ''
                    }`}
                    size={20}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-neutral-400 text-sm leading-relaxed border-t border-white/5 bg-neutral-950/20">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Related Guides */}
        <section className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="text-emerald-400" size={28} />
            <h3 className="text-xl font-bold text-white">Related Guides & Resources</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-neutral-300 hover:text-emerald-400 transition-all duration-300">
              <span className="text-xl">🍄</span>
              <span>How to Identify Mushrooms (Blog)</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-neutral-300 hover:text-emerald-400 transition-all duration-300">
              <span className="text-xl">🍄</span>
              <span>Mushroom Articles & Guides</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-neutral-300 hover:text-emerald-400 transition-all duration-300">
              <span className="text-xl">🌸</span>
              <span>Pink Flower Identification Guide</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-neutral-300 hover:text-emerald-400 transition-all duration-300">
              <span className="text-xl">🌿</span>
              <span>White Flower Identification Guide</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-neutral-300 hover:text-emerald-400 transition-all duration-300">
              <span className="text-xl">🌱</span>
              <span>Poisonous Plants for Children</span>
            </Link>
            <Link href="/" className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 text-neutral-300 hover:text-emerald-400 transition-all duration-300">
              <span className="text-xl">🏠</span>
              <span>Free AI Plant & Mushroom Identifier</span>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function getBadgeStyles(badgeType: string) {
  switch (badgeType) {
    case 'edible':
      return 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20';
    case 'deadly':
      return 'bg-red-500/20 text-red-400 border border-red-500/30';
    case 'toxic':
      return 'bg-red-500/10 text-orange-400 border border-red-500/20';
    case 'caution':
      return 'bg-amber-500/10 text-amber-400 border border-amber-500/20';
    case 'medicinal':
      return 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20';
    case 'inedible':
      return 'bg-neutral-500/10 text-neutral-400 border border-neutral-500/20';
    default:
      return 'bg-neutral-500/10 text-neutral-400 border border-white/5';
  }
}
