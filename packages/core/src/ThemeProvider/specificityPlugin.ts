/* This is based on the unsupported jss-increase-specificity plugin at https://github.com/iamstarkov/jss-increase-specificity

// From the original plugin:
/**
 * use :not(#\20), :not(.\20) and :not(\20) instead of generating unlikely
 * appearing ids…
 * — twitter.com/subzey/status/829050478721896448
 * Rationale: \20 is a css escape for U+0020 Space, and neither classname,
 * nor id, nor tagname can contain a space
 * — twitter.com/subzey/status/829051085885153280
 */

import { Plugin } from "jss";
import { SpecificityPluginProps, JssStyleSheet } from "../types";

export function increaseSpecificity(options?: SpecificityPluginProps): Plugin {
  const selector = options?.selector ?? ":not(#\\20)";
  const repeat = options?.repeat ?? 3;
  const prefix = Array(repeat + 1).join(selector);

  // 'rule' is left untyped because the Rule import from jss is not functioning as expected
  function onProcessRule(rule, sheet: JssStyleSheet): Plugin["onProcessRule"] {
    const parent = rule.options.parent;
    if (
      sheet.options.increaseSpecificity === false ||
      rule.type !== "style" ||
      (parent && parent.type === "keyframes")
    )
      return;

    rule.selectorText += prefix;
  }
  return { onProcessRule };
}
