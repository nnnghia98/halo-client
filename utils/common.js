import get from "lodash/get";
import find from "lodash/find";
import getConfig from "next/config";

const config = getConfig();
const settings = get(config, "publicRuntimeConfig.settings", []);

export const getSetting = (name) => {
  const result = find(settings, (setting) => setting.name === name);

  return get(result, "value", "");
};
