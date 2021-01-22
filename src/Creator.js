import React, { useState } from 'react';
import moment from 'moment';
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, InputAdornment, Button } from '@material-ui/core';
import LearningPathCard from './LearningPathCard';
import styles from './Creator.module.css';

export default function Creator() {

    const [cardContent, setCardContent] = useState({
        language: "en",
        link: "",
        title: "",
        description: "",
        imageLink: "",
        imageAltTxt: "",
        tagTitle: "",
        tagLink: "",
        date: Date.now(),
        readTime: 5
    });
    const [generatedCode, setGeneratedCode] = useState(null);

    function updateContent(ev, key) {
        setCardContent({
            ...cardContent,
            [key]: ev.target.value  
        });
    }

    function generateCode() {
        setGeneratedCode(`<iframe style="width:100%;border:none" src="${window.location.origin}/Learning-Path-Card#/cardContent=${JSON.stringify(cardContent)}" title="${cardContent.title}"></iframe>`);
    }

    return (
        <div className={styles.container}>
            <h1>Card Creator</h1>
            <form className={styles.form}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Language</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" defaultValue="en" onChange={ev => updateContent(ev, "language")}>
                        <FormControlLabel value="en" control={<Radio />} label="English" />
                        <FormControlLabel value="fr" control={<Radio />} label="French" />
                    </RadioGroup>
                </FormControl>
                <TextField type="url" label="Link" onChange={ev => updateContent(ev, "link")}/>
                <TextField label="Title" onChange={ev => updateContent(ev, "title")}/>
                <TextField label="Description" onChange={ev => updateContent(ev, "description")}/>
                <TextField type="url" label="Image link" onChange={ev => updateContent(ev, "imageLink")}/>
                <TextField label="Image alt text" onChange={ev => updateContent(ev, "imageAltTxt")}/>
                <TextField label="Tag title" onChange={ev => updateContent(ev, "tagTitle")}/>
                <TextField label="Tag link" onChange={ev => updateContent(ev, "tagLink")}/>
                <TextField
                    label="Content date"
                    type="date"
                    defaultValue={moment(Date.now()).format("YYYY-MM-DD")}
                    onChange={ev => updateContent(ev, "date")}
                />
                <TextField
                    type="number"
                    label="Read time (minutes)"
                    defaultValue={5}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">minutes</InputAdornment>,
                    }}
                    onChange={ev => updateContent(ev, "readTime")}
                />
            </form>
            <Button variant="contained" color="primary" className={styles.button} onClick={generateCode}>Generate Code</Button>
            <LearningPathCard cardContent={cardContent}/>
            {generatedCode &&
                <React.Fragment>
                    <h2>Generated!</h2>
                    <div className={styles.generatedCode}>
                        {generatedCode}
                    </div>
                </React.Fragment>
            }
        </div>
    );
}