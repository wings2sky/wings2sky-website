export default function sitemap() {
  const staticUrls = [
    "",
    "/about",
    "/services",
    "/photoshoot",
    "/projects",
    "/blogs",
    "/contact",
  ];

  const blogUrls = [
    "/blogs/1",
    "/blogs/2",
    "/blogs/3",
    "/blogs/4",
    "/blogs/5",
    "/blogs/6",
  ];

  const allUrls = [...staticUrls, ...blogUrls];

  return allUrls.map((url) => ({
    url: `https://wings2sky.com${url}`,
    lastModified: new Date(),
  }));
}
