import { ReactNode } from "react";

interface TableRootProps {
  children: ReactNode;
}
function TableRoot({children}: TableRootProps) {
  return (
    <table className="w-full h-full">
      { children }
    </table>
  )
}


interface TableTrProps {
  children: ReactNode;
}
function TableTr({children}: TableTrProps) {
  return (
    <tr className="flex justify-around">
      { children }
    </tr>
  )
}


interface TableThprops {
  description: string;
}
function TableTh({description}: TableThprops) {
  return (
    <th className="sm:w-1/2 w-32 flex justify-center py-3.5 text-md font-normal text-left rtl:text-right text-gray-100">
      { description }
    </th>
  )
}

interface TableTdprops {
  children: ReactNode;
}
function TableTd({children}: TableTdprops) {
  return (
    <td className="sm:w-1/2 w-32 border-b-[1px] border-gray-900 flex justify-center items-center py-4 text-sm text-gray-900 whitespace-nowrap">
      { children }
    </td>
  )
}

export const Table = {
  Root: TableRoot,
  Tr: TableTr,
  Th: TableTh,
  Td: TableTd
}
