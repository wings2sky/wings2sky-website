export default async function sitemap() {

  const staticUrls = [
    "",
    "/about",
    "/blogs",
    "/services",
    "/contact",
    "/faq",
  ];

  const blogSlugs = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
  ];

  const blogUrls = blogSlugs.map((slug) => ({
    url: `https://wings2sky.com/blogs/${slug}`,
    lastModified: new Date(),
  }));

  const staticEntries = staticUrls.map((path) => ({
    url: `https://wings2sky.com${path}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...blogUrls];
}
