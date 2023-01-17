export type RestResponseType<RESOURCE = any> = {
  message: string;
  doc: RESOURCE;
};

export function readDoc<R = any>(restResponse: RestResponseType<R>) {
  return restResponse.doc;
}
