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
  {
    organization: "Celina Moose Lodge #1473",
    role: "Communications Chairman",
    start: "January 2009",
    end: "Present",
    description: [
      "Collaborate with Moose administration and board members to promote Moose news and events",
      "Manage and maintain the Celina Moose website",
      "Manage and assist updating the Celina Moose social media pages",
      "Design print marketing / promotional material",
      "Designated photographer for Moose special events and activities",
    ],
  },
];
