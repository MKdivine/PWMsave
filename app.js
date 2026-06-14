const displays = [
	{
		category: "24\" 1080p",
		name: "ASUS TUF Gaming VG27AQM5A",
		type: "Fast IPS • 1080p • High Refresh",
		image: "https://m.media-amazon.com/images/I/71-woCs5tFL._AC_SY355_.jpg",
		link: "https://www.amazon.com/s?k=ASUS+TUF+Gaming+VG27AQM5A&tag=yourtag-20",
		topPick: false,
		en: {
			bestFor: "Budget Gaming",
			description: "1080p-focused TUF Gaming option aimed at smooth gameplay with eye-care modes and low-latency performance.",
			pros: [
				"1080p is easier on the GPU and delivers high FPS in many games",
				"Fast IPS response behavior for clearer motion",
				"TUF gaming features including Adaptive-Sync and GamePlus"
			],
			cons: [
				"Lower pixel density than 1440p/4K on larger panels",
				"Color and HDR may need calibration depending on the preset",
				"Check regional port details and max refresh rate before buying"
			]
		},
		de: {
			bestFor: "Budget-Gaming",
			description: "1080p-ausgerichtetes TUF-Gaming-Display für flüssiges Gameplay mit Augenschonmodi und niedriger Latenz.",
			pros: [
				"1080p schont die GPU und ermöglicht hohe FPS in vielen Spielen",
				"Schnelles IPS-Ansprechverhalten für klarere Bewegungsdarstellung",
				"TUF-Gaming-Features inklusive Adaptive-Sync und GamePlus"
			],
			cons: [
				"Geringere Pixeldichte als 1440p/4K auf größeren Panels",
				"Farbe und HDR können je nach Preset Kalibrierung benötigen",
				"Regionale Port-Details und maximale Bildwiederholrate vor dem Kauf prüfen"
			]
		}
	},
	{
		category: "24\" 1080p",
		name: "BenQ ZOWIE XL2540K 25\"",
		type: "TN • 1080p • 240Hz",
		image: "https://m.media-amazon.com/images/I/614BSKsARkL._AC_SY355_.jpg",
		link: "https://amzn.to/4s2Qddb",
		topPick: true,
		en: {
			bestFor: "Esports & Eye Comfort",
			description: "Esports-grade 25-inch TN monitor built for competitive play with 240Hz, ultra-fast response times, and BenQ's DyAc+ technology for motion clarity.",
			pros: [
				"240Hz with very fast TN response for minimal motion blur",
				"DyAc+ backlight strobing for extra motion clarity in shooters",
				"Compact 25-inch size popular in esports for easier eye tracking",
				"Flexible stand with height, tilt, swivel, and pivot adjustments",
				"No HDR brightness spikes and no ultra-saturated wide gamut can feel calmer on sensitive eyes during long sessions"
			],
			cons: [
				"TN panel has narrower viewing angles and less vibrant colors than IPS",
				"1080p at 25 inches is not the sharpest for desktop/text work",
				"Primarily designed for competitive gaming, less suited for content creation"
			]
		},
		de: {
			bestFor: "Esports & Augenschonung",
			description: "Esports-Monitor mit 25 Zoll TN-Panel, 240Hz, ultrakurzen Reaktionszeiten und BenQs DyAc+-Technologie für maximale Bewegungsschärfe.",
			pros: [
				"240Hz mit sehr schnellem TN-Ansprechverhalten für minimale Bewegungsunschärfe",
				"DyAc+-Backlight-Strobing für zusätzliche Bewegungsklarheit in Shootern",
				"Kompaktes 25-Zoll-Format – in Esports beliebt für leichteres Eye-Tracking",
				"Flexibler Standfuß mit Höhen-, Neigungs-, Dreh- und Pivot-Verstellung",
				"Keine HDR-Helligkeitsspitzen und kein ultra-gesättigtes Wide-Gamut – schonend für empfindliche Augen"
			],
			cons: [
				"TN-Panel hat engere Betrachtungswinkel und weniger lebendige Farben als IPS",
				"1080p bei 25 Zoll ist für Desktop-Arbeit und Text nicht die schärfste Wahl",
				"Primär für Wettkampfgaming ausgelegt, weniger geeignet für Content Creation"
			]
		}
	},
	{
		category: "27-32\" 4k",
		name: "Samsung Odyssey G70D",
		type: "IPS • 4K • High Refresh",
		image: "https://m.media-amazon.com/images/I/81ligAc8N4L._AC_SY355_.jpg",
		link: "https://www.amazon.com/s?k=Samsung+Odyssey+G70D&tag=yourtag-20",
		topPick: false,
		en: {
			bestFor: "4K Gaming",
			description: "4K gaming-focused Odyssey model with fast refresh behavior, strong sharpness, and modern console/PC-ready feature set.",
			pros: [
				"4K provides very clear detail for text and visuals",
				"High refresh rate for responsive gameplay",
				"Good option for mixed gaming and media use"
			],
			cons: [
				"4K at high FPS puts heavy load on the GPU",
				"HDR quality can vary by scene and expectations",
				"Check regional ports and feature limits before buying"
			]
		},
		de: {
			bestFor: "4K-Gaming",
			description: "4K-Gaming-Odyssey-Modell mit schnellem Bildwiederholverhalten, hoher Schärfe und modernem Feature-Set für Konsole und PC.",
			pros: [
				"4K bietet sehr klare Details für Text und Grafik",
				"Hohe Bildwiederholrate für reaktionsschnelles Gameplay",
				"Gute Wahl für gemischten Gaming- und Medieneinsatz"
			],
			cons: [
				"4K bei hoher FPS-Anforderung belastet die GPU stark",
				"HDR-Qualität kann je nach Szene und Erwartung variieren",
				"Regionale Ports und Feature-Einschränkungen vor dem Kauf prüfen"
			]
		}
	},
	{
		category: "27-32\" 4k",
		name: "Gigabyte M27UP 27\"",
		type: "IPS • 4K • 160Hz",
		image: "https://m.media-amazon.com/images/I/81-ljk8kiqL._AC_SY355_.jpg",
		link: "https://www.amazon.com/s?k=Gigabyte+M27UP&tag=yourtag-20",
		topPick: true,
		en: {
			bestFor: "4K Allrounder",
			description: "Versatile 27-inch 4K monitor with high refresh rate, KVM convenience, and eye-care features for long mixed work and gaming sessions.",
			pros: [
				"4K sharpness improves text clarity for office use",
				"High refresh rate feels smoother in motion-heavy content",
				"Built-in KVM helps switch quickly between two systems"
			],
			cons: [
				"May need scaling tweaks in some desktop apps",
				"Premium features can increase price vs basic 27-inch monitors",
				"Check exact regional specs before purchase"
			]
		},
		de: {
			bestFor: "4K-Allrounder",
			description: "Vielseitiger 27-Zoll-4K-Monitor mit hoher Bildwiederholrate, KVM-Funktion und Augenschon-Features für lange Arbeits- und Gaming-Sessions.",
			pros: [
				"4K-Schärfe verbessert die Textklarheit für Büroarbeit",
				"Hohe Bildwiederholrate sorgt für flüssigere Darstellung bei bewegungsreichen Inhalten",
				"Eingebauter KVM ermöglicht schnellen Wechsel zwischen zwei Systemen"
			],
			cons: [
				"Einige Desktop-Apps benötigen möglicherweise Skalierungsanpassungen",
				"Premium-Features können den Preis gegenüber einfachen 27-Zoll-Monitoren erhöhen",
				"Genaue regionale Spezifikationen vor dem Kauf prüfen"
			]
		}
	},
	{
		category: "27\" 1440p",
		name: "ASUS TUF Gaming VG27AQA1A 27\"",
		type: "Fast IPS • QHD • True 8-Bit",
		image: "https://m.media-amazon.com/images/I/71hf8GNq78L._AC_SY355_.jpg",
		link: "https://www.amazon.com/s?k=ASUS+TUF+Gaming+VG27AQA1A&tag=yourtag-20",
		topPick: true,
		en: {
			bestFor: "Top Pick: Eye-Friendly Gaming",
			description: "27-inch QHD ASUS TUF display with True 8-bit color, a very safe everyday tuning profile, and eye-friendly behavior for long gaming or work sessions.",
			pros: [
				"True 8-bit panel for clean gradients and stable color rendering",
				"Very safe and eye-friendly setup for long sessions",
				"QHD at 27 inches gives a balanced mix of sharpness and performance",
				"TUF gaming features and Adaptive-Sync support smooth, comfortable motion"
			],
			cons: [
				"Factory presets may still need personal brightness tuning",
				"HDR remains limited compared with premium HDR models",
				"Verify exact region specs and ports before buying"
			]
		},
		de: {
			bestFor: "Top-Empfehlung: Augenfreundliches Gaming",
			description: "27-Zoll-QHD-ASUS-TUF-Display mit True-8-Bit-Farbe, sehr sicherem Alltagsprofil und augenfreundlichem Verhalten für lange Gaming- oder Arbeitssessions.",
			pros: [
				"True-8-Bit-Panel für saubere Farbverläufe und stabile Farbdarstellung",
				"Sehr sicheres und augenfreundliches Setup für lange Sessions",
				"QHD bei 27 Zoll bietet eine ausgewogene Mischung aus Schärfe und Performance",
				"TUF-Gaming-Features und Adaptive-Sync für flüssige, komfortable Bewegungsdarstellung"
			],
			cons: [
				"Werksseitige Presets erfordern möglicherweise persönliche Helligkeitsanpassung",
				"HDR bleibt im Vergleich zu Premium-HDR-Modellen eingeschränkt",
				"Genaue regionale Spezifikationen und Ports vor dem Kauf prüfen"
			]
		}
	},
	{
		category: "27\" 1440p",
		name: "Samsung S27DG50 27\"",
		type: "IPS • QHD • 180Hz",
		image: "https://m.media-amazon.com/images/I/81Hy1T8qclL._AC_SY355_.jpg",
		link: "https://www.amazon.com/s?k=Samsung+S27DG50&tag=yourtag-20",
		topPick: false,
		en: {
			bestFor: "Allround Gaming",
			description: "27-inch 1440p Samsung gaming display focused on smooth motion, strong everyday clarity, and eye-comfort options for long sessions.",
			pros: [
				"QHD resolution gives a clean balance of sharpness and gaming performance",
				"Up to 180Hz refresh helps motion look smoother in fast scenes",
				"IPS panel supports wider viewing angles and consistent color",
				"Good all-around fit for mixed work and gaming setups"
			],
			cons: [
				"Not a 4K panel if maximum text/detail sharpness is your priority",
				"HDR performance may be limited versus premium HDR models",
				"Peak brightness and color tuning can vary by unit and settings",
				"Always verify region-specific port and feature details before purchase"
			]
		},
		de: {
			bestFor: "Allround-Gaming",
			description: "27-Zoll-1440p-Samsung-Gaming-Display mit flüssiger Bewegungsdarstellung, guter Alltagsschärfe und Augenschon-Optionen für lange Sessions.",
			pros: [
				"QHD-Auflösung bietet eine saubere Balance zwischen Schärfe und Gaming-Performance",
				"Bis zu 180Hz Bildwiederholrate lässt Bewegungen in schnellen Szenen flüssiger wirken",
				"IPS-Panel unterstützt breitere Betrachtungswinkel und konsistentere Farben",
				"Gute Allround-Wahl für gemischte Arbeits- und Gaming-Setups"
			],
			cons: [
				"Kein 4K-Panel, wenn maximale Text- und Detailschärfe Priorität hat",
				"HDR-Performance kann gegenüber Premium-HDR-Modellen eingeschränkt sein",
				"Spitzenhelligkeit und Farbabstimmung können je nach Gerät und Einstellungen variieren",
				"Regionale Port- und Feature-Details vor dem Kauf immer prüfen"
			]
		}
	},
	{
		category: "27\" 1440p",
		name: "ASUS TUF Gaming VG27AQM1A 27\"",
		type: "Fast IPS • QHD • up to 260Hz (OC)",
		image: "https://m.media-amazon.com/images/I/61FIi0AMNOL._AC_SY355_.jpg",
		link: "https://www.amazon.com/s?k=ASUS+TUF+Gaming+VG27AQM1A&tag=yourtag-20",
		topPick: false,
		en: {
			bestFor: "Competitive Gaming",
			description: "Fast 27-inch QHD gaming monitor with a Fast IPS panel, Adaptive-Sync, ELMB-Sync, and strong motion clarity for competitive play.",
			pros: [
				"High refresh rate for very smooth gameplay",
				"QHD resolution offers a strong balance of sharpness and performance",
				"ELMB-Sync + Adaptive-Sync help reduce tearing and motion blur",
				"Gaming tools like Variable Overdrive and Shadow Boost"
			],
			cons: [
				"Not 4K, so pixel sharpness is lower than UHD models",
				"Often overkill for basic office use",
				"HDR is more entry-level compared to high-end HDR displays",
				"Overdrive fine-tuning is recommended depending on setup"
			]
		},
		de: {
			bestFor: "Kompetitives Gaming",
			description: "Schneller 27-Zoll-QHD-Gaming-Monitor mit Fast-IPS-Panel, Adaptive-Sync, ELMB-Sync und starker Bewegungsklarheit für kompetitives Spielen.",
			pros: [
				"Hohe Bildwiederholrate für sehr flüssiges Gameplay",
				"QHD-Auflösung bietet eine starke Balance aus Schärfe und Performance",
				"ELMB-Sync + Adaptive-Sync helfen, Tearing und Bewegungsunschärfe zu reduzieren",
				"Gaming-Tools wie Variable Overdrive und Shadow Boost"
			],
			cons: [
				"Kein 4K – Pixelschärfe geringer als bei UHD-Modellen",
				"Für einfache Büroarbeit oft überdimensioniert",
				"HDR ist im Vergleich zu High-End-HDR-Displays eher Einstiegsniveau",
				"Overdrive-Feinabstimmung wird je nach Setup empfohlen"
			]
		}
	},
	{
		category: "27\" 1440p",
		name: "HP Omen 27q 27\"",
		type: "IPS • QHD • 165Hz",
		image: "https://m.media-amazon.com/images/I/71vlUnVH10L._AC_SY355_.jpg",
		link: "https://www.amazon.com/s?k=HP+Omen+27q&tag=yourtag-20",
		topPick: false,
		en: {
			bestFor: "Reddit Favorite",
			description: "Often mentioned on Reddit as an eyestrain-friendly favorite thanks to balanced brightness behavior and solid motion handling, but it may not work for everyone.",
			pros: [
				"Popular community pick for users with sensitive eyes",
				"QHD at 27 inches gives good sharpness without heavy scaling",
				"165Hz makes scrolling and gameplay feel smoother"
			],
			cons: [
				"May not work for everyone",
				"Not 4K if you want maximum text sharpness",
				"Eye comfort is subjective and depends heavily on brightness setup"
			]
		},
		de: {
			bestFor: "Reddit-Favorit",
			description: "In der Reddit-Community oft als augenschonendes Modell genannt dank ausgewogenem Helligkeitsverhalten und solider Bewegungsdarstellung – funktioniert aber nicht für jeden.",
			pros: [
				"Beliebter Community-Pick für Nutzer mit empfindlichen Augen",
				"QHD bei 27 Zoll bietet gute Schärfe ohne starkes Scaling",
				"165Hz lassen Scrollen und Gameplay flüssiger wirken"
			],
			cons: [
				"Funktioniert nicht für jeden",
				"Kein 4K für maximale Textschärfe",
				"Augenfreundlichkeit ist subjektiv und hängt stark von der Helligkeitseinstellung ab"
			]
		}
	}
];

