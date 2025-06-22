import { JSX } from 'solid-js';

export interface ButtonProps {
  color?: 'blue' | 'green' | 'red' | 'yellow';
  onClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>;
  class?: string;
  children?: any;
}

export declare function Button(props: ButtonProps): JSX.Element;
