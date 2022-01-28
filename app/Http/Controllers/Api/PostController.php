<?php

namespace App\Http\Controllers\Api;

use App\Events\PostPublished;
use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(Request $request) {

        // get data to be saved in an associative array using $request->only()
        $data = $request->only(['title', 'description']);

        //  save post and assign return value of created post to $post array
        $post = Post::create($data);

        // fire PostPublished event after post is successfully added to database
        event(new PostPublished($post));

        // return post as response, Laravel automatically serializes this to JSON
        return response($post, 201);
    }
}
