'use strict';

const isTimeEqual = (
  // Compare time1 and time2
  time1, // time string or milliseconds
  time2 // time string or milliseconds
  // Returns: Boolean
  // Example: isTimeEqual(sinceTime, buffer.stats.mtime);
) => (
  new Date(time1).getTime() === new Date(time2).getTime()
);

const pad2 = n => (n < 10 ? '0' + n : '' + n);

const nowDate = (
  // Current date in YYYY-MM-DD format
  now // date Object (optional)
  // Returns: String
) => {
  if (!now) now = new Date();
  return (
    now.getUTCFullYear() + '-' +
    pad2(now.getUTCMonth() + 1) + '-' +
    pad2(now.getUTCDate())
  );
};

const nowDateTime = (
  // Current date in YYYY-MM-DD  hh:mm format
  now // date Object (optional)
  // Returns: String
) => {
  if (!now) now = new Date();
  return (
    now.getUTCFullYear() + '-' +
    pad2(now.getUTCMonth() + 1) + '-' +
    pad2(now.getUTCDate()) + ' ' +
    pad2(now.getUTCHours()) + ':' +
    pad2(now.getUTCMinutes())
  );
};

module.exports = {
  isTimeEqual,
  nowDate,
  nowDateTime
};