function getType(value) {
  if (value === null) {
    return "null";
  }
  if (Array.isArray(value)) {
    return "array";
  }
  return typeof value;
}

function jsonStringify(value) {
  let type = getType(value);
  switch (type) {
    case "array": {
      let result = value.map((item) => jsonStringify(item)).join(",");
      return `[${result}]`;
    }
    case "object": {
      let result = Object.entries(value)
        .map(([key, value]) => `"${key}":${jsonStringify(value)}`)
        .join(",");
      return `{${result}}`;
    }
    case "string": {
      return `"${value}"`;
    }
    default: {
      return String(value);
    }
  }
}

console.log(
  jsonStringify({ name: "Junaid", hobbies: ["travelling", "riding", "chess"] })
);
