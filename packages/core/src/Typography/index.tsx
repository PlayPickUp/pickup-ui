import React from "react";
import { createUseStyles } from "react-jss";
import classNames from "classnames";
import {
	DefaultTheme,
	TypographyElementMap,
	TypographyProps,
} from "../../../../types";

const useStyles = createUseStyles((theme: DefaultTheme) => ({
	root: {
		position: "relative",
	},
	title: {
		...theme.typography.fontStyles.title,
	},
	heading2: {
		...theme.typography.fontStyles.heading2,
	},
	body: {
		...theme.typography.fontStyles.body,
	},
}));

const elementMap: TypographyElementMap = {
	title: "h1",
	body: "p",
	heading2: "h2",
	heading3: "h3",
	heading4: "h4",
	heading5: "h5",
	heading6: "h6",
	span: "span",
};

const Typography: React.FC<
	TypographyProps & React.HTMLAttributes<HTMLOrSVGElement>
> = ({ children, className, style, variant = "p", ...rest }) => {
	const classes = useStyles();
	const Element: keyof JSX.IntrinsicElements = elementMap[variant] || "span";
	return (
		<Element
			className={classNames({
				[classes.root]: true,
				[classes.title]: variant === "title",
				[classes.body]: variant === "body",
				[classes.heading2]: variant === "heading2",
				className,
			})}
			style={style}
			{...rest}
		>
			{children}
		</Element>
	);
};

export default Typography;
