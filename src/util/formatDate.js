export default (timestamp) =>
  new Date(timestamp * 1000).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
