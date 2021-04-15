import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types' ;
import { useLocation } from 'react-router-dom';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
    

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' &&(<Button 
            variant='contained' 
            color={showAdd ? 'primary' : 'secondary'}  
            startIcon={showAdd ? <CloseOutlinedIcon/> : <AddOutlinedIcon/>}
            onClick={onAdd}
            >{showAdd ? 'close' : 'New Task'}
            </Button> )}
        </header>
    )
}
Header.defaultProps={
    title: 'Task Manager',
}
Header.propTypes={
    title: PropTypes.string.isRequired,
}
export default Header
