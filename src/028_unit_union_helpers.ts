

// Exclude<U, V> -> remove from U those member assignable to V
// Extract<U, V> -> keep from U those members assignable to V

type EventType1 = "click" | "submit" | "hover" | "keydown" | "keyup";
type EventType2 = Exclude<EventType1, "keydown">

function handleEvent(e : EventType2){
    console.log(e)
}

handleEvent("click")
// handleEvent("keydown") // will give error because it is excluded from EventType1


type Action1 = "create" | "update" | "delete" | "read"
type Action2 = Extract<Action1, "create" | "update" | "delete">


function handleEvent2(e : Action2){
    console.log(e);
}

handleEvent2("update")
// handleEvent2("read") // will give error because read is not mentioned in Action2 type


type MayBeNumber = number | null | undefined;
type CleanNumber = NonNullable<MayBeNumber> // number


function square(num : CleanNumber){
    return num * 2
}

square(10)
// square(null) // will give error because it is only taking number because of NonNullable
