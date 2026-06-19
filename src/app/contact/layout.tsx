export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Gilead Odo — software developer exploring the intersection of design, music, and code.",
  openGraph: {
    title: "Contact",
    description:
      "Get in touch with Gilead Odo — software developer exploring the intersection of design, music, and code.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact",
    description:
      "Get in touch with Gilead Odo — software developer exploring the intersection of design, music, and code.",
    creator: "@balmofcodes",
  },
};
export default function ContactLayout(props: LayoutProps<"/contact">) {
  return props.children;
}
