import moment from 'moment';
import 'moment/locale/fr';
import styles from './LearningPathCard.module.css';

export default function LearningPathCard(props) {

    function getTimeFromNow() {
        moment.locale(props.cardContent.language);
        return moment(props.cardContent.date).fromNow();
    }

    function getReadTime() {
        if (props.cardContent.language === "fr"){
            return `Lecture de ${props.cardContent.readTime} min`;
        }
        return `${props.cardContent.readTime} min read`;
        
    }

    return (
        <a className={styles.link} href={props.cardContent.link} target="_blank">
            <div className={styles.card}>
                <img className={styles.image} src={props.cardContent.imageLink} alt={props.cardContent.imageAltTxt}/>
                <div className={styles.content}>
                    <div className={styles.topContent}>
                        <a className={styles.tag} href={props.cardContent.tagLink}>{props.cardContent.tagTitle}</a>
                        <p className={styles.timeStamps}>{getTimeFromNow()}<span>•</span>{getReadTime()}</p>
                    </div>
                    <div className={styles.bottomContent}>
                        <h2 className={styles.title}>{props.cardContent.title}</h2>
                        <p className={styles.description}>{props.cardContent.description}</p>
                    </div>
                </div>
            </div>
        </a>
    );
}