const app = document.getElementById("app");

const uiText = {
	en: {
		eyebrow: "Eye-Friendly Display Picks",
		title: "Amazon Affiliate Monitors<br/>That Feel Better on Your Eyes",
		heroDescription:
			"Handpicked displays with features like flicker-free dimming, low blue light modes, and anti-glare panels - perfect for long work sessions.",
		lightTheme: "Light Theme",
		darkTheme: "Dark Theme",
		pros: "Pros",
		cons: "Cons",
		viewOnAmazon: "View on Amazon →",
		categoryLabel: "Category",
		emptyCategory: "No recommendations in this category yet.",
		prosConsLabel: "Pros and cons for",
		topPickLabel: "★ Top Pick",
		bestForLabel: "Best for",
		trustItems: ["PWM-Free Verified", "Flicker-Free Dimming", "Eye-Care Tested", "Community Approved"],
		affiliateNotice: "As an Amazon Associate, we earn from qualifying purchases at no extra cost to you. Product links on this page are affiliate links.",
		copyright: `© ${new Date().getFullYear()} Eye-Friendly Displays. All rights reserved.`,
		categoryDescriptions: {
			"24\" 1080p": "Great starting point — easy on the GPU, high FPS, and budget-friendly.",
			"27\" 1440p": "The sweet spot — sharp image, smooth gaming, best price-to-quality ratio.",
			"27-32\" 4k": "Maximum clarity — crisp text, stunning detail, premium experience."
		}
	},
	de: {
		eyebrow: "Augenfreundliche Display-Empfehlungen",
		title: "Amazon-Affiliate-Monitore<br/>Die Deinen Augen guttun",
		heroDescription:
			"Ausgewählte Displays mit Features wie flimmerfreiem Dimming, Low-Blue-Light-Modi und entspiegelten Panels – ideal für lange Arbeitssessions.",
		lightTheme: "Helles Design",
		darkTheme: "Dunkles Design",
		pros: "Vorteile",
		cons: "Nachteile",
		viewOnAmazon: "Auf Amazon ansehen →",
		categoryLabel: "Kategorie",
		emptyCategory: "Noch keine Empfehlungen in dieser Kategorie.",
		prosConsLabel: "Vorteile und Nachteile für",
		topPickLabel: "★ Top-Empfehlung",
		bestForLabel: "Ideal für",
		trustItems: ["PWM-Frei geprüft", "Flimmerfrei", "Augenschonend getestet", "Community-Favorit"],
		affiliateNotice: "Als Amazon-Partner verdienen wir an qualifizierten Käufen – ohne Mehrkosten für dich. Produktlinks auf dieser Seite sind Affiliate-Links.",
		copyright: `© ${new Date().getFullYear()} Eye-Friendly Displays. Alle Rechte vorbehalten.`,
		categoryDescriptions: {
			"24\" 1080p": "Guter Einstieg — GPU-freundlich, hohe FPS und budgetfreundlich.",
			"27\" 1440p": "Der Sweet Spot — scharfes Bild, flüssiges Gaming, bestes Preis-Leistungs-Verhältnis.",
			"27-32\" 4k": "Maximale Schärfe — gestochen scharfer Text, beeindruckendes Detail."
		}
	}
};

