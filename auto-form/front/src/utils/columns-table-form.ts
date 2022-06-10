import React, { useMemo } from "react";
// import { Column } from "react-table";

export default function useColumns(){
    const columns : Array<any> = useMemo(
        () => [
          {
            Header: 'Id',
            accessor: 'id_form', // accessor is the "key" in the data
          },
          {
            Header: 'Title',
            accessor: 'title',
          },
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