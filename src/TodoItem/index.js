import './TodoItem.css';
import { HiOutlineCheck  } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

function TodoItem(props) {
    return(
      <li className="TodoItem">
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}> <HiOutlineCheck className='Icon-size-complete Icon-complete' /> </span>
        
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>

        <span className="Icon Icon-delete"  onClick={props.onDelete}> <HiOutlineX className='Icon-size-Delete' /> </span>
      </li>
    )
  }

  export default TodoItem