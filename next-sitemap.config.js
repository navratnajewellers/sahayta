/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://sahayta.co.in", // Replace with your actual domain
  generateRobotsTxt: true, // Generates robots.txt file
  generateIndexSitemap: false, // Generates all pages in a single sitemap
  sitemapSize: 5000, // Max URLs per sitemap
  // exclude: ["/admin", "/dashboard"], // Exclude specific pages

  // Manually define static paths since "output: export" doesn't work dynamically
  additionalPaths: async (config) => [
    { loc: "/", lastMod: new Date().toISOString(), priority: 1.0 },
    { loc: "/about", lastMod: new Date().toISOString(), priority: 0.8 },
    { loc: "/services", lastMod: new Date().toISOString(), priority: 0.7 },
    { loc: "/portfolio", lastMod: new Date().toISOString(), priority: 0.7 },
    {
      loc: "/contact",
      lastMod: new Date().toISOString(),
      priority: 0.7,
    },
  ],

  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" }, // Allow all pages
      // { userAgent: "*", disallow: ["/admin", "/dashboard"] }, // Block certain pages
    ],
  },
};
