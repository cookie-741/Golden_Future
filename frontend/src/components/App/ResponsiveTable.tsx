import React from 'react';

interface ResponsiveTableProps {
  headers: React.ReactNode[];
  data: React.ReactNode[][];
}

const ResponsiveTable: React.FC<ResponsiveTableProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className=" border border-gray-300 text-sm text-left">
        <thead className="bg-[#214351] text-white">
          <tr className='h-20 text-center'>
            {headers.map((header, index) => (
              <th key={index} className="px-3 py-2 border border-gray-300 whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-50 ">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-3 py-2 border border-gray-300 whitespace-nowrap ">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;
