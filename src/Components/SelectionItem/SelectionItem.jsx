import "./SelectionItem.css"

function SelectionItem (props) {
    return(
        <button className="SelectionItemdiv">
<span>{props.SelectionName}</span>
        </button>
    )
}

export default SelectionItem ;