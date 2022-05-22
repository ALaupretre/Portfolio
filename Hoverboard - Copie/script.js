const container = document.getElementById("container");
const colors = ["#48F0C5", "#364B44", "#99B0A8", "#D4CBFF", "#9B95F5"];
const colors2 = ["#F5F7B2", "#1CC5DC", "#890596", "#CF0000"];
const SQUARES = 700;

for (let i = 0; i < SQUARES; i++) {
	const square = document.createElement("div");
	square.classList.add("square");

	square.style.width = `${Math.random() * 10 + 2}px`;

	square.addEventListener("mouseover", () => {
		if (i > SQUARES / 2) {
			setColor2(square);
		} else {
			setColor(square);
		}
	});

	square.addEventListener("mouseout", () => removeColor(square));


	container.appendChild(square);
}

function setColor(element) {
	const color = getRandomColor();

	element.style.background = color;
	element.style.boxShadow = `0 0 25px ${color}, ${Math.random() * 300}px ${Math.random() * 600}px ${color}`;
}

function setColor2(element) {
	const color = getRandomColor();

	element.style.background = color;
	element.style.boxShadow = `0 0 25px ${color}, ${-Math.random() * 300}px ${-Math.random() * 600}px ${color}`;
}

function removeColor(element) {
	element.style.background = "#202020";
	element.style.boxShadow = "none";
}

function getRandomColor() {
	return colors2[Math.floor(Math.random() * colors2.length)];
}