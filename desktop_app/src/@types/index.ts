export interface Robot {
  title: string;
  date: string;
  description: {
    text: string;
    sensors: string[];
  };
  picture: any;
  ControllerComponent: any;
}
