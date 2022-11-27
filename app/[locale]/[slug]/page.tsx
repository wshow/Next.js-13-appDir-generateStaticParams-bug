
export async function generateStaticParams() {
  return [ { slug: 'about', locale: 'zh-CN' }, { slug: 'about', locale: 'en' } ]
  ;
}

export default async function Pages(args) {
  console.log(args);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
