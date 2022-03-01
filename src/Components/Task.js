import { useDispatch } from "react-redux";
import { Delete } from "../Redux/ToDoReducer";

export default function Task({ title, content, index }) {
    const dispatch = useDispatch();


    return (
        <div className="card my-2  ">
            <div className="card-header">{title}
            </div>
            <div className="card-body">
                {/* <h5 className="card-title">Special title treatment</h5> */}
                <p className="card-text">{content}</p>
                <button
                    className="btn btn-primary"
                    onClick={() =>
                        dispatch({ type: Delete.type, payload: index })
                    }
                >
                    Delete
                </button>
            </div>
        </div>)
}
