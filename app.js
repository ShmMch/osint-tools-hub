const baseTools = [
  {
    name: "Google",
    url: "https://www.google.com/",
    tags: ["Search Engines", "General"],
    description: "General search with advanced operators."
  },
  {
    name: "Yahoo",
    url: "https://search.yahoo.com/",
    tags: ["Search Engines", "General"],
    description: "General search engine."
  },
  {
    name: "Bing",
    url: "https://www.bing.com/",
    tags: ["Search Engines", "General", "Images"],
    description: "Web and image search engine."
  },
  {
    name: "Yandex",
    url: "https://yandex.com/",
    tags: ["Search Engines", "General", "Images"],
    description: "Search engine often used for image and reverse lookups."
  },
  {
    name: "Startpage",
    url: "https://www.startpage.com/",
    tags: ["Search Engines", "Privacy"],
    description: "Privacy-focused search."
  },
  {
    name: "Qwant",
    url: "https://www.qwant.com/",
    tags: ["Search Engines", "Privacy"],
    description: "European search engine."
  },
  {
    name: "Baidu",
    url: "https://www.baidu.com/",
    tags: ["Search Engines", "Regional"],
    description: "Major search engine for Chinese content."
  },
  {
    name: "Naver",
    url: "https://www.naver.com/",
    tags: ["Search Engines", "Regional"],
    description: "Major search engine for Korean content."
  },
  {
    name: "DuckDuckGo",
    url: "https://duckduckgo.com/",
    tags: ["Search Engines", "Privacy"],
    description: "Privacy-focused search engine."
  },
  {
    name: "Crunchbase",
    url: "https://www.crunchbase.com/",
    tags: ["People & Companies", "Company Research"],
    description: "Company and startup intelligence."
  },
  {
    name: "RocketReach",
    url: "https://rocketreach.co/",
    tags: ["People & Companies", "Company Research", "Email"],
    description: "Find people and company contact information."
  },
  {
    name: "Webmii",
    url: "https://webmii.com/",
    tags: ["People & Companies", "People Search"],
    description: "People search across the web."
  },
  {
    name: "Pipl",
    url: "https://pipl.com/",
    tags: ["People & Companies", "People Search"],
    description: "Identity and people data platform."
  },
  {
    name: "Kompass",
    url: "https://www.kompass.com/",
    tags: ["People & Companies", "Company Research"],
    description: "Global business directory."
  },
  {
    name: "Namechk",
    url: "https://namechk.com/",
    tags: ["People & Companies", "Username"],
    description: "Check username availability across platforms."
  },
  {
    name: "Epieos",
    url: "https://epieos.com/",
    tags: ["People & Companies", "Email"],
    description: "Email and account investigation utilities."
  },
  {
    name: "2lingual",
    url: "https://2lingual.com/",
    tags: ["Search Engines", "Languages"],
    description: "Search in two languages in parallel."
  },
  {
    name: "Google Trends",
    url: "https://trends.google.com/",
    tags: ["Trends", "Keywords"],
    description: "Trend analysis by topic and region."
  },
  {
    name: "Keyword Tool",
    url: "https://keywordtool.io/",
    tags: ["Trends", "Keywords"],
    description: "Keyword discovery from search autocomplete."
  },
  {
    name: "trends24",
    url: "https://trends24.in/",
    tags: ["Trends", "X/Twitter"],
    description: "Trending hashtags and topics tracker."
  },
  {
    name: "Google Lens",
    url: "https://lens.google.com/",
    tags: ["Images", "Reverse Image"],
    description: "Reverse image and object search."
  },
  {
    name: "TinEye",
    url: "https://tineye.com/",
    tags: ["Images", "Reverse Image"],
    description: "Reverse image search and appearance tracking."
  },
  {
    name: "Pinterest Visual Search",
    url: "https://www.pinterest.com/",
    tags: ["Images", "Reverse Image"],
    description: "Visual discovery and similar-image exploration."
  },
  {
    name: "Picarta",
    url: "https://picarta.ai/",
    tags: ["Images", "Geolocation"],
    description: "Estimate image location using AI."
  },
  {
    name: "Pic2Map",
    url: "https://www.pic2map.com/",
    tags: ["Images", "Geolocation"],
    description: "Map image EXIF geodata."
  },
  {
    name: "Reality Defender",
    url: "https://realitydefender.com/",
    tags: ["Images", "Verification", "Deepfake"],
    description: "Detect AI-generated/manipulated media."
  },
  {
    name: "Truepic",
    url: "https://www.truepic.com/",
    tags: ["Images", "Verification"],
    description: "Media authenticity verification."
  },
  {
    name: "Sensity AI",
    url: "https://sensity.ai/",
    tags: ["Images", "Verification", "Deepfake"],
    description: "Deepfake and synthetic media detection."
  },
  {
    name: "FotoForensics",
    url: "https://fotoforensics.com/",
    tags: ["Images", "Verification"],
    description: "Image forensics and error level analysis."
  },
  {
    name: "PimEyes",
    url: "https://pimeyes.com/",
    tags: ["Images", "Face Search"],
    description: "Face search engine."
  },
  {
    name: "FaceCheck.ID",
    url: "https://facecheck.id/",
    tags: ["Images", "Face Search"],
    description: "Face lookup and matching."
  },
  {
    name: "Lenso.ai",
    url: "https://lenso.ai/",
    tags: ["Images", "Face Search"],
    description: "AI-powered visual/face search."
  },
  {
    name: "ThisPersonDoesNotExist",
    url: "https://thispersondoesnotexist.com/",
    tags: ["Images", "AI"],
    description: "Generate synthetic faces."
  },
  {
    name: "Ideogram",
    url: "https://ideogram.ai/",
    tags: ["Images", "AI"],
    description: "AI image generation with style control."
  },
  {
    name: "Generated Photos",
    url: "https://generated.photos/",
    tags: ["Images", "AI"],
    description: "AI-generated face datasets."
  },
  {
    name: "Canva AI Face Generator",
    url: "https://www.canva.com/ai-image-generator/",
    tags: ["Images", "AI"],
    description: "Generate AI portraits from prompts."
  },
  {
    name: "Trustpilot",
    url: "https://www.trustpilot.com/",
    tags: ["Company Research", "Reputation"],
    description: "Public reviews and trust signals."
  },
  {
    name: "OpenCorporates",
    url: "https://opencorporates.com/",
    tags: ["Company Research", "Corporate Records"],
    description: "Global company registry data."
  },
  {
    name: "Qichacha",
    url: "https://www.qcc.com/",
    tags: ["Company Research", "Corporate Records"],
    description: "Chinese company database."
  },
  {
    name: "Corporation Wiki",
    url: "https://www.corporationwiki.com/",
    tags: ["Company Research", "Corporate Records"],
    description: "US company and executive records."
  },
  {
    name: "North Data",
    url: "https://www.northdata.com/",
    tags: ["Company Research", "Corporate Records"],
    description: "Company records and network links."
  },
  {
    name: "OCCRP Aleph",
    url: "https://aleph.occrp.org/",
    tags: ["Company Research", "Leaks"],
    description: "Investigative database and leaked records."
  },
  {
    name: "ICIJ Offshore Leaks",
    url: "https://offshoreleaks.icij.org/",
    tags: ["Company Research", "Leaks"],
    description: "Offshore entities and leaked records."
  },
  {
    name: "PayPlus Companies",
    url: "https://www.payplus.co.il/companies/",
    tags: ["Company Research", "Israel"],
    description: "Company lookup source used in the course."
  },
  {
    name: "Namsor",
    url: "https://namsor.app/",
    tags: ["People", "Identity"],
    description: "Name origin and ethnicity analysis."
  },
  {
    name: "WhatsMyName",
    url: "https://whatsmyname.app/",
    tags: ["People", "Username"],
    description: "Username search across platforms."
  },
  {
    name: "IDCrawl",
    url: "https://www.idcrawl.com/",
    tags: ["People", "People Search"],
    description: "Public profile and people search."
  },
  {
    name: "Open Measures",
    url: "https://openmeasures.io/",
    tags: ["People", "Social"],
    description: "Open-source social data research platform."
  },
  {
    name: "wa.me",
    url: "https://wa.me/",
    tags: ["Phone", "Messaging"],
    description: "Direct WhatsApp message link format."
  },
  {
    name: "QGIS",
    url: "https://qgis.org/",
    tags: ["GEO", "Maps"],
    description: "Open-source GIS platform."
  },
  {
    name: "ArcGIS",
    url: "https://www.arcgis.com/",
    tags: ["GEO", "Maps"],
    description: "Esri geospatial platform."
  },
  {
    name: "Geospy AI",
    url: "https://geospy.ai/",
    tags: ["GEO", "AI"],
    description: "AI geolocation support."
  },
  {
    name: "Google Maps",
    url: "https://maps.google.com/",
    tags: ["GEO", "Maps"],
    description: "Map and location search."
  },
  {
    name: "Google Earth",
    url: "https://earth.google.com/",
    tags: ["GEO", "Maps"],
    description: "3D earth imagery and map exploration."
  },
  {
    name: "OpenStreetMap",
    url: "https://www.openstreetmap.org/",
    tags: ["GEO", "Maps"],
    description: "Open collaborative map database."
  },
  {
    name: "Overpass Turbo",
    url: "https://overpass-turbo.eu/",
    tags: ["GEO", "Maps"],
    description: "Query engine for OpenStreetMap data."
  },
  {
    name: "InstaNavigation",
    url: "http://www.instanavigation.com/",
    tags: ["Social Media", "Instagram"],
    description: "Anonymous Instagram story viewing."
  },
  {
    name: "Downloadgram",
    url: "https://downloadgram.org/",
    tags: ["Social Media", "Instagram"],
    description: "Instagram media downloader."
  },
  {
    name: "StorySaver",
    url: "https://storiesaver.net/",
    tags: ["Social Media", "Instagram"],
    description: "Download Instagram stories."
  },
  {
    name: "InDown",
    url: "https://indown.io/",
    tags: ["Social Media", "Instagram", "TikTok"],
    description: "Social media video downloader."
  },
  {
    name: "Lookup-ID",
    url: "https://lookup-id.com/",
    tags: ["Social Media", "Facebook"],
    description: "Find Facebook profile/page/group IDs."
  },
  {
    name: "Worldometer",
    url: "https://www.worldometers.info/",
    tags: ["Web & Data", "Statistics"],
    description: "Global real-time statistics."
  },
  {
    name: "World Bank Data",
    url: "https://data.worldbank.org/",
    tags: ["Web & Data", "Statistics"],
    description: "Official economic and demographic datasets."
  },
  {
    name: "DomainToIPConverter",
    url: "https://domaintoipconverter.com/",
    tags: ["Web Tracking", "Domain"],
    description: "Resolve domain names to IP addresses."
  },
  {
    name: "CheckShortURL",
    url: "https://checkshorturl.com/",
    tags: ["Web Tracking", "URL"],
    description: "Expand and inspect shortened links."
  },
  {
    name: "WhereGoes",
    url: "https://wheregoes.com/",
    tags: ["Web Tracking", "URL"],
    description: "Trace redirect chains."
  },
  {
    name: "PDFmyURL",
    url: "https://pdfmyurl.com/",
    tags: ["Web Tracking", "Archiving"],
    description: "Export a webpage to PDF."
  },
  {
    name: "EXIF.tools",
    url: "https://exif.tools/",
    tags: ["Web Tracking", "Metadata"],
    description: "Inspect EXIF and file metadata."
  },
  {
    name: "DNSlytics",
    url: "https://dnslytics.com/",
    tags: ["Web Tracking", "DNS"],
    description: "DNS and infrastructure lookup."
  },
  {
    name: "MXToolbox",
    url: "https://mxtoolbox.com/",
    tags: ["Web Tracking", "DNS", "Email"],
    description: "DNS/mail diagnostics and blacklist checks."
  },
  {
    name: "ViewDNS",
    url: "https://viewdns.info/",
    tags: ["Web Tracking", "DNS"],
    description: "DNS and domain investigation toolkit."
  },
  {
    name: "IPAddress.com",
    url: "https://www.ipaddress.com/",
    tags: ["Web Tracking", "IP"],
    description: "IP/domain information and lookups."
  },
  {
    name: "urlscan.io",
    url: "https://urlscan.io/",
    tags: ["Web Tracking", "URL", "Security"],
    description: "Scan websites safely and inspect requests."
  },
  {
    name: "Wayback Machine",
    url: "https://web.archive.org/",
    tags: ["Archive", "Web"],
    description: "Historical website snapshots."
  },
  {
    name: "archive.md",
    url: "https://archive.md/",
    tags: ["Archive", "Web"],
    description: "On-demand page archiving."
  },
  {
    name: "Who.is",
    url: "https://who.is/",
    tags: ["Domain", "WHOIS"],
    description: "Domain registration and ownership lookup."
  },
  {
    name: "whois.com",
    url: "https://www.whois.com/",
    tags: ["Domain", "WHOIS"],
    description: "WHOIS and DNS tools."
  },
  {
    name: "Whoisology",
    url: "https://whoisology.com/",
    tags: ["Domain", "WHOIS"],
    description: "Reverse WHOIS exploration."
  },
  {
    name: "Whoismind",
    url: "https://whoismind.com/",
    tags: ["Domain", "WHOIS"],
    description: "Domain and IP lookup."
  },
  {
    name: "ICANN Lookup",
    url: "https://lookup.icann.org/",
    tags: ["Domain", "WHOIS"],
    description: "Official registration data lookup."
  },
  {
    name: "VirusTotal",
    url: "https://www.virustotal.com/",
    tags: ["Domain", "Security", "Files", "URLs"],
    description: "Analyze URLs/files/domains with multiple engines."
  },
  {
    name: "Related Words",
    url: "https://relatedwords.org/",
    tags: ["Language", "Research"],
    description: "Synonyms and related terms expansion."
  },
  {
    name: "Thesaurus",
    url: "https://www.thesaurus.com/",
    tags: ["Language", "Research"],
    description: "Synonyms for query expansion."
  },
  {
    name: "data.gov.il",
    url: "https://data.gov.il/",
    tags: ["Databases", "Israel", "Government"],
    description: "Israeli government open datasets."
  },
  {
    name: "NewsGuard",
    url: "https://www.newsguardtech.com/",
    tags: ["Verification", "News"],
    description: "News source credibility ratings."
  },
  {
    name: "ClaimBuster",
    url: "https://idir.uta.edu/claimbuster/",
    tags: ["Verification", "Fact Checking"],
    description: "Automated fact-check support."
  },
  {
    name: "Google Fact Check Tools",
    url: "https://toolbox.google.com/factcheck/explorer",
    tags: ["Verification", "Fact Checking"],
    description: "Search published fact checks."
  },
  {
    name: "Deepware Scanner",
    url: "https://scanner.deepware.ai/",
    tags: ["Verification", "Deepfake"],
    description: "Deepfake media scanner."
  },
  {
    name: "Verifalia",
    url: "https://verifalia.com/",
    tags: ["Email", "Validation"],
    description: "Email validation tool."
  },
  {
    name: "Hunter",
    url: "https://hunter.io/",
    tags: ["Email", "Validation"],
    description: "Email verification and discovery."
  },
  {
    name: "Find Email (Base44)",
    url: "https://find-email.base44.app/",
    tags: ["Email", "Discovery"],
    description: "Email guess/discovery helper."
  },
  {
    name: "Google Hacking Database",
    url: "https://www.exploit-db.com/google-hacking-database",
    tags: ["Operators", "Dorking"],
    description: "Ready-made Google dorks collection."
  },
  {
    name: "OSINT Framework",
    url: "https://osintframework.com/",
    tags: ["Directories", "Learning"],
    description: "Large categorized OSINT tool directory."
  },
  {
    name: "cipher387 OSINT Stuff",
    url: "https://github.com/cipher387/osint_stuff_tool_collection",
    tags: ["Directories", "Learning"],
    description: "Curated OSINT tool collection."
  },
  {
    name: "Awesome OSINT",
    url: "https://github.com/jivoi/awesome-osint",
    tags: ["Directories", "Learning"],
    description: "Curated awesome list of OSINT resources."
  },
  {
    name: "Bellingcat Toolkit",
    url: "https://bellingcat.gitbook.io/toolkit",
    tags: ["Directories", "Learning"],
    description: "Investigation tools and workflows."
  },
  {
    name: "Eyedex",
    url: "https://www.eyedex.org/",
    tags: ["Directories", "Deep Web"],
    description: "Index for sources not always visible in common search."
  }
];

