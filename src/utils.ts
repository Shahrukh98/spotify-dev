const convertTimeToHoursMinutes = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours > 0) {
    return `${hours} hour${hours === 1 ? "" : "s"} ${remainingMinutes} mins`;
  } else {
    return `${remainingMinutes} mins`;
  }
};

const convertSecondsToMinutesSeconds = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  var timeText: string = ""; // Empty string for building the output

  if (minutes > 0) {
    timeText += minutes > 9 ? `${minutes}:` : `0${minutes}:`;
  }
  timeText +=
    remainingSeconds > 9 ? `${remainingSeconds}` : `0 ${remainingSeconds}`; // Add seconds with pluralization

  return timeText.trim(); // Remove any leading/trailing whitespace
};

export default {
    convertSecondsToMinutesSeconds,
    convertTimeToHoursMinutes
}