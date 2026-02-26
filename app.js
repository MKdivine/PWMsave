const displays = [
	{
		name: "BenQ GW2790QT 27\" QHD",
		type: "IPS • QHD • 75Hz",
		image:
			"https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
		description:
			"A balanced productivity monitor focused on eye comfort with low blue light modes and flicker-free dimming.",
		link: "https://www.amazon.com/s?k=BenQ+GW2790QT&tag=yourtag-20",
		pros: [
			"Flicker-free backlight for reduced eye strain",
			"Ergo stand with height, tilt, and pivot",
			"QHD sharpness is comfortable for text-heavy work"
		],
		cons: ["Not ideal for HDR content", "75Hz is smooth but not gaming-focused", "Mid-range brightness"]
	},
	{
		name: "ASUS ProArt PA278QV 27\"",
		type: "IPS • QHD • 75Hz",
		image:
			"https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=1200&q=80",
		description:
			"Creator-oriented display with strong factory calibration and an anti-glare panel that stays easy on the eyes.",
		link: "https://www.amazon.com/s?k=ASUS+ProArt+PA278QV&tag=yourtag-20",
		pros: [
			"Excellent color consistency out of the box",
			"Matte coating helps in bright rooms",
			"ComfortView-style blue light controls"
		],
		cons: ["No USB-C power delivery", "Design is functional, not ultra-thin", "Speakers are basic"]
	},
	{
		name: "Dell UltraSharp U2723QE 27\"",
		type: "IPS Black • 4K • 60Hz",
		image:
			"https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
		description:
			"Premium office monitor with excellent text clarity and comfort settings for long work sessions.",
		link: "https://www.amazon.com/s?k=Dell+U2723QE&tag=yourtag-20",
		pros: [
			"4K clarity reduces text fuzziness",
			"Strong USB-C hub keeps desk setup minimal",
			"Reliable low blue light and flicker control"
		],
		cons: ["Higher price point", "60Hz may feel limited for fast gaming", "Black levels still IPS-like in dark rooms"]
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
