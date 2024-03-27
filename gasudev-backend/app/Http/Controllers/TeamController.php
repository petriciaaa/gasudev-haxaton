<?php

namespace App\Http\Controllers;

use App\Http\Resources\TeamCollection;
use App\Models\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return new TeamCollection(Team::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        
        $user = Team::create([
            "fullname" => $request->fullname,
            "post" => $request->post,
            "description" => $request->description,
        ]);

        $user->save();

        $user = Team::where('fullname', $request->fullname)->first();

        return $user;

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        $user = Team::where('fullname', $request->fullname)->first();
        $user->delete();
        return $user;
    }
}
