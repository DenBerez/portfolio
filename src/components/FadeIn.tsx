import React, { PropsWithChildren, useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

interface Props {
  className?: string;
  childClassName?: string;
  transitionDuration?: number;
  wrapperTag?: keyof JSX.IntrinsicElements;
  childTag?: keyof JSX.IntrinsicElements;
}

const WrapperTag = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const ChildTag = styled('div')(({ theme }) => ({
  transition: theme.transitions.create(['opacity', 'transform'], {
    duration: theme.transitions.duration.standard,
  }),
}));

export default function FadeIn({
  children,
  className,
  childClassName,
  transitionDuration = 500,
  wrapperTag = 'div',
  childTag = 'div',
}: PropsWithChildren<Props>) {
  const [maxIsVisible, setMaxIsVisible] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMaxIsVisible(React.Children.count(children));
    }, 0);

    return () => clearTimeout(timer);
  }, [children]);

  return (
    <WrapperTag as={wrapperTag} className={className}>
      {React.Children.map(children, (child, i) => (
        <ChildTag
          as={childTag}
          className={childClassName}
          style={{
            transform: maxIsVisible > i ? 'none' : 'translateY(20px)',
            opacity: maxIsVisible > i ? 1 : 0,
            transitionDelay: `${i * 100}ms`,
          }}
        >
          {child}
        </ChildTag>
      ))}
    </WrapperTag>
  );
}
  