import styles from './LearningPathCard.module.css';

export default function LearningPathCard() {
    return (
        <div class={styles.card}>
            <img class={styles.image} src="https://busrides.ghost.io/content/images/2019/11/table-1561597_1920.jpg" alt="Part 2: Remote Team Recipes"/>
            <div class={styles.content}>
                <div class={styles.topContent}>
                    <a class={styles.tag} href="/tag/en-technology">Technology</a>
                    <p class={styles.timeStamps}>a year ago<span>•</span>6 min read</p>
                </div>
                <div class={styles.bottomContent}>
                    <h2 class={styles.title}>Part 2: Remote Team Recipes</h2>
                    <p class={styles.description}>Who is moving the remote work needle in the GC and how? Plus, 4 ways you can spark the change at your workplace today. </p>
                </div>
            </div>
        </div>
    );
}