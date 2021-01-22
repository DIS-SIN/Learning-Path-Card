import styles from './LearningPathCard.module.css';

export default function LearningPathCard(props) {

    return (
        <a className={styles.link} href={props.cardContent.link} target="_blank">
            <div className={styles.card}>
                <img className={styles.image} src={props.cardContent.imageLink} alt={props.cardContent.imageAltTxt}/>
                <div className={styles.content}>
                    <div className={styles.topContent}>
                        <a className={styles.tag} href={props.cardContent.tagLink}>{props.cardContent.tagTitle}</a>
                        <p className={styles.timeStamps}>{props.cardContent.platform}<span>•</span>{props.cardContent.readTime}</p>
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