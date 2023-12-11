const BASE_URL = "";

type Config = {
  method: string;
  headers: {
    "Content-Type": string;
  };
};

function buildQueryString(params: Record<string, string>): string {
  return Object.keys(params)
    .map(
      (key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
    )
    .join("&");
}

export const apiClient = {
  async request(
    method: string,
    endpoint: string,
    queryParams: Record<string, string> = {}
  ) {
    const headers = {
      "Content-Type": "application/json",
    };

    const config: Config = {
      method,
      headers,
    };

    const queryString = buildQueryString(queryParams);

    const URL = `${BASE_URL}${endpoint}${queryString ? `?${queryString}` : ""}`;

    try {
      const response = await fetch(URL, config);
      const json = await response.json();
      if (!response.ok) {
        throw new Error(json.message || "API request failed");
      }
      return json;
    } catch (error) {
      throw error;
    }
  },

  get(endpoint: string, queryParams: Record<string, string> = {}) {
    return this.request("GET", endpoint, queryParams);
  },
};
