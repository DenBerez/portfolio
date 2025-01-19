import React, { useState } from "react";
import { IconButton, Stack, Tooltip, Dialog } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DescriptionIcon from '@mui/icons-material/Description';

interface SocialIconsProps {
  direction?: "row" | "column";
  className?: string;
  tooltipPlacement?: "top" | "bottom";
}

export function SocialIcons({ 
  direction = "row", 
  className, 
  tooltipPlacement = "bottom" 
}: SocialIconsProps) {
  const [openResume, setOpenResume] = useState(false);

  const iconButtonStyle = {
    transition: 'color 200ms, transform 200ms',
    '&:hover': {
      color: 'primary.main',
      transform: 'translateY(-2px)',
    }
  };

  return (
    <>
      <Stack direction={direction} spacing={1} className={className}>
        <Tooltip title="GitHub" placement={tooltipPlacement}>
          <IconButton
            href="https://github.com/DenBerez"
            target="_blank"
            rel="noreferrer"
            sx={iconButtonStyle}
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn" placement={tooltipPlacement}>
          <IconButton
            href="https://www.linkedin.com/in/dennis-berezin/"
            target="_blank"
            rel="noreferrer"
            sx={iconButtonStyle}
          >
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Resume" placement={tooltipPlacement}>
          <IconButton 
            onClick={() => setOpenResume(true)}
            sx={iconButtonStyle}
          >
            <DescriptionIcon />
          </IconButton>
        </Tooltip>
      </Stack>

      <Dialog
        open={openResume}
        onClose={() => setOpenResume(false)}
        maxWidth="lg"
        sx={{
          '& .MuiDialog-paper': {
            height: '86vh',
            margin: '16px',
          }
        }}
        fullWidth
      >
        <object
          data={process.env.PUBLIC_URL + '/resume.pdf'}
          type="application/pdf"
          style={{ 
            border: 'none',
            width: '100%',
            height: '100%'
          }}
        >
          <embed src={process.env.PUBLIC_URL + '/resume.pdf'} type="application/pdf" />
          <p>
            Unable to display PDF file.{' '}
            <a href={process.env.PUBLIC_URL + '/resume.pdf'} target="_blank" rel="noopener noreferrer">
              Open in new tab
            </a>
            {' '}or{' '}
            <a href={process.env.PUBLIC_URL + '/resume.pdf'} download>
              download
            </a>
            {' '}instead.
          </p>
        </object>
      </Dialog>
    </>
  );
} 