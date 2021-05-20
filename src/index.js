import { Router } from "express";
import indexPage from "./pages/index";
import goodbyePage from "./pages/goodbye";
import countersPage from "./pages/counters";

export default Router()
  .get("/", indexPage)
  .get("/goodbye", goodbyePage)
  .get("/counters", countersPage);