const CUSTOM_TOOLS_KEY = "osintHubCustomTools";
let repoTools = [];
let tools = [];
const activeTags = new Set();
let lastFocusedElement = null;

const searchInput = document.querySelector("#searchInput");
const clearSearchBtn = document.querySelector("#clearSearchBtn");
const resetTagsBtn = document.querySelector("#resetTagsBtn");
const tagFilters = document.querySelector("#tagFilters");
const toolGrid = document.querySelector("#toolGrid");
const resultCount = document.querySelector("#resultCount");
const tagCount = document.querySelector("#tagCount");
const exportJsonBtn = document.querySelector("#exportJsonBtn");
const openAddModalBtn = document.querySelector("#openAddModalBtn");
const closeModalBtn = document.querySelector("#closeModalBtn");
const cancelAddBtn = document.querySelector("#cancelAddBtn");
const modalOverlay = document.querySelector("#modalOverlay");
const appHeader = document.querySelector("#appHeader");
const appMain = document.querySelector("#appMain");
const addToolForm = document.querySelector("#addToolForm");
const toolNameInput = document.querySelector("#toolNameInput");
const toolUrlInput = document.querySelector("#toolUrlInput");
const toolTagsInput = document.querySelector("#toolTagsInput");
const toolDescInput = document.querySelector("#toolDescInput");

