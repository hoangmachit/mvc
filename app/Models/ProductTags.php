<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Tags;

class ProductTags extends Model
{
    protected $table = 'table_product_tags';
    private $select = ["photo", "slugvi", "slugen", "namevi", "nameen", "type", "status"];
    public function tags(){
        return $this->hasOne(Tags::class, 'id', 'id_tags')->select($this->select);
    }
}