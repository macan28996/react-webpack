/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from "yup";

export function getSchema(schema: any, show?: any) {
  const schemaShape: any = {};

  Object.keys(show ?? {}).forEach((key) => {
    if (show[key] === "required") {
      schemaShape[key] = schema[key].required();
    } else {
      schemaShape[key] = schema[key];
    }
  });

  return yup.object().shape(schemaShape);
}
