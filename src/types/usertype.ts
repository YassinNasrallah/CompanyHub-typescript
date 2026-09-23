export type ActivityType =
  | "user_Invited"
  | "user_updated"
  | "user_deactivated"
  | "user_joined"
  | "company_joined";

export type StatusType = "Active" | "Inactive";

export type UserType = {
  id: number;
  user: string;
  email: string;
  activity: ActivityType;
  status: StatusType;
  date: string;
  role: string;
};