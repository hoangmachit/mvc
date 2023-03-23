<?php

namespace App\Http\Controllers\Api;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\User;

class UserController extends Controller
{
    public function index(Request $request)
    {
        $user = User::all();
        return new Response(['user' => $user]);
    }

    public function show($id, Request $request)
    {
        return new Response(['message' => "User with ID = $id"]);
    }

    public function store(Request $request)
    {
        $name = $request->input('name');
        $email = $request->input('email');
        return new Response(['message' => "User $name with email $email has been created"]);
    }

    public function update(Request $request, $id)
    {
        $name = $request->input('name');
        $email = $request->input('email');
        return new Response(['message' => "User with ID = $id has been updated with name $name and email $email"]);
    }

    public function destroy($id)
    {
        return new Response(['message' => "User with ID = $id has been deleted"]);
    }
}
