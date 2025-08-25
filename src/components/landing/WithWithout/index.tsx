import { Component, WithWithoutProps } from "./component";

export function WithWithout(props: WithWithoutProps) {
  return <Component {...props} />;
}
