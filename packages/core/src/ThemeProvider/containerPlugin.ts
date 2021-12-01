/*
 *  Adds container params to all selectors
 *  Example: 'h1' becomes 'body #PickUpUI h1'
 */

import { Plugin } from "jss";

export function containUI(withReset: boolean, container?: string): Plugin {
  const prefix = container ? container : "body #PickUpUI ";

  // 'rule' is left untyped because the Rule import from jss is not recognizing all child properties
  function onProcessRule(rule): Plugin["onProcessRule"] {
    const parent = rule.options.parent;
    if (
      rule.type !== "style" ||
      rule.selectorText.includes(prefix) ||
      (parent && parent.type === "keyframes") ||
      (withReset && parent && parent.key === "@global")
    )
      return;

    if (rule.selectorText.includes(",")) {
      const allSelectors = rule.selectorText.split(",");
      const transformedSelectors = allSelectors.map((selector: string) =>
        selector.includes(prefix) ? selector : prefix + selector
      );
      rule.selectorText = transformedSelectors.join(",");
    } else {
      rule.selectorText = prefix + rule.selectorText;
    }
  }
  return { onProcessRule };
}
