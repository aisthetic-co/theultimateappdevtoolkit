// Default expiration time for cache entries (5 minutes)
const defaultTiming = 60 * 5; // 300 seconds

// Cache expiry timings in seconds
export const expiry = {
  // Default expiration time
  default: defaultTiming, // Use this for general caching needs
};

/*
Usage:
- To set a cache entry with a specific expiration time, use the appropriate property from the `expiry` object.
- Example: 
    setCache("someKey", someValue, expiry.someKey);
- This will set the cache entry "someKey" with "someValue" and an expiration time of 15 minutes.
*/
