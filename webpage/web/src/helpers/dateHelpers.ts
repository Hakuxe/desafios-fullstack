export function formatDateToString(date: string): string {
	const formatedDate = new Date(date);

	return formatedDate.toLocaleString("en-GB", {
		year: "numeric",
		month: "numeric",
		day: "numeric",
		timeZone: "UTC",
	});
}
