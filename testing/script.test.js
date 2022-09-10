const search = require("./script");

dbMock = ["mario.net", "mariarosa.com", "test.org"];

it("search test", () => {
  expect(search("xxx", dbMock)).toEqual([]);
  expect(search("mari", dbMock)).toEqual(["mario.net", "mariarosa.com"]);
});
