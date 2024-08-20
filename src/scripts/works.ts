document.addEventListener("DOMContentLoaded", () => {
	type GridSize = "small" | "medium" | "large";
	type Category = "all" | "logo" | "brand" | "web";

	function setGrid(size: GridSize): void {
		const gallery = document.querySelector(".works__list") as HTMLElement;
		const sizeButtons = document.querySelectorAll(".works__size button");

		sizeButtons.forEach((button) => button.classList.remove("active"));

		const activeSizeButton = document.getElementById(`js-${size}`);
		if (activeSizeButton) {
			activeSizeButton.classList.add("active");
		}

		switch (size) {
			case "small":
				gallery.style.gridTemplateColumns = "repeat(6, minmax(0, 1fr))";
				break;
			case "medium":
				gallery.style.gridTemplateColumns = "repeat(3, minmax(0, 1fr))";
				break;
			case "large":
				gallery.style.gridTemplateColumns = "repeat(1, minmax(0, 1fr))";
				break;
		}
	}

	function handleResize(): void {
		const smallButton = document.getElementById(
			"js-small"
		) as HTMLButtonElement;
		const isMobile = window.innerWidth <= 768;

		if (isMobile) {
			smallButton.disabled = true;
			setGrid("medium");
		} else {
			smallButton.disabled = false;
			setGrid("small");
		}
	}

	document
		.getElementById("js-small")
		?.addEventListener("click", () => setGrid("small"));
	document
		.getElementById("js-medium")
		?.addEventListener("click", () => setGrid("medium"));
	document
		.getElementById("js-large")
		?.addEventListener("click", () => setGrid("large"));

	handleResize();
	window.addEventListener("resize", handleResize);

	function filterImages(category: Category): void {
		const items = document.querySelectorAll(
			".works__item"
		) as NodeListOf<HTMLElement>;
		const categoryButtons = document.querySelectorAll(
			".works__category button"
		) as NodeListOf<HTMLButtonElement>;

		items.forEach((item) => {
			if (category === "all" || item.dataset.category === category) {
				item.style.display = "block";
			} else {
				item.style.display = "none";
			}
		});

		categoryButtons.forEach((button) => button.classList.remove("active"));

		const activeCategoryButton = document.querySelector(
			`[data-category="${category}"]`
		) as HTMLElement;
		if (activeCategoryButton) {
			activeCategoryButton.classList.add("active");
		}
	}

	document
		.getElementById("js-all")
		?.addEventListener("click", () => filterImages("all"));
	document
		.getElementById("js-logo")
		?.addEventListener("click", () => filterImages("logo"));
	document
		.getElementById("js-brand")
		?.addEventListener("click", () => filterImages("brand"));
	document
		.getElementById("js-web")
		?.addEventListener("click", () => filterImages("web"));

	filterImages("all");
});
