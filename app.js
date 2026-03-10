const displays = [
	{
		category: "24\" 1080p",
		name: "ASUS TUF Gaming VG27AQM5A",
		type: "Fast IPS • 1080p • High Refresh",
		image:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
		description:
			"1080p-focused TUF Gaming option aimed at smooth gameplay with eye-care modes and low-latency performance.",
		link: "https://www.amazon.com/s?k=ASUS+TUF+Gaming+VG27AQM5A&tag=yourtag-20",
		pros: [
			"1080p entlastet GPU und liefert hohe FPS in vielen Spielen",
			"Fast-IPS Reaktionsverhalten fuer klarere Bewegungen",
			"TUF-Gaming-Features inklusive Adaptive-Sync und GamePlus"
		],
		cons: [
			"Geringere Pixeldichte als 1440p/4K auf groesseren Panels",
			"Farben und HDR koennen je nach Preset Nachkalibrierung brauchen",
			"Bitte regionale Daten zu Ports und max. Hz vor Kauf pruefen"
		]
	},
	{
		category: "27-32\" 4k",
		name: "Samsung Odyssey G70D",
		type: "IPS • 4K • High Refresh",
		image:
			"https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=80",
		description:
			"4K gaming-focused Odyssey model with fast refresh behavior, strong sharpness, and modern console/PC-ready feature set.",
		link: "https://www.amazon.com/s?k=Samsung+Odyssey+G70D&tag=yourtag-20",
		pros: [
			"4K liefert sehr klare Darstellung fuer Text und Details",
			"Hohe Bildwiederholrate fuer flottes Gameplay",
			"Gute Option fuer gemischte Nutzung aus Gaming und Medien"
		],
		cons: [
			"4K bei hohen FPS stellt hohe Anforderungen an die GPU",
			"HDR-Qualitaet kann je nach Szene und Erwartung variieren",
			"Vor Kauf regionale Ports und Feature-Limits pruefen"
		]
	},
	{
		category: "27-32\" 4k",
		name: "Gigabyte M27UP 27\"",
		type: "IPS • 4K • 160Hz",
		image:
			"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
		description:
			"Versatile 27-inch 4K monitor with high refresh rate, KVM convenience, and eye-care features for long mixed work and gaming sessions.",
		link: "https://www.amazon.com/s?k=Gigabyte+M27UP&tag=yourtag-20",
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
	{
		category: "27\" 1440p",
		name: "Gigabyte M27Q2 QD Ice 27\"",
		type: "QD IPS • QHD • High Refresh",
		image:
			"https://images.unsplash.com/photo-1551645120-d7f6e72a09b7?auto=format&fit=crop&w=1200&q=80",
		description:
			"Color-strong 27-inch 1440p gaming monitor in Ice design with fast response behavior and broad-gamut QD panel characteristics.",
		link: "https://www.amazon.com/s?k=Gigabyte+M27Q2+QD+Ice&tag=yourtag-20",
		pros: [
			"1440p auf 27 Zoll bietet gute Schaerfe fuer Alltag und Gaming",
			"QD-Panel fuer kraeftige Farben und breiteren Farbraum",
			"Hohe Bildwiederholrate fuer fluessigere Bewegung"
		],
		cons: [
			"Farbige Abstimmung kann ohne Kalibrierung zu satt wirken",
			"Je nach Setup koennen Overdrive-Einstellungen Feintuning brauchen",
			"Vor Kauf regionale Spezifikationen und Anschlusslayout pruefen"
		]
	},
	{
		category: "27\" 1440p",
		name: "ASUS TUF Gaming VG27AQM1A 27\"",
		type: "Fast IPS • QHD • bis zu 260Hz (OC)",
		image:
			"https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=1200&q=80",
		description:
			"Schneller 27-Zoll-QHD-Gaming-Monitor mit Fast-IPS-Panel, Adaptive-Sync, ELMB-Sync und starker Bewegungsdarstellung fuer kompetitives Spielen.",
		link: "https://www.amazon.com/s?k=ASUS+TUF+Gaming+VG27AQM1A&tag=yourtag-20",
		pros: [
			"Hohe Bildwiederholrate fuer sehr fluessiges Gameplay",
			"QHD-Aufloesung bietet gute Balance aus Scharfe und Performance",
			"ELMB-Sync + Adaptive-Sync fuer weniger Tearing und Motion Blur",
			"Gaming-Funktionen wie Variable Overdrive und Shadow Boost"
		],
		cons: [
			"Kein 4K, daher weniger Pixel-Schaerfe als UHD-Modelle",
			"Fuer Office-Use oft ueberdimensioniert",
			"HDR eher Basisniveau im Vergleich zu High-End-HDR",
			"Je nach Setup Feintuning bei Overdrive empfohlen"
		]
	},
	{
		category: "27\" 1440p",
		name: "HP Omen 27q 27\"",
		type: "IPS • QHD • 165Hz",
		image:
			"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
		description:
			"Often mentioned on Reddit as an eyestrain-friendly favorite thanks to balanced brightness behavior and solid motion handling, but it may not work for everyone.",
		link: "https://www.amazon.com/s?k=HP+Omen+27q&tag=yourtag-20",
		pros: [
			"Beliebtes Community-Modell fuer Nutzer mit empfindlichen Augen",
			"QHD bei 27 Zoll bietet gute Schaerfe ohne starke Skalierung",
			"165Hz sorgt fuer ruhigeres Scrolling und Gameplay"
		],
		cons: [
			"may not work for everyone",
			"Kein 4K fuer maximale Textschaerfe",
			"Augenkomfort ist subjektiv und haengt stark von Helligkeits-Setup ab"
		]
	}
];

const app = document.getElementById("app");

app.innerHTML = `
	<div class="page-bg"></div>
	<main class="container">
		<section class="hero">
			<p class="eyebrow">Eye-Friendly Display Picks</p>
			<h1>Amazon Affiliate Monitors<br/>That Feel Better on Your Eyes</h1>
			<p>
				Handpicked displays with features like flicker-free dimming, low blue light modes,
				and anti-glare panels—perfect for long work sessions.
			</p>
		</section>

		<section class="grid" id="display-grid"></section>
	</main>
`;

const grid = document.getElementById("display-grid");

const categoryOrder = ["24\" 1080p", "27\" 1440p", "27-32\" 4k"];

const renderCard = (display) => `
	<article class="card">
		<img src="${display.image}" alt="${display.name}" />
		<div class="card-content">
			<div class="meta-row">
				<h2>${display.name}</h2>
				<span class="chip">${display.type}</span>
			</div>
			<p class="description">${display.description}</p>

			<div class="table-wrap" role="region" aria-label="Pros and cons for ${display.name}">
				<table>
					<thead>
						<tr>
							<th>Pros</th>
							<th>Cons</th>
						</tr>
					</thead>
					<tbody>
						${Array.from({ length: Math.max(display.pros.length, display.cons.length) })
							.map(
								(_, index) => `
							<tr>
								<td>${display.pros[index] || "—"}</td>
								<td>${display.cons[index] || "—"}</td>
							</tr>
						`
							)
							.join("")}
					</tbody>
				</table>
			</div>

			<a class="cta" href="${display.link}" target="_blank" rel="noopener noreferrer sponsored">
				View on Amazon
			</a>
		</div>
	</article>
`;

grid.innerHTML = categoryOrder
	.map((category) => {
		const items = displays.filter((display) => display.category === category);

		return `
			<section class="category" aria-label='Category ${category}'>
				<h3 class="category-title">${category}</h3>
				${
					items.length
						? `<div class="grid">${items.map((display) => renderCard(display)).join("")}</div>`
						: '<p class="category-empty">Noch keine Empfehlungen in dieser Kategorie.</p>'
				}
			</section>
		`;
	})
	.join("");
