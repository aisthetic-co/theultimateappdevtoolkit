/**
 * Fetches data for a specified Strapi content type.
 *
 * @param {string} contentType - The type of content to fetch from Strapi.
 * @param {string} params - Query parameters to append to the API request.
 * @return {Promise<object>} The fetched data.
 */

import qs from "qs";
import { strapiApiUrl, token } from "../env";


function spreadStrapiData(data) {
  if (Array.isArray(data.data) && data.data.length > 0) {
    return data.data[0];
  }
  if (!Array.isArray(data.data)) {
    return data.data;
  }
  return null;
}

const baseURL = `${strapiApiUrl}/api`;

export default async function strapiFetch(query, draftMode = false) {
  try {
    const queryParams = { ...query.params };

    if (draftMode) {
      queryParams.status = "draft";
    }

    // Construct the full URL for the API request
    const url = `${baseURL}/${query.contentType}?${qs.stringify(queryParams, { encodeValuesOnly: true })}`;

    // Perform the fetch request with the provided query parameters
    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      console.error(`Failed to fetch data from Strapi (url=${url.toString()}, status=${response.status})`);
      console.info(response)
      return null;
    }

    const jsonData = await response.json();

    return query.spreadData ? spreadStrapiData(jsonData) : jsonData;
  } catch (error) {
    // Log any errors that occur during the fetch process
    console.error("FetchContentTypeError", error);
    return null;
  }
}