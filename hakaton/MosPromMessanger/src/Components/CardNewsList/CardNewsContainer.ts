import { Box, List, styled } from '@mui/material'

export const CardNewsContainer = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  paddingTop: '40px',
  paddingInline: '30px',
  gap: '40px'
}))

export const CardNewsListContainer = styled(List)(() => ({
  padding: 0,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '50px'
}))