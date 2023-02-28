import { hasFramework } from "@netlify/framework-info";

hasFramework("gatsby").then((hasGatsby) => {
  console.log("Gatsby " + (hasGatsby ? "detected" : "not detected"));
});
