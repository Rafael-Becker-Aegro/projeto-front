import { Production } from './production';
export interface Plot {
  name: string;
  id: string;
  area: number;
  production: Production[];
}
