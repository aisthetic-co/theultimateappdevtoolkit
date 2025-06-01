const getPreviewPathname = (uid, { document }): string | null => {
  const { slug } = document;

  switch (uid) {
    case "api::page.page":
      switch (slug) {
        case "homepage":
          return `/`;
        default:
          return `/${slug}`;
      }
    default:
      return null;
  }
};

export default ({ env }) => {
  const clientUrl = env("PREVIEW_URL");
  const previewSecret = env("PREVIEW_SECRET");

  return {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    apiToken: {
      salt: env('API_TOKEN_SALT'),
    },
    transfer: {
      token: {
        salt: env('TRANSFER_TOKEN_SALT'),
      },
    },
    secrets: {
      encryptionKey: env('ENCRYPTION_KEY'),
    },
    flags: {
      nps: env.bool('FLAG_NPS', true),
      promoteEE: env.bool('FLAG_PROMOTE_EE', true),
    },
    preview: {
      enabled: true,
      config: {
        allowedOrigins: [clientUrl],
        async handler(uid, { documentId, status }) {
          const document = await strapi
            .documents(uid)
            .findOne({ documentId, status });
          const pathname = getPreviewPathname(uid, { document });

          // Disable preview if the pathname is not found
          if (!pathname) {
            return null;
          }

          // Use Next.js draft mode
          const urlSearchParams = new URLSearchParams({
            url: pathname,
            secret: previewSecret,
            status,
          });

          return `${clientUrl}/api/enable-preview?${urlSearchParams}`;
        },
      },
    },
  }
};
