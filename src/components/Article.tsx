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
          <div className="text-on-surface-variant text-body-medium flex flex-col gap-4">{children}</div>
        </article>
      </section>
    </>
  );
}
