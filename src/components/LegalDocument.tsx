type LegalDocumentProps = {
  children: React.ReactNode;
};

export const LegalDocument: React.FC<LegalDocumentProps> = ({ children }) => {
  return <div className="flex flex-col gap-2">{children}</div>;
};
