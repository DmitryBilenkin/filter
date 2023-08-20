import ToolbarItem from "./ToolbarItem";
import './Toolbar.css';

function Toolbar(props) {

  return (
    <div className='toolbar'>
        <ToolbarItem 
          filter={props.filters[0]}
          onSelectFilter={props.onSelectFilter}
          selected={props.selected}
        />
        <ToolbarItem 
          filter={props.filters[1]} 
          onSelectFilter={props.onSelectFilter}
          selected={props.selected}
        />
        <ToolbarItem 
          filter={props.filters[2]}
          onSelectFilter={props.onSelectFilter}
          selected={props.selected}
        />
        <ToolbarItem 
          filter={props.filters[3]} 
          onSelectFilter={props.onSelectFilter}
          selected={props.selected}
        />
    </div>
  )
};

export default Toolbar;
