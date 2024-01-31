import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import DangerButton from '@/Components/DangerButton';


const Datatable = ( {list, listType, csrfToken} ) => {
    const [deleteData, setDeleteData] = useState(false);
    const [message, setMessage] = useState('');

    const handleRowClick = (params) => {
      setMessage(params.row.id);
    };
    
    const setClickityClack = () => {
      setDeleteData(true);
    }

    const closeDatShiz = () => {
      setDeleteData(false);
      reset();
    }

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
      { field: "id", headerName: "ID", width: 70 },
      {
        field: "name",
        headerName: "Product Name",
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
        field: "qty",
        headerName: "Quantity",
        width: 100,
      },
      {
        field: "price",
        headerName: "Price",
        width: 100,
      },
      {
        field: "weight",
        headerName: "Weight",
        width: 100,
      },
      {
        field: "availability",
        headerName: "Availability",
        width: 150,
      },
      {
        field: "category",
        headerName: "Category",
        width: 100,
      },
    ];

  return (
    <div className='datatable'>
        <div className="datatableTitle">
          {listType == "users" ? "Users" : "Products"} List
          <div className="buttons">
            <a href={"/"+listType+"/new"} className='link'>Add New</a>
            <a href={"/"+listType+"/view/"+message} className={message!==''?'viewButton':'buttonHide'}>View</a>
            <a href="#" className={message!==''?'deleteButton':'buttonHide'} onClick={setClickityClack}>Delete</a>
          </div>
        </div>
        <Modal show={deleteData} onClose={closeDatShiz}>
        <form method="POST" action={'/'+listType+'/delete/'+message} className="p-6">
            <h2 className="text-lg font-medium text-gray-900">
                Are you sure you want to delete this data?
            </h2>

            <div className="mt-6 flex justify-end">
                <SecondaryButton onClick={closeDatShiz}>Cancel</SecondaryButton>
                <input type="hidden" name="_token" id="token" value={csrfToken}></input>
                <input type="hidden" name="_method" value="DELETE"></input>
                <DangerButton className="ms-3">
                  <button type="submit">Delete</button>
                </DangerButton>
            </div>
        </form>
        </Modal>
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