<?php

namespace App\Http\Controllers\Api;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Repositories\NewRepository;

class IndexController extends Controller
{
    private $newRepository;
    public function __construct(
        NewRepository $newRepository
    ){
        $this->newRepository = $newRepository;
    }
    public function index(Request $request)
    {
        $newHot = $this->newRepository->getNewsHot(['type'=> 'vi-sao']);
        return new Response(['newHot' => $newHot]);
    }
}