document.addEventListener("DOMContentLoaded", () => {
	const box = document.getElementById("js-availability");
	if (!box) return;

	const getHelsinkiTime = (): { hours: number; day: string } => {
		const now = new Date();
		const options: Intl.DateTimeFormatOptions = {
			timeZone: "Europe/Helsinki",
			hour: "2-digit",
			hour12: false,
			weekday: "short",
		};
		const helsinkiTimeString = now.toLocaleString("en-US", options);
		const [weekday, hoursString] = helsinkiTimeString.split(", ");
		const hours = parseInt(hoursString);

		return { hours, day: weekday };
	};

	const { hours, day } = getHelsinkiTime();

	const isWeekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(day);
	const isWithinTimeRange = hours >= 10 && hours <= 14;

	if (isWeekday && isWithinTimeRange) {
		box.style.backgroundColor = "var(--color-green)";
	} else {
		box.style.backgroundColor = "var(--color-red)";
	}
});
