// SocialLinks.jsx - Fully Corrected Static Version

import { Facebook, Instagram } from "lucide-react";

export default function SocialLinks({ links }) {
  // Handle null/undefined links
  if (!links) return null;

  // Build array of social links
  const socialLinks = [];

  // Add Facebook if exists
  if (links.facebook) {
    socialLinks.push({
      type: "facebook",
      url: links.facebook,
      label: "Facebook",
    });
  }

  // Add Instagram if exists
  if (links.instagram) {
    socialLinks.push({
      type: "instagram",
      url: links.instagram,
      label: "Instagram",
    });
  }

  // Add additional links if they exist and have required fields
  if (links.additionalLinks && Array.isArray(links.additionalLinks)) {
    const validAdditionalLinks = links.additionalLinks
      .filter((item) => item && item.link && item.icon?.url)
      .map((item) => ({
        type: "custom",
        url: item.link,
        label: item.label || "Social Link",
        iconUrl: item.icon.url,
        iconAlt: item.icon.alt || item.label || "Social icon",
      }));

    socialLinks.push(...validAdditionalLinks);
  }

  // Limit to 5 icons maximum
  const displayLinks = socialLinks.slice(0, 5);

  // If no links to display, return null
  if (displayLinks.length === 0) return null;

  return (
    <div className="flex gap-4 justify-center items-center flex-wrap">
      {displayLinks.map((link, index) => {
        // Render Facebook icon
        if (link.type === "facebook") {
          return (
            <a
              key={`facebook-${index}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label={link.label}
            >
              <Facebook className="h-6 w-6" />
            </a>
          );
        }

        // Render Instagram icon
        if (link.type === "instagram") {
          return (
            <a
              key={`instagram-${index}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label={link.label}
            >
              <Instagram className="h-6 w-6" />
            </a>
          );
        }

        // Render custom icon
        if (link.type === "custom") {
          // Build the full image URL
          const imageUrl = link.iconUrl.startsWith("http")
            ? link.iconUrl
            : `https://loan.remitout.com${
                link.iconUrl.startsWith("/") ? "" : "/"
              }${link.iconUrl}`;

          return (
            <a
              key={`custom-${index}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label={link.label}
            >
              <img
                src={imageUrl}
                alt={link.iconAlt}
                width="24"
                height="24"
                className="h-6 w-6 object-contain"
                loading="lazy"
              />
            </a>
          );
        }

        return null;
      })}
    </div>
  );
}

// Example usage with static data:
/*
const socialLinksData = {
  facebook: "https://facebook.com/remitout",
  instagram: "https://instagram.com/remitout",
  additionalLinks: [
    {
      label: "LinkedIn",
      icon: {
        url: "/media/linkedin-icon.png",
        alt: "LinkedIn"
      },
      link: "https://linkedin.com/company/remitout"
    },
    {
      label: "Twitter",
      icon: {
        url: "https://example.com/twitter-icon.png",
        alt: "Twitter"
      },
      link: "https://twitter.com/remitout"
    }
  ]
};

<SocialLinks links={socialLinksData} />
*/
