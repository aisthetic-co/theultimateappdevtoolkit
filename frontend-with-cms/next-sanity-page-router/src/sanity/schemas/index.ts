import content from "./common/content";
import link from "./common/link";
import customCta from "./common/customCta";
import customImage from "./common/customImage";
import customVideo from "./common/customVideo";
import media from "./common/media";
import pageMetaData from "./common/pageMetaData";
import richText from "./common/richText";
import titleAndDescription from "./common/titleAndDescription";
import page from "./documents/page";
import footer from "./singletons/footer";
import navigation from "./singletons/navigation";
import settings from "./singletons/settings";

const schema = {
        types: [
          // Singletons
          settings,
          navigation,
          footer,
    
          // Documents
          page,
    
          //commmon
          pageMetaData,
          customImage,
          customVideo,
          media,
          content,
          link,
          titleAndDescription,
          richText,
          customCta
        ]
}

export default schema;