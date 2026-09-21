export const DashboardData = {

    company: {
    name: "NovaTech Solutions",
    type: "Technology Solutions",
    vatNumber: "MA123456789",
    address: "45 Hassan II Avenue, Rabat, Morocco",
    phone: "+212 537 45 67 89",
    website: "https://novatech.example.com",
    profile:'NS'
  },

  statistics: {
    totalUsers: 24,
    activeUsers: 20,
    pendingInvitations: 3,
    deactivatedUsers: 1,
  },

  recentActivity: [
    {
      id: 1,
      type: "user_added",
      title: "New user added",
      description: "Ayoub El Idrissi was added to the company.",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "company_updated",
      title: "Company profile updated",
      description: "Company address was updated.",
      time: "4 hours ago",
    },
    {
      id: 3,
      type: "invitation_sent",
      title: "Invitation sent",
      description: "Invitation sent to sara@example.com.",
      time: "6 hours ago",
    },
    {
      id: 4,
      type: "user_deactivated",
      title: "User deactivated",
      description: "Omar Khalil was deactivated.",
      time: "1 day ago",
    },
    {
      id: 5,
      type: "user_registered",
      title: "New user registered",
      description: "Fatima Zahra completed her registration.",
      time: "1 day ago",
    },
  ],

}