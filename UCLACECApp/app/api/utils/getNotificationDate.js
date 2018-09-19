const DAYS_IN_WEEK = 7;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;

/**
 * Determines Date for notification to be sent out.
 * @param {object} dateDetails - contains information about when to be reminded
 * @returns {Date}
 */
export default function getNotificationDate(dateDetails) {
  const {months, weeks, days, hours, minutes} = dateDetails;
  let currDate = new Date();
  currDate.setMonth(currDate.getMonth() + months);
  currDate.setDate(currDate.getDate() + (weeks * DAYS_IN_WEEK));
  currDate.setDate(currDate.getDate() + days);

  let h = (MINUTES_IN_HOUR * SECONDS_IN_MINUTE * hours * 1000);
  let m = (SECONDS_IN_MINUTE * minutes * 1000);

  return new Date(currDate.getTime() + h + m);
}