import * as React from "react";
import { useQuery } from "react-query";

import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import * as api from "api";
import CreateMonitor from "components/CreateMonitor";
import MonitorListItem from "components/Monitor";

const useStyles = makeStyles((theme) => ({
  app: {
    padding: theme.spacing(4),
  },
  textfield: {
    paddingBottom: theme.spacing(1),
  },
}));

export default function App(): React.ReactElement {
  const classes = useStyles();
  const query = useQuery(`monitor`, api.getMonitors);

  return (
    <div className={classes.app}>
      <CssBaseline />
      <Typography gutterBottom variant="h4">
        Admin page
      </Typography>
      <Typography variant="h6">Your monitors</Typography>
      <Typography color="textSecondary" gutterBottom>
        These are the monitors you have configured
      </Typography>

      <List dense>
        {query.data?.map((monitor) => (
          <MonitorListItem key={monitor.id} monitor={monitor} />
        ))}
        {query.data?.length === 0 && <Typography>No monitors found</Typography>}
      </List>
      <br />
      <CreateMonitor />
    </div>
  );
}
