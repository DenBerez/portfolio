import React from 'react';
import { Box, Button } from '@mui/material';

interface ShowMoreButtonProps {
  showAll: boolean;
  setShowAll: (value: boolean) => void;
  totalCount: number;
  scrollToId: string;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({ 
  showAll, 
  setShowAll, 
  totalCount,
  scrollToId
}) => {
  if (totalCount <= 2) return null;

  const handleClick = () => {
    setShowAll(!showAll);
    const element = document.getElementById(scrollToId);
    if (element) {
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      mt: 4,
      mb: 6,
      position: 'relative',
      zIndex: 1,
    }}>
      <Button 
        onClick={handleClick}
        variant="contained"
        color="primary"
        sx={{
          px: 4,
          py: 1,
          borderRadius: 2,
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 500,
          '&:hover': {
            transform: 'translateY(-2px)',
            transition: 'transform 0.2s ease-in-out',
          }
        }}
      >
        {showAll ? 'Show Less' : 'Show More'}
      </Button>
    </Box>
  );
};

export default ShowMoreButton; 