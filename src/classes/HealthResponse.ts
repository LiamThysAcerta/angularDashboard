export interface HealthResponse {
  status: string;
  versionInfo: {
    version: string;
    revision: string;
    creationDate: string | null;
  };
}
