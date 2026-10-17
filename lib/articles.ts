export interface ArticleSection {
  heading?: string;
  body?: string;
  figure?: {
    src: string;
    caption: string;
    alt: string;
  };
}

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  date: string;
  author: string;
  readingTime: string;
  description: string;
  gradient: string;
  bgColor: string;
  sections: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "critical-minerals-bottleneck",
    title: "The Bottleneck Is Not in the Ground",
    subtitle:
      "An analysis of where critical mineral value chains actually break — and why the answer runs through the midstream, not the mine",
    tag: "Supply Chain",
    date: "August 2026",
    author: "Lumin Advisory",
    readingTime: "8 min read",
    description:
      "For years, the critical minerals debate in Europe has been framed as a geology problem. The IEA's Global Critical Minerals Outlook 2026 makes clear that this framing misses where value chains actually fail. The chokepoint sits one step downstream — in refining, processing, and the industrial know-how wrapped around them.",
    gradient: "from-purple-500 to-indigo-600",
    bgColor: "bg-gradient-to-br from-purple-50 to-indigo-50",
    sections: [
      {
        body: "For years, the critical minerals debate in Europe has been framed as a geology problem: where are the deposits, who owns them, and how fast can we permit a mine. The IEA's Global Critical Minerals Outlook 2026 makes clear that this framing misses where value chains actually fail. Mining capacity is expanding across increasingly diverse regions. The chokepoint sits one step downstream — in refining, processing, and the industrial know-how wrapped around them.",
      },
      {
        figure: {
          src: "/insights/fig1-critical-minerals-stats.png",
          caption: "Figure 1 — Six numbers from the IEA Global Critical Minerals Outlook 2026.",
          alt: "Critical minerals in 2026: key statistics including 72% refining concentration and USD 6.5 trillion at risk",
        },
      },
      {
        heading: "Concentration has deepened where it matters most",
        body: "The headline numbers deserve a moment of honest attention. Across key critical minerals, the average market share of the top refining country reached 72% in 2025, up from 70% in 2023 — concentration is still rising, not falling. Over the past two years, the top refining countries accounted for more than three-quarters of all growth in refined supply. In manganese, nickel, and graphite, virtually all supply growth came from the already-dominant supplier. For gallium, graphite, manganese, and rare earths, a single country — China — refines over 90% of global supply.\n\nThis is no longer an abstract risk. Chinese export controls have roughly tripled since 2023, extending from heavy rare earths in April 2025 to battery materials, processing technologies, and processing equipment in October 2025. The last item is the one to sit with: the controls now cover not just the materials but the machines and methods needed to process them elsewhere. The IEA estimates that fully enacted rare earth export restrictions could put at risk some 6.5 trillion US dollars per year of downstream production outside China.\n\nThe market is already pricing in the asymmetry. European buyers have paid around five times Chinese domestic prices for gallium and heavy rare earths, and nearly three times for germanium. A two-tier market has emerged — one price inside the dominant supply chain, another for everyone outside it.",
      },
      {
        heading: "The IEA is not alone in this diagnosis",
        body: "The 2026 Outlook lands on ground that a series of major studies has been preparing for years. The KU Leuven / Eurometaux study Metals for Clean Energy (2022) quantified Europe's looming primary-metals supply gap and delivered a sobering caveat on circularity: recycling cannot become a major domestic supply source before around 2040, because today's batteries and clean-tech products will only reach end of life in 10–15 years — which is precisely why recycling capacity and collection systems must be built now, not then.\n\nThe European Commission's JRC criticality assessments, which underpin the EU list of 34 critical and 17 strategic raw materials, reach the same structural conclusion: the EU's dependency is most acute at the processing stage, not extraction. The Draghi report on European competitiveness (2024) elevated raw material dependencies to a first-order economic security issue, and IRENA's Geopolitics of the Energy Transition: Critical Materials (2023) documented how processing — not reserves — is where market power actually concentrates.\n\nAcross these analyses, the convergence is striking: everyone measuring the problem finds the same pinch point. The disagreement, where it exists, is only about how fast the window to act is closing.",
      },
      {
        heading: "A heat map of the squeeze: not all minerals pinch in the same place",
        body: "Aggregates hide more than they reveal, so we scored eight key minerals across five bottleneck dimensions: refining concentration, export-control exposure, price pressure over 2025–26, midstream capacity imbalance, and substitution constraints — alongside a sixth column: how much leverage secondary supply offers for each.",
      },
      {
        figure: {
          src: "/insights/fig2-bottleneck-heatmap.png",
          caption: "Figure 2 — Bottleneck heat map by mineral. Lumin Advisory assessment, synthesised from the IEA Global Critical Minerals Outlook 2026.",
          alt: "Heatmap showing bottleneck risk intensity across eight critical minerals and five dimensions",
        },
      },
      {
        body: "Three tiers stand out.\n\nThe severe cluster — rare earths, gallium, germanium, graphite. These combine refining concentration above 85–90%, active export controls, and hard substitution limits. They are also, not coincidentally, the minerals where European prices have decoupled furthest from Chinese domestic prices. For this cluster, diversification through new mines barely moves the needle — the constraint is separation, purification, and downstream conversion capacity, plus the metallurgical know-how to run it.\n\nThe conditional cluster — cobalt and lithium. Here the risk is policy- and price-driven: the DRC's export quotas sent cobalt up roughly 130%, and lithium prices doubled on energy-storage demand even as producers cut investment by 40%. The midstream imbalance is real — cathode capacity outside the dominant supplier is roughly a third of projected mining capacity — but the resource base and chemistry options (LFP, sodium-ion) give buyers more room to manoeuvre.\n\nThe economically-squeezed cluster — nickel and copper. Concentration risk looks moderate on paper, but the economics of the midstream are deteriorating fastest here: copper smelter treatment charges at zero, zinc and lead fees negative, smelter utilisation outside China below 70%.",
      },
      {
        heading: "The deepest bottleneck is knowledge",
        body: "A refinery is not a building with equipment inside. It is an ecosystem: specialised technology, reliable access to critical reagents, precise process control and environmental management, deep metallurgical expertise, and direct integration with the downstream manufacturers who consume the output. Where any one of these is missing, projects take longer, cost more, and fail more often. The IEA quantifies the penalty: capital costs for refining projects outside dominant suppliers run 20–150% higher, operating costs on average 50% higher.\n\nEurope's honest self-assessment must be that decades of offshoring did not just move factories — it moved learning. Process metallurgy is tacit knowledge, accumulated at operating scale, and it does not transfer through a licensing agreement. The knowledge still exists in Europe — but fragmented across research institutes, a thinning industrial base, and retiring specialists. What Europe lacks is not intelligence; it is operating practice.",
      },
      {
        figure: {
          src: "/insights/fig3-mined-diversification.png",
          caption: "Figure 3 — Planned rare earth capacity outside China by 2035. Mined diversification, refined dependence.",
          alt: "Bar chart showing rare earth capacity outside China narrowing from ~50kt mining to ~18kt magnet production by 2035",
        },
      },
      {
        heading: "What we recommend",
        body: "For governments and policymakers: shift support from the mine gate to the midstream — offtake guarantees, contracts-for-difference, and price floors that let independent refiners survive a market their competitor can flood at will; treat recycling capacity as strategic processing infrastructure under the CRMA, not as waste policy; and fund operating practice — pilot lines, demonstration plants, and metallurgy education — with the same seriousness as capital equipment.\n\nFor industrial buyers and OEMs: map exposure at the level of individual process steps, reagents, and pieces of equipment — not countries of origin. A \"diversified\" supplier who depends on a single-source reagent or a controlled piece of processing equipment is not diversified. Build qualified second sources before the disruption, and contract secondary-material supply early: the recyclers now scaling will be capacity-constrained, and the buyers who qualified their material first will hold the advantage.\n\nFor investors and project developers: the scarce asset class of the next decade is not the deposit — it is permitted, operating midstream and recycling capacity in stable jurisdictions, with the workforce to run it. Evaluate projects on their position in the processing chain and their feedstock security, and demand the life-cycle and regulatory evidence (ISO 14040/44 LCA, EPDs, CRMA strategic-project eligibility) that turns a flowsheet into procurement-grade, bankable supply.",
      },
      {
        heading: "How Lumin helps organisations understand critical mineral supply chains",
        body: "This analysis is the kind of work Lumin Advisory does for clients every week. We are a Berlin-based consultancy working at the seam between critical raw materials, circular economy, and sustainability evidence — founded on a decade of research and industrial practice in e-waste metallurgy and critical metal recovery.\n\nConcretely, we support organisations in four ways. We map critical mineral value chains end to end — from ore and feedstock through refining, conversion, and components — identifying where a client's specific exposure sits and what disruption scenarios would mean for cost and continuity. We assess secondary raw material opportunities: quantifying critical metal content in e-waste and industrial streams, evaluating recovery routes and their economics, and positioning projects under the EU Critical Raw Materials Act. We build the evidence layer that markets and regulators increasingly demand — ISO 14040/44 life-cycle assessment, product carbon footprints, EPDs, and CBAM readiness. And we help clients navigate the funding and policy landscape, from Horizon Europe consortia to national instruments.\n\nIf your organisation is trying to understand where its critical mineral exposure really sits — or how to turn Europe's above-ground resources into supply — we would be glad to talk.",
      },
    ],
  },
  {
    slug: "mine-in-scrapyard",
    title: "The Mine in the Scrapyard",
    subtitle:
      "Can End-of-Life Vehicles Become Europe's Secondary Source of Critical Raw Materials?",
    tag: "Circular Economy",
    date: "July 2026",
    author: "Dr. Arda Işıldar, Lumin Advisory",
    readingTime: "7 min read",
    description:
      "Every year, around 12 million cars reach the end of their life on European roads. The car of 2026 carries a lithium-ion battery, permanent-magnet traction motors, and two to four times the copper of its combustion-engine predecessor. The end-of-life vehicle has quietly become one of the richest anthropogenic deposits of critical raw materials in Europe.",
    gradient: "from-emerald-500 to-teal-600",
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    sections: [
      {
        body: "Every year, around 12 million cars reach the end of their life on European roads. Roughly a third of them — some 3 to 4 million vehicles — simply vanish from the statistics, deregistered with no evidence of authorised recycling or legal export. The rest, about 4.3 million vehicles and 5 million tonnes of material in 2023, flow through Europe's authorised treatment facilities, where they are drained, dismantled, and shredded.\n\nFor two decades, we have treated this stream primarily as a bulk-materials problem: steel, aluminium, plastics, and the 85% reuse-and-recycling target of the old ELV Directive. That framing is now obsolete. The car of 2026 is not the car of 2000. It carries a lithium-ion battery with lithium, cobalt, nickel and graphite; permanent-magnet traction motors built on neodymium and dysprosium; power electronics; and two to four times the copper of its combustion-engine predecessor. In other words: the end-of-life vehicle has quietly become one of the richest anthropogenic deposits of critical raw materials (CRMs) in Europe.\n\nThe question is no longer whether CRMs are in the ELV stream. It is whether Europe can actually get them out.",
      },
      {
        heading: "What is actually in the stream?",
        body: "The numbers are concrete. ERTRAC's 2026 deep-dive on ELV recycling models a \"recycling factory of the future\" processing 100,000 electrified vehicles per year — about 160,000 tonnes of vehicle mass. From that single facility, the projected annual recovery is on the order of 600 tonnes of lithium, 2,700 tonnes of nickel, 480 tonnes of cobalt, 4,200 tonnes of graphite, and roughly 78 tonnes of rare earth elements, including around 57 tonnes of neodymium and 10 tonnes of dysprosium — primarily from high-voltage batteries and permanent-magnet e-motors.",
      },
      {
        figure: {
          src: "/insights/fig2-elv-recovery.png",
          caption: "Figure 2 — What one recycling plant could recover from 100,000 electrified vehicles a year. Source: ERTRAC, Deep Dive: ELV Recycling in the EU (March 2026).",
          alt: "Bar chart showing projected annual recovery of battery raw materials and rare earth elements from 100,000 electrified vehicles",
        },
      },
      {
        body: "Scale that against the millions of electrified vehicles that will start retiring in volume from the early 2030s, and end-of-life vehicles stop being a waste category and start looking like a strategic reserve. The European Commission's Joint Research Centre reached the same conclusion in its 2025 report on circularity measures for CRMs in vehicles, singling out rare earths, copper, lithium, cobalt and nickel as the priority targets.",
      },
      {
        heading: "So — can ELVs be a secondary source of CRMs?",
        body: "Yes. But today, mostly they are not. Three gaps stand between the potential and the reality.\n\nFirst, the leakage gap. A secondary resource you cannot collect is not a resource. With 3–4 million vehicles a year of \"unknown whereabouts\" and a large share of used vehicles exported outside the EU, a substantial fraction of Europe's future secondary neodymium, cobalt and copper is leaving the continent embedded in second-hand cars — often precisely the older, end-of-life-adjacent vehicles richest in recoverable material relative to their market value.\n\nSecond, the liberation gap. Today's shredder-based infrastructure was designed for bulk metals, not for CRMs. Rare-earth magnets that enter a shredder end up dispersed in the ferrous fraction, where the neodymium is functionally lost — and worse, copper contamination above roughly 0.1% downgrades the recovered steel itself. CRM recovery therefore depends on removing batteries, e-drive motors and magnets before shredding — which is exactly the labour-intensive dismantling step the current economics of authorised treatment facilities do not reward.\n\nThird, the processing gap. Even a cleanly removed motor or battery needs somewhere to go. Europe's capacity for magnet-to-magnet rare-earth recycling and battery-material refining is growing but still nascent. Without downstream processing, \"dismantled\" just means \"exported at a different point in the value chain.\"",
      },
      {
        heading: "Why the answer is changing now",
        body: "Two pieces of legislation are converting this from an engineering discussion into a compliance reality.\n\nThe Critical Raw Materials Act set the political benchmark: by 2030, EU recycling capacity should be able to cover at least 25% of the Union's annual consumption of strategic raw materials. That benchmark is unreachable without the vehicle stream — cars are simply where too much of the neodymium, cobalt and copper is.\n\nMore decisively, the new ELV Regulation, formally adopted by the Council on 29 June 2026, replaces the 25-year-old directive with directly applicable rules. It mandates recycled-plastic content in new vehicles (15% within six years, 25% within ten), requires removal of key components — batteries, e-drive motors — before shredding where shredding would destroy the material quality, extends producer responsibility across the whole vehicle lifecycle, and attacks the leakage problem: exporting used vehicles that are no longer roadworthy will be banned five years after the regulation enters into force.\n\nDesign-for-dismantling obligations close the loop at the front end: the vehicles type-approved under the new rules will be built to give their materials back.",
      },
      {
        figure: {
          src: "/insights/fig3-elv-timeline.png",
          caption: "Figure 3 — 2026–2036: the decade that decides the loop. Key regulatory milestones against the arrival of the EV/hybrid end-of-life wave.",
          alt: "Timeline of key regulatory milestones from 2026 to 2036 including ELV Regulation adoption, CRMA benchmarks and EV retirement wave",
        },
      },
      {
        heading: "The realistic verdict",
        body: "Can end-of-life vehicles be a secondary source of critical raw materials? The honest answer is: they are the single most important secondary source Europe will have — on a delay, and only if the system is built now.\n\nThe delay is structural. The CRM-rich vehicles — EVs and hybrids — are only beginning to retire; the wave arrives in the 2030s. That is not a reason to wait. It is the reason to act, because the lead times run in parallel: recycling plants take years to permit and build, dismantling networks take years to professionalise, and the regulation's targets take effect on a fixed clock. The countries and companies that treat the 2026–2030 window as preparation time — building magnet-recovery capability, battery-recycling capacity, reverse-logistics and traceability systems — will own the loop when the volumes come.\n\nThere is also a message here beyond the EU. Vehicle-importing economies — Türkiye among them, with its substantial automotive industry and growing recycling sector — face the same arithmetic from the other side: every imported used vehicle is also an imported future deposit of copper, rare earths and battery materials. Positioning ELV infrastructure as CRM infrastructure is an industrial-policy opportunity, not just an environmental obligation.\n\nThe mine of the future is not only in the ground. Some of it is parked outside — and, as of this summer, European law finally treats it that way.",
      },
      {
        heading: "About Lumin Advisory",
        body: "Lumin Advisory works with companies and institutions on critical raw materials strategy, circular economy and secondary resource recovery. If your organisation is thinking about what the new ELV Regulation and the CRMA mean for your value chain, let's talk.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
