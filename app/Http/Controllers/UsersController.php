<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Hash;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = DB::table('users')->get();
        $type = "users";

        return Inertia::render('list/List', [
            "dataList" => $users,
            "csrfToken" => csrf_token(),
            "type" => $type
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('ObjectView/ObjectView', [
            "objectData" => NULL,
            "csrfToken" => csrf_token(),
            "viewType" => "new",
            "objectType" => "user",
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $img = file_get_contents($request->img);
        // $destDir = "\images\users\\";
        // $filename = $destDir.$request->name."\pic.jpg";
        // file_put_contents($filename,$img);
        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'age' => $request->age,
            'status'=> $request->status,
            'role' => $request->role,
            // 'img' => $filename,
            'password' => Hash::make("12345678"),
        ]);

        return Redirect::route('users');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = DB::table('users')->where('id', (int) $id)->first();
        return Inertia::render('ObjectView/ObjectView', [
            "objectData" => $user,
            "csrfToken" => csrf_token(),
            "viewType" => "show",
            "objectType" => "user",
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $user = User::find($id);
        $user->update([
            'name' => $request['name'],
            'email' => $request['email'],
            'status' => $request['status'],
            'age' => $request['age'],
            'role' => $request['role'],
            'img' => $request['img'],
        ]);
        
        return Redirect::route('users');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Product::destroy((int) $id);
        return Redirect::route('users');
    }
}
