<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = DB::table('products')->get();
        $type = "products";

        return Inertia::render('list/List', [
            "dataList" => $products,
            "type" => $type
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = DB::table('products')->where('id', (int) $id)->first();
        return Inertia::render('ObjectView/ObjectView', [
            "objectData" => $product,
            "csrfToken" => csrf_token(),
            "viewType" => "show",
            "objectType" => "product",
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,  string $id)
    {
        $product = Product::find($id);
        $product->update([
            'name' => $request['name'],
            'qty' => $request['qty'],
            'price' => $request['price'],
            'weight' => $request['weight'],
            'availability' => $request['availability'],
            'category' => $request['category'],
            'img' => $request['img'],
        ]);
        
        return Redirect::route('products');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
