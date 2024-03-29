import React, { useState } from 'react';
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
        platform: "",
        readTime: ""
    });
    const [generatedCode, setGeneratedCode] = useState(null);

    function updateContent(ev, key) {
        setCardContent({
            ...cardContent,
            [key]: ev.target.value
        });
    }

    function generateCode() {
        let content=encodeURIComponent(JSON.stringify(cardContent)).replaceAll(/&/ig, '%26');
        setGeneratedCode(`<iframe style="width:100%;border:none" src="${window.location.origin}/Learning-Path-Card/#/?cardContent=${content}" title="${cardContent.title}"></iframe>`);
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
                <TextField label="Platform" onChange={ev => updateContent(ev, "platform")}/>
                <TextField label="Read time" onChange={ev => updateContent(ev, "readTime")}/>
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