import styles from "../styles/components/article.module.scss"

interface ArticleProps {
    title: String,
    children: any
}

export default function Article(
    {
        title,
        children
    }: ArticleProps
) {
    return (
        <>
            <section>
                <article>
                    <h3 className={styles.title}>{title}</h3>
                    <p>
                        {children}
                    </p>
                </article>
            </section>
        </>
    )
}