let currentLang = "en";
const savedTheme = localStorage.getItem("theme");
let currentTheme = savedTheme === "light" ? "light" : "dark";

const applyTheme = () => {
	document.documentElement.setAttribute("data-theme", currentTheme);
};

const renderApp = () => {
	document.documentElement.lang = currentLang;
	const t = uiText[currentLang];

	app.innerHTML = `
		<div class="page-bg"></div>
		<main class="container">
			<section class="hero">
				<div class="hero-top">
					<p class="eyebrow">${t.eyebrow}</p>
					<div class="hero-controls">
						<div class="lang-switch" role="group" aria-label="Language switch">
							<button class="lang-btn ${currentLang === "en" ? "active" : ""}" data-lang="en" type="button">English</button>
							<button class="lang-btn ${currentLang === "de" ? "active" : ""}" data-lang="de" type="button">Deutsch</button>
						</div>
						<button class="theme-btn" type="button" aria-label="Toggle theme">
							${currentTheme === "light" ? t.darkTheme : t.lightTheme}
						</button>
					</div>
				</div>
				<h1>${t.title}</h1>
				<p>${t.heroDescription}</p>
				<div class="trust-bar">
					${t.trustItems.map(item => `<span class="trust-item">✓ ${item}</span>`).join("")}
				</div>
			</section>

			<section class="categories" id="display-grid"></section>
			<footer class="site-footer">
				<p class="affiliate-notice">${t.affiliateNotice}</p>
				<p class="footer-copy">${t.copyright}</p>
			</footer>
		</main>
	`;

	bindLanguageSwitch();
	bindThemeSwitch();
	renderGrid();
};

