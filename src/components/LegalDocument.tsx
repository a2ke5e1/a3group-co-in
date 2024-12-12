type LegalDocumentProps = {
  title: string;
  children: React.ReactNode;
};

export const LegalDocument: React.FC<LegalDocumentProps> = ({
  title,
  children,
}) => {
  return (
    <>
      <div className="text-display-small text-center text-primary">{title}</div>
      <div className="prose  prose-h1:mt-0 mx-auto mt-8 prose-headings:text-on-surface prose-p:text-on-surface prose-li:text-on-surface prose-strong:text-on-surface prose-a:text-primary">
        {children}
      </div>
    </>
  );
};
