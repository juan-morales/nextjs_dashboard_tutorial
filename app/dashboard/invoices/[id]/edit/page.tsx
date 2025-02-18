import EditInvoiceForm from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers, fetchInvoiceById } from '@/app/lib/data';

export default async function Page(props: { params: Promise<{ id: string }>}) {
  const params = await props.params;
  const invoiceId = params.id;
  const customers = await fetchCustomers();
  const invoice = await fetchInvoiceById(invoiceId);

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${invoiceId}/edit`,
            active: true,
          },
        ]}
      />
      <EditInvoiceForm customers={customers} invoice={invoice}/>
    </main>
  );
}