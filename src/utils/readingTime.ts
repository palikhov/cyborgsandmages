export function readingTime(text: string) {
	const wordsPerMinute = 200;
	const words = text.trim().split(/\s+/).length;
	const readingTimeMinutes = words / wordsPerMinute;
	const time = Math.ceil(readingTimeMinutes);
	return time;
}
