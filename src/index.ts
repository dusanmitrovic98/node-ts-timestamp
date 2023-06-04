import Timestamp from "./modules/timestamp.js";

const timestamp: string = Timestamp.getCurrentTimestamp();
const date: string = Timestamp.getDate(timestamp);
const year: string = Timestamp.getYear(timestamp);
const month: string = Timestamp.getMonth(timestamp);
const day: string = Timestamp.getDay(timestamp);
const time: string = Timestamp.getTime(timestamp);
const hours: string = Timestamp.getHours(timestamp);
const minutes: string = Timestamp.getMinutes(timestamp);
const seconds: string = Timestamp.getSeconds(timestamp);

console.log("Timestamp:", timestamp);
console.log("Date:", date);
console.log("Year:", year);
console.log("Month:", month);
console.log("Day:", day);
console.log("Time:", time);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);
