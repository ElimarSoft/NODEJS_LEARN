import Form from "@/app/ui/invoices/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { fetchCustomers } from "@/app/lib/data";

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />

      {/* <div className="mt-4">
        <h2 className="text-lg font-bold">Customers Debug Info:</h2>
        <ul>
          {customers.map((customer, index) => (
            <li key={index}>{JSON.stringify(customer)}</li>
          ))}
        </ul>
      </div> */}

      <Form customers={customers} />
    </main>
  );
}
