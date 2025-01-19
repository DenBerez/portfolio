import React from "react";
import { Box, Chip, Typography, styled, Button, SxProps, Theme } from '@mui/material';
import ka from "../assets/images/ka.png";
import cg from "../assets/images/cg.png";
import { ProjectData, PROJECTS_DATA } from '../data/projects';
import ShowMoreButton from './ShowMoreButton';

const StyledSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '8% 12%',
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    padding: '10% 5%',
  }
}));

const ProjectsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(8),
  '& img': {
    width: '100%',
    height: 350,
    objectFit: 'cover',
    borderRadius: theme.shape.borderRadius * 2,
    transition: 'all 0.3s ease-in-out',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
    }
  },
  '& .project': {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(6),
    '& .project': {
      paddingBottom: theme.spacing(6),
    }
  }
}));

const ProjectTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 600,
  fontSize: '1.5rem',
  marginTop: theme.spacing(2),
  transition: 'color 0.2s ease-in-out',
  '&:hover': {
    color: theme.palette.primary.main,
  }
}));

const ProjectDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(2.5),
  lineHeight: 1.6,
}));


const ChipContainer = styled(Box)(({ theme }) => ({
  lineHeight: 2.2,
  margin: theme.spacing(0.5, 0),
  '& .MuiChip-root': {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    padding: theme.spacing(0.5, 0),
    backgroundColor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.05)'
      : 'rgba(0, 0, 0, 0.04)',
    borderColor: theme.palette.mode === 'dark' 
      ? 'rgba(255, 255, 255, 0.12)' 
      : 'rgba(0, 0, 0, 0.08)',
    '&:hover': {
      backgroundColor: theme.palette.mode === 'dark' 
        ? 'rgba(255, 255, 255, 0.08)'
        : 'rgba(0, 0, 0, 0.08)',
    },
    '& .MuiChip-label': {
      fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
      fontSize: '0.85rem',
      fontWeight: 500,
    }
  }
}));

// New interfaces
interface ProjectSectionProps {
  title: string;
  projects: readonly ProjectData[];
  sx?: SxProps<Theme>;
}

const SectionDivider = styled(Box)(({ theme }) => ({
  width: '40px',
  height: '4px',
  backgroundColor: theme.palette.primary.main,
  marginBottom: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
}));

// New ProjectSection component
const ProjectSection: React.FC<ProjectSectionProps> = ({ title, projects, sx }) => (
  <>
    <Box sx={{ mb: 4 }}>
      <Typography 
        variant="h5" 
        gutterBottom 
        sx={{ 
          fontWeight: 600,
          fontSize: '1.8rem',
          ...sx 
        }}
      >
        {title}
      </Typography>
    </Box>
    <ProjectsGrid>
      {projects.map((project, index) => (
        <Box key={index} className="project">
          {project.image && (
            <a href={project.link} target="_blank" rel="noreferrer">
              <img src={project.image} alt={project.title} className="zoom" />
            </a>
          )}
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
  </>
);

function Project() {
  const [showAllPersonal, setShowAllPersonal] = React.useState(false);
  const [showAllProfessional, setShowAllProfessional] = React.useState(false);
  const [showAllAcademic, setShowAllAcademic] = React.useState(false);

  const getVisibleProjects = (projects: readonly ProjectData[], showAll: boolean) => {
    return showAll ? projects : projects.slice(0, 2);
  };

  return (
    <StyledSection id="projects">
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          sx={{ 
            fontWeight: 600
          }}
        >
          Projects
        </Typography>
      </Box>
      <Typography 
        variant="body1" 
        sx={{ 
          color: 'text.secondary',
          maxWidth: '600px',
          mb: 6
        }}
      >
        A collection of my professional, personal, and academic work showcasing my development journey.
      </Typography>

      <SectionDivider />


      <Box 
        id="professional-projects" 
        sx={{ 
          mb: 12,
          pb: 6,
          borderBottom: theme => `1px solid ${theme.palette.divider}`
        }}
      >
        <ProjectSection 
          title="Professional Projects" 
          projects={getVisibleProjects(PROJECTS_DATA.professional, showAllProfessional)} 
        />
        <ShowMoreButton 
          showAll={showAllProfessional}
          setShowAll={setShowAllProfessional}
          totalCount={PROJECTS_DATA.professional.length}
          scrollToId="professional-projects"
        />
      </Box>

      <Box 
        id="personal-projects" 
        sx={{ 
          mb: 12,
          pb: 6,
          borderBottom: theme => `1px solid ${theme.palette.divider}`
        }}
      >
        <ProjectSection 
          title="Personal Projects" 
          projects={getVisibleProjects(PROJECTS_DATA.personal, showAllPersonal)} 
        />
        <ShowMoreButton 
          showAll={showAllPersonal}
          setShowAll={setShowAllPersonal}
          totalCount={PROJECTS_DATA.personal.length}
          scrollToId="personal-projects"
        />
      </Box>

      <Box 
        id="academic-projects" 
        sx={{ mb: 8 }}
      >
        <ProjectSection 
          title="Academic Projects" 
          projects={getVisibleProjects(PROJECTS_DATA.academic, showAllAcademic)} 
        />
        <ShowMoreButton 
          showAll={showAllAcademic}
          setShowAll={setShowAllAcademic}
          totalCount={PROJECTS_DATA.academic.length}
          scrollToId="academic-projects"
        />
      </Box>
    </StyledSection>
  );
}

export default Project;