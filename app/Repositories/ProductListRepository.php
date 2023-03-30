<?php

namespace App\Repositories;

use App\Models\ProductList;

class ProductListRepository
{
    public function findAll($where = [])
    {
        return ProductList::with('products')->where($where)->get();
    }
}
