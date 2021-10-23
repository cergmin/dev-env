import React from 'react';
import clsx from 'clsx';
import s from './HelloWorld.module.css';

type HelloWorldProps = React.HTMLProps<HTMLHeadingElement>;

export const HelloWorld = ({ className, ...props }: HelloWorldProps) => (
  <h1 className={clsx(s.text, className)} {...props}>
    Hello, world!
  </h1>
);
