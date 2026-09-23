export type ActivityType =
  | "user_Invited"
  | "user_updated"
  | "user_deactivated"
  | "user_joined"
  | "company_joined";

export type StatusType = "Active" | "Inactive";

export type Activity = {
  id: number;
  user: string;
  email: string;
  activity: ActivityType;
  status: StatusType;
  date: string;
  role: string;
};

export const Users: Activity[] = [
  {
    id: 1,
    user: "Yassin Nassrallah",
    email: "yassinnasrallah@gmail.com",
    activity: "user_Invited",
    status: "Active",
    role: "Developer",
    date: "2h ago",
  },
  {
    id: 2,
    user: "Youssef Nassrallah",
    email: "youssefnassrallah@gmail.com",
    activity: "user_joined",
    status: "Active",
    role: "Manager",
    date: "1 week ago",
  },
  {
    id: 3,
    user: "Ahmed Benali",
    email: "ahmed.benali@gmail.com",
    activity: "user_joined",
    status: "Active",
    role: "Developer",
    date: "3h ago",
  },
  {
    id: 4,
    user: "Sara Amrani",
    email: "sara.amrani@gmail.com",
    activity: "user_updated",
    status: "Active",
    role: "Designer",
    date: "5h ago",
  },
  {
    id: 5,
    user: "Omar Alaoui",
    email: "omar.alaoui@gmail.com",
    activity: "user_Invited",
    status: "Active",
    role: "Developer",
    date: "1 day ago",
  },
  {
    id: 6,
    user: "Salma Idrissi",
    email: "salma.idrissi@gmail.com",
    activity: "user_joined",
    status: "Active",
    role: "HR",
    date: "2 days ago",
  },
  {
    id: 7,
    user: "Hamza El Fassi",
    email: "hamza.elfassi@gmail.com",
    activity: "user_deactivated",
    status: "Inactive",
    role: "Developer",
    date: "3 days ago",
  },
  {
    id: 8,
    user: "Nour El Houda",
    email: "nour.elhouda@gmail.com",
    activity: "user_updated",
    status: "Active",
    role: "Designer",
    date: "4 days ago",
  },
  {
    id: 9,
    user: "Adam Chraibi",
    email: "adam.chraibi@gmail.com",
    activity: "user_joined",
    status: "Active",
    role: "Developer",
    date: "5 days ago",
  },
  {
    id: 10,
    user: "Imane Berrada",
    email: "imane.berrada@gmail.com",
    activity: "user_Invited",
    status: "Active",
    role: "Manager",
    date: "1 week ago",
  },
  {
    id: 11,
    user: "Mehdi Tazi",
    email: "mehdi.tazi@gmail.com",
    activity: "user_updated",
    status: "Active",
    role: "Developer",
    date: "1 week ago",
  },
  {
    id: 12,
    user: "Aya Bennani",
    email: "aya.bennani@gmail.com",
    activity: "user_joined",
    status: "Active",
    role: "HR",
    date: "2 weeks ago",
  },
];