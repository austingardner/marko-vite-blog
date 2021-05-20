import goodbye from "./goodbye.marko";

export default (req, res) => {
  res.marko(goodbye, {});
};