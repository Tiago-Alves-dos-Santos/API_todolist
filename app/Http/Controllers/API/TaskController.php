<?php

namespace App\Http\Controllers\API;

use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TaskController extends Controller
{
    public function index()
    {
    }
    public function create(Request $request)
    {
        try {
            Task::create([
                'title' => $request->title,
            ]);
            return [
                'status' => 'success',
                'cacheble'=>false,
            ];
        } catch (\Throwable $th) {
            //throw $th;
        }
    }
    public function update()
    {
    }
    public function conclued()
    {
    }
    public function delete()
    {
    }
    private function search()
    {
    }
}
