import React from 'react';

type Component<T = any> = React.FC<T>;

type ComponentWithChildren<T = any> = React.FC<React.PropsWithChildren & T>;

export type {Component, ComponentWithChildren};
