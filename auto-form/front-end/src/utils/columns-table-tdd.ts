import React, { useMemo } from "react";
// import { Column } from "react-table";

export default function useColumns(){
    const columns : Array<any> = useMemo(
        () => [
          {
            Header: 'Id',
            accessor: 'id_tdd', // accessor is the "key" in the data
          },
          {
            Header: 'Type',
            accessor: 'client',
          },
          {
            Header:'trl',
            accessor:'trl'
          },
          {
            Header:'final score',
            accessor:'final_score'
          },
          {
            Header:'startup',
            accessor:'startup'
          }
          // {
          //   Header: 'Creation Date',
          //   accessor: '', // accessor is the "key" in the data
          // },
          // {
          //   Header:'Action',
          //   accessor:'',
          // }
        ],
        []
    )
    
  return columns;
}