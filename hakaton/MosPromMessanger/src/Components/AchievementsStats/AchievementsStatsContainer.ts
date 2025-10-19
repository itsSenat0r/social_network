import styled from "@emotion/styled"
import { Box } from "@mui/material"

export const AchievementsStatsContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%'
}))

export const StatsRowContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 156px 1fr',
  alignItems: 'center',
  gap: '9px',
  width: '100%',
}))