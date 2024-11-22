type ServicesPageProps = {
  title: string;
};

function ServicesPage({ title }: ServicesPageProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">{title}</h1>
    </div>
  );
}

export default ServicesPage;
