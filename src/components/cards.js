import React from "react";
import { Grid  , Card, CardContent, Typography} from "@mui/material";
import CountUp from 'react-countup';
import cx from 'classnames'
import styles from './cards.module.css'


const GridCards = () => {
  return (
    
      <Grid container spacing={3} className={styles.mainCard}>
        <Grid  />
        <Card className={cx(styles.card,styles.infected)}>
        <CardContent> 
            <Typography  variant="h2" color="textSecondary"   >Active</Typography >
            <Typography variant="h5"  ><CountUp start= {0} end="567848758" duration= {3} separator=','/></Typography>
            <Typography color="textSecondary">{new Date().toDateString()}</Typography>
            <h4>No. of Active cases of Covid 19 </h4>
        </CardContent>
        </Card>

        <Card className={cx(styles.card,styles.recovered)}>
        <CardContent> 
            <Typography  variant="h2" color="textSecondary"   >Infected</Typography >
            <Typography variant="h5"  ><CountUp start= {0} end="567848758" duration= {3} separator=','/></Typography>
            <Typography color="textSecondary">{new Date().toDateString()}</Typography>
            <h4>No. of Active cases of Covid 19 </h4>
        </CardContent>
        </Card>

        <Card className={cx(styles.card,styles.death)} >
        <CardContent> 
            <Typography  variant="h2" color="textSecondary"   >Death</Typography >
            <Typography variant="h5"  ><CountUp start= {0} end="567848758" duration= {3} separator=','/></Typography>
            <Typography color="textSecondary">{new Date().toDateString()}</Typography>
            <h4>No. of Active cases of Covid 19</h4>
        </CardContent>
        </Card>
        
        
      </Grid>

    
  );
};

export default GridCards;
