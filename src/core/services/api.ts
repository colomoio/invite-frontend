export function post(path: string, { body }: any) {
  return fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export function createAPI(url: string) {
  return {
    post: (path: string, data: any) => post(`${url}${path}`, data),
  };
}

export type CreateAPIType = ReturnType<typeof createAPI>;
