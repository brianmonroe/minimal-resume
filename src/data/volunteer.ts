export type VolunteerItem = {
  organization: string;
  role: string;
  start: string;
  end: string;
  description: string[];
};

export const volunteer: VolunteerItem[] = [
  {
    organization: "Grand Lake St Marys Lake Improvement Association",
    role: "Executive Board Member",
    start: "January 2016",
    end: "Present",
    description: [
      "Collaborate with board members on projects to improve Grand Lake St Marys",
      "Assist with fundraising and special events",
      "Manage the Facebook page livestream during monthly membership meetings",
    ],
  },
];
