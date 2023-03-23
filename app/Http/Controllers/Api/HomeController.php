<?php

namespace App\Http\Controllers\Api;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        return new Response(['message' => 'Home Page']);
    }
}
