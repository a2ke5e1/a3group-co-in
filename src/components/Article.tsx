import styles from "../../styles/components/article.module.scss"

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
                <article className={styles.article}>
                    <h1 className="font-bold uppercase text-xs">{title}</h1>
                    {children}
                </article>
            </section>
        </>
    )
}

