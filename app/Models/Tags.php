<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
    protected $table = 'table_tags';
    protected $primaryKey = 'id';
    public function getStatusAttribute($value = ""){
        return explode(",", $value);
    }
}