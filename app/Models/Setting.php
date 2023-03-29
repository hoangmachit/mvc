<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $table = 'table_setting';
    public function getOptionsAttribute($value = ''){
        $data = json_decode($value);
        return $data;
    }
}