export interface NavLink {
  SectionTitle: string;
  Id: number;
  Links: linkData[];
}

interface linkData {
  Title: string;
  Description: string;
}
