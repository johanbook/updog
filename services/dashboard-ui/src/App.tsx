import * as React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import * as api from "./api";
import * as types from "./types";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: "rgb(20,20,40)",
      color: "white",
    },
  },
  app: {
    padding: theme.spacing(4),
  },
}));

interface MonitorListItemProps {
  monitor: types.Monitor;
}

function MonitorListItem({
  monitor,
}: MonitorListItemProps): React.ReactElement {
  return <li>{monitor.name}</li>;
}

export default function App(): React.ReactElement {
  const classes = useStyles();
  const [data, setData] = React.useState<types.Monitor[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      setData(await api.getMonitors());
    }
    fetchData();
  }, [setData]);

  return (
    <div className={classes.app}>
      <CssBaseline />
      <Typography gutterBottom variant="h4">
        Updog dashboard
      </Typography>
      <Typography variant="h6">Monitors</Typography>
      {data.map((monitor) => (
        <MonitorListItem monitor={monitor} />
      ))}
      {data.length === 0 && <Typography>No monitors found</Typography>}
    </div>
  );
}
