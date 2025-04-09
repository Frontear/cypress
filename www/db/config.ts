import {
  NOW,
  column,
  defineDb,
  defineTable,
} from "astro:db";

const Report = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    category: column.text(),
    address: column.text(),
    createdAt: column.date({ default: NOW }),
    image: column.text({ optional: true }),
    resolved: column.boolean({ default: false }),
  },
})

export default defineDb({
  tables: {
    Report,
  },
})
