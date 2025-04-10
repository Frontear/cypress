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
    resolved: column.boolean({ default: false }),
    image: column.text({ optional: true }),
  },
})

export default defineDb({
  tables: {
    Report,
  },
})
