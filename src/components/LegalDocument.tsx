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
      <div className="text-md uppercase font-mono font-bold text-center">{title}</div>
      <div className="prose  prose-h1:mt-0 mx-auto mt-8">{children}</div>
    </>
  );
};
