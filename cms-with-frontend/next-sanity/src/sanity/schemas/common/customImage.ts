import { defineField } from "sanity";
import { defineType } from "sanity";

export default defineType({
  title: "Image",
  name: "customImage",
  type: "object",

  fields: [
    defineField({
      name: "desktopImage",
      title: "Desktop image",
      type: "image",
      options: {
        hotspot: true,
        collapsible: false
      }
    }),
    defineField({
      name: "mobileImage",
      title: "Mobile image",
      type: "image",
      description:
        "If you don't upload a mobile image, the frontend will display the image uploaded above. Only upload a mobile image if its dimensions differ from the desktop image.",
      options: {
        hotspot: true,
        collapsible: false
      }
    }),
    defineField({
      name: "caption",
      type: "string",
      title: "Caption / Alternate text"
    }),
    defineField({
      name: "isLCP",
      type: "boolean",
      title: "isLCP?",
      description:
        "Does this image covers largest content on page, which appears first after page loads?"
    })
  ],
  preview: {
    prepare() {
      return {
        title: "Image"
      };
    }
  }
});
