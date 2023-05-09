import Link from "next/link"
import { ReactNode } from "react"

interface RootSidebarProps {
  children: ReactNode
}

function RootSidebar({ children }: RootSidebarProps) {
  return (
    <aside className="bg-white flex flex-col gap-4 p-4 flex-1 h-screen">
      { children }
    </aside>
  )
}

interface NavigationELementProps {
  children: ReactNode;
  route: string;
}

function NavigationElement({ children, route }: NavigationELementProps) {
  return (
    <div className="cursor-pointer border-b-2 border-gray-200 hover:bg-gray-950 lg:w-60 hover:text-white transition-colors rounded">
      <Link href={route} className="flex gap-2 px-4 py-3 items-center" >
        { children }
      </Link>
    </div>
  )
}

interface BoxSidebarProps {
  children: ReactNode
}
function BoxSidebar({ children }: BoxSidebarProps) {
  return (
    <section className="h-full flex flex-col pt-20 gap-5">
      { children }
    </section>
  )
}

export const Sidebar = {
  Root: RootSidebar,
  Navigator: NavigationElement,
  Box: BoxSidebar
}