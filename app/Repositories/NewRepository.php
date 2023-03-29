<?php 
namespace App\Repositories;
use App\Models\News;
class NewRepository
{
    public function getNewsHot($where){
        if(is_null($where)){
            return null;
        }
        $news_hot = News::select('photo', 'slugvi', 'slugen', 'contenten', 'contentvi', 'descvi', 'descen', 'namevi', 'nameen', 'status', 'type', 'options')->where($where)->orderBy('id','DESC')->get();
        return $news_hot;
    }
}