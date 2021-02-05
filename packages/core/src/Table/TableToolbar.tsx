import React from "react";
import classNames from "classnames";
import {
	makeStyles,
	createStyles,
	lighten,
	Theme as MUITheme,
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";

import { EnhancedTableToolbarProps } from "../types";

const useToolbarStyles = makeStyles((theme: MUITheme) =>
	createStyles({
		root: {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(1),
		},
		highlight:
			theme.palette.type === "light"
				? {
						color: theme.palette.primary.main,
						backgroundColor: lighten(theme.palette.primary.light, 0.85),
				  }
				: {
						color: theme.palette.text.primary,
						backgroundColor: theme.palette.primary.dark,
				  },
		title: {
			flex: "1 1 100%",
		},
	})
);

const EnhancedTableToolbar: React.FC<EnhancedTableToolbarProps> = ({
	numSelected,
	tableTitle,
}) => {
	const classes = useToolbarStyles();

	return (
		<Toolbar
			className={classNames(classes.root, {
				[classes.highlight]: numSelected > 0,
			})}
		>
			{numSelected > 0 ? (
				<Typography
					className={classes.title}
					color="inherit"
					variant="subtitle1"
					component="div"
				>
					{numSelected} selected
				</Typography>
			) : (
				<Typography
					className={classes.title}
					variant="h6"
					id="tableTitle"
					component="div"
				>
					{tableTitle}
				</Typography>
			)}
			{numSelected > 0 ? (
				<Tooltip title="Delete">
					<IconButton aria-label="delete">
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			) : null}
		</Toolbar>
	);
};

export default EnhancedTableToolbar;
