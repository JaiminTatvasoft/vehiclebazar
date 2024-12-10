export const useDateTimeFormat = (date) => {
  const unFormattedDate = new Date(date);

  const formatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const formattedTime = formatter.format(unFormattedDate);
  const formattedDate = unFormattedDate.toDateString();

  return { formattedDate, formattedTime };
};

export const useDuration = (pickupDate, returnDate) => {
  const date1 = new Date(pickupDate);
  const date2 = new Date(returnDate);

  // Difference in milliseconds
  const diffInMs = date2 - date1;

  // Convert milliseconds to days, hours, and minutes
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  const diffInHours = Math.floor(
    (diffInMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  return { diffInDays, diffInHours };
};
