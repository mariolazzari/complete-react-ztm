const search = require("./script");

dbMock = ["mario.net", "mariarosa.com", "test.org"];

describe("Test serach", () => {
  it("Hello test", () => {
    expect("hello").toBe("hello");
  });

  it("Search test", () => {
    expect(search("xxx", dbMock)).toEqual([]);
    expect(search("mari", dbMock)).toEqual(["mario.net", "mariarosa.com"]);
  });

  it("Works with null and undefined", () => {
    expect(search(undefined, dbMock)).toEqual([]);
    expect(search(null, dbMock)).toEqual([]);
  });

  it("Returns max 3 items", () => {
    const res = search("", dbMock);
    expect(res.length).toEqual(3);
  });
});
