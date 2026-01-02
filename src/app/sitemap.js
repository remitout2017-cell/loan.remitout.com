export const dynamic = "force-static";
const BASE_URL = "https://loan.remitout.com";

const now = new Date();

export default function sitemap() {
  const routes = [
    "",
    "/pages/about",
    "/pages/blog",
    "/pages/business",
    "/pages/careers",
    "/pages/contact",
    "/pages/contact-us",
    "/pages/education",
    "/pages/faq",
    "/pages/help",
    "/pages/loans",
    "/pages/privacy-policy",
    "/pages/terms-of-use",
    "/pages/transfers",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
