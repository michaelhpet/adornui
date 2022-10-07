import Palette from './Palette';
import Typography from './Typography';

export default interface Theme {
  palette: Palette;
  typography: {
    h1: Typography;
  };
}
