import { ReactNode } from "react";
import { DefaultTheme } from "../../../../types";
declare const GlobalsAndReset: import("react").ComponentType<
	Pick<
		{
			children: ReactNode | any;
		},
		"children"
	> &
		Partial<
			import("react-jss").WithStylesProps<
				(
					theme: DefaultTheme
				) => {
					"@global": {
						"html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video": {
							margin: string;
							padding: string;
							border: string;
							fontSize: string;
							font: string;
							verticalAlign: string;
						};
						"article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section": {
							display: string;
						};
						body: {
							lineHeight: string;
						};
						"ol, ul": {
							listStyle: string;
						};
						"blockquote, q": {
							quotes: string;
						};
						"blockquote:before, blockquote:after, q:before, q:after": {
							content: string;
						};
						table: {
							borderCollapse: string;
							borderSpacing: string;
						};
						"html, body": {
							width: string;
							minHeight: string;
							fontFamily: string;
							fontSize: import("react").ReactText;
							fontWeight: number;
							color: string;
							backgroundColor: string;
							"-webkit-font-smoothing": string;
							"-moz-osx-font-smoothing": string;
							margin: string;
							padding: string;
						};
						html: {
							boxSizing: string;
							background: string;
						};
						"*, *:before, *:after": {
							boxSizing: string;
						};
						button: {
							display: string;
							"-webkit-appearance": string;
							"-moz-appearance": string;
							userSelect: string;
							textDecoration: string;
							fontFamily: string;
							fontSize: string;
							color: string;
							cursor: string;
							border: string;
							backgroundColor: string;
							borderColor: string;
							padding: string;
							margin: string;
							"&:disabled": {
								cursor: string;
							};
						};
					};
				}
			>
		> & {
			innerRef?:
				| import("react").RefObject<any>
				| ((instance: any) => void)
				| undefined;
		}
>;
export default GlobalsAndReset;
//# sourceMappingURL=GlobalsAndReset.d.ts.map
