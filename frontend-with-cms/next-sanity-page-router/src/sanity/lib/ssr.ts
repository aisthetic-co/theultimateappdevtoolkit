import * as serverOnly from "@sanity/react-loader";
import { client } from "./client";
import { ClientPerspective } from "next-sanity";
import { token } from "./token";

const { loadQuery, setServerClient } = serverOnly;

setServerClient(
    client.withConfig({
        token,
    })
);

const loadQueryOptions = (context: { draftMode?: boolean }) => {
    const { draftMode } = context;
    return draftMode
        ? {
            perspective: "previewDrafts" as ClientPerspective,
            stega: true,
            useCdn: false,
        }
        : {};
};

export { loadQuery, loadQueryOptions };
