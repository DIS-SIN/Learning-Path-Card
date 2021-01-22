import queryString from 'query-string';
import LearningPathCard from './LearningPathCard';
import './App.css';

export default function App(props) {

    return (
        <LearningPathCard cardContent={JSON.parse(queryString.parse(props.location.search).cardContent)}/>
    );
}