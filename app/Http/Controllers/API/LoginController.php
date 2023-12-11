<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    private string $token_key = 'todo-list';
    public function login(Request $request)
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        $credentials = $request->only('email', 'password');
        if(Auth::attempt($credentials)){
            $user = Auth::user();
            $user->tokens()->delete();
            $token =  $user->createToken($this->token_key)->plainTextToken;
            Auth::logout();
            return [
                'user' => $user,
                'token' => $token,
                'cacheble' => true,
                'info' => ''
            ];
        }else{
            return [
                'info' => 'Login inválido'
            ];
        }
    }
}
