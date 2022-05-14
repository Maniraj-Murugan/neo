export interface SettingsMenuItem {
  key: number;
  linkTo: string;
  linkText: string;
  icon: React.FunctionComponent;
  component: React.ElementType;
  type: string;
}
