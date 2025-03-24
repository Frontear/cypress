import {
  NOW,
  column,
  defineDb,
  defineTable,
} from "astro:db";

const Report = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    reportCategory: column.text(),
    address: column.text(),
    createdAt: column.date({ default: NOW }),
  },
})

export default defineDb({
  tables: {
    Report,
  },
})
