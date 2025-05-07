import { CogIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "metaData",
      title: "Default SEO",
      type: "pageMetaData"
    })
  ],
  preview: {
    prepare() {
      return {
        title: "Settings"
      };
    }
  }
});
