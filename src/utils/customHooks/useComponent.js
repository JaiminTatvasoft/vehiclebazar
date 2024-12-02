import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useComponent = () => {
  const [componentList, setComponentList] = useState({});
  const { components, loading, error } = useSelector(
    (state) => state.components
  );
  useEffect(() => {
    const val = components.reduce(
      (acc, item) => ({ ...acc, [item.clientComponentName]: item.enable }),
      {}
    );

    setComponentList(val);
  }, [components]);

  return componentList;
};
