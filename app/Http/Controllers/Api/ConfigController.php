<?php

namespace App\Http\Controllers\Api;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Repositories\ConfigRepository;

class ConfigController extends Controller
{
    private $configRepository;
    public function __construct(ConfigRepository $configRepository){
        $this->configRepository = $configRepository;
    }
    public function index(Request $request)
    {
        $config = $this->configRepository->config();
        return new Response(['config' => $config]);
    }
}