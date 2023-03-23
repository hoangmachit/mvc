<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\ProductList;

class Product extends Model
{
    protected $table = 'table_product';
    protected $primaryKey = 'id';
    public function list()
    {
        return $this->hasOne(ProductList::class, 'id', 'id_list');
    }
    public function getPhotoAttribute($value = ''){
        return "!23123";
    }
}
