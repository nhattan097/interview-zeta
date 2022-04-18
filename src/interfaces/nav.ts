import { IconType } from "react-icons";

export interface INavLink {
  name: string;
  url: string;
  icon: IconType;
  child?: INavLinkChild[];
}

export interface INavLinkChild extends INavLink {}
