import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import styles from './LearningPathCard.module.css';

export default function LearningPathCard(props) {

    const width = useWindowWidth();

    return (
        <React.Fragment>
            {width < 615 ?
                <a className={styles.mobile_link} href={props.cardContent.link} target="_blank">
                    <div className={styles.mobile_card}>
                    <div className={styles.mobile_image} style={{backgroundImage: `url(${props.cardContent.imageLink})`}}/>
                        <div className={styles.mobile_content}>
                            <p className={styles.mobile_tag}>{props.cardContent.tagTitle}</p>
                            <h2 className={styles.mobile_title}>{props.cardContent.title}</h2>
                            <p className={styles.mobile_description}>{props.cardContent.description}</p>
                            <p className={styles.mobile_timeStamps}>{props.cardContent.platform}<span>•</span>{props.cardContent.readTime}</p>
                        </div>
                    </div>
                </a>  
            :
            <a className={styles.link} href={props.cardContent.link} target="_blank">
                <div className={styles.card}>
                    <img className={styles.image} src={props.cardContent.imageLink} alt={props.cardContent.imageAltTxt}/>
                    <div className={styles.content}>
                        <div className={styles.topContent}>
                            <p className={styles.tag}>{props.cardContent.tagTitle}</p>
                            <p className={styles.timeStamps}>{props.cardContent.platform}<span>•</span>{props.cardContent.readTime}</p>
                        </div>
                        <div className={styles.bottomContent}>
                            <h2 className={styles.title}>{props.cardContent.title}</h2>
                            <p className={styles.description}>{props.cardContent.description}</p>
                        </div>
                    </div>
                </div>
            </a>
            }
        </React.Fragment>
    );
}