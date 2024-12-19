export const fetchClient = async <T>(
    url: string,
    options?: RequestInit
  ): Promise<T> => {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });
  
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Fetch failed with status ${response.status}: ${errorText || response.statusText}`
      );
    }
  
    return response.json();
  };