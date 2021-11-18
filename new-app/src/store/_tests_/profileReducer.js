import { setName } from "../../action/profileActions";
import profileReducer from "../profileReducer";

it("изменяет имя пользователя на указанное", () => {
  const expected = {
    name: "KAte",
  };
  const received = profileReducer(null, setName("KAte"));

  expect(received).toEqual(expected);
});