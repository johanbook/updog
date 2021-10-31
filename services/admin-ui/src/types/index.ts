export interface Log {
  id: string;
  httpStatusCode: number;
  monitorId: string;
}

export interface Monitor {
  id: string;
  name: string;
  url: string;
}
