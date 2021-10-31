import * as React from "react";
import { useQuery } from "react-query";

import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSnackbar } from "notistack";

import * as api from "../../api";
import * as types from "../../types";
import Bar from "../Bar";

interface MonitorListItemProps {
  monitor: types.Monitor;
}

export default function MonitorListItem({
  monitor,
}: MonitorListItemProps): React.ReactElement {
  const { enqueueSnackbar } = useSnackbar();
  const query = useQuery(`logs-${monitor.id}`, () => api.getLogs(monitor.id), {
    refetchInterval: 60 * 1000,
  });
  const values = query.data?.map((log) => log.httpStatusCode);

  async function handleDelete(): Promise<void> {
    await api.deleteMonitor(monitor.id);
    enqueueSnackbar(`Deleted monitor '${monitor.name}'`);
  }

  return (
    <React.Fragment>
      <ListItem>
        <ListItemText primary={monitor.name} />
        <ListItemSecondaryAction>
          <IconButton
            color="primary"
            aria-label="delete monitor"
            component="span"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>

      <ListItem divider>{values && <Bar data={values} />}</ListItem>
    </React.Fragment>
  );
}
