import DashboardLayout from "@/Layouts/DashboardLayout"
import { Head } from '@inertiajs/react'
import React, { useState } from 'react'
import { router } from '@inertiajs/react'

export default function ObjectView({ auth, objectData, csrfToken, objectType, viewType }) {
    const [file, setFile] = useState(null)
    let [editBtn, setEditBtn] = useState(0)

    // const [values, setValues] = useState({
    //     name: objectData.name,
    //     email: objectData.email,
    //     age: objectData.age,
    //     status: objectData.status,
    //     role: objectData.role,
    //     img: objectData.img,
    // })
    
    // function handleChange(e) {
    // const key = e.target.id;
    // const value = e.target.value
    // setValues(values => ({
    //     ...values,
    //     [key]: value,
    // }));
    // setInput(value);
    // }

    // function handleSubmit(e) {
    // e.preventDefault()
    // router.post('/users/update/'+objectData.id, objectData)
    // }

    const UserData = () => {
        return (
            <div className=" flex flex-col grow p-3 gap-1">
                <div className="flex">
                    <div className="ml-auto">
                        <button onClick={() => setEditBtn(1)} className="bg-green-300 pt-1 pb-1 ps-3 pe-3 rounded-2xl me-2 text-lg">Edit</button>
                        <a href="" className="bg-red-300 pt-1 pb-1 ps-3 pe-3 rounded-2xl text-lg">Delete</a>
                    </div>
                </div>
                <form method="POST" className="flex flex-col" action={"/users/update/"+objectData.id}>
                    <input type="hidden" name="_token" id="token" value={csrfToken}></input>
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" type="text" required className="rounded-2xl" placeholder={objectData.name} disabled={editBtn==0}/>
                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" type="text" required className="rounded-2xl" placeholder={objectData.email} disabled={editBtn==0}/>
                    <label htmlFor="age">Age</label>
                    <input name="age" id="age" type="number" required className="rounded-2xl" placeholder={objectData.age} disabled={editBtn==0} />
                    <label htmlFor="status">Status</label>
                    <select className="rounded-2xl" name="status" id="status" disabled={editBtn==0}>
                        <option selected value={objectData.status}>{objectData.status}</option>
                        <option value={objectData.status == "passive" ? "active" : "passive"}>{objectData.status == "passive" ? "active" : "passive"}</option>
                    </select>
                    <label htmlFor="role">Role</label>
                    <select className="rounded-2xl" name="role" id="role" disabled={editBtn==0}>
                        <option selected value={objectData.role}>{objectData.role}</option>
                        <option  value={objectData.role == "user" ? "admin" : "user"}>{objectData.role == "user" ? "admin" : "user"}</option>
                    </select>
                    <input type="text" name="img" id="img" hidden value={file ? URL.createObjectURL(file) : objectData.img}/>
                    <input type="hidden" name="_method" value="PUT"></input>
                    <button type="submit" className="bg-green-500 w-44 pt-2 pb-2 mt-3 text-lg rounded-lg text-white" style={editBtn == 0 ?{visibility:"hidden"}:{visibility:"visible"}}>Submit</button>
                </form>

                
                {/* //? Code for future form rework */}
                {/* <form onSubmit={handleSubmit} className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input onChange={handleChange} value={values.name} id="name" type="text" className="rounded-2xl" placeholder={objectData.name} disabled={editBtn==0}/>
                    <label htmlFor="email">Email</label>
                    <input onChange={handleChange} value={values.email} id="email" type="text" className="rounded-2xl" placeholder={objectData.email} disabled={editBtn==0}/>
                    <label htmlFor="age">Age</label>
                    <input onChange={handleChange} value={values.name} id="age" type="number" className="rounded-2xl" placeholder={objectData.age} disabled={editBtn==0} />
                    <label htmlFor="status">Status</label>
                    <select onChange={handleChange} className="rounded-2xl" name="status" id="status" disabled={editBtn==0}>
                        <option selected value={values.status}>{values.status}</option>
                        <option value={objectData.status == "passive" ? "active" : "passive"}>{objectData.status == "passive" ? "active" : "passive"}</option>
                    </select>
                    <label htmlFor="role">Role</label>
                    <select onChange={handleChange} className="rounded-2xl" name="role" id="role" disabled={editBtn==0}>
                        <option selected value={values.role}>{values.role}</option>
                        <option value={objectData.role == "user" ? "admin" : "user"}>{objectData.role == "user" ? "admin" : "user"}</option>
                    </select>
                    <input onChange={handleChange} type="text" id="img" hidden value={file ? URL.createObjectURL(file) : values.img}/>
                    <button type="submit" className="bg-green-500 w-44 pt-2 pb-2 mt-3 text-lg rounded-lg text-white" style={editBtn == 0 ?{visibility:"hidden"}:{visibility:"visible"}}>Submit</button>
                </form> */}

            </div>
        );
    }

    const ProductData = () => {
        return(
            <div className=" flex flex-col grow p-3 gap-1">
                <div className="flex">
                    <div className="ml-auto">
                        <button onClick={() => setEditBtn(1)} className="bg-green-300 pt-1 pb-1 ps-3 pe-3 rounded-2xl me-2 text-lg">Edit</button>
                        <a href="" className="bg-red-300 pt-1 pb-1 ps-3 pe-3 rounded-2xl text-lg">Delete</a>
                    </div>
                </div>
                <form method="POST" className="flex flex-col" action={"/products/update/"+objectData.id}>
                    <input type="hidden" name="_token" id="token" value={csrfToken}></input>
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" type="text" required className="rounded-2xl" placeholder={objectData.name} disabled={editBtn==0}/>
                    <label htmlFor="qty">Quantity</label>
                    <input name="qty" id="qty" type="number" required className="rounded-2xl" placeholder={objectData.qty} disabled={editBtn==0}/>
                    <label htmlFor="price">Price</label>
                    <input name="price" id="price" type="number" required className="rounded-2xl" placeholder={objectData.price} disabled={editBtn==0} />
                    <label htmlFor="weight">Weight</label>
                    <input name="weight" id="weight" type="number" required className="rounded-2xl" placeholder={objectData.weight} disabled={editBtn==0} />
                    <label htmlFor="availability">Availability</label>
                    <input name="availability" id="availability" type="text" required className="rounded-2xl" placeholder={objectData.availability} disabled={editBtn==0} />
                    <label htmlFor="category">Category</label>
                    <input name="category" id="category" type="text" required className="rounded-2xl" placeholder={objectData.category} disabled={editBtn==0} />
                    <input type="text" name="img" id="img" hidden value={file ? URL.createObjectURL(file) : objectData.img}/>
                    <input type="hidden" name="_method" value="PUT"></input>
                    <button type="submit" className="bg-green-500 w-44 pt-2 pb-2 mt-3 text-lg rounded-lg text-white" style={editBtn == 0 ?{visibility:"hidden"}:{visibility:"visible"}}>Submit</button>
                </form>
            </div>
        );
    }

    const UserDataNew = () => {
        return(
            <div className=" flex flex-col grow p-3 gap-1">
                <form method="POST" className="flex flex-col" action={"/users/store"}>
                    <input type="hidden" name="_token" id="token" value={csrfToken}></input>
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" type="text" required className="rounded-2xl"/>
                    <label htmlFor="email">Email</label>
                    <input name="email" id="email" type="text" required className="rounded-2xl"/>
                    <label htmlFor="age">Age</label>
                    <input name="age" id="age" type="number" required className="rounded-2xl" />
                    <label htmlFor="status">Status</label>
                    <select className="rounded-2xl" name="status" id="status">
                        <option selected value="active">active</option>
                        <option value="passive">passive</option>
                    </select>
                    <label htmlFor="role">Role</label>
                    <select className="rounded-2xl" name="role" id="role">
                        <option selected value="user">user</option>
                        <option  value="admin">admin</option>
                    </select>
                    {/* //TODO: Create proper flow for image processing, currently using default value */}
                    {/* <input type="text" name="img" id="img" hidden value={file ? URL.createObjectURL(file) : "\public\images\misc\no-image-icon.PNG"}/> */}
                    <input type="hidden" name="_method" value="POST"></input>
                    <button type="submit" className="bg-green-500 w-44 pt-2 pb-2 mt-3 text-lg rounded-lg text-white">Submit</button>
                </form>
            </div>
        );
    }

    // ! Picture processing still inprogress
    const ProductDataNew = () => {
        return(
            <div className=" flex flex-col grow p-3 gap-1">
                <form method="POST" className="flex flex-col" action={"/products/store"}>
                    <input type="hidden" name="_token" id="token" value={csrfToken}></input>
                    <label htmlFor="name">Name</label>
                    <input name="name" id="name" type="text" required className="rounded-2xl"/>
                    <label htmlFor="qty">Quantity</label>
                    <input name="qty" id="qty" type="number" required className="rounded-2xl"/>
                    <label htmlFor="price">Price</label>
                    <input name="price" id="price" type="number" required className="rounded-2xl" />
                    <label htmlFor="weight">Weight</label>
                    <input name="weight" id="weight" type="number" required className="rounded-2xl" />
                    <label htmlFor="availability">Availability</label>
                    <input name="availability" id="availability" type="text" required className="rounded-2xl" />
                    <label htmlFor="category">Category</label>
                    <input name="category" id="category" type="text" required className="rounded-2xl" />
                    {/* <input type="text" name="img" id="img" hidden value={file ? URL.createObjectURL(file) : objectData.img}/> */}
                    <input type="hidden" name="_method" value="POST"></input>
                    <button type="submit" className="bg-green-500 w-44 pt-2 pb-2 mt-3 text-lg rounded-lg text-white">Submit</button>
                </form>
            </div>
        );
    }

    const ImageShow = () => {
        return(
            <div className="flex flex-col items-center">
                    <img className="w-[300px] h-[300px] rounded-full m-5" src={file ? URL.createObjectURL(file) : objectData.img} alt="" />
                    <label className="bg-slate-600 text-white p-2 text-center rounded-lg w-32 cursor-pointer" htmlFor="file" style={editBtn == 0 ?{visibility:"hidden"}:{visibility:"visible"}}>Change Picture</label>
                    <input className="hidden" type="file" id='file' onChange={e=>setFile(e.target.files[0])}/>

                    {/* //? Code for future form rework */}
                    {/* <img className="w-[300px] h-[300px] rounded-full m-5" src={objectData.img} alt="" />*/}
                    {/* <label className="bg-slate-600 text-white p-2 text-center rounded-lg w-32 cursor-pointer" htmlFor="file" style={editBtn == 0 ?{visibility:"hidden"}:{visibility:"visible"}}>Change Picture</label> */}
                    {/* <input className="hidden" type="file" id='file' onChange={e=>{e.target.files.length > 0 ? setValues(values => ({...values, img: URL.createObjectURL(e.target.files[0])})):null}}/> */}

                    {/* //* Keeping this code because it look hilarious */}
                    {/* <input className="hidden" type="file" id='file' onChange={e=>{if(e.target.files && e.target.files.length > 0){setValues(values => ({...values,img: URL.createObjectURL(e.target.files[0])}))}}}/> */}
            </div>
        );
    }

    const ImageNew = () => {
        return(
            <div className="flex flex-col items-center">
                    <img className="w-[300px] h-[300px] rounded-full m-5" src={file ? URL.createObjectURL(file) : "\\images\\misc\\no-image-icon.PNG"} alt="" />
                    <label className="bg-slate-600 text-white p-2 text-center rounded-lg w-32 cursor-pointer" htmlFor="file">Change Picture</label>
                    <input className="hidden" type="file" id='file' onChange={e=>setFile(e.target.files[0])}/>
                    <h1>{file ? URL.createObjectURL(file) : "No photo inputted"}</h1>
            </div>
        );
    }



    return (
        <DashboardLayout user={auth.user}>
            <Head title={objectData == null ? "Add new " + objectType : objectData.name + " info's"} />
            <div className="flex m-5 shadow-relar">
                {viewType == "show" && <ImageShow/>}
                {viewType == "new" && <ImageNew/>}
                {viewType == "show" && objectType == "user" && <UserData/>}
                {viewType == "show" && objectType == "product" && <ProductData/>}
                {viewType == "new" && objectType == "user" && <UserDataNew/>}
                {viewType == "new" && objectType == "product" && <ProductDataNew/>}
            </div>
        </DashboardLayout>
    );
}