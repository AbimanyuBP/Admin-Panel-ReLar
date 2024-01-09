import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';


const Datatable = ( {list, listType} ) => {
    
    const [message, setMessage] = useState('');

    const handleRowClick = (params) => {
      setMessage(params.row.id);
    };
    

    const userColumns = [
      { field: "id", headerName: "ID", headerAlign: "center", flex: 0.3, align: "center", },
      {
        field: "name",
        headerName: "Name",
        flex: 1,
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
        flex: 1,
      },
    
      {
        field: "age",
        headerName: "Age",
        headerAlign: "center",
        flex: 0.4,
        align: "center",
      },
      {
        field: "status",
        headerName: "Status",
        headerAlign: "center",
        flex: 0.5,
        align: "center",
        renderCell: (params) => {
          return (
            <div className={`cellWithStatus ${params.row.status}`}>
              {params.row.status}
            </div>
          );
        },
      },
      {
        field: "role",
        headerName: "Role",
        headerAlign: "center",
        flex: 0.4,
        align: "center",
      },
    ];

    const productColumns = [
      { field: "tracking_id", headerName: "Tracking ID", width: 70 },
      {
        field: "product",
        headerName: "Product",
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
        field: "user_id",
        headerName: "Buyer",
        width: 230,
      },
    
      {
        field: "order_at",
        headerName: "Time of order",
        width: 100,
      },
      {
        field: "qty",
        headerName: "Amount",
        width: 160,
      },
      {
        field: "payment",
        headerName: "Payment",
        width: 160,
      },
      {
        field: "status",
        headerName: "Status",
        width: 160,
      },
    ];

  return (
    <div className='datatable'>
        <div className="datatableTitle">
          {listType == "users" ? "Users" : "Products"} List
          <div className="buttons">
            <a href={"/"+listType+"/new"} className='link'>Add New</a>
            <a href={"/"+listType+"/view/"+message} className={message!==''?'viewButton':'buttonHide'}>View</a>
            <a href={"/"+listType+"/delete /"+message} className={message!==''?'deleteButton':'buttonHide'}>Delete</a>
          </div>
        </div>
        <DataGrid
        rows={list}
        columns={listType == "users" ? userColumns : productColumns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        onRowClick={handleRowClick}
      />
    </div>
  )
}

export default Datatable