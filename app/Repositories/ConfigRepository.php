<?php

namespace App\Repositories;

use App\Models\Statics;
use App\Models\Photo;
use App\Models\Setting;
use App\Repositories\NewRepository;

class ConfigRepository
{
    private $newRepository;
    public function __construct(
        NewRepository $newRepository
    ) {
        $this->newRepository = $newRepository;
    }
    public function config()
    {
        $footer = Statics::select('namevi', 'nameen', 'contentvi', 'contenten', 'type')->where([
            'status' => 'hienthi',
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
        $policy = $this->newRepository->getNewsHot([
            'type' => 'chinh-sach'
        ]);
        return [
            'setting' => $setting,
            'logo'   => $logo,
            'banner' => $banner,
            'favicon' => $favicon,
            'footer' => $footer,
            'policy' => $policy
        ];
    }
}
