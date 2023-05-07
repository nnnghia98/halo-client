import isEmpty from "lodash/isEmpty";
import isEqual from "lodash/isEqual";

export const getSpecificSliders = (sliders, group) => {
  if (isEmpty(sliders)) {
    return [];
  }

  const result = sliders.filter((slider) => isEqual(slider.group, group));

  return result;
};
