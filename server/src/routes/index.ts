
import controllers from "../controllers/index";

const {item, user} = controllers

const makeRoutes = (router: any) => {
  router.get("/", item.get);
  router.get("/user", user.get);

  return router;
};

export default makeRoutes;
