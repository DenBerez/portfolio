import React from "react";
import { Box, Chip, Typography, styled } from '@mui/material';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HandymanIcon from '@mui/icons-material/Handyman';
import BugReportIcon from '@mui/icons-material/BugReport';
import PeopleIcon from '@mui/icons-material/People';

const StyledSection = styled(Box)(({ theme }) => ({
  padding: '5% 10%',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  '& svg': {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
    fontSize: '1.75rem',
    transition: theme.transitions.create(['color', 'transform'], {
      duration: theme.transitions.duration.shorter,
    }),
    '&:hover': {
      transform: 'scale(1.1)',
    },
  }
}));

const SkillsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gridGap: '64px 80px',
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gridGap: '48px',
  }
}));

const ChipContainer = styled(Box)(({ theme }) => ({
  lineHeight: 2,
  margin: theme.spacing(1.5, 0),
  '& .MuiChip-root': {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(0.5, 0),
    backgroundColor: theme.palette.background.paper,
    borderColor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.15)' 
      : 'rgba(0, 0, 0, 0.12)',
    transition: theme.transitions.create(['background-color', 'color', 'border-color', 'transform'], {
      duration: theme.transitions.duration.shorter,
    }),
    '&:hover': {
      transform: 'translateY(-2px)',
    },
    '&.special': {
      backgroundColor: theme.palette.primary.main,
      borderColor: 'transparent',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
      '& .MuiChip-label': {
        color: theme.palette.primary.contrastText,
      }
    },
    '& .MuiChip-label': {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
      color: theme.palette.text.primary,
      // padding: theme.spacing(0.5, 0),
      fontSize: '0.9rem',
    }
  }
}));

const SkillTitle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1.5),
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: '2.5rem',
    color: theme.palette.mode === 'dark'
      ? theme.palette.common.white
      : theme.palette.primary.main,
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.08)'
      : 'rgba(0, 0, 0, 0.06)',
    padding: theme.spacing(1.5),
    borderRadius: '50%',
    filter: `drop-shadow(0 2px 3px ${
      theme.palette.mode === 'dark'
        ? 'rgba(0, 0, 0, 0.4)'
        : 'rgba(0, 0, 0, 0.2)'
    })`,
    boxShadow: `0 2px 8px ${
      theme.palette.mode === 'dark'
        ? 'rgba(0, 0, 0, 0.25)'
        : 'rgba(0, 0, 0, 0.1)'
    }`,
    transition: theme.transitions.create(['transform', 'box-shadow', 'filter', 'color'], {
      duration: theme.transitions.duration.shorter,
    }),
    '&:hover': {
      transform: 'scale(1.05)',
      filter: `drop-shadow(0 3px 5px ${
        theme.palette.mode === 'dark'
          ? 'rgba(0, 0, 0, 0.5)'
          : 'rgba(0, 0, 0, 0.3)'
      })`,
      boxShadow: `0 4px 12px ${
        theme.palette.mode === 'dark'
          ? 'rgba(0, 0, 0, 0.35)'
          : 'rgba(0, 0, 0, 0.15)'
      }`,
    },
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
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          fontWeight: 600,
          marginBottom: 3
        }}
      >
        Technical Expertise
      </Typography>

      <SkillsGrid>
        <Box>
          <SkillTitle variant="h6">
            <WebIcon /> Frontend Development
          </SkillTitle>
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
          <SkillTitle variant="h6">
            <StorageIcon /> Backend Development
          </SkillTitle>
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
          <SkillTitle variant="h6">
            <CloudIcon /> DevOps & Cloud
          </SkillTitle>
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
          <SkillTitle variant="h6">
            <PsychologyIcon /> AI & Machine Learning
          </SkillTitle>
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
          <SkillTitle variant="h6">
            <HandymanIcon /> Tools & Utilities
          </SkillTitle>
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
          <SkillTitle variant="h6">
            <BugReportIcon /> Testing & Quality Assurance
          </SkillTitle>
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