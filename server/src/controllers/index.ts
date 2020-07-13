import usecases from "../use-cases/index";

import makeItem from "./item.controllers";
import makeUser from "./user.controllers";

const item = makeItem(usecases.item);
const user = makeUser(usecases.user);

export default Object.freeze({
  item,
  user,
});
export { item, user };
