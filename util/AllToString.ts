function convertAllValuesToString(obj: any): any {
  if (typeof obj !== "object") return String(obj);

  for (let key in obj) {
    if (typeof obj[key] === "object") {
      obj[key] = convertAllValuesToString(obj[key]);
    } else {
      obj[key] = String(obj[key]);
    }
  }

  return obj;
}
