import { ReactNode, ReactElement, isValidElement, Children } from "react";

export function getChildrenByType<T>(
  children: ReactNode,
  targetType: React.ComponentType<T>
): ReactElement<T> | undefined {
  const childrenArray = Children.toArray(children);

  const matchingChild = childrenArray.find((child) => {
    if (!isValidElement(child)) {
      return false;
    }

    return child.type === targetType;
  });

  if (!matchingChild) {
    return undefined;
  }

  return matchingChild as ReactElement<T>;
}
