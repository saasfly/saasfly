interface ClusterStatus {
  PENDING: "PENDING";
  CREATING: "CREATING";
  INITING: "INITING";
  RUNNING: "RUNNING";
  STOPPED: "STOPPED";
  DELETED: "DELETED";
}

type ClusterPlan = "FREE" | "BUSINESS" | "PRO";

export interface Cluster {
  id: number;
  name: string;
  status: keyof ClusterStatus | null;
  location: string;
  authUserId: string;
  plan: ClusterPlan | null;
  network: string | null;
  createdAt: Date;
  updatedAt: Date;
  delete: boolean | null;
}

export type ClustersArray = Cluster[] | undefined;
