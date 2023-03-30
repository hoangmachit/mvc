<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class ProductList extends Model
{
    protected $table = 'table_product_list';
    protected $primaryKey = 'id';
    public function products()
    {
        return $this->hasMany(Product::class, 'id_list', 'id');
    }
}
