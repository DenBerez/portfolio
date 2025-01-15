import React from "react";
import { Box, Chip, Typography, styled, Button } from '@mui/material';
import ka from "../assets/images/ka.png";
import cg from "../assets/images/cg.png";

const StyledSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '5% 10%',
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    padding: '5%',
  }
}));

const ProjectsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(6),
  '& img': {
    width: '100%',
    height: 300,
    objectFit: 'cover',
    borderRadius: theme.shape.borderRadius,
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.standard,
    }),
    '&:hover': {
      transform: 'scale(1.02)',
    }
  },
  '& .project': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(4),
    '& .project': {
      paddingBottom: theme.spacing(4),
    }
  }
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: theme.typography.h4.fontWeight,
  transition: theme.transitions.create('color', {
    duration: theme.transitions.duration.shorter,
  }),
  '&:hover': {
    color: theme.palette.primary.main,
    // textDecoration: 'underline',
  }
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(2),
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
    '& .MuiChip-label': {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
      color: theme.palette.text.primary,
    }
  }
}));

function Project() {
  const [showAll, setShowAll] = React.useState(false);

  const projects = [
      {
      title: "Reco",
      description: "A media recommendation app that allows users to search, save, rate and analyze any type of media.",
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Coming Soon",
      link: "https://github.com/DenBerez/reco",
      technologies: ["React", "Vite", "Material UI", "Node.js", "AWS Amplify", "GraphQL", "DynamoDB"],
      extended: false,
      comingSoon: true,
    },
    {
      title: "Web Scraper API",
      description: "A web scraper API that allows users to scrape data from websites.",
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Coming Soon",
      link: "https://github.com/DenBerez/webscraper-api",
      technologies: ["Javascript", "API Gateway"],
      extended: false,
      comingSoon: true,
    },
    {
      title: "Atelier",
      description: "Refactored and webscaled a legacy website.",
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Atelier",
      link: "https://github.com/DenBerez/Atelier-Azathoth",
      technologies: ["MySQL", "PostgreSQL", "EC2", "Javascript", "Node.js", "Express", "AWS", "NGINX", "K6", "Loader.io"],
      extended: false,
    },
    {
      title: "Catwalk",
      description: "Frontend for an ecommerce website.",
      image: cg,
      link: "https://github.com/DenBerez/Catwalk-Gandalf",
      technologies: ["Javascript", "Node.js", "Express"],
      extended: false,
    },
    {
      title: "Fullmaker",
      description: "A Discord bot that allows users to advertise, join and fill events.",
      image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Fullmaker",
      link: "https://github.com/DenBerez/Fullmaker",
      technologies: ["Javascript", "Discord.js"],
      extended: true,
    },
    {
      title: "Kane Academy",
      description: "A full-stack skillshare platform.",
      image: ka,
      link: "https://github.com/DenBerez/Kane-Academy",
      technologies: ["Javascript", "Node.js", "Express", "PostgreSQL", "Material UI", "Google Calendar API", "Google API"],
      extended: true,
    },
  
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <StyledSection id="projects">
      <Typography variant="h4" gutterBottom>
        Personal Projects
      </Typography>
      
      <ProjectsGrid>
        {visibleProjects.map((project, index) => (
          <Box key={index} className="project">
            <a href={project.link} target="_blank" rel="noreferrer">
              <img src={project.image} alt={project.title} className="zoom" />
            </a>
            <a href={project.link} target="_blank" rel="noreferrer">
              <ProjectTitle variant="h5" gutterBottom>{project.title}</ProjectTitle>
            </a>
            <ProjectDescription variant="body1">
              {project.description}
            </ProjectDescription>
            <ChipContainer>
              {project.technologies.map((tech, i) => (
                <Chip key={i} variant="outlined" label={tech} />
              ))}
            </ChipContainer>
          </Box>
        ))}
      </ProjectsGrid>

      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        mt: 4,
        position: 'relative',
        zIndex: 1,
      }}>
        <Button 
          onClick={() => {
            setShowAll(!showAll);
            const section = document.getElementById('projects');
            if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          variant="contained"
          color="primary"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </Button>
      </Box>
    </StyledSection>
  );
}

export default Project;