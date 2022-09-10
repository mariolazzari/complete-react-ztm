const sites = [
  "site1.com",
  "mario.it",
  "javascript.net",
  "google.com",
  "nodejs.org",
  "reactjs.org£",
];

const search = (site, sites) => {
  const res = sites.filter(s => s.includes(site));

  return res.length > 3 ? res.slice(0, 3) : res;
};

console.log(search("", sites));

module.exports = search;
