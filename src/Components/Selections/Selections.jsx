import "./Selections.css"
import SelectionItem from "../SelectionItem/SelectionItem"

function Selections (){
    return(
        <div id="SelectionWrapper">
            <SelectionItem SelectionName="GitHub"></SelectionItem>
            <SelectionItem SelectionName="Frontend Mentor"></SelectionItem>
            <SelectionItem SelectionName="LinkedIn"></SelectionItem>
            <SelectionItem SelectionName="Twitter"></SelectionItem>
            <SelectionItem SelectionName="Instagram"></SelectionItem>

            </div>
    ) ;
}

export default Selections ;