interface ArticleProps {
  title: String;
  children: any;
}

export default function Article({ title, children }: ArticleProps) {
  return (
    <>
      <section>
        <article>
          <h1 className="text-headline-small">{title}</h1>
          <div className="text-secondary text-body-medium">{children}</div>
        </article>
      </section>
    </>
  );
}
