<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        $credential = [
            'username' => $request->username,
            'password' => $request->password
        ];

        if (Auth::attempt($credential)) {
            $user = User::where('username', $request->username)->first();
            $token = Str::random(80);
            $user->api_token = $token;
            $user->save();

            return new UserResource($user);
        } else {
            return response([
                'status' => 'failed'
            ], 403);
        }

    }
}
