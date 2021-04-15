import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';


const Task = ({task, onDeleteTask, onToggle }) => {
    return (
        <Paper className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick={() => onToggle(task.id)} m={1}>
            <Box m={1}>
            <h3>{task.text}{' '}<ClearOutlinedIcon style = {{cursor: 'pointer'}} fontSize='small' onClick={() => onDeleteTask(task.id)} /></h3>
            <p>{task.day}</p>
            </Box>            
        </Paper>
    )
}

export default Task