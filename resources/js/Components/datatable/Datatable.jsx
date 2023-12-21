import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';


const Datatable = ( {list} ) => {
    const userColumns = [
      { field: "id", headerName: "ID", width: 70 },
      {
        field: "name",
        headerName: "Name",
        width: 230,
        renderCell: (params) => {
          return (
            <div className="cellWithImg">
              <img className="cellImg" src={params.row.img} alt="avatar" />
              {params.row.name}
            </div>
          );
        },
      },
      {
        field: "email",
        headerName: "Email",
        width: 230,
      },
    
      {
        field: "age",
        headerName: "Age",
        width: 100,
      },
      {
        field: "status",
        headerName: "Status",
        width: 160,
        renderCell: (params) => {
          return (
            <div className={`cellWithStatus ${params.row.status}`}>
              {params.row.status}
            </div>
          );
        },
      },
    ];

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell : () => {
                return(
                    <div className="cellAction">
                        <a href="id">
                          <div className="viewButton">View</div>
                        </a>
                        <a href="">
                          <div className="deleteButton">Delete</div>
                        </a>
                    </div>
                )
            }
        }
    ]
  return (
    <div className='datatable'>
        <div className="datatableTitle">
          Users List
          <a href="" className='link'>Add New</a>
        </div>
        <DataGrid
        rows={list}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    // <h2>Sadge :p {list[2].name}</h2>
  )
}

export default Datatable