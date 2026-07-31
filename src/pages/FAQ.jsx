import SectionTitle from '../components/ui/SectionTitle.jsx';
import Accordion from '../components/ui/Accordion.jsx';
import faqData from '../data/faqData.json';

export default function FAQ() {
  return (
    <div className="pt-32 pb-24 px-5 md:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          eyebrow="Pertanyaan Umum"
          title="Frequently Asked Questions"
          subtitle="Kumpulan pertanyaan yang sering diajukan warga seputar pelayanan administrasi desa."
        />
        <div className="mt-12">
          <Accordion items={faqData} />
        </div>
      </div>
    </div>
  );
}
