import React from "react";
import { Box, Chip, Typography, styled } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BuildIcon from '@mui/icons-material/Build';
import PeopleIcon from '@mui/icons-material/People';

const StyledSection = styled(Box)(({ theme }) => ({
  padding: '5% 10%',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  '& svg': {
    color: theme.palette.text.primary,
    transition: theme.transitions.create('color', {
      duration: theme.transitions.duration.shorter,
    }),
  }
}));

const SkillsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '50px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gridGap: '30px',
  }
}));

const ChipContainer = styled(Box)(({ theme }) => ({
  lineHeight: 2,
  margin: theme.spacing(0.5, 0),
  '& .MuiChip-root': {
    marginRight: theme.spacing(0.5),
    marginBottom: theme.spacing(0.5),
    backgroundColor: theme.palette.background.paper,
    borderColor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.15)' 
      : 'rgba(0, 0, 0, 0.12)',
    transition: theme.transitions.create(['background-color', 'color', 'border-color'], {
      duration: theme.transitions.duration.shorter,
    }),
    '&.special': {
      backgroundColor: theme.palette.primary.main,
      borderColor: 'transparent',
      '& .MuiChip-label': {
        color: theme.palette.primary.contrastText,
      }
    },
    '& .MuiChip-label': {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
      color: theme.palette.text.primary,
    }
  }
}));

// Frontend Skills
const frontendSkills = [
  "React", "TypeScript", "Next.js", "JavaScript", "HTML5", "CSS3", 
  "Material-UI", "React Query", "Jest", 
  "Web Components", "Server-Side Rendering (SSR)", "Vue",
  "Storybook", "Responsive Design"
];

// Backend Skills
const backendSkills = [
  "Node.js", "Python", "Express", "REST APIs", "GraphQL",
  "PostgreSQL", "MongoDB", "MySQL", "WebSocket",
  "Microservices", "API Gateway", "NGINX"
];

// DevOps Skills
const devopsSkills = [
  "Docker", "AWS", "Serverless", "Lambda", "S3",
  "GitHub Actions", "CI/CD",
  "CloudFormation", "CDK (AWS Cloud Development Kit)"
];

// AI/ML Skills
const aiSkills = [
  "OpenAI", "LangChain", "Prompt Engineering",
  "TensorFlow"
];

// Special Skills (for highlighting)
const specialSkills = [
  "AWS", "Node.js", "React", "JavaScript", "TypeScript",
  "Material-UI", "REST APIs", "Serverless", "Cloud Architecture",
  "OpenAI", "Git", "GitHub", "VS Code", "Cursor",
  "Jira", "Slack", "Postman", "HTML5", "CSS3", "CDK", 
  "Prompt Engineering", "Express", "GraphQL", "API Gateway", "Microservices", 
  "PostgreSQL",  "npm", "Lambda", "S3", "Amplify",
  "Jest", "Mocha",
  "Cross-Browser Testing", "Responsive Design"
];

// Tools & Utilities
const toolsAndUtilities = [
  "Git", "GitHub", "VS Code", "Webpack", "npm",
  "Jira", "Slack", "Postman", "Cursor"
];

// Soft Skills
// const softSkills = [
//   "Problem-Solving",
//   "Team Collaboration",
//   "Communication",
//   "Leadership",
//   "Agile Methodologies"
// ];

// Testing Skills
const testingSkills = [
  "Jest", "React Testing Library", "Cypress",
  "Unit Testing", "Integration Testing",
  "Cross-Browser Testing", "Mocha", "Chai"
];

function Expertise() {
  // Helper function to sort skills
  const sortSkills = (skills: string[]) => {
    return skills.sort((a, b) => {
      const aIsSpecial = specialSkills.includes(a);
      const bIsSpecial = specialSkills.includes(b);
      if (aIsSpecial && !bIsSpecial) return -1;
      if (!aIsSpecial && bIsSpecial) return 1;
      return 0;
    });
  };

  return (
    <StyledSection id="expertise">
      <Typography variant="h4" gutterBottom>
        Technical Expertise
      </Typography>

      <SkillsGrid>
        <Box>
          <Typography variant="h6" gutterBottom>
            <WebIcon /> Frontend Development
          </Typography>
          <ChipContainer>
            {sortSkills(frontendSkills).map((label) => (
              <Chip 
                key={label} 
                variant="outlined"
                label={label} 
                className={specialSkills.includes(label) ? 'special' : ''}
              />
            ))}
          </ChipContainer>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            <StorageIcon /> Backend Development
          </Typography>
          <ChipContainer>
            {sortSkills(backendSkills).map((label) => (
              <Chip 
                key={label} 
                variant="outlined"
                label={label} 
                className={specialSkills.includes(label) ? 'special' : ''}
              />
            ))}
          </ChipContainer>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            <CloudIcon /> DevOps & Cloud
          </Typography>
          <ChipContainer>
            {sortSkills(devopsSkills).map((label) => (
              <Chip 
                key={label} 
                variant="outlined"
                label={label} 
                className={specialSkills.includes(label) ? 'special' : ''}
              />
            ))}
          </ChipContainer>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            <PsychologyIcon /> AI & Machine Learning
          </Typography>
          <ChipContainer>
            {sortSkills(aiSkills).map((label) => (
              <Chip 
                key={label} 
                variant="outlined"
                label={label} 
                className={specialSkills.includes(label) ? 'special' : ''}
              />
            ))}
          </ChipContainer>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            <BuildIcon /> Tools & Utilities
          </Typography>
          <ChipContainer>
            {sortSkills(toolsAndUtilities).map((label) => (
              <Chip 
                key={label} 
                variant="outlined"
                label={label} 
                className={specialSkills.includes(label) ? 'special' : ''}
              />
            ))}
          </ChipContainer>
        </Box>

        <Box>
          <Typography variant="h6" gutterBottom>
            <BuildIcon /> Testing & Quality Assurance
          </Typography>
          <ChipContainer>
            {sortSkills(testingSkills).map((label) => (
              <Chip 
                key={label} 
                variant="outlined"
                label={label} 
                className={specialSkills.includes(label) ? 'special' : ''}
              />
            ))}
          </ChipContainer>
        </Box>

        {/* <Box>
          <Typography variant="h6" gutterBottom>
            <PeopleIcon /> Soft Skills
          </Typography>
          <ChipContainer>
            {sortSkills(softSkills).map((label) => (
              <Chip 
                key={label} 
                variant="outlined"
                label={label} 
                className={specialSkills.includes(label) ? 'special' : ''}
              />
            ))}
          </ChipContainer>
        </Box> */}
      </SkillsGrid>
    </StyledSection>
  );
}

export default Expertise;