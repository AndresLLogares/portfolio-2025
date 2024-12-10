export interface IPropsComponent {
  children: React.ReactNode;
}
export interface IPropsNavigatorProps {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  handleClick: Function;
  isIcon:boolean;
}

export interface IPropsSliderComponent {
  popped: boolean;
}

export interface IPropsNavBarProps {
  currentScroll: number | null;
}