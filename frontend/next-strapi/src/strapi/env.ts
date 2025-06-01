export const strapiApiUrl = assertValue(
  process.env.NEXT_PUBLIC_STRAPI_API_URL,
  'Missing environment variable: NEXT_PUBLIC_STRAPI_API_URL'
)

export const token = assertValue(
  process.env.NEXT_PUBLIC_STRAPI_API_TOKEN,
  'Missing environment variable: NEXT_PUBLIC_STRAPI_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
