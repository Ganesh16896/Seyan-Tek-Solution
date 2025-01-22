export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "*",
    },
    sitemap: "https://seyantek.com/sitemap.xml",
  };
}
