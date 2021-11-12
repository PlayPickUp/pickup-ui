/* 
*  Adds container params to all selectors
*  Example: 'h1' becomes 'body > .PickUpUI h1'
*/

import { Plugin } from "jss";

export function containUI(container?: string ): Plugin {
  const prefix = container ? container : "body > #PickUpUI";

  // 'rule' is left untyped because the Rule import from jss is not recognizing all child properties
  function onProcessRule(rule): Plugin["onProcessRule"] {
    const parent = rule.options.parent;
    if (
      rule.type !== "style" ||
      (parent && parent.type === "keyframes")
    )
      return;

    rule.selectorText = prefix + rule.selectorText;
  }
  return { onProcessRule };
}
