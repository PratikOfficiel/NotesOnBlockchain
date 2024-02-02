import Debug "mo:base/Debug";
import List "mo:base/List";
import Nat "mo:base/Nat";

actor DKeeper {

  public type Note = {
    title: Text;
    message: Text;
  };

  stable var notes: List.List<Note> = List.nil<Note>();

  public func createNote( titleText: Text, contentText: Text) {
    
    let newNote: Note = {
      title = titleText;
      message = contentText;
    };

    notes := List.push(newNote, notes);

    Debug.print(debug_show(newNote)); 
  };

  public query func readNotes(): async [Note] {
    return List.toArray(notes);
  };


  public func deleteNote(idx: Nat) {
    let firstHalf = List.take(notes,idx);
    let secondHalf = List.drop(notes,idx+1);

    notes := List.append(firstHalf,secondHalf);
  }
}