const bindLanguageSwitch = () => {
	const buttons = app.querySelectorAll(".lang-btn");

	buttons.forEach((button) => {
		button.addEventListener("click", () => {
			const selectedLang = button.dataset.lang;

			if (!selectedLang || selectedLang === currentLang) {
				return;
			}

			currentLang = selectedLang;
			renderApp();
		});
	});
};

const bindThemeSwitch = () => {
	const button = app.querySelector(".theme-btn");

	if (!button) {
		return;
	}

	button.addEventListener("click", () => {
		currentTheme = currentTheme === "dark" ? "light" : "dark";
		localStorage.setItem("theme", currentTheme);
		applyTheme();
		renderApp();
	});
};

const categoryOrder = ["24\" 1080p", "27\" 1440p", "27-32\" 4k"];

const renderCard = (display) => {
	const t = uiText[currentLang];
	const d = display[currentLang] || display.en;
	const topPickBadge = display.topPick
		? `<span class="badge badge-top">${t.topPickLabel}</span>`
		: "";
	const bestForTag = d.bestFor
		? `<span class="badge badge-for">${t.bestForLabel}: ${d.bestFor}</span>`
		: "";

	return `
	<article class="card${display.topPick ? " card--top-pick" : ""}">
		<a class="card-link" href="${display.link}" target="_blank" rel="noopener noreferrer sponsored" aria-label="${display.name}">
		<div class="card-img-wrap">
			<img src="${display.image}" alt="${display.name}" loading="lazy" onerror="this.onerror=null;this.style.opacity='0.2';" />
			<div class="card-badges">
				${topPickBadge}
				${bestForTag}
			</div>
		</div>
		<div class="card-content">
			<div class="meta-row">
				<h2>${display.name}</h2>
				<span class="chip">${display.type}</span>
			</div>
			<p class="description">${d.description}</p>

			<div class="table-wrap" role="region" aria-label="${t.prosConsLabel} ${display.name}">
				<table>
					<thead>
						<tr>
							<th>${t.pros}</th>
							<th>${t.cons}</th>
						</tr>
					</thead>
					<tbody>
						${Array.from({ length: Math.max(d.pros.length, d.cons.length) })
							.map(
								(_, index) => `
							<tr>
								<td>${d.pros[index] || "—"}</td>
								<td>${d.cons[index] || "—"}</td>
							</tr>
						`
							)
							.join("")}
					</tbody>
				</table>
			</div>

			<span class="cta">
				${t.viewOnAmazon}
			</span>
		</div>
		</a>
	</article>
`;
};

const renderGrid = () => {
	const t = uiText[currentLang];
	const grid = document.getElementById("display-grid");

	grid.innerHTML = categoryOrder
		.map((category) => {
			const items = displays.filter((display) => display.category === category);
			const catDesc = t.categoryDescriptions && t.categoryDescriptions[category] ? t.categoryDescriptions[category] : "";

			return `
			<section class="category" aria-label='Category ${category}'>
				<h3 class="category-title">${category}</h3>
				${catDesc ? `<p class="category-desc">${catDesc}</p>` : ""}
				${
					items.length
						? `<div class="grid">${items.map((display) => renderCard(display)).join("")}</div>`
						: `<p class="category-empty">${t.emptyCategory}</p>`
				}
			</section>
		`;
		})
		.join("");

	Array.from(grid.querySelectorAll(".category")).forEach((section, index) => {
		section.setAttribute("aria-label", `${t.categoryLabel} ${categoryOrder[index]}`);
	});
};

applyTheme();
renderApp();
