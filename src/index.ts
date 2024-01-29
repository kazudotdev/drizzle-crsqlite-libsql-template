import { sql } from "drizzle-orm";
import db from "./db";
import migration from "./migration";

async function main() {
  await migration();
  const query = sql`SELECT crsql_as_crr('users');`;
  return db.run(query);
}

main()
  .then((v) => console.log(v.toJSON()))
  .catch((err) => console.error({ error: err.toString() }));
