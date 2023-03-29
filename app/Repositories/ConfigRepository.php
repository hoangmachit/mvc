<?php 
namespace App\Repositories;
use App\Models\Statics;
use App\Models\Photo;
use App\Models\Setting;
class ConfigRepository
{
    public function config(){
        $footer = Statics::select('namevi', 'nameen', 'contentvi', 'contenten','type')->where([
            'status'=> 'hienthi',
            'type' => 'footer'
        ])->first();
        $logo = Photo::select('photo', 'namevi', 'nameen')->where([
            'status' => 'hienthi',
            'type'  => 'logo'
        ])->first();
        $banner = Photo::select('photo', 'namevi', 'nameen')->where([
            'status' => 'hienthi',
            'type'  => 'banner'
        ])->first();
        $favicon = Photo::select('photo')->where([
            'status' => 'hienthi',
            'type'  => 'favicon'
        ])->first();
        $setting = Setting::select('namevi', 'nameen', 'options', 'mastertool', 'headjs', 'bodyjs', 'analytics')->first();
        return [
            'setting' => $setting,
            'logo'   => $logo,
            'banner' => $banner,
            'favicon' => $favicon,
            'footer' => $footer
        ];
    }
}