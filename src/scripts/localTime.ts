document.addEventListener("DOMContentLoaded", function () {
	setInterval(() => {
		const getLocalTime = new Date().toLocaleTimeString("en-US", {
			hour: "2-digit",
			minute: "2-digit",
			timeZone: "Europe/Helsinki",
			timeZoneName: "short",
			hour12: false,
		});
		document.querySelector<HTMLElement>(".localTime")!.innerText = getLocalTime;
	}, 1000);

	const getLocalDate = new Date().toLocaleDateString("fi", {
		weekday: "long",
		year: "numeric",
		month: "2-digit",
		day: "numeric",
	});
	document.querySelector<HTMLElement>(".localDate")!.innerText = getLocalDate;
});
