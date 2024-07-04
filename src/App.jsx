import { Grid } from '@mui/material'
import './App.css'
import Normaltable from './component/Normaltable'

function App() {

  return (
    <>
    <Grid container mt={4}>
      <Grid  item lg={8} xs={11} margin="auto">
    <Normaltable/>
      </Grid>

    </Grid>
    </>
  )
}

export default App
