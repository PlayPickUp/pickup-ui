/* This is based on the unsupported jss-increase-specificity plugin at https://github.com/iamstarkov/jss-increase-specificity
JSS's original createGenerateId has been adapted here to use logic from that plugin. /*

// From the original plugin:
/**
 * use :not(#\20), :not(.\20) and :not(\20) instead of generating unlikely
 * appearing ids…
 * — twitter.com/subzey/status/829050478721896448
 * Rationale: \20 is a css escape for U+0020 Space, and neither classname,
 * nor id, nor tagname can contain a space
 * — twitter.com/subzey/status/829051085885153280
 */

import { Rule, StyleSheet, CreateGenerateId } from "jss";

type JssSheet = StyleSheet & {
  options: {
    jss: {
      id: number;
    };
  };
};

var selector = ":not(#\\20)";
const repeat = 3;
const maxRules = 1e10;

export const increaseSpecificity: CreateGenerateId = (options = {}) => {
  let ruleCounter = 0;
  console.log({ options });
  return (rule: Rule, sheet?: JssSheet): string => {
    ruleCounter += 1;
    if (ruleCounter > maxRules) {
      console.warn(
        false,
        `[JSS] You might have a memory leak. Rule counter is at ${ruleCounter}.`
      );
    }
    const jssId = String(sheet.options.jss.id) ?? "";
    const prefix = sheet.options.classNamePrefix ?? "";

    let suffix = selector;
    for (let i = 1; i < repeat; i++) {
      suffix += selector;
    }

    return `${prefix + rule.key}${
      jssId ? `-${jssId}` : ""
    }-${ruleCounter}${suffix}`;
  };
};
