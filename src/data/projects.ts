import ka from "../assets/images/ka.png";
import cg from "../assets/images/cg.png";

export interface ProjectData {
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly link: string;
  readonly technologies: readonly string[];
  readonly comingSoon?: boolean;
}

export const PROJECTS_DATA = {
  professional: [
        {
      title: "The Toolbox",
      description: "Led development of an enterprise AI and automation platform that provides cutting-edge solutions tailored for service trades and home service businesses. The platform seamlessly integrates with existing CRM systems, enabling businesses to optimize their tech stack and enhance operational efficiency through automation.",
      technologies: ["Javascript", "React", "Node.js", "AI/ML", "Stripe", "AWS Amplify", "GraphQL", "DynamoDB", "AWS Lambda", "AWS S3", "AWS SES", "AWS SQS", "AWS SNS", 
          "AWS CloudWatch", "AWS CloudTrail", "AWS IAM", "AWS API Gateway", "Zapier", "ServiceTitan", "Material UI", "Ant Design", "Google API", "Python", ],
      link: "https://www.thegraphitelab.com/toolbox",
    },
    {
      title: "Profitfill",
      description: "Developed an AI-powered platform that optimizes marketing spend by analyzing CRM and website data to target high-value leads. The system intelligently manages ad campaigns to fill service schedules with the most profitable jobs, combining marketing automation with advanced data analytics.",
      technologies: ["Javascript", "React", "Node.js", "AWS", "GraphQL", "AI/ML"],
      link: "https://www.profitfill.com/",
    },

    {
      title: "SAM (System Alert Monitor)",
      description: "Developed a comprehensive monitoring system for managing drainage infrastructure. The platform provides real-time alerts, system status monitoring, and predictive maintenance capabilities for drainage systems, helping organizations maintain critical infrastructure more efficiently.",
      technologies: ["Javascript", "React", "Node.js", "AWS", "GraphQL", "Authorize.net"],
      link: "https://www.systemalertmonitor.com/",
    },
  ],
  personal: [
    {
      title: "DenBox",
      description: "A Jackbox clone to play various part games with your friends.",
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Coming Soon",
      link: "https://github.com/DenBerez/denbox",
      technologies: ["React", "Next,js", "Material UI", "Node.js", "AWS Amplify", "GraphQL", "DynamoDB", "Lambda", "S3", "IAM", "API Gateway", "Typescript"],
      comingSoon: true,
    },
    {
      title: "Reco",
      description: "A media recommendation app that allows users to search, save, rate and analyze any type of media.",
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Coming Soon",
      link: "https://github.com/DenBerez/reco",
      technologies: ["React", "Vite", "Material UI", "Node.js", "AWS Amplify", "GraphQL", "DynamoDB"],
      comingSoon: true,
    },
    {
      title: "Web Scraper API",
      description: "A web scraper API that allows users to scrape data from websites.",
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Coming Soon",
      link: "https://github.com/DenBerez/webscraper-api",
      technologies: ["Javascript", "API Gateway"],
      comingSoon: true,
    },
    {
      title: "Fullmaker",
      description: "A Discord bot that allows users to advertise, join and fill events.",
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Fullmaker",
      link: "https://github.com/DenBerez/Fullmaker",
      technologies: ["Javascript", "Discord.js"],
    },
  ],
  academic: [
    {
      title: "Atelier",
      description: "Engineered a high-performance backend system for an e-commerce platform by migrating from MySQL to PostgreSQL and implementing distributed architecture. Successfully scaled the application across four AWS EC2 instances using NGINX load balancing, resulting in a 400% increase in throughput to 108,000 requests per minute while maintaining response times under 50ms.",
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Atelier",
      link: "https://github.com/DenBerez/Atelier-Azathoth",
      technologies: ["MySQL", "PostgreSQL", "EC2", "Javascript", "Node.js", "Express", "AWS", "NGINX", "K6", "Loader.io"],
    },
    {
      title: "Catwalk",
      description: "Led the modernization of an e-commerce platform's front-end interface, with primary ownership of the product details section and navigation components. Implemented responsive design principles and dark mode functionality to enhance user experience. Collaborated with a team to ensure seamless integration across all components while maintaining consistent design language.",
      image: cg,
      link: "https://github.com/DenBerez/Catwalk-Gandalf",
      technologies: ["Javascript", "Node.js", "Express"],
    },
    {
      title: "Kane Academy",
      description: "A full-stack skillshare platform that connects mentors with learners. Mentors can list their expertise and availability, while learners can search for mentors by name or specific skills and schedule tutoring sessions. The platform integrates with Calendly and Google Calendar for seamless appointment scheduling and tracking.",
      image: ka,
      link: "https://github.com/DenBerez/Kane-Academy",
      technologies: ["Javascript", "Node.js", "Express", "PostgreSQL", "Material UI", "Google Calendar API", "Google API"],
    },
  ],
} as const;

export type ProjectsDataType = typeof PROJECTS_DATA; 