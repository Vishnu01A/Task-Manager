import { useState } from 'react'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  spacing: value => value ** 2,
  palette: {
  primary: {
      main: '#000000'
    },
  secondary: {
    main: '#009933'
  }
  }
  }
);


const AddTask = ({ onAdd }) => { 
const [text, setText] = useState('') 
const [day, setDay] = useState('')
const [reminder, setReminder] = useState(false)

const onSubmit = (e) => {
    e.preventDefault()

    if (!text){
        alert('Please add a task')
        return
    }

    onAdd({text, day, reminder})
    setText('')
    setDay('')
    setReminder(false)
}

return (
    <ThemeProvider theme={theme}>
    <Box direction="column" alignItems="center" justify="center">
    <form className = 'add-form' onSubmit={onSubmit}>
        <div className = 'form-control'>
            <TextField fullWidth='100%' color='primary' id="standard-basic" label="Task" value={text} onChange={(e)=> setText(e.target.value)} /> 
        </div>
        <div className='form-control'>
            <TextField fullWidth='100%' color='primary' id="standard-basic" label="Day and Time" value={day} onChange={(e)=> setDay(e.target.value)}/>   
        </div>
        <div className='form-control-check'>
        <FormControlLabel 
          
          control={<Checkbox color='primary' onChange={(e)=> setReminder(e.currentTarget.checked)}/>}
          checked={reminder}
          value={reminder}
          label="Set Reminder"
          labelPlacement="start"
        />
        </div>
        {/*<input type='submit' value='save task'className='btn btn-block' /> */}
        
        <Button type="submit" variant="contained" color="secondary" fullWidth='100%'>Save Task</Button>
       
    </form>
    </Box>
    </ThemeProvider>
)
}

export default AddTask