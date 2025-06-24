export const getDateDifferenceInDays = (start: Date, end: Date) => {
	const msInDay = 1000 * 3600 * 24;

	const diff = end.getTime() - start.getTime();

	return Math.floor(diff / msInDay);
};
