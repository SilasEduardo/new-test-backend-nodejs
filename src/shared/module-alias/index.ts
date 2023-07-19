import moduleAlias from "module-alias";
import * as path from "path";

const files = path.resolve(__dirname, "../..");

moduleAlias.addAliases({
  "@modules": path.join(files, "modules"),
  "@shared": path.join(files, "shared"),
  "@test": path.join(files, "test"),
});
