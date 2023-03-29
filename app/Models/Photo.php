<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    protected $table = 'table_photo';
    public function getPhotoAttribute($value =""){
        return "http://localhost/source/upload/photo/".$value;
    }
}