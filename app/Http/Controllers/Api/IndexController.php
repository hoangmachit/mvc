<?php

namespace App\Http\Controllers\Api;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Repositories\NewRepository;
use App\Repositories\StaticRepository;
class IndexController extends Controller
{
    private $newRepository;
    private $staticRepository;
    public function __construct(
        NewRepository $newRepository,
        StaticRepository $staticRepository
    ){
        $this->newRepository = $newRepository;
        $this->staticRepository = $staticRepository;
    }
    public function index(Request $request)
    {
        $why = $this->newRepository->getNewsHot(['type'=> 'vi-sao']);
        $about = $this->staticRepository->getStatics(['type'=>'gioi-thieu']);
        return new Response([
            'why' => $why,
            'about' => $about
        ]);
    }
}