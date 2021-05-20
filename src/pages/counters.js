import counters from "./counters.marko";

export default (req, res) => {
  res.marko(counters, {});
};