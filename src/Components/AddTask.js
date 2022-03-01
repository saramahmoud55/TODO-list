import { useDispatch } from "react-redux";
import { useState } from "react";
import { Add } from "../Redux/ToDoReducer";
export default function AddTask() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: Add.type, payload: { title, content } });
        
    };

  return (
    <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="content" className="form-label">
                    Content
                </label>
                <textarea
                    col="30"
                    row="6"
                    className="form-control"
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button type="submit" className="d-block m-auto btn btn-primary">
                Submit
            </button>
        </form>
  )
}
