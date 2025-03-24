import {
  Report,
  db,
} from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Report).values([
    {
      id: 1,
      category: "Traffic",
      address: "350 Victoria Street, Toronto ON M5B 2K3",
      resolved: true,
    },
  ]);
}
