/** Centralized portfolio content data source */
export const portfolioData = {
  // Profile & Basic Information
  profile: {
    displayName: "Duke",
    fullName: "Mahdi Abbasi",
    tagline: "Software engineer · AI/ML researcher · Educator",
    focusAreas: [
      "[Focus Area 1]",
      "[Focus Area 2]",
      "[Focus Area 3]",
      "[Focus Area 4]",
      "[Focus Area 5]",
    ],
    email: "DukeMahdinal@gmail.com",
    location: "Research University Campus",
    socials: {
      github: "https://github.com/TheOnlyDuke",
      linkedin: "https://www.linkedin.com/in/mahdi-abbasi-5a934b358",
      email: "mailto:DukeMahdinal@Gamil.com",
    },
  },

  // Hero Configuration
  hero: {
    title: "Mahdi Abbasi (Duke)",
    subtitle: "Software engineer, AI/ML researcher, and educator",
    primaryButton: {
      label: "View Work",
      href: "/projects",
      variant: "primary",
    },
    secondaryButton: {
      label: "Research",
      href: "/research",
      variant: "outline",
    },
  },

  // Skills Organization
  skills: [
    {
      group: "Engineering",
      items: [
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "language" },
        { name: "[Technology]", kind: "language" },
        { name: "[Technology]", kind: "language" },
        { name: "[Technology]", kind: "language" },
        { name: "[Technology]", kind: "language" },
        { name: "[Technology]", kind: "language" },
        { name: "[Technology]", kind: "tool" },
        { name: "[Technology]", kind: "framework" },
        { name: "[Technology]", kind: "tool" },
        { name: "[Technology]", kind: "tool" },
      ],
    },
    {
      group: "ML Engineering",
      items: [
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "framework" },
        { name: "[Technology]", kind: "framework" },
        { name: "[Technology]", kind: "framework" },
        { name: "[Technology]", kind: "framework" },
        { name: "[Technology]", kind: "tool" },
        { name: "[Technology]", kind: "tool" },
        { name: "[Technology]", kind: "tool" },
      ],
    },
    {
      group: "AI / ML Research",
      items: [
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
      ],
    },
    {
      group: "Compilers & Languages",
      items: [
        { name: "[Technology]", kind: "framework" },
        { name: "[Technology]", kind: "framework" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
      ],
    },
    {
      group: "Data Systems",
      items: [
        { name: "[Technology]", kind: "framework" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "tool" },
        { name: "[Technology]", kind: "tool" },
        { name: "[Technology]", kind: "tool" },
      ],
    },
    {
      group: "Tools & Practices",
      items: [
        { name: "[Technology]", kind: "tool" },
        { name: "[Technology]", kind: "tool" },
        { name: "[Technology]", kind: "tool" },
        { name: "[Technology]", kind: "tool" },
        { name: "[Technology]", kind: "tool" },
        { name: "[Technology]", kind: "concept" },
        { name: "[Technology]", kind: "concept" },
      ],
    },
  ],

  // Projects Data
  projects: [
    {
      slug: "project-1",
      name: "Test Project Title",
      tagline: "[Project Description]",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      role: "[Role]",
      tech: ["[Technology]", "[Technology]", "[Technology]", "[Technology]", "[Technology]"],
      year: 2025,
      status: "Active",
      links: {
        github: "[GitHub URL]",
        demo: "https://example.com/demo",
      },
      domain: "Systems",
    },
    {
      slug: "project-2",
      name: "Test Project Title",
      tagline: "[Project Description]",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      role: "[Role]",
      tech: ["[Technology]", "[Technology]", "[Technology]"],
      year: 2024,
      status: "Maintained",
      links: {
        github: "[GitHub URL]",
        demo: null,
      },
      domain: "ML Engineering",
    },
    {
      slug: "project-3",
      name: "Test Project Title",
      tagline: "[Project Description]",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      role: "[Role]",
      tech: ["[Technology]", "[Technology]", "[Technology]", "[Technology]", "[Technology]", "[Technology]"],
      year: 2024,
      status: "Production",
      links: {
        github: "[GitHub URL]",
        demo: "https://example.com/demo",
      },
      domain: "Data Engineering",
    },
    {
      slug: "project-4",
      name: "Test Project Title",
      tagline: "[Project Description]",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      role: "[Role]",
      tech: ["[Technology]", "[Technology]", "[Technology]", "[Technology]"],
      year: 2023,
      status: "Active",
      links: {
        github: null,
        demo: null,
      },
      domain: "Robotics",
    },
    {
      slug: "project-5",
      name: "Test Project Title",
      tagline: "[Project Description]",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      role: "[Role]",
      tech: ["[Technology]", "[Technology]", "[Technology]", "[Technology]", "[Technology]"],
      year: 2022,
      status: "Archived",
      links: {
        github: "[GitHub URL]",
        demo: null,
      },
      domain: "Compilers",
    },
    {
      slug: "project-6",
      name: "Short",
      tagline: "[Project Description]",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      role: "[Role]",
      tech: ["[Technology]"],
      year: 2024,
      status: "Active",
      links: {
        github: "[GitHub URL]",
        demo: null,
      },
      domain: "Data Systems",
    },
    {
      slug: "project-7",
      name: "[Project Title] With An Extremely Long Name To Test Typography Wrapping Behavior Across Multiple Lines In The Card Layout",
      tagline: "[Project Description]",
      description: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      role: "[Role]",
      tech: ["[Technology]", "[Technology]", "[Technology]", "[Technology]", "[Technology]", "[Technology]", "[Technology]", "[Technology]", "[Technology]", "[Technology]"],
      year: 2025,
      status: "In Development",
      links: {
        github: "[GitHub URL]",
        demo: "https://example.com/demo",
      },
      domain: "Systems",
    },
  ],

  // Research Data
  research: [
    {
      slug: "research-1",
      title: "[Research Title]",
      area: "Research Area",
      problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      approach: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      methods: [
        "[Method or Technique]",
        "[Method or Technique]",
        "[Method or Technique]",
        "[Method or Technique]",
      ],
      status: "In progress",
      period: "[Date]",
      role: "[Role]",
      results: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
      links: {
        github: "[GitHub URL]",
        paper: null,
        demo: "https://example.com/demo",
      },
    },
    {
      slug: "research-2",
      title: "[Research Title]",
      area: "Research Area",
      problem: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      approach: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
      methods: [
        "[Method or Technique]",
        "[Method or Technique]",
        "[Method or Technique]",
      ],
      status: "Submitted",
      period: "[Date]",
      role: "[Role]",
      results: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      links: {
        github: "[GitHub URL]",
        paper: "https://arxiv.org/abs/placeholder",
        demo: null,
      },
    },
    {
      slug: "research-3",
      title: "[Research Title]",
      area: "Research Area",
      problem: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.",
      approach: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      methods: [
        "[Method or Technique]",
        "[Method or Technique]",
      ],
      status: "Published",
      period: "[Date]",
      role: "[Role]",
      results: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit.",
      links: {
        github: null,
        paper: "https://example.com/paper",
        demo: null,
      },
    },
    {
      slug: "research-4",
      title: "[Research Title]",
      area: "Research Area",
      problem: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.",
      approach: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
      methods: [
        "[Method or Technique]",
        "[Method or Technique]",
        "[Method or Technique]",
        "[Method or Technique]",
        "[Method or Technique]",
      ],
      status: "Archived",
      period: "[Date]",
      role: "[Role]",
      results: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      links: {
        github: "[GitHub URL]",
        paper: null,
        demo: null,
      },
    },
  ],

  // Experience Data (Education & Teaching)
  experience: [
    {
      type: "teaching",
      org: "[Organization]",
      role: "Teaching Assistant — [Role]",
      period: "[Date]",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      highlights: [
        "[Highlight or achievement]",
        "[Highlight or achievement]",
        "[Highlight or achievement]",
      ],
    },
    {
      type: "teaching",
      org: "[Organization]",
      role: "Teaching Assistant — [Role]",
      period: "[Date]",
      summary: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      highlights: [
        "[Highlight or achievement]",
        "[Highlight or achievement]",
      ],
    },
    {
      type: "teaching",
      org: "[Organization]",
      role: "Teaching Assistant — [Role]",
      period: "[Date]",
      summary: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      highlights: [
        "[Highlight or achievement]",
      ],
    },
  ],

  // Publications (Placeholder for research papers)
  publications: [
    {
      title: "[Publication Title]",
      venue: "[Venue Name]",
      year: 2025,
      placeholder: "[Status or note]",
    },
    {
      title: "[Publication Title]",
      venue: "[Venue Name]",
      year: 2024,
      placeholder: "[Status or note]",
    },
    {
      title: "[Publication Title]",
      venue: "[Venue Name]",
      year: 2023,
      placeholder: "[Status or note]",
    },
    {
      title: "[Publication Title]",
      venue: "[Venue Name]",
      year: 2022,
      placeholder: "[Status or note]",
    },
  ],

  // Education Data
  education: [
    {
      type: "education",
      org: "[Organization]",
      role: "[Degree Name]",
      period: "[Date]",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      type: "education",
      org: "[Organization]",
      role: "[Degree Name]",
      period: "[Date]",
      summary: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      type: "education",
      org: "[Organization]",
      role: "[Degree Name]",
      period: "[Date]",
      summary: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    },
  ],

  // Journey / Timeline Data
  journey: [
    {
      year: 2025,
      title: "[Event Title]",
      venue: "[Venue]",
      placeholder: "[Description]",
    },
    {
      year: 2024,
      title: "[Event Title]",
      organization: "[Organization]",
      placeholder: "[Description]",
    },
    {
      year: 2023,
      title: "[Event Title]",
      organization: "[Organization]",
      placeholder: "[Description]",
    },
    {
      year: 2022,
      title: "[Event Title]",
      organization: "[Organization]",
      placeholder: "[Description]",
    },
    {
      year: 2021,
      title: "[Event Title]",
      organization: "[Organization]",
      placeholder: "[Description]",
    },
    {
      year: 2020,
      title: "[Event Title]",
      organization: "[Organization]",
      placeholder: "[Description]",
    },
  ],

  // Contact Information
  contact: {
    email: "[email@address.com]",
    location: "[Location]",
    phone: "[Phone Number]",
    address: "[Full Address]",
  },

  // University Activities
  universityActivities: [
    {
      org: "[Organization]",
      role: "[Role]",
      period: "[Date]",
      summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      org: "[Organization]",
      role: "[Role]",
      period: "[Date]",
      summary: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    },
  ],

  // Helper derived fields
  getFocusAreasDisplay: function () {
    return this.profile.focusAreas.slice(0, 3).join(" · ");
  },
};

export default portfolioData;