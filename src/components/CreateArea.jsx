import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function handleClick() {
    props.addnote(note);
    setNote({ title: "", content: "" });
  }
  function keyPress(event) {
    const pressedKey = event.key;
    if(pressedKey === "Enter")
     {event.preventDefault();
      handleClick();
     } 
  }
  return (
    <div>
      <form>
        <input
          onKeyPress={keyPress}
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={handleClick} type="button">
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
