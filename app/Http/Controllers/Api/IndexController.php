<?php

namespace App\Http\Controllers\Api;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Repositories\NewRepository;
use App\Repositories\StaticRepository;
use App\Repositories\ProductRepository;
use App\Repositories\ProductListRepository;

class IndexController extends Controller
{
    private $newRepository;
    private $staticRepository;
    private $productRepository;
    private $productListRepository;
    public function __construct(
        NewRepository $newRepository,
        StaticRepository $staticRepository,
        ProductRepository $productRepository,
        ProductListRepository $productListRepository
    ) {
        $this->newRepository = $newRepository;
        $this->staticRepository = $staticRepository;
        $this->productRepository = $productRepository;
        $this->productListRepository = $productListRepository;
    }
    public function index(Request $request)
    {
        $why = $this->newRepository->getNewsHot(['type' => 'vi-sao']);
        $news = $this->newRepository->getNewsHot(['type' => 'tin-tuc']);
        $about = $this->staticRepository->getStatics(['type' => 'gioi-thieu']);
        $products = $this->productRepository->findAll([
            'type' => 'san-pham'
        ]);
        $product_list = $this->productListRepository->findAll([
            'type' => 'san-pham'
        ]);
        return new Response([
            'products' => $products,
            'product_list' => $product_list,
            'news' => $news,
            'why' => $why,
            'about' => $about
        ]);
    }
}
