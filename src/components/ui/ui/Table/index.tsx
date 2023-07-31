import React from "react";
import { HeaderInterface, TableInterface } from "./interface";
import { Loading } from "..";

const Table = <T,>({
  headers,
  no,
  action,
  data,
  actionHeadText,
  increment,
  loading,
}: TableInterface<T>): React.ReactNode => {
  if (loading && loading) {
    return (
      <div className="h-48">
        <Loading />
      </div>
    );
  }
  if (!data.length) {
    return (
      <div className="h-48 flex items-center justify-center text-lg font-bold">
        <span>Tidak ada data</span>
      </div>
    );
  }
  return (
    <div className="overflow-auto">
      <table className="w-full whitespace-nowrap">
        <thead className="bg-table h-10  font-bold text-textSecondary">
          <tr>
            {no && <td className="md:pl-10 px-5">No</td>}
            {headers.map((header: HeaderInterface<T>, i) => (
              <td key={i} className={`${String(header.className)} pl-8`}>
                {header.name}
              </td>
            ))}
            {actionHeadText && <td>{actionHeadText}</td>}
          </tr>
        </thead>
        <tbody>
          {data.map((item: T, i: number) => (
            <tr
              key={i}
              className="border-b-2 h-14 border-tableBorder font-medium text-textSecondary "
            >
              {no && (
                <td className="md:pl-11 px-6">
                  {Number(i) + Number(increment)}
                </td>
              )}
              {headers &&
                headers?.map((header: HeaderInterface<T>, hi) => {
                  return (
                    <td className={`${String(header.className)} pl-8`} key={hi}>
                      {header.key
                        ? String(item[header.key as keyof T] || "-")
                        : header.custom
                        ? header?.custom(item)
                        : "-"}
                    </td>
                  );
                })}
              {action && (
                <td className="flex justify-end items-center h-14  pr-4">
                  {action(item)}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.defaultProps = {
  headers: [],
  no: true,
  actionHeadText: " ",
  action: null,
  increment: 1,
  loading: false,
};
export default Table;
