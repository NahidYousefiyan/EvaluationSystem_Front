import React, {useEffect} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function RadioButtonsGroup(props) {
    const [value, setValue] = React.useState(null);
    const [answers, setAnswers] = React.useState([]);
    const [question, setQuestion] = React.useState([]);
    const [change, setChange] = React.useState(false);

    const handleChange = (event) => {
        setValue(parseInt(event.target.value));
        console.log(event.target.value)
        props.changes(question.id, event.target.value)
    };
    useEffect(() => {
        if (props) {
            // console.log(props.answers,props.question)
            if (props.question.userChoiceId !== null) {
                setValue(parseInt(props.question.userChoiceId))

            }
            setAnswers(props.answers)
            setQuestion(props.question)
        }
    })

    return (
        <FormControl component="fieldset">
            <h3 className="card-title">{question.text}</h3>

            {/*<FormLabel component="legend">{question.text}</FormLabel>*/}
            <RadioGroup aria-label="ss" name="ss" value={value} onChange={handleChange}>
                {answers.map(m => (
                    <FormControlLabel value={m.id} control={<Radio/>} label={m.text}/>
                ))}
                {/*<FormControlLabel value="male" control={<Radio/>} label="Male"/>*/}
                {/*<FormControlLabel value="other" control={<Radio/>} label="Other"/>*/}
                {/*<FormControlLabel value="disabled" disabled control={<Radio/>} label="(Disabled option)"/>*/}
            </RadioGroup>
            <div className="card-header">


            </div>
        </FormControl>
    );
}