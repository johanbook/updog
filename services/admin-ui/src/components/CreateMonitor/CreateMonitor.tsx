import * as React from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useSnackbar } from "notistack";

import * as api from "api";

const useStyles = makeStyles((theme) => ({
  app: {
    padding: theme.spacing(4),
  },
  textfield: {
    paddingBottom: theme.spacing(1),
  },
}));

function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export default function CreateMonitor(): React.ReactElement {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  const [name, setName] = React.useState("");
  const [url, setUrl] = React.useState("");

  async function handleClick(event: React.SyntheticEvent): Promise<void> {
    event.preventDefault();
    await api.createMonitor({ name, url });
    enqueueSnackbar(`Created monitor '${name}'`);
    setName("");
    setUrl("");
  }

  const valid = name && isValidURL(url);

  return (
    <form noValidate>
      <Typography variant="h6">Create monitor</Typography>
      <Typography color="textSecondary" gutterBottom>
        Create a new monitor
      </Typography>
      <TextField
        className={classes.textfield}
        label="Name"
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
        variant="outlined"
        value={name}
      />
      <br />
      <TextField
        className={classes.textfield}
        label="URL"
        onChange={(event) => setUrl(event.target.value)}
        placeholder="URL"
        variant="outlined"
        value={url}
      />
      <br />
      <Button
        color="primary"
        disabled={!valid}
        onClick={handleClick}
        type="submit"
        variant="contained"
      >
        Create
      </Button>
    </form>
  );
}
