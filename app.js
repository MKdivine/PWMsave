const displays = [
	{
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

grid.innerHTML = displays
	.map(
		(display) => `
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
		`
	)
	.join("");
