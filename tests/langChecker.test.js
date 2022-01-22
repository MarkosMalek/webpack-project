import "regenerator-runtime/runtime";
import { checkForLang } from "../src/client/js/langChecker";
describe("Testing the checkforlang functionality", () => {
  test(" checkForLang function defined", function () {
    expect(checkForLang).toBeDefined();
  });
});
