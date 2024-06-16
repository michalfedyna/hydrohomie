import React from 'react';

type Component<T = any> = React.FC<T>;

type ComponentWithChildren<T = any> = React.FC<React.PropsWithChildren & T>;

type Screen<T = any> = React.FC<T>;

export type {Component, ComponentWithChildren, Screen};
