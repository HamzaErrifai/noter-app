<?php

namespace App\Http\Controllers;

use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NoteController extends Controller
{
    public function getNotes()
    {
        return Auth::user()->notes;
    }
    public function addNote(Request $req)
    {
        $note = new Note();
        $note->title = $req->title;
        $note->content = $req->content;
        $note->color = $req->color;
        $note->archieved = $req->archieved;
        $note->pinned = $req->pinned;
        $note->user_id = Auth::user()->id;
        $note->save();

        return $note;
    }
    public function updateNote(Request $req, $id)
    {
        $note = Note::find($id);

        $note->title = $req->title;
        $note->content = $req->content;
        $note->color = $req->color;
        $note->archieved = $req->archieved;
        $note->pinned = $req->pinned;
        $note->user_id = Auth::user()->id;
        $note->save();

        return ['etat' => true];
    }
}
