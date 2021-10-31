export interface Log {
  id: string;
  monitorId: string;
  httpStatusCode: number;
}

export interface Monitor {
  id: string;
  name: string;
  url: string;
}
