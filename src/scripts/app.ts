document.addEventListener("DOMContentLoaded", function () {
	const links: NodeListOf<HTMLAnchorElement> =
		document.querySelectorAll(".header__link");
	const pathMap: { [key: string]: string } = {
		"/": "home",
		"/portfolio/": "portfolio",
		"/palvelut/": "services",
		"/tilauspalvelut/": "subscription",
		"/meista/": "about",
	};
	const currentPath: string = window.location.pathname;

	links.forEach((link) => {
		if (pathMap[currentPath] === link.dataset.page) {
			link.classList.add("active");
		}
	});
});

document.addEventListener("DOMContentLoaded", () => {
	const navHamburger = document.getElementById("hamburger-open") as HTMLElement;
	const menuHamburger = document.getElementById(
		"hamburger-close"
	) as HTMLElement;
	const menu = document.getElementById("menu") as HTMLElement;

	navHamburger.addEventListener("click", () => {
		menu.classList.add("active");
		document.body.style.overflowY = "hidden";
	});

	menuHamburger.addEventListener("click", () => {
		menu.classList.remove("active");
		document.body.style.overflowY = "visible";
	});
});

document.addEventListener("DOMContentLoaded", function () {
	const copyEmail = document.getElementById("copy-email");

	copyEmail?.addEventListener("click", function () {
		let emailTag = document.getElementById("target-email");
		let emailText = emailTag?.textContent ?? "";
		let successBanner: HTMLElement | null =
			document.getElementById("js-email-success");

		navigator.clipboard.writeText(emailText);

		if (successBanner) {
			successBanner.style.display = "block";
		}
	});
});

document.addEventListener("DOMContentLoaded", function () {
	let backToTop = document.getElementById("js-backToTop");

	backToTop?.addEventListener("click", function () {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	});
});
