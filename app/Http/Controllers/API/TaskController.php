<?php

namespace App\Http\Controllers\API;

use App\Models\Task;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        $title = $request->title ?? '';
        $concluded = $request->conclued ?? false;
        $query = Task::query();
        $query->where('user_id', $request->user()->id);
        $query->where('title', 'like',"%$title%");
        if($concluded){
            $query->where('concluded',true);
        }
        return [
            'status' => 'success',
            'cacheble' => false,
            'info' => '',
            'tasks' =>  $query->paginate(6)
        ];
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
        $request->validate([
            'title' => ['required', 'min:3']
        ]);
        Task::find($request->id)->update([
            'title' => $request->title,
        ]);
        return [
            'status' => 'success',
            'cacheble' => false,
            'info' => ''
        ];
    }
    public function conclued(Request $request)
    {
        Task::find($request->id)->update([
            'concluded' => true,
        ]);
        return [
            'status' => 'success',
            'cacheble' => false,
            'info' => ''
        ];
    }
    public function delete(Request $request)
    {
        Task::find($request->id)->delete();
        return [
            'status' => 'success',
            'cacheble' => false,
            'info' => ''
        ];
    }
    private function search(Request $request, $limit_page)
    {
        $title = $request->title ?? '';
        $concluded = $request->conclued ?? false;
        $query = Task::query();
        $query->where('user_id', $request->user()->id);
        $query->where('title', 'like',"%$title%");
        if($concluded){
            $query->where('concluded',true);
        }
        return $query->paginate($limit_page);
    }
}
