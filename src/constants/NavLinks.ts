import { Home, Search, Ship } from "lucide-react"
export const items = [
    {
      title: "Home",
      url: "/dashboard",
      icon: Home,
    },
    {
      title: "Ships",
      url: "/dashboard/ships",
      icon: Ship,
    }
  ]

  export type items = typeof items;