<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\ProductList;
use App\Models\ProductCat;
use App\Models\ProductSub;
use App\Models\ProductItem;
use App\Models\ProductBrand;
use App\Models\ProductTags;
use App\Models\Gallery;
class Product extends Model
{
    protected $table = 'table_product';
    protected $primaryKey = 'id';
    private $select = ['id', 'namevi', 'nameen', 'slugvi', 'slugen'];
    public function list()
    {
        return $this->hasOne(ProductList::class, 'id', 'id_list')->select($this->select);
    }
    public function cat()
    {
        return $this->hasOne(ProductCat::class, 'id', 'id_cat')->select($this->select);
    }
    public function sub()
    {
        return $this->hasOne(ProductSub::class, 'id', 'id_sub')->select($this->select);
    }
    public function item()
    {
        return $this->hasOne(ProductItem::class, 'id', 'id_item')->select($this->select);
    }
    public function brand()
    {
        return $this->hasOne(ProductBrand::class, 'id', 'id_brand')->select($this->select);
    }
    public function tags()
    {
        return $this->hasMany(ProductTags::class, 'id_parent', 'id')->with('tags');
    }
    public function getPhotoAttribute($value = ''){
        return $value;
    }
    public function gallery(){
        return $this->hasMany(Gallery::class, 'id_parent', 'id');
    }
    public function getOptionsAttribute($value = ''){
        return json_decode($value);
    }
    public function getStatusAttribute($value = ''){
        return explode(",", $value);
    }
}