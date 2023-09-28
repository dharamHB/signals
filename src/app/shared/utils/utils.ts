export function getCurrentDateTime(): string {
  // Create a new Date object for the current date and time
  const currentDate = new Date();

  // Get the year, month, day, hours, minutes, and seconds
  const year = currentDate.getUTCFullYear();
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getUTCDate()).padStart(2, '0');
  const hours = String(currentDate.getUTCHours()).padStart(2, '0');
  const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
  const seconds = String(currentDate.getUTCSeconds()).padStart(2, '0');

  // Create the ISO 8601 date-time string
  const isoDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

  return isoDateTime;
}

export function generateUniqueString(length: number): string {
  const timestamp = new Date().getTime().toString(36);
  const randomString = Math.random()
    .toString(36)
    .substring(2, 2 + length);

  return timestamp + randomString;
}
