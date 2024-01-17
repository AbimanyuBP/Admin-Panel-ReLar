import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from '@inertiajs/react';
import React, { useState } from 'react'

export default function ObjectView({ auth, objectData }) {
    const [file, setFile] = useState("")
    let [editBtn, setEditBtn] = useState(0)

    const UserData = () => {
        return (
        <div className=" flex flex-col grow p-3 gap-1">
            <div className="flex">
                <div className="ml-auto">
                    <button onClick={() => setEditBtn(1)} className="bg-green-300 pt-1 pb-1 ps-3 pe-3 rounded-2xl me-2 text-lg">Edit</button>
                    <a href="" className="bg-red-300 pt-1 pb-1 ps-3 pe-3 rounded-2xl text-lg">Delete</a>
                </div>
            </div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" className="rounded-2xl" placeholder={objectData.name} disabled={editBtn==0}/>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" className="rounded-2xl" placeholder={objectData.email} disabled={editBtn==0}/>
            <label htmlFor="age">Age</label>
            <input id="age" type="number" className="rounded-2xl" placeholder={objectData.age} disabled={editBtn==0} />
            <label htmlFor="status">Status</label>
            <select className="rounded-2xl" name="status" id="status" disabled={editBtn==0}>
                <option selected value={objectData.status}>{objectData.status}</option>
                <option value={objectData.status == "passive" ? "active" : "passive"}>{objectData.status == "passive" ? "active" : "passive"}</option>
            </select>
            <label htmlFor="role">Role</label>
            <select className="rounded-2xl" name="role" id="role" disabled={editBtn==0}>
                <option selected value={objectData.role}>{objectData.role}</option>
                <option value={objectData.role == "user" ? "admin" : "user"}>{objectData.role == "user" ? "admin" : "user"}</option>
            </select>
            <input type="text" hidden value={file ? URL.createObjectURL(file) : objectData.img}/>
            <input type="hidden" name="_method" value="PUT"/>
            <button type="submit" className="bg-green-500 w-44 pt-2 pb-2 mt-3 text-lg rounded-lg text-white" style={editBtn == 0 ?{visibility:"hidden"}:{visibility:"visible"}}>Submit</button>
        </div>
        );
}

    return (
        <DashboardLayout user={auth.user}>
            <Head title={objectData.name + " info's"} />
            <div className="flex m-5 shadow-relar">
                <div className="flex flex-col items-center">
                    <img className="w-[300px] h-[300px] rounded-full m-5" src={file ? URL.createObjectURL(file) : objectData.img} alt="" />
                    <label className="bg-slate-600 text-white p-2 text-center rounded-lg w-32 cursor-pointer" htmlFor="file" style={editBtn == 0 ?{visibility:"hidden"}:{visibility:"visible"}}>Change Picture</label>
                    <input className="hidden" type="file" id='file' onChange={e=>setFile(e.target.files[0])}/>
                </div>
                <UserData/>
            </div>
        </DashboardLayout>
    );
}