/* This is derived from the unsupported jss-increase-specificity plugin at https://github.com/iamstarkov/jss-increase-specificity */

/**
 * use :not(#\20), :not(.\20) and :not(\20) instead of generating unlikely
 * appearing ids…
 * — twitter.com/subzey/status/829050478721896448
 * Rationale: \20 is a css escape for U+0020 Space, and neither classname,
 * nor id, nor tagname can contain a space
 * — twitter.com/subzey/status/829051085885153280
 */

var selector = ":not(#\\20)";
var defaultOptions = { repeat: 3 };

export const increaseSpecificity = (userOptions) => {
  const options = Object.assign({}, defaultOptions, userOptions);
  const prefix = Array(options.repeat + 1).join(selector);

  const onProcessRule = (rule, sheet) => {
    const parent = rule.options.parent;

    if (
      sheet.options.increaseSpecificity === false ||
      rule.type !== "style" ||
      (parent && parent.type === "keyframes")
    )
      return;

    rule.selectorText = prefix + rule.selectorText;
  };

  return { onProcessRule: onProcessRule };
};
