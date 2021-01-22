import queryString from 'query-string';
import LearningPathCard from './LearningPathCard';
import './App.css';

export default function App(props) {

    return (
        <LearningPathCard cardContent={JSON.parse(decodeURI(queryString.parse(props.location.search).cardContent))}/>
    );
}