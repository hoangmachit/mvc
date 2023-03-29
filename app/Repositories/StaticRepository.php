<?php 
namespace App\Repositories;
use App\Models\Statics;
class StaticRepository
{
    public function getStatics($where){
        return Statics::where($where)->first();
    }
}