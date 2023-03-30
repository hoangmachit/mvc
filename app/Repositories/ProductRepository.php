<?php

namespace App\Repositories;

use App\Models\Product;

class ProductRepository
{
    public function detail($id)
    {
        return true;
    }
    public function findAll($where = [])
    {
        return Product::where($where)->get();
    }
}
