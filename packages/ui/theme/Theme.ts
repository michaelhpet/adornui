import Palette from './Palette';
import Typography from './Typography';

export default interface Theme {
  palette: Palette;
  typography: {
    h1: Typography;
    h2: Typography;
    h3: Typography;
    h4: Typography;
    h5: Typography;
    h6: Typography;
  };
}
