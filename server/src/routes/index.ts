
import controllers from "../controllers/index";

const { item, user } = controllers

const makeRoutes = (router: any) => {
  router.get("/robots", item.get);
  // router.get("/robots", item.delete);
  router.get("/robots", item.put);
  router.get("/robots", item.post);


  router.get("/user", user.get);
  router.delete("/user", user.delete);
  router.post("/user", user.post);
  router.put("/user", user.put);


  return router;
};

export default makeRoutes;
