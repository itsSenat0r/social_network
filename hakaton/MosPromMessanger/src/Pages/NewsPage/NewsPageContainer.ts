import Box from '@mui/material/Box'
import { styled } from '@mui/material'
import achievementsButtonBackImg from '../../assets/images/achievementsButtonBackImage.png';

export const NewsPageContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
}))

export const GroupDescription = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundImage: `url(${achievementsButtonBackImg})`,
  backgroundSize: 'cover',
  backgroundColor: '#39283dff',
  borderRadius: '11px',
  paddingInline: '19px 6px',
  paddingBlock: '18px',
  marginInline: '12px 9px'
}))