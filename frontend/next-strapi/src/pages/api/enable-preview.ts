import type { NextApiRequest, NextApiResponse } from "next";
import { token } from "@/strapi/env";

export default async function handle(request: NextApiRequest, response: NextApiResponse<string | void>) {
    // Parse query string parameters
    const url = request.query.url as string;
    const secret = request.query.secret;
    const status = request.query.status;

    // check url exist
    if (!url) {
        throw new Error("Missing url");
    }

    // Check the secret and next parameters
    // This secret should only be known to this route handler and the CMS
    if (secret !== token) {
        return new Response("Invalid token", { status: 401 });
    }

    if (status === "published") {
        // Make sure draft mode is disabled so we only query published content
        response.setDraftMode({ enable: false });
    } else {
        // Enable draft mode so we can query draft content
        response.setDraftMode({ enable: true });
    }

    response.redirect(url);
};