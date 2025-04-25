import { describe, expect, it } from "vitest";

import APP_ENVS from "../../config/envs";

const API_URL = APP_ENVS.API_URL;

describe("healthcheck.tests", () => {
  it("should return health check output", async () => {
    const response = await fetch(`${API_URL}/health`);
    const responseData = (await response.json()) as {
      [key: string]: unknown;
    };

    expect(response.status).toBe(200);
    expect(responseData.message).toBe("Health check successful");
    expect(responseData.data).toHaveProperty("server.hostname");
    expect(responseData.data).toHaveProperty("server.name");
    expect(responseData.data).toHaveProperty("timestamp");
    expect(responseData.data).toHaveProperty("uptime");
  });
});
