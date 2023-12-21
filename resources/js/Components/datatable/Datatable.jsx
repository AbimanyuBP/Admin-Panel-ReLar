import './datatable.scss'
// import { DataGrid } from '@mui/x-data-grid';
// import { userColumns, userRows } from '../../datatablesource';


const Datatable = () => {
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell : () => {
                return(
                    <div className="cellAction">
                        <Link to="/users/test" style={{textDecoration: "None"}}>
                          <div className="viewButton">View</div>
                        </Link>
                        <div className="deleteButton">Delete</div>
                    </div>
                )
            }
        }
    ]
  return (
    // <div className='datatable'>
    //     <div className="datatableTitle">
    //       Users List
    //       <Link to="/users/new" style={{textDecoration: "None"}} className="  link">
    //         Add new
    //       </Link>
    //     </div>
    //     <DataGrid
    //     rows={userRows}
    //     columns={userColumns.concat(actionColumn)}
    //     initialState={{
    //       pagination: {
    //         paginationModel: { page: 0, pageSize: 5 },
    //       },
    //     }}
    //     pageSizeOptions={[5, 10]}
    //     checkboxSelection
    //   />
    // </div>
    <h2>Sadge :(</h2>
  )
}

export default Datatable