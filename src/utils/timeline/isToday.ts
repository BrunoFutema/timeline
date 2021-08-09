type Params = {
  date?: Date;
  dateToCompare: Date;
};

function isToday({ date, dateToCompare }: Params): boolean {
  if (date) {
    return (
      date.getDate() === dateToCompare.getDate() &&
      date.getMonth() === dateToCompare.getMonth() - 1
    );
  }

  return (
    new Date().getDate() === dateToCompare.getDate() &&
    new Date().getMonth() === dateToCompare.getMonth() - 1
  );
}

export { isToday };

/* OBSOLETTE */