function normalizeUrl(url) {
  if (typeof url !== "string") return null;
  try {
    const parsed = new URL(url.trim());
    if (!["http:", "https:"].includes(parsed.protocol)) return null;
    parsed.hash = "";
    return parsed.toString();
  } catch {
    return null;
  }
}

function normalizeTool(tool) {
  if (!tool || typeof tool !== "object") return null;
  const name = typeof tool.name === "string" ? tool.name.trim() : "";
  const description = typeof tool.description === "string" ? tool.description.trim() : "";
  const normalizedUrl = normalizeUrl(tool.url);
  const tags = Array.isArray(tool.tags)
    ? [...new Set(tool.tags.filter((tag) => typeof tag === "string").map((tag) => tag.trim()))].filter(
        Boolean
      )
    : [];

  if (!name || !description || !normalizedUrl || tags.length === 0) return null;
  return { name, url: normalizedUrl, tags, description };
}

function isValidTool(tool) {
  return normalizeTool(tool) !== null;
}

function loadCustomTools() {
  try {
    const raw = localStorage.getItem(CUSTOM_TOOLS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.map(normalizeTool).filter(Boolean) : [];
  } catch {
    return [];
  }
}

function saveCustomTools(customTools) {
  localStorage.setItem(CUSTOM_TOOLS_KEY, JSON.stringify(customTools));
}

async function loadRepoToolsJson() {
  try {
    const response = await fetch("tools.json", { cache: "no-store" });
    if (!response.ok) return;
    const data = await response.json();
    if (!Array.isArray(data)) return;
    repoTools = data.map(normalizeTool).filter(Boolean);
  } catch {
    repoTools = [];
  }
}

function mergeTools() {
  const source = repoTools.length > 0 ? repoTools : baseTools;
  const custom = loadCustomTools();
  const map = new Map();
  [...source, ...custom].map(normalizeTool).filter(Boolean).forEach((tool) => {
    const key = `${tool.name.toLowerCase()}|${tool.url.toLowerCase()}`;
    if (!map.has(key)) map.set(key, tool);
  });
  return [...map.values()];
}

function getDomain(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function getTagStats(currentTools) {
  const tags = [...new Set(currentTools.flatMap((tool) => tool.tags))].sort((a, b) =>
    a.localeCompare(b)
  );
  const counts = tags.reduce((acc, tag) => {
    acc[tag] = currentTools.filter((tool) => tool.tags.includes(tag)).length;
    return acc;
  }, {});
  return { tags, counts };
}

function getFilteredTools() {
  const query = searchInput.value.trim().toLowerCase();
  return tools
    .filter((tool) => {
      const matchesSearch =
        query.length === 0 ||
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        getDomain(tool.url).toLowerCase().includes(query);

      const matchesTags =
        activeTags.size === 0 || [...activeTags].some((tag) => tool.tags.includes(tag));

      return matchesSearch && matchesTags;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

function renderTags(tags, counts) {
  tagFilters.innerHTML = "";
  tags.forEach((tag) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "tag";
    if (activeTags.has(tag)) btn.classList.add("is-active");
    btn.textContent = `${tag} (${counts[tag]})`;
    btn.addEventListener("click", () => {
      if (activeTags.has(tag)) activeTags.delete(tag);
      else activeTags.add(tag);
      renderAll();
    });
    tagFilters.appendChild(btn);
  });
}

function renderTools() {
  const filtered = getFilteredTools();
  resultCount.textContent = String(filtered.length);

  toolGrid.innerHTML = "";
  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty";
    empty.textContent = "No tools found. Clear filters or try different keywords.";
    toolGrid.appendChild(empty);
    return;
  }

  filtered.forEach((tool) => {
    const card = document.createElement("article");
    card.className = "tool-card";

    const head = document.createElement("div");
    head.className = "tool-card__head";

    const title = document.createElement("h3");
    title.textContent = tool.name;

    const domain = document.createElement("span");
    domain.className = "tool-card__domain";
    domain.textContent = getDomain(tool.url);

    head.appendChild(title);
    head.appendChild(domain);

    const desc = document.createElement("p");
    desc.textContent = tool.description;

    const tagsWrap = document.createElement("div");
    tagsWrap.className = "tool-tags";
    tool.tags.slice(0, 3).forEach((tag) => {
      const tagChip = document.createElement("span");
      tagChip.textContent = tag;
      tagsWrap.appendChild(tagChip);
    });
    if (tool.tags.length > 3) {
      const more = document.createElement("span");
      more.textContent = `+${tool.tags.length - 3}`;
      tagsWrap.appendChild(more);
    }

    const actions = document.createElement("div");
    actions.className = "tool-card__actions";
    const open = document.createElement("a");
    open.href = tool.url;
    open.target = "_blank";
    open.rel = "noreferrer";
    open.className = "btn";
    open.textContent = "Open Tool";
    actions.appendChild(open);

    card.appendChild(head);
    card.appendChild(desc);
    card.appendChild(tagsWrap);
    card.appendChild(actions);
    toolGrid.appendChild(card);
  });
}

function renderAll() {
  tools = mergeTools();
  const { tags, counts } = getTagStats(tools);
  tagCount.textContent = String(tags.length);
  [...activeTags].forEach((tag) => {
    if (!tags.includes(tag)) activeTags.delete(tag);
  });
  renderTags(tags, counts);
  renderTools();
}

function downloadToolsJson() {
  const data = JSON.stringify(mergeTools(), null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "tools.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function closeModal() {
  modalOverlay.hidden = true;
  document.body.style.overflow = "";
  [appHeader, appMain].forEach((el) => {
    el.removeAttribute("aria-hidden");
    if ("inert" in el) el.inert = false;
  });
  addToolForm.reset();
  if (lastFocusedElement) lastFocusedElement.focus();
}

function openModal() {
  lastFocusedElement = document.activeElement;
  modalOverlay.hidden = false;
  document.body.style.overflow = "hidden";
  [appHeader, appMain].forEach((el) => {
    el.setAttribute("aria-hidden", "true");
    if ("inert" in el) el.inert = true;
  });
  toolNameInput.focus();
}

function addTool(tool) {
  const normalized = normalizeTool(tool);
  if (!normalized) return false;
  const merged = mergeTools();
  const duplicate = merged.some(
    (item) =>
      item.name.toLowerCase() === normalized.name.toLowerCase() &&
      item.url.toLowerCase() === normalized.url.toLowerCase()
  );
  if (duplicate) return false;
  const custom = loadCustomTools();
  custom.push(normalized);
  saveCustomTools(custom);
  return true;
}

searchInput.addEventListener("input", renderTools);
clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  renderTools();
});
resetTagsBtn.addEventListener("click", () => {
  activeTags.clear();
  renderAll();
});
exportJsonBtn.addEventListener("click", downloadToolsJson);

openAddModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
cancelAddBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (!modalOverlay.hidden && event.key === "Tab") {
    const focusable = modalOverlay.querySelectorAll(
      "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
    );
    if (focusable.length > 0) {
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    return;
  }
  if (event.key === "Escape" && !modalOverlay.hidden) {
    closeModal();
    return;
  }
  if (event.key === "/" && modalOverlay.hidden && event.target === document.body) {
    event.preventDefault();
    searchInput.focus();
  }
});

addToolForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = toolNameInput.value.trim();
  const url = toolUrlInput.value.trim();
  const description = toolDescInput.value.trim();
  const tags = toolTagsInput.value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
  if (!name || !url || !description || tags.length === 0) return;

  const ok = addTool({ name, url, tags, description });
  if (!ok) {
    alert("Invalid tool data or duplicate tool.");
    return;
  }

  closeModal();
  renderAll();
});

loadRepoToolsJson().finally(renderAll);
