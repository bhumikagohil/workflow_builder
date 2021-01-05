import  React  from 'react';
import { Card,CardContent , Chip ,Grid ,Typography  } from '@material-ui/core'

export default function DetailsTab() {

    return (
        <Grid container direction="column" justify="space-between" align="flex-start">
          <Grid item>
          <Chip
            label="Workflow Not Completed"
            color="secondary"
            variant="outlined"
          />
          </Grid>
          <Grid item>
          <Card elevation={0}>
          <CardContent>
            <Typography variant="h4" component="p">
                Queue
              </Typography>
              <Typography variant="h5" color="textSecondary" gutterBottom>
                0
              </Typography>
            </CardContent>
          </Card>
          <Card elevation={0}>
            <CardContent>
            <Typography variant="h4" component="p">
                Completed
              </Typography>
              <Typography variant="h5" color="textSecondary" gutterBottom>
                0
              </Typography>
              
            </CardContent>
          </Card>
          </Grid>
          </Grid>
    );
}
