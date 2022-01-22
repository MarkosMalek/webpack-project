import "regenerator-runtime/runtime";

import { handleSubmit } from "../src/client/js/formHandler";
describe("Testing the submit functionality", () => {
  test(" formhandler function defined", function () {
    expect(handleSubmit).toBeDefined();
  });
});
