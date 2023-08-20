import './ToolbarItem.css'

function ToolbarItem(props) {
    const toolbarItemHandler = () => {
        props.onSelectFilter(props.filter);
    };

  return (
    <div className='toolbar__item' onClick={toolbarItemHandler}>{props.filter}</div>
  )
};

export default ToolbarItem;
