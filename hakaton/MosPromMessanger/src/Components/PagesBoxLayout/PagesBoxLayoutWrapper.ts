import { styled } from "@mui/material/styles";
import siteBackgroundImage from '../../assets/images/background.png';


export const PagesBoxLayoutWrapper = styled('div', {
  name: 'PagesBoxLayoutWrapper'
})(() => ({
  display: 'flex',
  position: 'sticky',
  inset: 0,
  backgroundImage: `url(${siteBackgroundImage})`,
  backgroundSize: 'contain',
  backgroundAttachment: "fixed",
  minHeight: '100vh'
}));