<?php

namespace App\Http\Controllers\Api;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Repositories\ConfigRepository;
use App\Repositories\NewRepository;

class ConfigController extends Controller
{
    private $configRepository;
    private $newsRepository;
    public function __construct(
        ConfigRepository $configRepository,
        NewRepository $newsRepository
        ){
        $this->configRepository = $configRepository;
        $this->newsRepository = $newsRepository;
    }
    public function index(Request $request)
    {
        $policy = $this->newsRepository->getNewsHot([
            'type' => 'chinh-sach',
        ]);
        $config = $this->configRepository->config();
        return new Response([
            'config' => $config
        ]);
    }
}