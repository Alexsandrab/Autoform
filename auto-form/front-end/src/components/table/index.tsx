import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { usePagination, useRowSelect, useTable } from 'react-table'
import { ContainerTable, Th, Thead, Tr } from "./style";
import { Button } from "react-bootstrap";
import { IndeterminateCheckbox } from "../inputs/checkbox";

type Tableprops = {
    columns: any;
    data: any;
    setListId?: any;
}

const Table = ({ columns, data, setListId }: Tableprops) => {

    const {
        getTableProps,
        getTableBodyProps,
        rows,
        prepareRow,
        headerGroups,
        page,
        canPreviousPage,
        canNextPage,
        nextPage,
        previousPage,
        toggleAllRowsSelected,
        toggleRowSelected,
        selectedFlatRows,
        state: { pageIndex, pageSize }
    } = useTable({
        columns,
        data,
    }, usePagination, useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => {
                return [
                    // Let's make a column for selection
                    {
                        id: "selection",
                        Cell: ({ row }) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} onClick={() => {
                            // selectedFlatRows.map((item)=>{
                            // selectedFlatRows.map((item) => {
                                setListId(selectedFlatRows)
                            // })

                            // })
                        }} />,

                    },
                    ...columns
                ]
            });
        })

    useEffect(()=>{
        selectedFlatRows.map((item)=>{
            console.log(item.original)
        })

        if(setListId){
            setListId(selectedFlatRows)
        }

        console.log(selectedFlatRows)
    },[selectedFlatRows])


    return (
        <div style={{ display: 'block', width: '100%' }}>
            <div className="crud shadow-lg p-1 bg-body rounded">
                <div className="row ">
                    <div className="col-sm-3 text-gred">
                        <div className="search">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search Dimension" aria-label="Search" />
                            </form>
                        </div>
                    </div>
                </div>
                <div >
                    {/* <div className="table-responsive" > */}
                    <ContainerTable {...getTableProps()} className="table table-striped table-hover">
                        <thead>
                            {headerGroups.map(headerGroup => (
                                <tr {...headerGroup.getHeaderGroupProps()}>
                                    {headerGroup.headers.map(column => (
                                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            {page.map(row => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map(cell => {
                                            return (
                                                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                                            );
                                        })}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </ContainerTable>
                    <div>

                        {
                            canPreviousPage && (
                                <Button onClick={() => previousPage()} disabled={!canPreviousPage}>previous</Button>

                            )
                        }
                        {
                            canNextPage && (
                                <Button onClick={() => nextPage()}>next</Button>

                            )
                        }


                    </div>
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default Table