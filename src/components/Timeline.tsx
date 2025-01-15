import React from "react";
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Box, Typography, styled, Button } from '@mui/material';
import { Code, Cloud, School, Work } from '@mui/icons-material';

const StyledSection = styled(Box)(({ theme }) => ({
  padding: '5% 10%',
  textAlign: 'left',
  [theme.breakpoints.down('md')]: {
    padding: '5%',
  },
  '& .vertical-timeline': {
    '&::before': {
      background: theme.palette.divider,
    }
  },
  '& .vertical-timeline-element': {
    '& .vertical-timeline-element-content': {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[1],
      borderRadius: theme.shape.borderRadius,
      transition: theme.transitions.create(['background-color', 'box-shadow'], {
        duration: theme.transitions.duration.standard,
      }),
      '& .vertical-timeline-element-date': {
        color: theme.palette.text.primary,
      }
    },
    '& .vertical-timeline-element-content-arrow': {
      borderRight: `7px solid ${theme.palette.background.paper}`,
    }
  },
  '& .history-element': {
    '& .vertical-timeline-element-content': {
      backgroundColor: theme.palette.action.hover,
      '& .vertical-timeline-element-date': {
        opacity: 0.8,
      }
    },
    '& .vertical-timeline-element-content-arrow': {
      borderRight: `7px solid ${theme.palette.action.hover}`,
    },
    '& .vertical-timeline-element-icon': {
      opacity: 0.7,
      filter: 'grayscale(0.3)',
    }
  }
}));

const timelineElements = [
  {
    title: "Software Engineer",
    company: "The Graphite Lab",
    location: "Remote",
    description: "Developed and maintained software solutions for clients in the service trades industry.",
    date: "2022 - 2024",
    icon: <Code />,
    extended: false,
  },
  {
    title: "Advanced Software Engineering Immersive",
    company: "Hack Reactor",
    location: "Remote",
    description: "Learned advanced software engineering concepts and technologies.",
    date: "2021 - 2022",
    icon: <Code />,
    extended: false,
  },
  {
    title: "Phlebotomist",
    company: "All Medical Personnel",
    location: "Fort Collins, CO",
    description: "Collected blood samples from patients for medical testing.",
    date: "2019 - 2021",
    icon: <Work />,
    extended: true,
  },
  {
    title: "Student",
    company: "Harvard Medical School",
    location: "Remote",
    description: "Learned and practiced medical skills pertaining to microbiology and anatomy.",
    date: "2020 - 2020",
    icon: <School />,
    extended: true,
  },
  {
    title: "Student",
    company: "New York Medical Career Training Center",
    location: "Remote",
    description: "Certified in Phlebotomy, EKG, CPR, and First Aid.",
    date: "2019 - 2019",
    icon: <School />,
    extended: true,
  },
  {
    title: "Bachelor of Science in Psychology",
    company: "Stony Brook University",
    location: "Stony Brook, NY",
    description: "Minor in Chemistry.",
    date: "2015 - 2019",
    icon: <School />,
    extended: false,
  },
  {
    title: "Shift Leader",
    company: "Tropical Smoothie Cafe",
    location: "Centereach, NY",
    description: "Managed the store's operations, including inventory management, customer service, and team training.",
    date: "2014 - 2019",
    icon: <Work />,
    extended: true,
  },
  {
    title: "Volunteer Junior Firefighter",
    company: "Centereach Fire Department",
    location: "Centereach, NY",
    description: "Learned and practiced firefighting skills, including fire extinguishing, rescue techniques, and emergency response.",
    date: "2013 - 2014",
    icon: <Work />,
    extended: true,
  },

];

function Timeline() {
  const [showAll, setShowAll] = React.useState(false);
  
  // Get all elements that should be shown based on showAll state
  const visibleElements = showAll 
    ? timelineElements 
    : timelineElements.filter(element => !element.extended);

  // Sort elements by date (assuming most recent first)
  const sortedElements = [...visibleElements].sort((a, b) => {
    // Extract the start year from the date string (e.g., "2022 - 2024" → 2022)
    const getYear = (date: string) => parseInt(date.split(' - ')[0]);
    return getYear(b.date) - getYear(a.date);
  });

  return (
    <StyledSection id="history">
      <Typography variant="h4" sx={{ mb: 4 }}>
        Career History
      </Typography>

      <VerticalTimeline>
        {sortedElements.map((element, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element ${element.extended ? 'history-element' : ''}`}
            date={element.date}
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={element.icon}
          >
            <Typography variant="h6" component="h3">
              {element.title}
            </Typography>
            <Typography variant="subtitle1" component="h4">
              {element.company}
            </Typography>
            <Typography variant="subtitle2" component="h5">
              {element.location}
            </Typography>
            <Typography variant="body2">
              {element.description}
            </Typography>
          </VerticalTimelineElement>
        ))}

        {timelineElements.some(element => element.extended) && (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            my: 2,
            position: 'relative',
            zIndex: 1,
     
          }}>
            <Button 
              onClick={() => {
                setShowAll(!showAll)
                //scroll to top fo section
                const section = document.getElementById('history');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              variant="contained"
              color="primary"
            >
              {showAll ? 'Show Less' : 'Show All'}
            </Button>
          </Box>
        )}
      </VerticalTimeline>
    </StyledSection>
  );
}

export default Timeline;