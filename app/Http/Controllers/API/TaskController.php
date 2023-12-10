<?php

namespace App\Http\Controllers\API;

use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        try {
            return [
                'status' => 'success',
                'cacheble' => false,
                'info' => '',
                'tasks' => Task::get()
            ];
        } catch (\Exception $e) {
            return [
                'status' => 'error',
                'cacheble' => false,
                'info' => $e->getMessage(),
                'error' => $e
            ];
        }
    }
    public function create(Request $request)
    {
        $request->validate([
            'title' => ['required', 'min:3']
        ]);
        Task::create([
            'user_id' => $request->user()->id,
            'title' => $request->title
        ]);
        return [
            'status' => 'success',
            'cacheble' => false,
            'info' => ''
        ];
    }
    public function update(Request $request)
    {
        try {
            Task::find($request->id)->update([
                'title' => $request->title,
            ]);
            return [
                'status' => 'success',
                'cacheble' => false,
                'info' => ''
            ];
        } catch (\Exception $e) {
            return [
                'status' => 'error',
                'cacheble' => false,
                'info' => $e->getMessage(),
                'error' => $e
            ];
        }
    }
    public function conclued(Request $request)
    {
        try {
            Task::find($request->id)->update([
                'conclued' => true,
            ]);
            return [
                'status' => 'success',
                'cacheble' => false,
                'info' => ''
            ];
        } catch (\Exception $e) {
            return [
                'status' => 'error',
                'cacheble' => false,
                'info' => $e->getMessage(),
                'error' => $e
            ];
        }
    }
    public function delete(Request $request)
    {
        try {
            Task::find($request->id)->delete();
            return [
                'status' => 'success',
                'cacheble' => false,
                'info' => ''
            ];
        } catch (\Exception $e) {
            return [
                'status' => 'error',
                'cacheble' => false,
                'info' => $e->getMessage(),
                'error' => $e
            ];
        }
    }
    private function search(Request $request)
    {
    }
}
