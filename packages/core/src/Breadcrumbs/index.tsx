import React from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import { DefaultTheme, BreadcrumbsProps } from "../types";
import classNames from "classnames";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
  root: {
    fontSize: 11,
    lineHeight: `${theme.spacing.base * 5}px`,
    color: theme.colors.black,
  },
  uList: {
    display: "inline-flex",
    listStyle: "none",
    flexWrap: "flex",
    padding: 0,
    margin: 0,
  },
  nameList: {
    display: "inline-flex",
    flexWrap: "no wrap",
  },
  pathList: {
    textAlign: "left",
  },
  link: {
    color: theme.colors.black,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: theme.colors.primary.base,
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
  className,
}: BreadcrumbsProps) => {
  const classes = useStyles();
  const mappedCrumbs = crumbs.map(({ path, name }, index: number) => {
    if (index === crumbs.length - 1) {
      return (
        <li key={name} className={classes.pathList}>
          {name}
        </li>
      );
    }

    return (
      <li key={name} className={classes.nameList}>
        <Link className={classes.link} to={path}>
          {name}
        </Link>
        <span className={classes.separator}>/</span>
      </li>
    );
  });

  return (
    <nav
      className={classNames({
        [className]: className,
        [classes.root]: true,
      })}
    >
      <ul className={classes.uList} aria-label="breadcrumbs">
        {mappedCrumbs}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
