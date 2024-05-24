import { migrate } from "drizzle-orm/better-sqlite3/migrator";

import { db } from "../src/db";
// This will run migrations on the database, skipping the ones already applied
await migrate(db, { migrationsFolder: "./drizzle" });
