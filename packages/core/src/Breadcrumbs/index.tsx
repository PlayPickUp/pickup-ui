import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { DefaultTheme, BreadcrumbsProps } from "../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    fontSize: 11,
    lineHeight: `${theme.spacing.base * 5}px`,
    color: theme.colors.black,
  },
  list: {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  link: {
    color: theme.colors.black,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  separator: {
    display: "inline-block",
    marginLeft: theme.spacing.base * 2,
    marginRight: theme.spacing.base * 2,
  },
}));

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  crumbs,
}: BreadcrumbsProps) => {
  const classes = useStyles();
  const mappedCrumbs = crumbs.map(({ path, name }, index: number) => {
    if (index === crumbs.length - 1) {
      return <li key={name}>{name}</li>;
    }

    return (
      <li key={name}>
        <Link className={classes.link} to={path}>
          {name}
        </Link>
        <span className={classes.separator}>/</span>
      </li>
    );
  });

  return (
    <nav className={classes.root}>
      <ul className={classes.list}>{mappedCrumbs}</ul>
    </nav>
  );
};

export default Breadcrumbs;
